'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRight, ChevronUp } from 'lucide-react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className='bg-gray-950'>
      <div className='lg:h-[700px] min-h-[700px] flex items-center'>
        {/* Menus */}
        <div className=' text-white w-full lg:flex justify-between flex-row m-10'>
            <div className=''>
                <h1 className='text-work-space lg:text-xl font-medium'>Navigation</h1>
              <div className='space-y-3 font-work-space text-lg cursor-pointer'>
                <div className='mt-10 flex'>
                  <ChevronRight className='text-hoverlink'/>
                  <h1 className='hover:text-hoverlink'>About</h1>
                </div>
                <div className='flex'>
                  <ChevronRight className='text-hoverlink'/>
                  <h1 className='hover:text-hoverlink'
                  >Projects</h1>
                </div>
                <div className='flex'>
                  <ChevronRight className='text-hoverlink' />
                  <h1 className='hover:text-hoverlink'>Services</h1>
                </div>
                <div className='flex'>
                  <ChevronRight className='text-hoverlink'/>
                  <h1 className='hover:text-hoverlink'>Blogs</h1>
                </div>
                <div className='flex'>
                  <ChevronRight  className='text-hoverlink' />
                  <h1 className='hover:text-hoverlink'>Contact</h1>
                </div>
                </div>
            </div>
            {/* social media  */}
            <div className='mt-5'>
                <h1 className='font-work-space text-xl font-medium'>Follow me</h1>
                <div className='mt-6 lg:mt-10 grid grid-cols-2 gap-3 max-w-[280px]'>
                <Button className='rounded-full bg-transparent  hover:bg-hoverlink hover:text-black border border-white cursor-pointer h-10 hover:border-0'>LinkedIn</Button>
                <Button className='rounded-full bg-transparent  hover:bg-hoverlink hover:text-black border border-white cursor-pointer h-10 hover:border-0'>Instagram</Button>
                <Button className='rounded-full bg-transparent  hover:bg-hoverlink hover:text-black border border-white cursor-pointer h-10 hover:border-0 w-[90%]'>Github</Button>
                <Button className='rounded-full bg-transparent  hover:bg-hoverlink hover:text-black border border-white cursor-pointer h-10 hover:border-0 w-[90%]'>Twitch</Button>
                <Button className='rounded-full bg-transparent  hover:bg-hoverlink hover:text-black border border-white cursor-pointer h-10 hover:border-0'>Mastodon</Button>
                <Button className='rounded-full bg-transparent  hover:bg-hoverlink hover:text-black hover:-scale-z-100 border border-white cursor-pointer h-10 hover:border-0'>Youtube</Button>
                </div>
            </div>
            {/* third section */}
            <div className='space-y-10'>
                <h1 className='font-work-space text-xl font-medium mt-5'>New Tips delivered to your inbox</h1>
                <form className='w-auto h-auto'>
                   <Input placeholder='Email'
                   className='lg:h-20 lg:w-100 '/>
                    <div className='mt-10'>
                    <Button className="text-black bg-hoverlink hover:bg-button hover:text-white hover:opacity-90 text-lg md:text-2xl py-3 md:py-5 h-15 rounded-full lg:w-100 w-full">Send</Button>
                </div>
                </form>
            </div>
        </div>
      </div>
        <div className='lg:w-full flex justify-between items-center  min-w-[200px]'>
        <div className='m-5'>
          <h1 className='text-white font-work-sans font-normal text-lg'>
              © 2024 Merkulove
          </h1>
        </div>
        <div>
          <div className='m-5 flex'>
          <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='bg-transparent text-white rounded-full h-10  hover:bg-transparent border border-white cursor-pointer'>
            <ChevronUp size={18} className='text-white'/>
            Back to Top</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
