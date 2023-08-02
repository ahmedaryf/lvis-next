"use client"
import { useRef, useEffect, useState } from "react"
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import Link from "next/link";

function LvisDropdown() {
    const dropRef = useRef(null);
    const btnRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen)
        
    }
    useEffect(() => {
        const handleClickOutsideDropdown = (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
                setIsOpen(false)
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
     <div className="relative px-4 font-medium">
        <button ref={btnRef} onClick={handleClick} className="flex dd-btn items-center bg-red-900 text-white pt-2 pb-2 pe-3 ps-3 rounded-lg shadow-lg ">Book Now {!isOpen ? <FaAngleDown className="ms-2"/> : <FaAngleUp className="ms-2"/>}</button>
        <div className="overflow-hidden absolute">
            <ul ref={dropRef} className={` ${isOpen ? "translate-y-2 opacity-100 scale-100 bg-red-50 duration-300 border border-red-200 p-2 rounded" : "-translate-y-36 duration-300 scale-50"}`}>
            <li onClick={() =>{handleClick()}} className="rounded shadow-md mb-2 cursor-pointer bg-red-100 hover:bg-red-200 p-2 text-red-900"><Link href='https://live.ipms247.com/booking/book-rooms-lvisblancura'>LVIS Blancura</Link></li>
            <li onClick={() =>{handleClick()}} className="rounded shadow-md mt-2 cursor-pointer bg-red-100 hover:bg-red-200 p-2 mb-6 text-red-900">LVIS Village</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default LvisDropdown