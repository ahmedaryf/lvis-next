import React from 'react'
import Card from './Card'
import VillageCard from './VillageCard'
import Framer from './Framer'



function HomePage() {
  return (
    <div className='dark:bg-slate-800 w-screen py-4 mb-6'>
      <Framer>
          <h2 className='lvis-text text-3xl md:text-6xl text-center pt-5 text-red-950 font-extrabold [text-shadow:_4px_1px_2px_rgb(0_0_0_/_40%)] dark:text-white'>LVIS Hotels Maldives</h2>
      </Framer>
      <Framer delay={.5}>
          <h1 className='text-center mt-2 text-red-950 dark:text-white md:text-xl font-bold'>Accommodation for visitors of Hanifaru bay</h1>
      </Framer>
          <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-5'>
          <Framer delay={.5}>
            <div className=''>
              <Card />
            </div>
          </Framer>
          <Framer delay={1}>
            <div className=''>
              <VillageCard />
            </div>
          </Framer>
          </div>
  
    </div>
  )
}

export default HomePage