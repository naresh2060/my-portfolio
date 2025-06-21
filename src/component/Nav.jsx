import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faBell, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './stylesComponent.css';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-zinc-900 py-2 md:fixed md:top-0 md:left-0 z-50">
      {/* Mobile Nav - Only toggle button with red background */}
      <div className="md:hidden mx-[5%]">
        <div className="bg-zinc-800 inline-block px-4 py-3 rounded-2xl">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* Desktop Nav - Full navbar */}
      <nav className="bg-zinc-800 hidden md:flex justify-between items-center mx-[10%] py-5 rounded-2xl relative">
        {/* Logo */}
        <div className="logo mx-8">
          <FontAwesomeIcon icon={faComment} className='text-white text-2xl' />
        </div>

        {/* Desktop Menu */}
        <div className="flex space-x-4 ibm-plex-mono-regular">
          <button onClick={() => scrollToSection('home')} className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 cursor-pointer">Home</button>
          <button onClick={() => scrollToSection('case-studies')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Case Studies</button>
          <button onClick={() => scrollToSection('testimonials')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Testimonials</button>
          <button onClick={() => scrollToSection('recent-work')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Recent Work</button>
          <button onClick={() => scrollToSection('contact')} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Get In Touch</button>
        </div>

        {/* Notification Icons */}
        <div className="logo mr-8 flex items-center gap-4">
          <FontAwesomeIcon icon={faBell} className='text-white text-xl' />
          <FontAwesomeIcon icon={faComment} className='text-white text-2xl cursor-pointer' onClick={() => scrollToSection('contact')} />
        </div>
      </nav>

      {/* Mobile Menu - Slides from left */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden z-50 shadow-lg`}
      >
        <div className="flex flex-col h-full">
          {/* Close button at the top */}
          <div className="p-4 flex justify-end">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-white text-2xl" />
            </button>
          </div>
          
          {/* Menu items */}
          <div className="flex flex-col space-y-4 p-4">
            <button 
              onClick={() => { scrollToSection('home'); setIsOpen(false); }} 
              className="text-left px-4 py-2 text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => { scrollToSection('case-studies'); setIsOpen(false); }} 
              className="text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
            >
              Case Studies
            </button>
            <button 
              onClick={() => { scrollToSection('testimonials'); setIsOpen(false); }} 
              className="text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
            >
              Testimonials
            </button>
            <button 
              onClick={() => { scrollToSection('recent-work'); setIsOpen(false); }} 
              className="text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
            >
              Recent Work
            </button>
            <button 
              onClick={() => { scrollToSection('contact'); setIsOpen(false); }} 
              className="text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
