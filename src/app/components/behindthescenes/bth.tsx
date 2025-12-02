"use client";

import React from 'react'
import Title from '../Title/title'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { CarouselContent, CarouselItem, Carousel } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"

export default function Bth() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, 
        stopOnInteraction: false, 
        stopOnMouseEnter: false,  
        stopOnFocusIn: false  
    })
  )

  return (
    <div className='w-full py-10'>
      <div className='container'>
        <Title title="{ Behind the Scenes }" desc="Behind the Scenes of Website" />
      </div>

      <div className='mt-8'>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full cursor-pointer"
        >
          <CarouselContent className='m-2'>
            {/* Card 1 */}
            <CarouselItem className="basis-full">
              <div className='relative w-full h-[500px] lg:h-[700px]'>
                <Image 
                  src="/pic1.jpg" 
                  alt="Projects" 
                  fill
                  className='object-cover '
                />
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='absolute bottom-8 left-8 p-6 rounded-lg text-white z-10 '>
                  <div className='flex items-center gap-2 mb-2'>
                    <Calendar size={20} />
                    <h2 className='text-lg'>September 27, 2024</h2>
                  </div>
                  <div>
                    <h1 className='text-3xl font-bold'>Building Own Brand</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Card 2 */}
            <CarouselItem className="basis-full">
              <div className='relative w-full h-[500px] lg:h-[700px]'>
                <Image 
                  src="/pic2.jpg" 
                  alt="Projects" 
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='absolute bottom-8 left-8 text-white p-6 rounded-lg z-10'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Calendar size={20} />
                    <h2 className='text-lg'>August 27, 2024</h2>
                  </div>
                  <div>
                    <h1 className='text-3xl font-bold'>Building Own Brand</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Card 3 */}
            <CarouselItem className="basis-full">
              <div className='relative w-full h-[500px] lg:h-[700px]'>
                <Image 
                  src="/pic3.jpg" 
                  alt="Projects" 
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='absolute bottom-8 left-8 text-white p-6 rounded-lg z-10'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Calendar size={20} />
                    <h2 className='text-lg'>March 27, 2024</h2>
                  </div>
                  <div>
                    <h1 className='text-3xl font-bold'>Working on big Product</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Card 4 */}
            <CarouselItem className="basis-full">
              <div className='relative w-full h-[500px] lg:h-[700px]'>
                <Image 
                  src="/pic4.jpg" 
                  alt="Projects" 
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='absolute bottom-8 left-8 text-white p-6 rounded-lg z-10'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Calendar size={20} />
                    <h2 className='text-base font-work-sans mt-2'>January 12, 2023</h2>
                  </div>
                  <div>
                    <h1 className='text-3xl font-bold'>Providing Services</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>

          </CarouselContent>
        </Carousel>
      </div>


       {/* bottom section */}
    <div className='flex flex-col lg:flex-row m-5 gap-5'>
       <div className=''>
          <div className=''>
            <Image src="/pic1.jpg" alt="Projects" width={600} height={400} className='rounded-xl' />
          </div>
          <div className='mt-5'>
            <h1 className='text-3xl font-work-space font-medium'>
                Crafting User-Centric Designs: My Process Revealed
            </h1>
            <h1 className='text-base font-work-sans mt-2'>
                August 20, 2024 No Comments
            </h1>
            <Button className='bg-white text-purple-500 text-3xl hover:bg-transparent mt-2 -ml-4'>
                Read more 
            </Button>
          </div>
       </div>

       <div className=''>
          <div>
            <Image src="/pic2.jpg" alt="Projects" width={600} height={400} className='rounded-xl' />
          </div>
          <div className='mt-5'>
            <h1 className='text-3xl font-work-space font-medium'>
                Crafting User-Centric Designs: My Process Revealed
            </h1>
            <p className='text-base font-work-sans mt-2'>
                August 20, 2024 No Comments
            </p>
            <Button className='bg-white text-purple-500 text-3xl hover:bg-transparent mt-2 -ml-4'>
                Read more
            </Button>
          </div>
       </div>

       <div className=''>
          <div>
            <Image src="/pic3.jpg" alt="Projects" width={600} height={400} className='rounded-xl' />
          </div>
          <div className='mt-5'>
            <h1 className='text-3xl font-work-space font-medium'>
                Crafting User-Centric Designs: My Process Revealed
            </h1>
            <p className='text-base font-work-sans mt-2'>
                August 20, 2024 No Comments
            </p>
            <Button className='bg-white text-purple-500 hover:bg-transparent text-3xl mt-2 -ml-4'>
                Read more
            </Button>
          </div>
       </div>
    </div>
    
    
    </div>





  )
}