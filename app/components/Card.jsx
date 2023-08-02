import React from 'react'
import Image from 'next/image'
import blancura from '../../public/images/photos/IMG_2464-optimised.jpg'
import {FaUmbrellaBeach} from 'react-icons/fa'
import {GiCommercialAirplane, GiMeal} from 'react-icons/gi'

function Card() {
  return (
    <div className='p-2 bg-slate-50 dark:bg-slate-600 text-red-950 dark:text-white shadow-xl md:min-h-[900px]'>
        <Image src={blancura} alt='LVIS Blancura' className='w-full'/>
        <div className='px-3 mb-6'>
            <h5 className='text-4xl font-medium mt-8 mb-9 text-center'>LVIS Blancura</h5>
            <div className='flex justify-between px-2 text-sm md:text-base'>
                <div className='flex flex-col items-center mb-5'>
                    <FaUmbrellaBeach className='text-3xl md:text-4xl'/>
                    <h5 className=''>Beachfront</h5>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <GiCommercialAirplane className='text-3xl md:text-4xl'/>
                    <h5 className=''>Airport Transfer</h5>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <GiMeal className='text-3xl md:text-4xl'/>
                    <h5 className=''>Restaurant</h5>
                </div>
            </div>
            <p>LVIS Blancura Hotel is a beachfront property located in the beautiful island Dharavandhoo. The hotel&apos;s proximity to Hanifaru Bay offers opportunities for snorkeling with Manta rays and Whalesharks during season. With elegant rooms, stunning ocean views, and modern amenities, it provides a perfect retreat. Our guests can enjoy international and local cuisine at the on-site restaurant. Experience warm hospitality and a serene beachfront setting at LVIS Blancura Hotel.</p>
        </div>
    </div>
  )
}

export default Card