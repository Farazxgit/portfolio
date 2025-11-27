import React from 'react'
import Title from '../Title/title'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
    
    const portfolio = [
        {
            id : 1,
            title : `FinTech Startup`,
            designation : "Principal Full Stack Developer",
            desc : "Leads the development of a cutting-edge fintech platform using React, Python (Flask), and AWS services. Provides technical guidance, mentors junior developers, and drives innovation within the engineering team",
            duration : "2023-Present"
        },
        {
            id : 2,
            title : "FinTech Startup",
            designation : "Principal Full Stack Developer",
            desc : "Architected and implemented a robust microservices-based web application using Vue.js, Node.js, and Docker. Collaborated with product teams to define technical roadmaps and ensure seamless integration across multiple services.",
            duration : "2023-2021"
        },
        {
            id : 3,
            title : "FinTech Startup",
            designation : "Lead Full Stack Architect",
            desc : "Nisl lobortis fringilla pharetra ac ultrices quam dui commodo. Pellentesque habitant potenti semper tristique. Сonubia consequat metus cubilia dictum pretium tellus ultricies.",
            duration : "2021-2019"
        },
        {
            id : 4,
            title : `Acme Software Solutions`,
            designation : "Full Stack Web Develop",
            desc : "Elementum mauris imperdiet montes vestibulum felis per tempus amet efficitur. Cras enim commodo congue nam. Sem ad et senectus erat montes. Nisl lobortis fringilla pharetra dui commodo",
            duration : "2019-2016"
        },
    ]
  return (
    <div className='w-full h-full'>
        <div className=''>
            <Title title="{ Web Dev Portfolio }" desc="Career Waypoints..." />
            <div className=''>
                {portfolio.map((portfolio)=>(
                <div key={portfolio.id} className='grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-1 gap-5 lg:gap-12 m-5 lg:m-8 pb-10 lg:pb-10 border-b-2 border-gray-300'>
                <div className='gap-5'>
                    <h1 className='font-work-space text-base'>{portfolio.title}</h1>
                    <h1 className='font-work-space text-4xl mt-5 mb-5'>{portfolio.designation}</h1>
                </div>
                <div className='flex items-center'>
                    <h1 className='font-work-sans text-lg'>{portfolio.desc}</h1>
                </div>
                <div className='flex justify-end items-center'>
                <h1 className='font-work-space text-xl'>{portfolio.duration}</h1>
                </div>
                </div>
                ))}
                
            </div>
            <div className='flex justify-center mt-15'>
            <Button className='bg-hoverlink rounded-4xl w-70 h-15 text-black font-work-space text-base hover:scale-150 hover:bg-hoverlink '>VIEW ALL PORTFOLIO</Button>
            </div>
        </div>
    </div>
  )
}
