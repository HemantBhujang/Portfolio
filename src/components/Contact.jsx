import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-300 px-4 py-1.5 rounded-full border border-indigo-500/30 mb-3 shadow-sm">
            <FaPaperPlane className="text-indigo-400 text-xs" /> Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base md:text-lg">
            I am currently open to full-time software engineering roles, AI agent development, and research collaborations.
          </p>
        </div>

        {/* Contact Button Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
          
          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-5 px-7 py-5 rounded-3xl bg-gray-900/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-blue-500/50 min-w-[240px] shimmer-effect"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <FaLinkedin />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Professional Network</p>
              <span className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-200">LinkedIn</span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-5 px-7 py-5 rounded-3xl bg-gray-900/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-purple-500/50 min-w-[240px] shimmer-effect"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gray-700 to-gray-900 text-white flex items-center justify-center text-2xl shadow-lg shadow-gray-700/30 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
              <FaGithub />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Open Source Code</p>
              <span className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-200">GitHub</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center space-x-5 px-7 py-5 rounded-3xl bg-gray-900/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-red-500/50 min-w-[240px] shimmer-effect"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-500 to-rose-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Direct Email</p>
              <span className="text-base font-bold text-white group-hover:text-red-300 transition-colors duration-200">{personalInfo.email}</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;