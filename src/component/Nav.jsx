import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faBell } from '@fortawesome/free-solid-svg-icons'
import './stylesComponent.css'

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Nav() {
  return (
    <nav className="bg-[#1B1B1B] flex justify-between items-center mx-[10%] py-5 rounded-2xl">
      <div className="logo mx-8">
        <FontAwesomeIcon icon={faComment} className='text-white text-2xl' />
      </div>

      <div className="flex space-x-4 ibm-plex-mono-regular">
        <button onClick={() => scrollToSection('home')} className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 cursor-pointer">Home</button>
        <button onClick={() => scrollToSection('case-studies')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Case Studies</button>
        <button onClick={() => scrollToSection('testimonials')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Testimonials</button>
        <button onClick={() => scrollToSection('recent-work')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Recent Work</button>
        <button onClick={() => scrollToSection('contact')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Get In Touch</button>
      </div>

      <div className="logo mr-8 flex items-center gap-4">
        <FontAwesomeIcon icon={faBell} className='text-white text-xl' />
        <FontAwesomeIcon icon={faComment} className='text-white text-2xl cursor-pointer' onClick={() => scrollToSection('contact')}/>
      </div>
    </nav>
  )
}
