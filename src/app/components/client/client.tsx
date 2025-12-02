"use client";

import React from 'react'
import Title from '../Title/title';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
export default function Client() {

    const [api, setApi] = React.useState<any>()
    const [count, setCount] = React.useState<any>(0)
    const [current, setCurrent] = React.useState<any>(0)

    React.useEffect(() => {
        if(!api){
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }

        api.on("select", onSelect)

        return () =>{
            api.off("select", onSelect)
        }
    },[api])

  return (
    <div>
      <div>
        <Title title="{ Client Endorsements }" desc="What Clients Say"/>
      </div>
      <div className='px-4 lg:px-8 py-10'>
        <div>
            <Carousel
            setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
                <CarouselContent className='gap-5'>
                    <CarouselItem className='pl-4 md:basis-1/2 lg:basis-1/3'>
                        <Card className='h-[400px] border-gray-300'>
                            <CardContent className='flex flex-col justify-between h-full'>
                                <p className='font-work-sans text-xl font-medium leading-7 italic '> I am incredibly impressed with William Muller's expertise in web development. He transformed our outdated website into a sleek, professional platform that has received rave reviews from our clients. His commitment to quality and his innovative approach made him an invaluable partner. I couldn't be happier with the results!    
                                </p>
                                <p className='text-gray-500 italic text-base mb-30'>Founders @Kiss & Tail App</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                     <CarouselItem className='pl-4 md:basis-1/2 lg:basis-1/3 '>
                        <Card className='h-[400px] border-gray-300'>
                            <CardContent className='flex flex-col justify-between h-full'>
                                <div>
                                    <Image src="/client1.jpg" alt="Client" width={200} height={400} className='w-[300px] h-[300px]'/> 
                                </div>   
                                <p className='text-gray-500 italic text-base'>Founders @Kiss & Tail App</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                     <CarouselItem className='pl-4 md:basis-1/2 lg:basis-1/3'>
                        <Card className='h-[400px] border-gray-300'>
                            <CardContent className='flex flex-col h-full'>
                                <div>
                                    <Image src="/oldman.jpg" alt="client" width={100} height={100}
                                    className='w-[250px] lg:h-[200px]'/>
                                </div>
                                <h1 className='font-normal text-xl mt-5'> 
                                    Working with Faraz was an absolute pleasure    
                                </h1>
                                <p className='text-gray-500 italic text-base mt-5'>Founders @Kiss & Tail App</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 ">
                        <Card className='bg-black text-white shadow-lg h-[400px]'>
                            <CardContent className='flex flex-col justify-between h-full'>
                                <h3 className='text-3xl font-bold mb-4'>5 Star Service</h3>
                                <p className='text-gray-300 mb-6'>Incredible problem solver with deep knowledge of modern web technologies.</p>
                                <p className='text-sm text-gray-500 italic'>- James Wilson, VP Engineering</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>


                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <Card className='bg-linear-to-br from-blue-500 to-purple-600 text-white shadow-lg h-[400px]'>
                            <CardContent className='flex flex-col justify-between h-full'>
                                <blockquote className='text-xl font-medium mb-4 italic'>
                                    "Transformed our legacy system into a modern architecture."
                                </blockquote>
                                <div className='border-t border-white/30 pt-4'>
                                    <p className='font-semibold italic'>Michael Chen</p>
                                    <p className=' opacity-90 italic text-base'>CTO, InnovateCorp</p>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? 'w-3 bg-blue-600'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>



        </div>  
      </div>
    </div>
  )
}
















