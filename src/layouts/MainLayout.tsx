import React, { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      <Navbar />
      {/* Add padding top to account for the fixed navbar height */}
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
