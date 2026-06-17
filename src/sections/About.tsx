import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiBookOpen, FiAward } from 'react-icons/fi';

export const About: React.FC = () => {
  const facts = [
    {
      icon: <FiBriefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      label: 'Experience',
      value: '6+ Years',
      desc: 'Enterprise Applications'
    },
    {
      icon: <FiMapPin className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      label: 'Location',
      value: 'Hyderabad, India',
      desc: 'Active Tech Hub'
    },
    {
      icon: <FiBookOpen className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />,
      label: 'Education',
      value: 'B.Tech [ECE Hons.]',
      desc: 'LPU University (2018)'
    },
    {
      icon: <FiAward className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      label: 'Current Role',
      value: 'Senior Software Engineer',
      desc: 'Qualibar Pvt Ltd'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-28 bg-slate-100/40 dark:bg-slate-900/10 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center md:text-left mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto md:mx-0 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Bio */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
              <p>
                Hello! I am a frontend-focused software developer with over <span className="font-semibold text-slate-900 dark:text-white">6+ years of experience</span> architecting and building enterprise-grade healthcare, insurance, and e-commerce platforms.
              </p>
              <p>
                My expertise centers on creating responsive, performant, and highly maintainable single-page applications. I specialize in <span className="font-semibold text-slate-900 dark:text-white">React, Angular, TypeScript, and JavaScript</span>, working extensively with state management libraries (Redux Toolkit, RxJS), modular design structures, and micro frontend packages.
              </p>
              <p>
                I am highly invested in modern web performance optimization strategies (lazy loading, bundle size tuning), accessibility compliance (WCAG), secure token-based architectures (JWT, RBAC), and delivering PWA support for mobile-centric web environments.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4">
                <ul className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 text-lg">▹</span>
                    Component-Driven Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 text-lg">▹</span>
                    Micro Frontend Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 text-lg">▹</span>
                    State Management (Redux/RxJS)
                  </li>
                </ul>
                <ul className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 text-lg">▹</span>
                    JWT & RBAC Security Flows
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 text-lg">▹</span>
                    Progressive Web Apps (PWA)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500 text-lg">▹</span>
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Quick Fact Cards */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
              {facts.map((fact, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-4">
                    {fact.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {fact.label}
                  </span>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white leading-tight mb-0.5">
                    {fact.value}
                  </h3>
                  <p className="text-xs text-slate-650 dark:text-slate-405 dark:text-slate-400">
                    {fact.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
