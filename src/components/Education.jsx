import React from 'react';
import { educationData } from '../data/portfolioData';
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-300 px-4 py-1.5 rounded-full border border-indigo-500/30 mb-3 shadow-sm">
            <FaGraduationCap className="text-indigo-400 text-xs" /> Academic Qualification
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white tracking-tight">
            Education
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base md:text-lg">
            Degrees and engineering education credentials.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="group relative bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-800 hover:border-indigo-500/50 hover:-translate-y-1.5 shimmer-effect"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-start space-x-5">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform duration-300">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-indigo-400 font-semibold flex items-center mt-1">
                      <FaUniversity className="mr-2 text-sm text-indigo-300" />
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 self-start md:self-auto">
                  {edu.badge && (
                    <span
                      className={`text-xs font-bold px-3.5 py-1.5 rounded-full border ${
                        edu.badge === 'Pursuing'
                          ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      }`}
                    >
                      <FaAward className="inline mr-1 text-xs" />
                      {edu.badge}
                    </span>
                  )}
                  <span className="text-xs font-mono text-gray-400 bg-gray-800/80 px-3.5 py-1.5 rounded-xl border border-gray-700/60 flex items-center">
                    <FaCalendarAlt className="mr-1.5 text-xs text-indigo-400" />
                    {edu.years}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;