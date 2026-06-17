import React from 'react';
import { FiMail } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: (
        <span className="flex items-center justify-center">
          <img src="/GitHub_Black.png" alt="GitHub" className="w-[18px] h-[18px] object-contain inline dark:hidden" />
          <img src="/GitHub_White.png" alt="GitHub" className="w-[18px] h-[18px] object-contain hidden dark:inline" />
        </span>
      ), 
      href: 'https://github.com/Rahulanne', 
      label: 'GitHub' 
    },
    { icon: <img src="/linkedin_logo.png" alt="LinkedIn" className="w-[18px] h-[18px] object-contain" />, href: 'https://www.linkedin.com/in/rahul-anne/', label: 'LinkedIn' },
    { icon: <FiMail size={18} />, href: 'mailto:rahulanne04@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-900/40 py-12 border-t border-slate-200 dark:border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <span className="font-heading font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            RAHUL ANNE
          </span>
          <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400">
            Senior Frontend Engineer • Building Enterprise-Scale Apps
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/20 text-slate-650 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-600 dark:text-slate-400 text-center md:text-right">
          <p>© 2026 Rahul Anne. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
