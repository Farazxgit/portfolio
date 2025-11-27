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











// 'use client';

// import React, { useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// export default function SignupPage() {
//   const router = useRouter()
  
//   // State to store form data
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })
  
//   // State for messages and loading
//   const [message, setMessage] = useState('')
//   const [loading, setLoading] = useState(false)

//   // Handle form submission
//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault()  // Prevent page refresh
    
//     // Check if passwords match
//     if (formData.password !== formData.confirmPassword) {
//       setMessage('Passwords do not match!')
//       return
//     }
    
//     setLoading(true)
//     setMessage('Creating account...')
//     console.log("creating account")

//     try {
//       // Call our API
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           password: formData.password,
//         }),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         // If error, show error message
//         setMessage(data.error || 'Failed to create account')
//         setLoading(false)
//         return
//       }

//       // Success!
//       setMessage('Account created successfully! Redirecting...')
//       setTimeout(() => {
//         router.push('/auth/signin')
//       }, 2000)
      
//     } catch (error) {
//       setMessage('Something went wrong. Please try again.')
//       setLoading(false)
//     }
//   }

//   return (
//     <div className='bg-gray-950 w-full min-h-screen flex justify-center items-center px-4 py-8'>
      
//       {/* Logo at top left */}
//       <div className='absolute top-8 left-8'>
//         <Link href='/'>
//           <img src="/Logo-white.png" alt="Logo" className='w-20 h-8' />
//         </Link>
//       </div>

//       {/* Main Card */}
//       <div className='w-full max-w-md'>
        
//         {/* Title Section */}
//         <div className='text-center mb-8'>
//           <h1 className='text-white text-4xl lg:text-5xl font-bold font-space-grotesk mb-3'>
//             Create Account
//           </h1>
//           <p className='text-gray-400 font-work-sans text-lg'>
//             Join us and start your journey
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className='bg-gray-900 border-2 border-gray-800 rounded-xl p-8 shadow-2xl'>
          
//           <form onSubmit={handleSignup} className='space-y-6'>
            
//             {/* Full Name Input */}
//             <div className='space-y-2'>
//               <label 
//                 htmlFor="fullName" 
//                 className='block text-white font-work-sans text-sm font-medium'
//               >
//                 Full Name
//               </label>
//               <Input 
//                 id="fullName" 
//                 type="text" 
//                 placeholder="John Doe"
//                 value={formData.fullName}
//                 onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                 className='bg-gray-800 border-gray-700 text-white h-12 px-4 
//                          focus:border-hoverlink focus:ring-1 focus:ring-hoverlink 
//                          transition-all'
//                 required
//               />
//             </div>

//             {/* Email Input */}
//             <div className='space-y-2'>
//               <label 
//                 htmlFor="email" 
//                 className='block text-white font-work-sans text-sm font-medium'
//               >
//                 Email Address
//               </label>
//               <Input 
//                 id="email" 
//                 type="email" 
//                 placeholder="you@example.com"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className='bg-gray-800 border-gray-700 text-white h-12 px-4 
//                          focus:border-hoverlink focus:ring-1 focus:ring-hoverlink 
//                          transition-all'
//                 required
//               />
//             </div>

//             {/* Password Input */}
//             <div className='space-y-2'>
//               <label 
//                 htmlFor="password" 
//                 className='block text-white font-work-sans text-sm font-medium'
//               >
//                 Password
//               </label>
//               <Input 
//                 id="password" 
//                 type="password" 
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className='bg-gray-800 border-gray-700 text-white h-12 px-4 
//                          focus:border-hoverlink focus:ring-1 focus:ring-hoverlink 
//                          transition-all'
//                 required
//                 minLength={6}
//               />
//               <p className='text-gray-500 text-xs font-work-sans'>
//                 Must be at least 6 characters
//               </p>
//             </div>

//             {/* Confirm Password Input */}
//             <div className='space-y-2'>
//               <label 
//                 htmlFor="confirmPassword" 
//                 className='block text-white font-work-sans text-sm font-medium'
//               >
//                 Confirm Password
//               </label>
//               <Input 
//                 id="confirmPassword" 
//                 type="password" 
//                 placeholder="••••••••"
//                 value={formData.confirmPassword}
//                 onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                 className='bg-gray-800 border-gray-700 text-white h-12 px-4 
//                          focus:border-hoverlink focus:ring-1 focus:ring-hoverlink 
//                          transition-all'
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <Button 
//               type="submit"
//               disabled={loading}
//               className='w-full bg-hoverlink hover:bg-button text-black font-work-sans 
//                        text-lg h-12 rounded-full font-semibold transition-all 
//                        duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]
//                        disabled:opacity-50 disabled:cursor-not-allowed'
//             >
//               {loading ? 'Creating Account...' : 'Create Account'}
//             </Button>

//             {/* Message Display */}
//             {message && (
//               <p className={`text-center text-sm font-work-sans ${
//                 message.includes('success') 
//                   ? 'text-hoverlink' 
//                   : message.includes('error') || message.includes('match') || message.includes('Failed')
//                   ? 'text-red-400'
//                   : 'text-gray-400'
//               }`}>
//                 {message}
//               </p>
//             )}

//           </form>

//           {/* Divider */}
//           <div className='relative my-6'>
//             <div className='absolute inset-0 flex items-center'>
//               <div className='w-full border-t border-gray-700'></div>
//             </div>
//             <div className='relative flex justify-center text-sm'>
//               <span className='px-4 bg-gray-900 text-gray-400 font-work-sans'>
//                 Already have an account?
//               </span>
//             </div>
//           </div>

//           {/* Sign In Button */}
//           <Button
//             type="button"
//             onClick={() => router.push('/signin')}
//             variant="outline"
//             className='w-full border-2 border-gray-700 bg-transparent text-white 
//                      hover:bg-gray-800 hover:border-hoverlink h-12 rounded-full 
//                      font-work-sans font-semibold transition-all duration-300'
//           >
//             Sign In Instead
//           </Button>

//         </div>

//       </div>
//     </div>
//   )
// }