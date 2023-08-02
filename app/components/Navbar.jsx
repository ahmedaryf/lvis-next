import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import LvisDropdown from './LvisDropdown'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <div className='bg-red-50/50 dark:bg-slate-400/70 py-4 w-screen flex justify-between items-center fixed'>
        <Link href={'/'}><Image src={logo} alt='Logo' className=' w-10 md:w-12 ms-6 ' /></Link> 

        <div className='flex items-center'>
            <LvisDropdown />
            <ThemeToggle />
        </div>
    </div>
  )
}

export default Navbar