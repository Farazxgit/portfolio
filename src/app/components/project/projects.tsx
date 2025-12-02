'use client';
import { title } from 'process'
import React from 'react'
import Image from 'next/image';
export default function Projects() {

    const projects = [
        {
            id : 1,
            title : "Streamity",
            desc : "The Ultimate Gaming Dashboard",
            tech : "Technologies: React.js, Node.js, MongoDB, AWS, OpenAI API",
            image : '/ipad.jpg',
        },
        {
            id : 2,
            title : "Limb Evolution",
            desc : "Pushing the Boundaries of Pr",
            tech : "Technologies: React.js, D3.js, Recharts, Python (Django), PostgreSQL, AWS (S3, Lambda",
            image : '/girl.jpg',
        },
        {
            id : 3,
            title : "PodcastPrime",
            desc : "Where Voices Thrive",
            tech : "Technologies: Vue.js, D3.js, Vuetify, Python (FastAPI) ...",
            image : '/cat.jpg',
        },
        {
            id : 4,
            title : "Confab",
            desc : "Feeding Curious Tech Minds",
            tech : "Technologies: Vue.js, D3.js, Vuetify, Python (FastAPI) …",
            image : '/macbook.jpg',
        },

    ]
  return (
    <div className='project-bg'>
      <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-3 p-5'>
        <h1 className='font-medium text-3xl font-work-space'>MindScape</h1>
        <h1 className='text-xl font-wokr-sans'>Exploring the Realms of Mental Health</h1>
        <p className='text-xl font-work-sans'>Technologies: React.js, Node.js, MongoDB, AWS, OpenAI API</p>
        <p className='text-xl font-work-sans'>As the lead developer, I was responsible for architecting the entire 
        <br/> application, implementing core features, and managing a team of
        <br/> three junior developers. I personally focused on the mood tracking 
        <br/> algorithm, AI chatbot integration, and overall application security.</p>
      </div>

      <div className='grid lg:grid-cols-[2fr_3fr] '>
        {projects.map((projects)=>(
            <div key={projects.id} className='m-3'>
                 <div className='relative h-[300px] lg:h-[800px] rounded-lg w-full gap-5 '>
                    <Image src={projects.image} alt="" fill className='object-cover' />   
                    <div className='absolute top-2 left-2 right-2 lg:right-4 bottom-2 border-2 
                    lg:left-4 lg:top-4 lg:bottom-4 border-white rounded-lg pointer-events-none z-10 '></div>
                 </div>
              
                <div className='mt-5'> 
                <h1 className='lg:text-4xl text-3xl font-work-space font-medium mb-3'>{projects.title}</h1>   
                <h1 className='text-xl font-work-sans mb-3'>{projects.desc}</h1>
                <h1 className='text-base font-work-sans'>{projects.tech}</h1>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
