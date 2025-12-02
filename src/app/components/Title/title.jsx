import React from 'react'

export default function Title({title,desc}) {
  return (
    <div className='flex flex-col h-full mt-30 m-5 gap-3'>
        <div>
            <h1 className='text-2xl text-button'>{title}</h1>
        </div>
        
        <div>
            <p className='text-4xl lg:text-6xl'>{desc}</p>
        </div>
    </div>
  )
}
