import React from 'react'
import Card from './Card'



function HomePage() {
  return (
    <div className='dark:bg-slate-700 w-screen py-4'>
        <h2 className='text-4xl font-medium text-center'>LVIS Hotels Maldives</h2>
        <h1 className='text-center mt-2'>Accommodation for visitors of Hanifaru bay</h1>
        <div className='w-[50vw] ms-6'>
        <Card />

        </div>
    </div>
  )
}

export default HomePage