import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  // State to manage mobile menu visibility
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Effect to handle body overflow when mobile menu is open
  useEffect(() => {
    if(showMobileMenu) {
      // Prevent scrolling when mobile menu is open
      document.body.style.overflow = 'hidden'
    }
    else {
      // Restore scrolling when mobile menu is closed
      document.body.style.overflow = 'auto'
    }
    
    // Cleanup effect to ensure scrolling is restored
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        {/* Main navigation container with logo and desktop menu */}
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
          {/* Logo image */}
          <img src={assets.logo} alt="" style={{width: "70px"}}/>
          
          {/* Desktop navigation links */}
          <ul className='hidden md:flex gap-7 links'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
          </ul>
          
          {/* Sign up button for desktop */}
          <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
          
          {/* Mobile menu toggle button */}
          <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        
        {/* Mobile menu overlay */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-o w-0' }  right-0 top-0 bottom-0
         overflow-hidden bg-white transition-all mobileMenuText`}>
          {/* Close button for mobile menu */}
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-6' />
          </div>
          
          {/* Mobile navigation links */}
          <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium '>
            <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
            <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
            <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
