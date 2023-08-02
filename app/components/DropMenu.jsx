"use client"
import React, { useEffect, useRef, useState } from 'react'
import {FaAngleDown} from 'react-icons/fa'

function DropMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutsideDropdown = (e) => {
            if (menuRef.current && !btnRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
    
        if (typeof window !== 'undefined') {
            window.addEventListener('click', handleClickOutsideDropdown);
        }
    
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('click', handleClickOutsideDropdown);
            }
        };
    }, []);
    
    
  return (
    <div>
        <div className='w-[340px] h-auto flex flex-col relative'>
            <button ref={btnRef} onClick={() => setIsOpen((prev) => !prev) } className='bg-red-300 px-3 py-3 flex items-center border-4 border-transparent active:border-red-500 duration-500 z-10'>Dropdown <FaAngleDown /></button> 
            {isOpen && 
                <div className='absolute w-full top-16 duration-500'>
                    <ul ref={menuRef} className='p-3 bg-red-100'>
                        <li onClick={() => setIsOpen(false)} className='mb-2 p-2 hover:bg-red-200 cursor-pointer'>Home</li>
                        <li onClick={() => setIsOpen(false)} className='hover:bg-red-200 p-2 cursor-pointer'>About</li>
                    </ul> 
                </div>
            }
            </div>
        </div>
  )
}

export default DropMenu