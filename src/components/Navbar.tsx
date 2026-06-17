import React, { useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(NAV_ITEMS.map(item => item.id));

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-lightBg/70 dark:bg-darkBg/70 backdrop-blur-lg border-b border-slate-200/40 dark:border-indigo-500/5 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleScrollTo('hero')}
          className="font-heading font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-rose focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg px-2"
        >
          Rahul Anne
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative font-medium text-sm transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-0.5 ${
                    activeSection === item.id
                      ? 'text-indigo-600 dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-gradient-to-r from-accent-indigo to-accent-rose rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200/50 dark:border-slate-800/50">
            <ThemeToggle />
            <button
              onClick={() => handleScrollTo('resume')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-violet-600 hover:to-pink-600 rounded-lg shadow-sm hover:shadow-indigo-500/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Resume
            </button>
          </div>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl border border-slate-200/50 dark:border-indigo-500/10 text-slate-800 dark:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-slate-200/40 dark:border-indigo-500/5 bg-slate-100/95 dark:bg-slate-900/95 backdrop-blur-xl"
          >
            <ul className="px-4 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`w-full text-left py-2 px-3 rounded-lg font-medium text-base transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                      activeSection === item.id
                        ? 'text-indigo-600 dark:text-white font-bold'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <button
                  onClick={() => handleScrollTo('resume')}
                  className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-violet-600 hover:to-pink-650 hover:to-pink-600 rounded-xl shadow-md"
                >
                  Resume
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
