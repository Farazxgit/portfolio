import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function TechStack() {
  return (
    <div className='relative w-full min-h-screen' style={{backgroundImage : 'url(/hero-bg.png)', backgroundSize: 'cover'}}>
        <div className='relative mx-4 my-2 lg:m-8 z-12 min-h-[calc(100vh-2rem)] lg:h-[calc(100vh-4rem)] flex flex-col p-4 sm:p-6 lg:p-10 lg:overflow-hidden top-4 bottom-4'>
            <div className='hidden lg:block absolute top-10 left-10'>
                <Image src='/node.png' alt='' width={200} height={200}/>
            </div>
            
            <div className='flex-1 flex flex-col justify-center py-3 sm:py-6'>
                <div className='lg:text-center mb-4 sm:mb-6 lg:mb-12'>
                    <p className='text-hoverlink text-sm sm:text-base mb-2 sm:mb-5'>{ "{My tech stack}" }</p>
                    <h1 className='text-white text-2xl sm:text-3xl lg:text-6xl font-semibold leading-tight'>
                        React & Node.js powerhouse - <br/> Full-stack web development <br/> arsenal delivering seamless <br/> digital experiences
                    </h1>
                </div>
                <div className='w-full flex flex-col lg:flex-wrap lg:flex-row justify-center 
                gap-1.5 sm:gap-3 lg:gap-4 lg:px-50'>
                    <Button className='w-full sm:w-[180px] h-10 sm:h-[45px] rounded-3xl text-sm'>HTML5 & CSS3</Button>
                    <Button className='w-full sm:w-[180px] h-10 sm:h-[45px] rounded-3xl text-sm'>JavaScript (ES6+)</Button>
                    <Button className='w-full sm:w-[180px] h-10 sm:h-[45px] rounded-3xl text-sm'>React & Redux</Button>
                    <Button className='w-full sm:w-[180px] h-10 sm:h-[45px] rounded-3xl text-sm'>Angular</Button>
                    <Button className='w-full sm:w-[180px] h-10 sm:h-[45px] rounded-3xl text-sm'>Node.js & Express</Button>
                    <Button className='w-full sm:w-[180px] h-10 sm:h-[45px] rounded-3xl text-sm'>Git & Version Control</Button>
                    <Button className='w-full sm:w-[180px] h-10 sm:h-[45px] rounded-3xl text-sm'>Agile Methodologies</Button>
                    <Button className='w-full sm:w-[180px] h-10 sm:h-[45px] rounded-3xl text-sm'>Responsive Web Design</Button>
                </div>
            </div>

           <div className='flex justify-end mt-2 sm:mt-6 lg:absolute lg:bottom-10 lg:right-10'>
            <Image src='/react.png' alt='' width={60} height={60} className='sm:w-20 sm:h-20 lg:w-[200px] lg:h-[200px]'/>
           </div>
        </div>
    </div>
  )
}