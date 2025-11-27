import React from 'react'
import Title from '../Title/title'
import Image from 'next/image'

export default function Companies() {
  return (
    <div>
      <div className='text-center mb-10'>
        <Title title={"{ Valued Partners }"} desc={"Company Collaborations"}/>
      </div>
      <div className='flex flex-wrap m-5 gap-5 justify-center'>
      <div className='bg-gray-200  w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/stripe.png" alt="Stripe Pic" width={120} height={0} className='h-15'/>
      </div>

      <div className='bg-gray-200 w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/forward.png" alt="Stripe Pic" width={250} height={0} className='h-25'/>
      </div>

      <div className='bg-gray-200  w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/cyber.png" alt="Stripe Pic" width={250} height={0} className='h-25'/>
      </div>

      <div className='bg-gray-200  w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/sofi.png" alt="Stripe Pic" width={100} height={0} className='h-10'/>
      </div>

      <div className='bg-gray-200  w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/shopify.png" alt="Stripe Pic" width={150} height={0} className='h-10'/>
      </div>

      <div className='bg-gray-200  w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/crypto.png" alt="Stripe Pic" width={200} height={0} className='h-45'/>
      </div>

      <div className='bg-gray-200 w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/marketo.png" alt="Stripe Pic" width={250} height={0} className='h-20'/>
      </div>

      <div className='bg-gray-200 w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/top.png" alt="Stripe Pic" width={250} height={0} className='h-25'/>
      </div>

      <div className='bg-gray-200  w-80 h-80 rounded-full flex justify-center items-center'>
        <Image src="/wpp-1.png" alt="Stripe Pic" width={250} height={0} className='h-25'/>
      </div>
      </div>
    </div>
  )
}