import React from 'react';

const skillData = [
  {
    category: 'Front-End Development',
    skills: [
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    category: 'Back-End & Database',
    skills: [
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'MySQL' },
    ],
  },
  {
    category: 'Other Languages',
    skills: [
      { name: 'Java' },
      { name: 'C#' },
      { name: 'C++' }, 
      { name:'Python' },
      { name:'Kotlin'},
      {name:'VB.NET' }
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git/GitHub' },
      { name: 'VS Code' },
      { name: 'Notion' }, 
    ],
  },
];

const Skills = () => {
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
      <div className="flex flex-col pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl border-b-4 border-teal-500 inline-block pb-2">
            My Skills
          </h2>
        
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {skillData.map((categoryGroup) => (
            <div 
              key={categoryGroup.category}
              className="p-8 bg-gray-800 rounded-2xl shadow-2xl border-t-4 border-teal-500/50 transition-shadow duration-300 hover:shadow-teal-500/50"
            >
              <h3 className="text-2xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-3">
                {categoryGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {categoryGroup.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="px-4 py-2 bg-gray-700 rounded-full text-base font-medium text-white transition duration-200 hover:bg-teal-600 hover:text-white transform hover:scale-105 shadow-md"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;