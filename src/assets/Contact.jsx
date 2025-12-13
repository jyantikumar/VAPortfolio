import React, { useState, useEffect } from 'react'; 
import { PopupWidget } from "react-calendly";

const Contact = () => {
    const [rootElement, setRootElement] = useState(null);

    useEffect(() => {
        setRootElement(document.getElementById('calendly-root'));
    }, []);

    return (
        <section id="calendly-root" className="relative overflow-hidden bg-gray-900 text-white min-h-screen">
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

                        {/* Email */}
                        <div className="flex items-start">
                            <svg className="flex-shrink-0 h-8 w-8 text-teal-500 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <dt className="text-xl font-semibold text-white">Email</dt>
                                <dd className="mt-1 text-lg text-gray-300 hover:text-teal-400 transition duration-150">
                                    <a href="mailto:jyantiaustriakumar@gmail.com" className="underline-offset-4 hover:underline">jyantiaustriakumar@gmail.com</a>
                                </dd>
                            </div>
                        </div>

                      
                        
                        {/* LinkedIn */}
                        <div className="flex items-start">
                            <svg 
                                className="flex-shrink-0 h-8 w-8 text-teal-500 mr-5" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                            >
                                <title>LinkedIn icon</title>
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.082 0-1.782-.74-1.782-1.63 0-.916.7-1.63 1.802-1.63s1.782.714 1.802 1.63c0 .89-1.06 1.63-1.821 1.63zm3.554 12.02V9H1.782v10.452h3.555z" />
                            </svg>
                            <div>
                                <dt className="text-xl font-semibold text-white">LinkedIn</dt>
                                <dd className="mt-1 text-lg text-gray-300 hover:text-teal-400 transition duration-150">
                                    <a href="https://www.linkedin.com/in/jyanti-kumar/" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">linkedin.com/in/jyanti-kumar/</a>
                                </dd>
                            </div>
                        </div>
                    </dl>
                    <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Schedule a Meeting
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            Let’s make your day-to-day smoother! Book a no-cost meeting and find out how I can support you as your VA.        
                        </p>
                        
                        <PopupWidget
                            url="https://calendly.com/jyantiaustriakumar"
                            text="Book a meeting"
                            rootElement={rootElement} 
                            className="inline-block bg-teal-500 text-white font-bold tracking-wider uppercase px-8 py-3 rounded-full shadow-lg hover:bg-teal-400 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
                        />
                    </div>
                </div>    
            </div>
        </section>
    );
};

export default Contact;