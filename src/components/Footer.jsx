import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Call-to-action Button */}
        <div className="flex justify-center mb-6">
          <a
            href="#contact"
            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Let's Connect
          </a>
        </div>
        
        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hemant Bhujang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;