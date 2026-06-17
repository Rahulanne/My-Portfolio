import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Rahul Anne</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-4">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Specializing in building exceptional digital experiences using modern web technologies including <span className="font-semibold text-slate-700 dark:text-slate-200">React, Angular, TypeScript, HTML, and CSS</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
        >
          <a href="#projects" className="flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm w-full sm:w-auto">
            View Projects
            <FiArrowRight />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors shadow-sm w-full sm:w-auto">
            Download Resume
            <FiDownload />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-6"
        >
          <a href="https://github.com/rahulanne" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-2" aria-label="GitHub">
            <FiGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/rahulanne" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-2" aria-label="LinkedIn">
            <FiLinkedin size={24} />
          </a>
          <a href="#contact" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-2" aria-label="Contact">
            <FiMail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
