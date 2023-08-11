import React from 'react'
import Framer from '../components/Framer'
import Image from 'next/image'
import blancura from '../../public/images/photos/IMG_2464-optimised.jpg'
import blancuraBathroom from '../../public/images/photos/IMG_2519-optimised.jpg'

export default function Blancura() {
  return (
    <main className='min-h-[90vh]'>
    <div className='h-32'></div>
        <Framer>
            <h1 className='text-4xl md:text-7xl text-center font-bold text-red-950 dark:text-white [text-shadow:_6px_2px_4px_rgb(0_0_0_/_40%)]'>LVIS Blancura</h1>
        </Framer>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div className='w-full relative'>
                <Framer delay={.3}>
                    <Image className='w-full p-4 rounded-3xl' src={blancura}  alt='LVIS Blancura' />
                </Framer>
                    <h5 className='text-2xl md:text-4xl text-white font-bold text-center absolute top-[85%] left-[50%] -translate-x-[50%] -translate-y-[50%] [text-shadow:_6px_2px_4px_rgb(0_0_0_/_40%)]'>Bedroom</h5>
                </div>
                <div className='w-full relative'>
                <Framer delay={.5}>
                    <Image className='w-full p-4 rounded-3xl' src={blancuraBathroom}  alt='LVIS Blancura' />
                </Framer>
                    <h5 className='text-2xl md:text-4xl text-white font-bold text-center absolute top-[85%] left-[50%] -translate-x-[50%] -translate-y-[50%] [text-shadow:_6px_2px_4px_rgb(0_0_0_/_40%)]'>Bathroom</h5>
                </div>
            </div>
       
    </main>
  )
}
