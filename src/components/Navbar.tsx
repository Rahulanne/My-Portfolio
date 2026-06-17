import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="font-bold text-xl text-slate-900 dark:text-white">Rahul Anne</div>
      </nav>
    </header>
  );
};
