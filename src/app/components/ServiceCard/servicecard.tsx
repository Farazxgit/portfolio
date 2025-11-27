'use client';
import React from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image';


interface ServiceCardProps {
    service : {
        title : string;
        image: string;
    }
}

export default function Servicecard({service}: ServiceCardProps) {
  return (
    <div className=''>
      <div className=''>
        <Card className='h-[250px] relative hover:bg-gray-100 transition-all duration-300'>
                <Image src={service.image} width={70} height={70} alt='' className='border mt-5 absolute right-10 top-10'/>
            <CardHeader>
                <CardTitle className='absolute top-40 ml-4 lg:ml-10'>
                    {service.title}
                </CardTitle>
            </CardHeader>
        </Card>
      </div>
    </div>
  )
}
