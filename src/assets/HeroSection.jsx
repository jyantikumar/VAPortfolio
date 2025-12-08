import React, { useState, useEffect } from 'react';

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
  }, [index, nameToType]); // Rerun effect when index changes

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
      
      <div className="relative z-10 flex flex-col justify-center items-center pt-24 pb-24 min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-6xl font-extrabold text-white sm:text-7xl md:text-8xl leading-tight">
          Hi! I'm <span className="text-teal-400">{displayedName}</span>
        </h1>
        
        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto font-light">
          I am a <span className="font-bold">4th year student</span> currently pursuing <span className="font-bold"> Bachelor of Science in Information Technology </span>
          and an aspiring <span className="font-bold">Front-End developer</span>.
        </p>
        
    <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-6">
      
      <a 
        href="#portfolio"
        className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-400 text-lg font-bold rounded-lg shadow-neon-teal text-white bg-teal-600/30 hover:bg-teal-600/50 transition duration-300 transform hover:scale-105"
        style={{ boxShadow: '0 0 10px #2dd4bf, 0 0 20px #2dd4bf' }}
      >
        Explore Portfolio
      </a>
    </div>
          
            
      </div>
    </section>
  );
};

export default HeroSection;