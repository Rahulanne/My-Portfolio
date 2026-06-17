import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { FiAward, FiStar, FiZap } from 'react-icons/fi';

export const Achievements: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'star-quarter':
        return <FiStar className="w-5 h-5 text-amber-500" />;
      case 'angular-upgrades':
        return <FiZap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'fortune-500':
        return <FiAward className="w-5 h-5 text-rose-600 dark:text-rose-455 dark:text-rose-400" />;
      default:
        return <FiAward className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section 
      id="achievements" 
      className="py-16 md:py-28 bg-slate-100/40 dark:bg-slate-900/10 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="text-center md:text-left mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-slate-900 dark:text-white mb-4">
              Awards & Recognition
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto md:mx-0 rounded-full" />
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                      {getIcon(ach.id)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                      {ach.highlight}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                    {ach.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
