import React, { useState, useEffect } from 'react';
import pfp from '../assets/pfp.png'; 

const HeroSection = () => {
  const nameToType = "Jyanti";
  const [displayedName, setDisplayedName] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < nameToType.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + nameToType[index]);
        setIndex((prev) => prev + 1);
      }, 100); 

      return () => clearTimeout(timeout);
    }
  }, [index, nameToType]); 
  
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white"> 
      <div 
        className="absolute inset-x-0 bottom-0 h-1/4 opacity-20"
        style={{ backgroundImage: 'linear-gradient(to top, rgba(16, 185, 129, 0.1), transparent), repeating-linear-gradient(to bottom, #1f2937, #1f2937 1px, transparent 1px, transparent 40px)', backgroundSize: '100% 40px' }}
      ></div>

      <div className="absolute inset-0 z-0 opacity-40">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full h-auto">
          <defs>
            <linearGradient id="gradient-mountains" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#4c1d95', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#06b6d4', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.8}} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient-mountains)" fillOpacity="0.1" d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center md:items-start pt-24 pb-24 min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
     
        <div className="mb-10 md:mb-0 mx-auto md:mr-12 flex-shrink-0">
          <img 
            src={pfp} 
            alt="Profile Picture of Jyanti"
            className="!w-56 !h-56 md:!w-72 md:!h-72 object-cover !rounded-full border-4 border-teal-400 shadow-xl shadow-teal-500/50 transition duration-500 hover:scale-105"
          />
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-auto md:flex-grow">
          
          <h2 className="text-2xl font-extrabold text-white sm:text-7xl md:text-8xl leading-tight text-center md:text-left">
            Hi! I'm <span className="text-teal-400">{displayedName}</span>
          </h2>

          <p className="mt-8 text-xl text-gray-300 mx-auto md:mx-0 font-light text-center md:text-left">
            I'm a <span className="text-teal-400">graduating IT student</span> juggling coffee, codes, and deadlines—
            <span className="text-teal-400">with a slight obsession of keeping things organized.
   </span>       </p>
            <p className="mt-8 text-xl text-gray-300 mx-auto md:mx-0 font-light text-center md:text-left">
             <span className="text-teal-400"> A dedicated and aspiring <span className="font-bold">part-time</span> Virtual Assistant and Administrative Support Specialist </span>
             committed to helping clients enhance productivity through efficient task management and organizational skills.
            I help busy people stay organized.
             
          </p>
            <p className="mt-8 text-xl text-gray-300 mx-auto md:mx-0 font-light text-center md:text-left">
             I focus on <span className="text-teal-400">detail, efficiency, and making things run smoothly. </span> 
            If it involves emails, spreadsheets, scheduling, or anything in between, I’ve got it covered.
            </p>

          
          
          <div className="mt-12 flex flex-row justify-center md:justify-start gap-5 space-x-6 w-full">
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-400 text-lg font-bold rounded-lg shadow-neon-teal text-white bg-teal-600/30 hover:bg-teal-600/50 transition duration-300 transform hover:scale-105" 
              style={{ boxShadow: '0 0 10px #2dd4bf, 0 0 20px #2dd4bf' }}>
              Services
            </a>

            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-lg text-white bg-transparent hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;