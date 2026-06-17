import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export const Experience: React.FC = () => {
  const parseDate = (dateStr: string) => {
    if (dateStr.toLowerCase() === 'present') return 'Present';
    const [year, month] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleString('default', { month: 'short', year: 'numeric' });
  };

  return (
    <section 
      id="experience" 
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
          <div className="text-center md:text-left mb-20">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-slate-900 dark:text-white mb-4">
              Work History
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto md:mx-0 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-16">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-6 md:pl-8">
                {/* Timeline dot */}
                <span className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full border-[3px] border-indigo-600 bg-slate-50 dark:bg-slate-950 shadow-md z-10" />

                {/* Left Side: Date Label (Visible on desktop) */}
                <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {parseDate(exp.startDate)}
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                    to {parseDate(exp.endDate)}
                  </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Job Headers & Responsibilities */}
                  <div className="lg:col-span-8">
                    {/* Date label for mobile */}
                    <div className="md:hidden flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      <FiCalendar />
                      {parseDate(exp.startDate)} — {parseDate(exp.endDate)}
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-755 text-slate-600 dark:text-slate-300 mt-1 mb-4">
                      <span className="text-fuchsia-600 dark:text-fuchsia-400">{exp.company}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="flex items-center gap-1 font-normal text-xs text-slate-500 dark:text-slate-400">
                        <FiMapPin />
                        {exp.location}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-650 dark:text-slate-300">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start">
                          <span className="text-indigo-500 dark:text-indigo-400 mr-2.5 mt-1 text-xs">■</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements and Tech Stack */}
                  <div className="lg:col-span-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-900/10 backdrop-blur-md">
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                          Key Milestones
                        </h4>
                        <ul className="space-y-2 text-xs font-medium text-slate-650 dark:text-slate-300">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start">
                              <span className="text-rose-600 dark:text-rose-455 dark:text-rose-400 mr-2">✓</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                        Tech Stack Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-2 py-1 text-[10px] font-bold text-slate-700 dark:text-slate-350 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
