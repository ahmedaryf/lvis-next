import React from 'react'
import Card from './Card'
import VillageCard from './VillageCard'



function HomePage() {
  return (
    <div className='dark:bg-slate-700 w-screen py-4 mb-6'>
        <h2 className='lvis-text text-4xl md:text-6xl text-center pt-5 text-red-950 font-extrabold'>LVIS Hotels Maldives</h2>
        <h1 className='text-center mt-2 text-red-950 dark:text-white'>Accommodation for visitors of Hanifaru bay</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-5'>
          <div className=''>
            <Card />
          </div>
          <div className=''>
            <VillageCard />
          </div>
        </div>

    </div>
  )
}

export default HomePage