// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header'; // Assuming this is your Navbar component
import Hero from './components/Hero'; // We'll add this
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact'; // Let's add a contact section too
import Footer from './components/Footer'; // Let's make a separate Footer component

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans antialiased">
            {/* Main Header/Navbar */}
            <Header toggleMenu={toggleMenu} isOpen={isOpen} />

            {/* Mobile Menu - Only visible on small screens when isOpen is true */}
            {isOpen && (
                <div className="md:hidden fixed top-16 left-0 w-full bg-gray-800 dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out">
                    <nav className="flex flex-col p-4 space-y-2 text-center">
                        <a href="#experience" onClick={toggleMenu} className="text-white hover:text-teal-300 text-lg font-medium p-2 rounded-md transition-colors duration-200">Experience</a>
                        <a href="#education" onClick={toggleMenu} className="text-white hover:text-teal-300 text-lg font-medium p-2 rounded-md transition-colors duration-200">Education</a>
                        <a href="#projects" onClick={toggleMenu} className="text-white hover:text-teal-300 text-lg font-medium p-2 rounded-md transition-colors duration-200">Projects</a>
                        <a href="#skills" onClick={toggleMenu} className="text-white hover:text-teal-300 text-lg font-medium p-2 rounded-md transition-colors duration-200">Skills</a>
                        <a href="https://github.com/hemantbhujang" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-white hover:text-teal-300 text-lg font-medium p-2 rounded-md transition-colors duration-200">GitHub</a>
                        <a href="https://linkedin.com/in/hemantbhujang" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-white hover:text-teal-300 text-lg font-medium p-2 rounded-md transition-colors duration-200">LinkedIn</a>
                    </nav>
                </div>
            )}
            
            {/* Main Content Sections */}
            <main>
                <Hero />
                <Experience />
                <Education />
                <Projects />
                <Skills />
                <Contact /> {/* New component for a contact section */}
            </main>
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;