import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Header = ({ toggleMenu, isOpen }) => {
  return (
    <header className="bg-gray-900/90 backdrop-blur-md text-white shadow-xl sticky top-0 z-50 transition-all duration-300 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <a href="#" className="flex items-center space-x-2 group">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center text-white text-sm font-black shadow-md">
              HB
            </span>
            <span className="bg-gradient-to-r from-white via-gray-200 to-indigo-200 bg-clip-text text-transparent group-hover:text-teal-300 transition-colors duration-200">
              {personalInfo.name}
            </span>
          </a>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#experience" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200">Experience</a>
          <a href="#education" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200">Education</a>
          <a href="#research" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200">Research</a>
          <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200">Projects</a>
          <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200">Skills</a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200">Contact</a>
          
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded-xl shadow-md transition-all duration-200 hover:scale-105"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-teal-400 p-2 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7 transition-transform duration-300 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;