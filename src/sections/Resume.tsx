import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';

export const Resume: React.FC = () => {
  return (
    <section 
      id="resume" 
      className="py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-900/10 backdrop-blur-md shadow-lg relative overflow-hidden"
        >
          {/* Ambient light effects inside card */}
          <div className="absolute -top-20 -left-20 w-44 h-44 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-44 h-44 rounded-full bg-rose-500/10 dark:bg-rose-500/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* File Icon */}
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-indigo-650 dark:text-indigo-400 mb-6">
              <FiFileText className="w-8 h-8" />
            </div>

            <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-slate-900 dark:text-white mb-4 leading-tight">
              Looking for my Resume?
            </h2>
            
            <p className="text-sm md:text-base text-slate-650 dark:text-slate-400 max-w-lg mb-8 leading-relaxed">
              Download my complete up-to-date professional resume details to review my work history, backend capabilities, and technical specialization.
            </p>

            {/* Prominent Download Button */}
            <motion.a
              href="/resume.pdf"
              download="Rahul_Anne_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 rounded-xl shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              <FiDownload className="w-4.5 h-4.5" />
              Download Resume (PDF)
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
