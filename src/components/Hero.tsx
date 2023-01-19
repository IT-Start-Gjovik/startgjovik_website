import React from 'react'
import Image from 'next/image'

export const Hero: React.FC = () => {
  return (
    <div className='relative'>
        <video className='absolute min-w-full min-h-full right-0 left-0 z-1' autoPlay muted loop>
            <source src='./bg.mp4' type='video/mp4'/>
        </video>
        <Image className='absolute z-2 mt-[50px]  sm:mt-[250px] right-0 left-0 mx-auto' src="/logo.png" width={1300} height={50} alt="Start Gjøvik"/>
    </div>
    
  )
}
