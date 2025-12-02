'use client';
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function SigninPage() {

  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })

  const handleSignin = async (e : React.FormEvent) => {
      e.preventDefault()

      setMessage("Logging in")
      setLoading(true);
    
      // call api

    try {
      const res = await fetch ('/api/auth/login',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          email : formData.email,
          password : formData.password
        })
      })

      const data = await res.json();

      if(!res.ok){
        setMessage(data.error || "Failed to login")
        setLoading(false)
        return
      }
      

      setMessage('Login successful! Redirecting...')
      localStorage.setItem('user', JSON.stringify(data.user))
      setTimeout(() => {     
        router.push('/')
      }, 1000);
    


    } catch(error){
          setMessage("Error")
    }

  }
  return (
    <div className='bg-gray-950 w-full min-h-screen'>

      {/* Title */}
      
      <div className='text-center mb-8 py-8'>
        <h1 className='text-white text-4xl font-work-space mb-2 font-medium'>Welcome Back</h1>
        <p className='text-gray-500 text-xl font-work-sans'>Join us and start your journey with us</p>
      </div>

      {/* main card */}
      <div className='w-full flex justify-center items-center'>

        <form onSubmit={handleSignin} action="" className='w-full max-w-md mx-4 bg-gray-800 border-2 border-gray-500 rounded-xl p-8 space-y-6 mb-8'>

          {/* email */}

           <div className=''>
            <label htmlFor="email" className='text-white text-sm font-work-sans'>
              Email
            </label>
            <Input 
            id='email'
            type='email'
            value={formData.email}
            onChange={(e)=> setFormData({...formData, email : e.target.value})}
            placeholder='you@example.com'
            className='bg-white mt-2'

            />
          </div>

          {/* password */}

           <div className=''>
            <label htmlFor="password" className='text-white text-sm font-work-sans'>
              Password
            </label>
            <Input 
            id='password'
            type='password'
            value={formData.password}
            onChange={(e)=>setFormData({...formData, password: e.target.value})}
            placeholder='******'
            className='bg-white mt-2'

            />
            <Link href="/auth/forgetpassword" className='text-red-400 text-sm mt-2'>
              Forgot Password?
            </Link>
          </div>

          <Button
          type='submit'
          // disabled={loading}
          variant='ghost' 
          className='w-full bg-hoverlink hover:bg-button text-black rounded-full text-sm h-12 duration-300 transition-all'>SignIn
          
          </Button>

             {message && (
            <p className={`text-center text-sm ${
              message.includes('Logging') || message.includes('Redirecting')
                ? 'text-green-400'
                : 'text-red-400'
            }`}>
              {message}
            </p>
          )}
          {/* Divider */}

          <div className='relative my-4'>
            <div className='absolute inset-0 flex items-center'>
            <div className=' w-full border-t border-gray-700 '></div>
            </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-4 bg-gray-800 text-gray-400 font-work-sans'>Don't have an account?</span>
          </div>
          </div>

          {/* signin Instead */}

          <Button
          type='button' 
          variant='outline'
          onClick={()=> router.push('/auth/signup')}
          className='w-full hover:border-hoverlink bg-transparent hover:bg-transparent rounded-full text-sm h-12 font-semibold font-work-sans duration-300 transition-all text-white hover:text-white'>Signup Instead</Button>

        </form>

      </div>
    </div>
  )
}



