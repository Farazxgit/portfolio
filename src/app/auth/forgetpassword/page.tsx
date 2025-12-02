'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ForgetPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const response = await fetch('/api/auth/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error)
        return
      }

      setMessage('Reset link sent! Check your email.')
    } catch (err) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='bg-gray-950 w-full min-h-screen pt-24'>
      <div className='text-center mb-8 '>
        <h1 className='text-white text-4xl font-work-space mb-2 font-medium'>Forgot Password</h1>
        <p className='text-gray-500 text-xl font-work-sans'>Please verify your email</p>
      </div>

      <div className='w-full flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='w-full max-w-md mx-4 bg-gray-800 border-2 border-gray-500 rounded-xl p-8 space-y-6 mb-8'>
          
          <div>
            <label htmlFor="email" className='text-white text-sm font-work-sans'>
              Email
            </label>
            <Input 
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='you@example.com'
              className='bg-white mt-2'
            />
          </div>

          {error && <p className='text-red-400 text-sm'>{error}</p>}
          {message && <p className='text-green-400 text-sm'>{message}</p>}
          
          <Button
            type='submit'
            disabled={loading}
            variant='ghost' 
            className='w-full bg-hoverlink hover:bg-button text-black rounded-full text-sm h-12 duration-300 transition-all'
          >
            {loading ? 'Sending...' : 'Submit'}
          </Button>

        </form>
      </div>
    </div>
  )
}