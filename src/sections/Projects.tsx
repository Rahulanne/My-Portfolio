import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  const getProjectVisual = (id: string) => {
    switch (id) {
      case 'healthcare-platform':
        return 'bg-gradient-to-tr from-emerald-500 via-teal-600 to-cyan-500';
      case 'vui-component-library':
        return 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500';
      case 'venrollment-library':
        return 'bg-gradient-to-tr from-fuchsia-500 via-purple-600 to-pink-500';
      case 'pizzahut-ecommerce':
        return 'bg-gradient-to-tr from-red-600 via-orange-600 to-amber-500';
      default:
        return 'bg-gradient-to-tr from-indigo-500 to-cyan-500';
    }
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'healthcare-platform':
        return '🏥';
      case 'vui-component-library':
        return '📦';
      case 'venrollment-library':
        return '📑';
      case 'pizzahut-ecommerce':
        return '🍕';
      default:
        return '💻';
    }
  };

  return (
    <section 
      id="projects" 
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
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto md:mx-0 rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-900/10 backdrop-blur-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Visual Header */}
                <div className={`relative h-44 w-full flex items-center justify-center overflow-hidden ${getProjectVisual(project.id)}`}>
                  <div className="absolute inset-0 bg-black/15 dark:bg-black/25 backdrop-blur-[1px]" />
                  <span className="text-6xl z-10 select-none animate-bounce" style={{ animationDuration: '3s' }}>
                    {getProjectIcon(project.id)}
                  </span>
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md rounded-full">
                    {project.category}
                  </span>

                  {/* Year Tag */}
                  <span className="absolute bottom-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md rounded-full">
                    {project.year}
                  </span>
                </div>

                {/* Content body */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-650 dark:text-slate-400 mb-6 flex-grow leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[10px] font-semibold text-indigo-650 bg-indigo-50 border border-indigo-200 dark:text-indigo-400 dark:bg-indigo-950/20 dark:border-indigo-900/30 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
