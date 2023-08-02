import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {SiYoutubemusic} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/Ri'

function Footer() {
  return (
    <footer className=' bg-red-100 dark:bg-slate-700 p-6 text-red-950 dark:text-white '>
        <div className='md:flex justify-between'>
            <div>
                <h5 className='text-2xl mb-3 font-medium'>Follow Us</h5>
                <div className='flex'>
                <FaFacebook className='me-2 text-3xl text-blue-800 dark:text-white' />
                <RiInstagramFill className='me-2 text-3xl text-pink-800 dark:text-white'/>
                <SiYoutubemusic  className='text-3xl text-red-700 dark:text-white'/>
                </div>
            </div>
        
        <div className='me-6 mt-10 md:mt-0'>
            <h5 className='text-2xl mb-3 font-medium'>Contact Us</h5>
            <p>Email: info@lvishotels.com</p>
            <p>Tel: +960 9868068 | +960 7793646</p>
            <p>WhatsApppppp: +960 9114552 | +960 7793646</p>
        </div>
        </div>
        <h5 className='text-center mt-6 pb-6 font-medium'>© 2023 LVIS. All rights reserved.</h5>

    </footer>
  )
}

export default Footer