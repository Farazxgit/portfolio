"use client";
import React from 'react'
import Title from '../Title/title'
import ServiceCard from '../ServiceCard/servicecard' 


export default function Services() {
    const services = [{
        title: "Full Stack Web Development",
        image : '/site-map1.png',
    },
    {
        title: "Restful API Development",
        image : '/hover.png',
    },
    {
        title: "Mern Stack Development",
        image : '/hover-1.png',
    },
    {
        title: "Single Page Application",
        image : '/hover-2.png',
    },
    {
        title: "Web Application Maintenance",
        image : '/hover-3.png',
    },
    {
        title: "Web Vitals Enhancement",
        image : '/hover-4.png',
    }]
  return (
    <div className='w-full h-full'>
      <div className=''>
        <Title title="{What I do}" desc="Crafting Seamless Full-Stack Solutions" />
        <div className='max-w-8xl grid lg:grid-cols-3 grid-cols-1 gap-5 lg:m-5 m-5 lg:mt-10 text-2xl'>
        {services.map((service, index)=>(
            <ServiceCard key={index} service={service} />
        ))}
        </div>
      </div>
    </div>
  )
}
