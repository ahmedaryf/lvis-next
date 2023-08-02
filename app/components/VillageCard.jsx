import React from 'react'
import Image from 'next/image'
import village from '../../public/images/photos/IMG_0806.jpg'
import {AiFillDollarCircle} from 'react-icons/ai'
import {GiCommercialAirplane} from 'react-icons/gi'
import {MdFamilyRestroom} from 'react-icons/md'

function VillageCard() {
  return (
    <div className='p-2 bg-slate-50 dark:bg-slate-600 shadow-xl md:min-h-[900px] text-red-950 dark:text-white'>
        <Image src={village} alt='LVIS Village' className='w-full'/>
        <div className='px-3 mb-6'>
            <h5 className='text-4xl font-medium mt-8 mb-9 text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_40%)]'>LVIS Village</h5>
            <div className='flex justify-between mx-2 text-sm md:text-base'>
                <div className='flex flex-col items-center mb-5'>
                    <MdFamilyRestroom className='text-3xl md:text-4xl'/>
                    <h5 className=''>Family friendly</h5>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <GiCommercialAirplane className='text-3xl md:text-4xl'/>
                    <h5 className=''>Airport Transfer</h5>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <AiFillDollarCircle className='text-3xl md:text-4xl'/>
                    <h5 className=''>Budget friendly</h5>
                </div>
            </div>
            <p>LVIS Village is our second property in Dharavandhoo island situated one block behind. Our guest staying at LVIS VIllage property has access to the bikini beach infront of LVIS Blancura hotel and all the facilities. This provides guests with additional options and amenities to explore during their stay. Whether it&apos;s dining at the beachfront restaurant, enjoying water sports, or simply relaxing by the hotel&apos;s private beach area, guests have a variety of choices to enhance their beach experience. The hotel features comfortable accommodations, providing a cozy and inviting atmosphere for guests to unwind and relax. Each room is thoughtfully designed with modern amenities, ensuring a comfortable stay.</p>
        </div>
    </div>
  )
}

export default VillageCard