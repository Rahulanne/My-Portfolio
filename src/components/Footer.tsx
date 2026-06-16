import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Rahul<span className="text-blue-600 dark:text-blue-500">.</span>
            </a>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Frontend Developer building modern web experiences.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/rahulanne" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/rahulanne" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:contact@rahulanne.com" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="Email">
              <FiMail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {currentYear} Rahul Anne. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
