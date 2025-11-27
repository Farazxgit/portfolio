import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
export default function ContactUs() {
  return (
    <div className='bg-purple-500 min-h-screen flex flex-col justify-center py-16 relative overflow-hidden'>
      <div className="hidden lg:block absolute left-1/2 top-100 -translate-x-1/2 z-0 pointer-events-none">
        <Image src="/msgbox.png" alt="message box bg" width={50} height={50} className="lg:w-[550px] lg:h-[400px]" />
      </div>

      <div className='max-w-8xl w-full mx-auto px-8 lg:px-12 relative z-10'>
        {/* Outline frame around content */}
        <div className='border-2 border-white rounded-2xl p-4 lg:p-8'>
          <div className='bg-transparent'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-28 items-start mb-6 lg:mb-20'>
          <div className='text-white flex flex-col justify-center lg:justify-start lg:pt-24 lg:pr-8'>
            <h1 className='text-4xl lg:text-7xl font-semibold font-work-space leading-tight'>Looking to Work 
              <br/>Together</h1>
            <p className='font-work-sans text-base lg:text-xl mt-4 lg:mt-8 font-normal leading-relaxed'>Great to see you here! I'm always eager to discuss new projects or just geek out about digital marketing</p>
            <h2 className='font-work-space text-lg lg:text-2xl mt-6 lg:mt-12 font-medium'>AVAILABLE FOR WORK</h2>
          </div>

          
          <div className='flex justify-center items-start z-10'>
            <form className='lg:p-16 w-full max-w-5xl'>
              <div className='space-y-8'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
                  <label className='flex-1'>
                    <span className='block text-lg md:text-2xl font-semibold text-white mb-3'>Name</span>
                    <Input 
                      placeholder='Name'
                      className='bg-white border rounded-xl border-gray-300 text-lg md:text-2xl py-3 md:py-5 px-3 md:px-4 w-full h-20 placeholder:text-base md:placeholder:text-2xl'
                    />
                  </label>
                  <label className='flex-1'>
                    <span className='block text-lg md:text-2xl font-semibold text-white mb-3'>Email</span>
                    <Input 
                      placeholder='Email'
                      className='bg-white border rounded-xl border-gray-300 text-lg md:text-2xl py-3 md:py-5 px-3 md:px-4 w-full h-20 placeholder:text-base md:placeholder:text-2xl '
                    />
                  </label>
                </div>

                {/* Message */}
                <div>
                  <label className='block'>
                    <span className='block text-lg md:text-2xl font-semibold text-white mb-3'>Message</span>
                    <Textarea 
                      className="bg-white border border-gray-300 text-lg md:text-2xl py-3 md:py-5 px-3 md:px-4 w-full h-40 md:h-56 placeholder:text-base md:placeholder:text-2xl rounded-xl" 
                      placeholder='Message'
                    />
                  </label>
                </div>

                <div>
                  <Button className="text-black bg-hoverlink hover:bg-hoverlink hover:text-white w-full hover:opacity-90 text-lg md:text-2xl py-3 md:py-5 h-15 rounded-full">Send</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
          </div>
        </div>
        <div className="block lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 z-0 ">
          <Image src="/msgbox.png" alt="msgbox bottom" width={260} height={260} className="" />
        </div>
      </div>
    </div>
  )
}
