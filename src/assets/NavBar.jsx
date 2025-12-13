import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },

  ];

  return (
    <>
        <div className="fixed inset-x-0 top-0 z-50 w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-12 sm:h-20">
            <a 
              href="/" 
              className="text-2xl font-extrabold transition-colors text-indigo-400 hover:text-white tracking-wider"
            >
        </a>

            <nav className="hidden sm:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-400 hover:text-white transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 text-gray-400 hover:text-white transition duration-200 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


      <div 
        className={`sm:hidden fixed inset-x-0 top-16 sm:top-20 z-40 bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} 
              className="block text-xl font-semibold text-gray-300 hover:text-indigo-400 py-2 border-b border-gray-700 last:border-b-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;