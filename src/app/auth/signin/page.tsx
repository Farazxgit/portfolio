'use client';
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'


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



// 'use client';

// import React, { useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// export default function SigninPage() {
//   const router = useRouter()
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })
  
//   const [message, setMessage] = useState('')
//   const [loading, setLoading] = useState(false)

//   const handleSignin = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     setLoading(true)
//     setMessage('Signing in...')

//     try {
//       // Call login API
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         setMessage(data.error || 'Failed to sign in')
//         setLoading(false)
//         return
//       }

//       // Success!
//       setMessage('Login successful! Redirecting...')
//       setTimeout(() => {
//         router.push('/')  // Redirect to home
//       }, 1000)
      
//     } catch (error) {
//       setMessage('Something went wrong. Please try again.')
//       setLoading(false)
//     }
//   }

//   return (
//     <div className='bg-gray-950 w-full min-h-screen flex justify-center items-center px-4 py-8'>
      
//       <div className='absolute top-8 left-8'>
//         <Link href='/'>
//           <img src="/Logo-white.png" alt="Logo" className='w-20 h-8' />
//         </Link>
//       </div>

//       <div className='w-full max-w-md'>
        
//         <div className='text-center mb-8'>
//           <h1 className='text-white text-4xl lg:text-5xl font-bold font-space-grotesk mb-3'>
//             Welcome Back
//           </h1>
//           <p className='text-gray-400 font-work-sans text-lg'>
//             Sign in to continue your journey
//           </p>
//         </div>

//         <div className='bg-gray-900 border-2 border-gray-800 rounded-xl p-8 shadow-2xl'>
          
//           <form onSubmit={handleSignin} className='space-y-6'>
            
//             {/* Email */}
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
                
//               />
//             </div>

//             {/* Password */}
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
//               {loading ? 'Signing In...' : 'Sign In'}
//             </Button>

//             {/* Message */}
//             {message && (
//               <p className={`text-center text-sm font-work-sans ${
//                 message.includes('successful') 
//                   ? 'text-hoverlink' 
//                   : message.includes('Invalid') || message.includes('Failed')
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
//                 Don't have an account?
//               </span>
//             </div>
//           </div>

//           {/* Sign Up Button */}
//           <Button
//             type="button"
//             onClick={() => router.push('/auth/signup')}
//             variant="outline"
//             className='w-full border-2 border-gray-700 bg-transparent text-white 
//                      hover:bg-gray-800 hover:border-hoverlink h-12 rounded-full 
//                      font-work-sans font-semibold transition-all duration-300'
//           >
//             Create Account
//           </Button>

//         </div>

//       </div>
//     </div>
//   )
// }

// // 'use client';

// // import React from 'react'
// // import { Input } from '@/components/ui/input'
// // import { Button } from '@/components/ui/button'
// // import Link from 'next/link'
// // import { useRouter } from 'next/navigation'

// // export default function SigninPage() {
// //   const router = useRouter()
  
// //   return (
// //     <div className='bg-gray-950 w-full min-h-screen flex justify-center items-center px-4 py-8'>
    

// //       {/* Main Card */}
// //       <div className='w-full max-w-md'>
        
// //         {/* Title Section */}
// //         <div className='text-center mb-8'>
// //           <h1 className='text-white text-4xl lg:text-5xl font-bold font-space-grotesk mb-3'>
// //             Welcome Back
// //           </h1>
// //           <p className='text-gray-400 font-work-sans text-lg'>
// //             Sign in to continue your journey
// //           </p>
// //         </div>

// //         {/* Form Card */}
// //         <div className='bg-gray-900 border-2 border-gray-800 rounded-xl p-8 shadow-2xl'>
          
// //           <form className='space-y-6'>
// //             <div className='space-y-2'>
// //               <label 
// //                 htmlFor="email" 
// //                 className='block text-white font-work-sans text-sm font-medium'
// //               >
// //                 Email Address
// //               </label>
// //               <Input 
// //                 id="email" 
// //                 type="email" 
// //                 placeholder="you@example.com"
// //                 className='bg-gray-800 border-gray-700 text-white h-12 px-4 
// //                          focus:border-hoverlink focus:ring-1 focus:ring-hoverlink 
// //                          transition-all'
// //                 required
// //               />
// //             </div>

// //             <div className='space-y-2'>
// //               <div className='flex justify-between items-center'>
// //                 <label 
// //                   htmlFor="password" 
// //                   className='block text-white font-work-sans text-sm font-medium'
// //                 >
// //                   Password
// //                 </label>
// //                 <Link 
// //                   href='/forgot-password' 
// //                   className='text-hoverlink hover:underline text-sm font-work-sans'
// //                 >
// //                   Forgot?
// //                 </Link>
// //               </div>
// //               <Input 
// //                 id="password" 
// //                 type="password" 
// //                 placeholder="••••••••"
// //                 className='bg-gray-800 border-gray-700 text-white h-12 px-4 
// //                          focus:border-hoverlink focus:ring-1 focus:ring-hoverlink 
// //                          transition-all'
// //                 required
// //               />
// //             </div>

// //             <div className='flex items-center'>
// //               <input 
// //                 id="remember" 
// //                 type="checkbox" 
// //                 className='w-4 h-4 rounded border-gray-700 bg-gray-800 
// //                          text-hoverlink focus:ring-hoverlink'
// //               />
// //               <label 
// //                 htmlFor="remember" 
// //                 className='ml-2 text-sm text-gray-400 font-work-sans'
// //               >
// //                 Remember me for 30 days
// //               </label>
// //             </div>

// //             {/* Submit Button */}
// //             <Button 
// //               type="submit"
// //               className='w-full bg-hoverlink hover:bg-button text-black font-work-sans 
// //                        text-lg h-12 rounded-full font-semibold transition-all 
// //                        duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]'
// //             >
// //               Sign In
// //             </Button>

// //           </form>

// //           {/* Divider */}
// //           <div className='relative my-6'>
// //             <div className='absolute inset-0 flex items-center'>
// //               <div className='w-full border-t border-gray-700'></div>
// //             </div>
// //             <div className='relative flex justify-center text-sm'>
// //               <span className='px-4 bg-gray-900 text-gray-400 font-work-sans'>
// //                 Don't have an account?
// //               </span>
// //             </div>
// //           </div>

// //           <Button
// //             type="button"  
// //             onClick={() => router.push('/auth/signup')}
// //             variant="outline"
// //             className='w-full border-2 border-gray-700 bg-transparent text-white 
// //                      hover:bg-gray-800 hover:border-hoverlink h-12 rounded-full 
// //                      font-work-sans font-semibold transition-all duration-300'
// //           >
// //             Create Account
// //           </Button>

// //         </div>

// //       </div>
// //     </div>
// //   )
// // }