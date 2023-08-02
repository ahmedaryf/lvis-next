"use client"
import { useRef, useEffect, useState } from "react"
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'

function Dropdown() {
    const dropRef = useRef(null);
    const btnRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
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
     <div className="mt-6 relative">
        <button ref={btnRef} onClick={handleClick} className="flex items-center bg-green-300 pt-2 pb-2 pe-3 ps-3 rounded ">Book Now {!isOpen ? <FaAngleDown className="ms-2"/> : <FaAngleUp className="ms-2"/>}</button>
        <div className="overflow-hidden">
            <ul ref={dropRef} className={` ${isOpen ? "translate-y-0 opacity-100 bg-green-100 p-3 duration-300 " : "-translate-y-36 p-3 duration-300"}`}>
            <li onClick={() =>{handleClick()}} className="mb-2 cursor-pointer hover:bg-green-200 p-2">Blancura</li>
            <li onClick={() =>{handleClick()}} className="mt-2 cursor-pointer hover:bg-green-200 p-2">Village</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Dropdown