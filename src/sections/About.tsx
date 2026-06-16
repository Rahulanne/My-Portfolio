import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 relative inline-block">
            About Me
            <span className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-blue-600 rounded-full"></span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I'm Rahul, a passionate Frontend Developer with over <span className="font-semibold text-slate-900 dark:text-slate-100">[X] years of experience</span> creating digital products that are both beautiful and highly functional.
              </p>
              <p>
                My expertise lies in building scalable, responsive, and performant web applications using modern web technologies. I have a deep understanding of <span className="font-semibold text-slate-900 dark:text-slate-100">React, Angular, and TypeScript</span>, which I leverage to solve complex UI challenges and deliver seamless user experiences.
              </p>
              <p>
                Beyond just writing code, I am highly invested in modern web technologies, web accessibility (WCAG), and optimizing applications for the best possible Lighthouse scores. I believe in writing clean, maintainable code and strictly adhering to component-driven architecture.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 font-bold">▹</span>
                  <span className="text-slate-600 dark:text-slate-300">Focus on Component-Driven Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 font-bold">▹</span>
                  <span className="text-slate-600 dark:text-slate-300">Passionate about UI/UX and Accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 font-bold">▹</span>
                  <span className="text-slate-600 dark:text-slate-300">Extensive experience in React & Angular ecosystems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 font-bold">▹</span>
                  <span className="text-slate-600 dark:text-slate-300">Dedicated to Web Performance Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
