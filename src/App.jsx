// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-gray-900/95 backdrop-blur-lg z-40 border-b border-gray-800 transition-transform duration-300">
          <nav className="flex flex-col p-6 space-y-3 text-center">
            <a href="#experience" onClick={toggleMenu} className="text-gray-200 hover:text-teal-300 text-base font-medium p-2 rounded-lg">Experience</a>
            <a href="#education" onClick={toggleMenu} className="text-gray-200 hover:text-teal-300 text-base font-medium p-2 rounded-lg">Education</a>
            <a href="#research" onClick={toggleMenu} className="text-gray-200 hover:text-teal-300 text-base font-medium p-2 rounded-lg">Research</a>
            <a href="#projects" onClick={toggleMenu} className="text-gray-200 hover:text-teal-300 text-base font-medium p-2 rounded-lg">Projects</a>
            <a href="#skills" onClick={toggleMenu} className="text-gray-200 hover:text-teal-300 text-base font-medium p-2 rounded-lg">Skills</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-200 hover:text-teal-300 text-base font-medium p-2 rounded-lg">Contact</a>
            
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-white bg-indigo-600 font-medium p-2.5 rounded-xl">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-white bg-blue-600 font-medium p-2.5 rounded-xl">LinkedIn</a>
          </nav>
        </div>
      )}

      {/* Main Sections */}
      <main>
        <Hero />
        <Experience />
        <Education />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
