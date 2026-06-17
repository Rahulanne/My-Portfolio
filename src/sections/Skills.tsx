import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="skills" 
      className="py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300"
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
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto md:mx-0 rounded-full" />
          </div>

          {/* Categories Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={catIdx}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-900/10 backdrop-blur-md"
              >
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
                  {cat.category}
                </h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex items-center"
                    >
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
