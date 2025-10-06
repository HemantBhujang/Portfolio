
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Make sure you install react-icons

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-indigo-600 dark:text-indigo-400">
          Get in Touch
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* LinkedIn Button */}
          <a
            href="https://in.linkedin.com/in/hemantbhujang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <FaLinkedin className="text-blue-600 dark:text-blue-400 text-3xl" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</span>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/hemantbhujang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <FaGithub className="text-gray-900 dark:text-gray-100 text-3xl" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:cser.hemant@gmail.com"
            className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <FaEnvelope className="text-red-500 dark:text-red-400 text-3xl" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Email</span>
          </a>
        </div>
        
        {/* This part will be added in future. */}
        
        {/* <div className="mt-16 max-w-lg mx-auto">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"></textarea>
            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
          </form>
        </div> */}
       

      </div>
    </section>
  );
};

export default Contact;