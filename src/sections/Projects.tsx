import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Project } from '../types';
import { FiX, FiCpu, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const projectDetailsMap: Record<string, { challenge: string; solution: string; impact: string }> = {
    'healthcare-platform': {
      challenge: 'Managing dynamic dashboard modules and role-based access control (RBAC) securely across 50+ enterprise modules.',
      solution: 'Designed a secure session state system using JWT and refresh tokens to identify users by role and company type. Implemented client-side route guards and dynamic context loaders to mount specific modules with custom, role-and-company-specific themes.',
      impact: 'Enabled strict modular access where each user (whether agent, group, member, or client) only sees their designated modules, successfully ensuring seamless multi-tenant data isolation.'
    },
    'vui-component-library': {
      challenge: 'Ensuring strict WCAG AA accessibility compliance and HIPAA/PCI security standards across all reusable UI patterns.',
      solution: 'Built modular component packages styled with Tailwind CSS, utilizing PrimeReact primitives and automated accessibility testing tools.',
      impact: 'Accelerated UI frontend development velocity by 35% across multiple engineering teams and successfully cleared third-party security audits.'
    },
    'venrollment-library': {
      challenge: 'Deploying custom client enrollment flows dynamically without manual redeployment or rebuilding of the host applications.',
      solution: 'Created a micro frontend package linking system using Vite with dynamic JSON-driven schema forms that inject client styles dynamically.',
      impact: 'Allowed non-technical account managers to spin up customized onboarding flows, saving weeks of custom engineering cycles.'
    },
    'pizzahut-ecommerce': {
      challenge: 'Reducing page latency, optimizing initial bundle sizes, and supporting Right-to-Left (RTL) localization for Middle Eastern markets.',
      solution: 'Implemented RxJS state streams, dynamic lazy loading modules in Angular, and locale-specific CSS stylesheets.',
      impact: 'Improved load speeds by 28% and boosted Checkout CTA conversion rates across 10+ international regions.'
    }
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectedDetails = selectedProject ? projectDetailsMap[selectedProject.id] : null;

  return (
    <section 
      id="projects" 
      className="py-16 md:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center md:text-left mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-slate-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto md:mx-0 rounded-full" />
            <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Click any project card to expand details (technical challenges, solutions, and impact).
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(project);
                    e.preventDefault();
                  }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-900/10 backdrop-blur-md overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-500/30 dark:hover:border-indigo-500/20 cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label={`View details for ${project.title}`}
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
                  <div className="flex flex-wrap gap-1.5 mt-auto">
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

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedProject && selectedDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto z-10"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Close details modal"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Title & Info */}
              <div className="mb-6 pr-8">
                <span className="inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/30 rounded-full mb-3">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 id="modal-title" className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Long description */}
              <div className="text-sm md:text-base text-slate-650 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {selectedProject.longDescription}
              </div>

              {/* Key Technical Deep Dive */}
              <div className="space-y-4 mb-6 border-t border-b border-slate-100 dark:border-slate-800/80 py-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Architectural Implementation Details
                </h4>

                {/* Challenge */}
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-rose-650 dark:text-rose-400 mt-0.5">
                    <FiCpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Technical Challenge</span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">{selectedDetails.challenge}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-indigo-650 dark:text-indigo-400 mt-0.5">
                    <FiCheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Engineering Solution</span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">{selectedDetails.solution}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-650 dark:text-emerald-400 mt-0.5">
                    <FiTrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Business Impact & Metrics</span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">{selectedDetails.impact}</p>
                  </div>
                </div>
              </div>

              {/* Tech stack badges */}
              <div className="mb-0">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, tIdx) => (
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
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
