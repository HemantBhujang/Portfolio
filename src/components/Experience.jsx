import React from 'react';
import { experienceData } from '../data/portfolioData';
import { FaBriefcase, FaCalendarAlt, FaCheck } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Accent */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-300 px-4 py-1.5 rounded-full border border-indigo-500/30 mb-3 shadow-sm">
            <FaBriefcase className="text-indigo-400 text-xs" /> Professional Background
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base md:text-lg">
            Professional trajectory across robotics, software engineering, and UI design.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700/70 hover:border-indigo-500/50 hover:-translate-y-1.5 shimmer-effect"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-5 border-b border-gray-700/60">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-teal-500 text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform duration-300">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
                      {exp.title}
                    </h3>
                    <p className="text-base text-indigo-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-gray-300 bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-700/60 flex items-center mt-4 md:mt-0">
                  <FaCalendarAlt className="mr-2 text-xs text-indigo-400" />
                  {exp.dates}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3.5">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm md:text-base leading-relaxed">
                    <span className="w-5 h-5 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs mt-0.5 mr-3 flex-shrink-0 border border-indigo-500/30">
                      <FaCheck className="text-[10px]" />
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;