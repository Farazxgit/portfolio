'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { Suspense } from 'react'

function ResetPasswordForm() {

    const router = useRouter();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const searchparams = useSearchParams();
    const token = searchparams.get('token');
    const [formData, setFormData] = useState({
        password : '',
        confirmpassword : ''
      })
    const handleReset = async (e : React.FormEvent) => {
        e.preventDefault();

        if(formData.password !== formData.confirmpassword){
            setError("Password don't match");
            return
       }

       setLoading(true);
       setError('')

       try{
        const response = await fetch('/api/auth/resetpassword',{
            method : "POST",
            headers :
            {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                token,
                password : formData.password
            })            
        })

        const data = await response.json();

        if(!response.ok){
            toast.error(data.error)
            return
        }
        setMessage("Password changed successfully, Redirecting...")
        setTimeout(() => {
            router.push('/auth/signin')
        }, 2000);
        
       }catch(error){
        toast.error("something went wrong")
       }finally{
        setLoading(false)
       }
    }

    if(!token){
        return (
            <div className='bg-gray-950 w-full min-h-screen flex items-center justify-center'>
                <p className='text-red-400'>Invalid reset link</p>
            </div>
        )
    }
     
  return (
    <div className='bg-gray-950 w-full min-h-screen pt-24'>

      {/* Title */}
      
      <div className='text-center'>
        <h1 className='text-white text-4xl font-work-space mb-2 font-medium'>Reset your password</h1>
      </div>

      {/* main card */}
      <div className='w-full flex justify-center items-start '>

        <form onSubmit={handleReset} action="" className='bg-gray-800 border-2 w-full max-w-md mx-4 border-gray-500 rounded-xl p-8 space-y-6 mb-8 mt-6'>

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

            {error && <p className='text-red-400 text-sm text-center'>{error}</p>}
            {message && <p className='text-green-400 text-sm text-center'>{message}</p>}

          <Button
          type='submit'
        //   disabled={loading}          
          variant='ghost' 
          className='w-full bg-hoverlink hover:bg-button text-black rounded-full text-sm h-12 duration-300 transition-all'>Reset
        
          </Button>

          {/* {message && (
            <p className={`text-center text-sm ${
              message.includes('Creating') || message.includes('Created')
                ? 'text-green-400'
                : 'text-red-400'
            }`}>
              {message}
            </p>
          )}
          */}
          {/* Divider */}


        </form>

      </div>
    </div>
  )
}

export default function ResetPassword() {
    return (
        <Suspense fallback={
            <div className='bg-gray-950 w-full min-h-screen flex items-center justify-center'>
                <p className='text-white'>Loading...</p>
            </div>
        }>
            <ResetPasswordForm />
        </Suspense>
    )
}