import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-4 transition-colors duration-300">Portfolio</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4 transition-colors duration-300">
              A showcase of my work and skills as a professional developer. Feel free to reach out for collaborations or opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-4 transition-colors duration-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-4 transition-colors duration-300">Contact</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500 transition-colors duration-300">
              <li>Email: contact@example.com</li>
              <li>Location: San Francisco, CA</li>
              <li>Available for remote work</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-600 transition-colors duration-300">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};