'use client';

import React, { useState } from 'react'
import Title from '../Title/title';
import Image from 'next/image';
import { Play, X } from 'lucide-react';

export default function Projectgallery() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
  return (
    <div className='w-full h-full'>
        <div>
            <Title title="{ Web Dev Portfolio }" desc="Project Gallery" />
        </div>
        <div className='m-5 md:m-4'>
            <div className='relative group overflow-hidden rounded-lg h-[400px] lg:h-[1000px]'>
                {/* <Image 
                    src="/gallerypic.jpg" 
                    alt="" 
                    width={600} 
                    height={400} 
                    className='w-full rounded-lg transition-transform duration-500'
                /> */}
                
                <div className='absolute inset-2 lg:inset-6 border-2 border-white/80 rounded-lg pointer-events-none z-20'></div>
                <div 
                    onClick={() => setIsVideoOpen(true)}
                    className='absolute inset-0 flex items-center justify-center  transition-all duration-300 cursor-pointer bg-cover bg-center bg-fixed rounded-lg
                    '
                    style={{ backgroundImage: 'url(/gallerypic.jpg)' }}
                >
                    <div className='bg-white/20 rounded-full p-4 lg:p-6  transition-transform duration-300 hover:bg-hoverlink'>
                        <Play size={56} className='text-white fill-white' />
                    </div>
                </div>
            </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div 
            className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4' 
            onClick={() => setIsVideoOpen(false)}
          >
            <div className='relative w-full max-w-4xl' onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setIsVideoOpen(false)} 
                className='absolute -top-10 right-0 text-white hover:text-gray-300'
              >
                <X size={32} />
              </button>
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/4fmYrIWl-4Q"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
    </div>
  )
}