import React from 'react';
const Contact = () => {
  return (
<section className="relative overflow-hidden bg-gray-900 text-white min-h-screen">
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
  
  {/* --- Content Area --- */}
  <div className="flex flex-col pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
    
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl border-b-4 border-teal-500 inline-block pb-2">
        Contact
      </h2>
    
    </div>

    <div className="max-w-3xl mx-auto w-full bg-gray-800 p-8 sm:p-12 rounded-xl shadow-2xl">      
      <dl className="space-y-10">
        
        {/* Phone */}
        <div className="flex items-start">
          <svg className="flex-shrink-0 h-8 w-8 text-teal-500 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
            <dt className="text-xl font-semibold text-white">Call Us</dt>
            <dd className="mt-1 text-lg text-gray-300 hover:text-teal-400 transition duration-150">
              <a href="tel:+63 923 400 9645" className="underline-offset-4 hover:underline">+63 923 400 9645</a>
            </dd>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <svg className="flex-shrink-0 h-8 w-8 text-teal-500 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <dt className="text-xl font-semibold text-white">Email</dt>
            <dd className="mt-1 text-lg text-gray-300 hover:text-teal-400 transition duration-150">
              <a href="mailto:jyantiaustriakumar@gmail.com" className="**text-sm md:text-lg** underline-offset-4 hover:underline">jyantiaustriakumar@gmail.com</a>
            </dd>
            <dd className="mt-1 text-lg text-gray-300 hover:text-teal-400 transition duration-150">
              <a href="mailto:jakumar293@student.mcu.edu.ph" className="**text-sm md:text-lg** underline-offset-4 hover:underline">jakumar293@student.mcu.edu.ph</a>
            </dd>
          </div>
        </div>

        <div className="flex items-start">
          <svg 
            className="flex-shrink-0 h-8 w-8 text-teal-500 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.864 8.164 6.824 9.482.5.092.682-.217.682-.482 0-.236-.008-.864-.012-1.692-2.782.601-3.37-1.341-3.37-1.341-.454-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.608.069-.608 1.004.072 1.531 1.03 1.531 1.03.89 1.529 2.342 1.087 2.91.829.091-.645.35-1.087.633-1.336-2.22-.253-4.555-1.113-4.555-4.954 0-1.091.39-1.984 1.03-2.682-.104-.253-.446-1.272.098-2.648 0 0 .84-.27 2.75 1.025A9.55 9.55 0 0112 6.844c.85.004 1.701.112 2.502.327 1.909-1.295 2.748-1.025 2.748-1.025.546 1.376.204 2.395.1 2.648.64.698 1.029 1.591 1.029 2.682 0 3.848-2.336 4.697-4.562 4.947.359.309.678.918.678 1.854 0 1.336-.012 2.415-.012 2.742 0 .265.18.577.688.481C21.137 20.18 24 16.43 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
          </svg>
          <div>
            <dt className="text-xl font-semibold text-white">GitHub</dt>
            <dd className="mt-1 text-lg text-gray-300 hover:text-teal-400 transition duration-150">
              <a href="https://github.com/jyantikumar" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">github.com/jyantikumar</a>
            </dd>
          </div>
        </div>
      </dl>
    </div>
    

  </div>
</section>
  );
};

export default Contact;