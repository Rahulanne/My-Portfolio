import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const contactInfo = [
    { 
      icon: <FiMail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />, 
      label: 'Email', 
      value: 'rahulanne04@gmail.com', 
      href: 'mailto:rahulanne04@gmail.com',
      desc: 'Send a direct email'
    },
    { 
      icon: <FiPhone className="w-6 h-6 text-rose-600 dark:text-rose-400" />, 
      label: 'Phone', 
      value: '+91 8074968206', 
      href: 'tel:+918074968206',
      desc: 'Call or text directly'
    },
    { 
      icon: <FiMapPin className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />, 
      label: 'Location', 
      value: 'Hyderabad, Telangana, India', 
      href: 'https://maps.google.com/?q=Hyderabad,+Telangana,+India',
      desc: 'Based in India'
    }
  ];

  const socialLinks = [
    { 
      icon: (
        <span className="flex items-center justify-center">
          <img src="/GitHub_Black.png" alt="GitHub" className="w-[22px] h-[22px] object-contain inline dark:hidden" />
          <img src="/GitHub_White.png" alt="GitHub" className="w-[22px] h-[22px] object-contain hidden dark:inline" />
        </span>
      ), 
      href: 'https://github.com/Rahulanne', 
      label: 'GitHub' 
    },
    { icon: <img src="/linkedin_logo.png" alt="LinkedIn" className="w-[22px] h-[22px] object-contain" />, href: 'https://www.linkedin.com/in/rahul-anne/', label: 'LinkedIn' }
  ];

  return (
    <section 
      id="contact" 
      className="py-28 bg-slate-100/40 dark:bg-slate-900/10 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              I am available for full-time frontend roles, contract opportunities, and architecture consulting. Feel free to reach out directly!
            </p>
          </div>

          {/* Centered Direct Contacts Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, idx) => {
              const cardContent = (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {info.label}
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white leading-snug break-all group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {info.value}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 block">
                    {info.desc}
                  </span>
                </>
              );

              if (info.href) {
                const isExternal = info.href.startsWith('http');
                return (
                  <motion.a
                    href={info.href}
                    key={idx}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer group w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                  >
                    {cardContent}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group w-full"
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </div>

          {/* Socials Connection */}
          <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-405 dark:text-slate-400 block mb-4">
              Or connect via social networks
            </span>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-850 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-650 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
