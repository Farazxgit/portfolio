'use client';

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

export default function SignupPage() {

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullname : '',
    email : '',
    password : '',
    confirmpassword : ''
  })

  const handleSignUp = async (e : React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmpassword){
      setMessage("Passwords do not match")
      return
    }

    setLoading(true);
    setMessage("Creating your Account...")


    // call api

    try{
      const response = await fetch ('/api/auth/signup',{
       method: 'POST',
       headers : {
        "Content-Type" : 'application/json'
       },
       body : JSON.stringify({
        fullname : formData.fullname,
        email : formData.email,
        password : formData.password
       })
      })

      const data = await response.json()

      if(!response.ok){
        setMessage(data.error || "Failed to Create account")
        setLoading(false)
        return
      }

      setMessage("Account Created successfully! Redirecting...")
      setTimeout(() => {
        router.push('/auth/signin')
      }, 2000)
    } catch (error){
      setMessage("Something went wrong. Please try again")
      setLoading(false)
    }
    
  }

  const router = useRouter()
  return (
    <div className='bg-gray-950 w-full min-h-screen'>

      {/* Title */}
      
      <div className='text-center mb-8 py-8'>
        <h1 className='text-white text-4xl font-work-space mb-2 font-medium'>Create your account</h1>
        <p className='text-gray-500 text-xl font-work-sans'>Join us and start your journey with us</p>
      </div>

      {/* main card */}
      <div className='w-full flex justify-center items-center'>

        <form onSubmit={handleSignUp} action="" className='bg-gray-800 border-2 w-full max-w-md mx-4 border-gray-500 rounded-xl p-8 space-y-6 mb-8'>
          <div className=''>
            <label htmlFor="fullname" className='text-white text-sm font-work-sans'>
              Full Name
            </label>
            <Input 
            id='fullname'
            type='text'
            value={formData.fullname}
            onChange={(e)=> setFormData({...formData, fullname : e.target.value})}
            placeholder='John'
            className='bg-white mt-2'

            />
          </div>

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
            onChange={(e)=> setFormData({...formData, password : e.target.value})}
            placeholder='******'
            className='bg-white mt-2'

            />
          </div>

           <div className=''>
            <label htmlFor="confirmPassword" className='text-white text-sm font-work-sans'>
              Confirm Password
            </label>
            <Input 
            id='confirmPassword'
            type='password'
            value={formData.confirmpassword}
            onChange={(e)=> setFormData({...formData, confirmpassword : e.target.value})}
            placeholder='******'
            className='bg-white mt-2'

            />
          </div>

          <Button
          type='submit'
          disabled={loading}          
          variant='ghost' 
          className='w-full bg-hoverlink hover:bg-button text-black rounded-full text-sm h-12 duration-300 transition-all'>Signup

          </Button>

          {message && (
            <p className={`text-center text-sm ${
              message.includes('Creating') || message.includes('Created')
                ? 'text-green-400'
                : 'text-red-400'
            }`}>
              {message}
            </p>
          )}
         
          {/* Divider */}

          <div className='relative my-6'>
            <div className='absolute inset-0 flex items-center'>
            <div className=' w-full border-t border-gray-700 '></div>
            </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-4 bg-gray-800 text-gray-400 font-work-sans'>Already have an account?</span>
          </div>
          </div>

          {/* signin Instead */}

          <Button
          type='button' 
          variant='outline'
          onClick={()=> router.push('/auth/signin')}
          className='w-full hover:border-hoverlink bg-transparent hover:bg-transparent rounded-full text-sm h-12 font-semibold font-work-sans duration-300 transition-all text-white hover:text-white'>Signin Instead</Button>

        </form>

      </div>
    </div>
  )
}
