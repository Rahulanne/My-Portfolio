import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { ParticleBackground } from '../components/ParticleBackground';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { 
      icon: (
        <span className="flex items-center justify-center">
          <img src="/GitHub_Black.png" alt="GitHub" className="w-5 h-5 object-contain inline dark:hidden" />
          <img src="/GitHub_White.png" alt="GitHub" className="w-5 h-5 object-contain hidden dark:inline" />
        </span>
      ), 
      href: 'https://github.com/Rahulanne', 
      label: 'GitHub' 
    },
    { icon: <img src="/linkedin_logo.png" alt="LinkedIn" className="w-5 h-5 object-contain" />, href: 'https://www.linkedin.com/in/rahul-anne/', label: 'LinkedIn' },
    { icon: <FiMail size={20} />, href: 'mailto:rahulanne04@gmail.com', label: 'Email' }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300"
    >
      {/* Dynamic constellation particles */}
      <ParticleBackground />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-rose-500/10 dark:bg-rose-500/5 blur-3xl pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content info */}
        <div className="md:col-span-7 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/30 rounded-full mb-6">
              Available for Opportunities
            </span>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Rahul Anne
              </span>
            </h1>
            
            <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-slate-800 dark:text-slate-200 mb-6">
              Senior Frontend Engineer
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-650 dark:text-slate-400 max-w-xl mb-10 leading-relaxed font-normal">
              Building scalable, high-performance enterprise applications with <span className="text-slate-900 dark:text-white font-semibold">React 18, Angular, TypeScript</span>, and modern frontend architectures.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 hover:from-violet-600 hover:to-pink-600 rounded-xl shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              View Projects
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScrollTo('resume')}
              className="flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              Download Resume
              <FiDownload className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-transparent hover:bg-slate-100/50 dark:hover:bg-slate-900/40 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400 mr-2">
              Connect:
            </span>
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-650 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Profile Image Graphic */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Ambient Back Glow Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 blur-md opacity-30 animate-pulse-slow" />
            
            {/* Outer Glassmorphic Frame */}
            <div className="absolute inset-2 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/5 dark:bg-slate-950/20 backdrop-blur-md overflow-hidden p-3 shadow-2xl flex items-center justify-center">
              <img
                src="/avatar.png"
                alt="Rahul Anne Avatar"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                loading="eager"
              />
            </div>
            
            {/* Mini Floating Tech badging */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              React & Angular
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-bold text-slate-800 dark:text-white"
            >
              🚀 6+ Years Exp
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
