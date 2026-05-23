import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8 shadow-[0_0_20px_rgba(14,165,233,0.15)]"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          CEO @ CuraBotics AI | AI Systems Engineer
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Engineering the <span className="text-gradient">Future</span> of <br className="hidden md:block" /> Artificial Intelligence.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          I am <span className="text-slate-200 font-semibold">Saqib Ahmad Bhat</span>. A Computer Vision Researcher & AIoT Developer specializing in YOLOv8, Smart Traffic AI, and Biomedical Innovations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-1">
            Explore My Work
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full glass-card text-slate-200 font-semibold hover:bg-slate-800/50 transition-all flex items-center gap-2 group">
            <FileText className="w-5 h-5 text-cyan-400 group-hover:text-blue-400" />
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center gap-6"
        >
          {[
            { icon: <FaGithub size={24} />, href: "https://github.com/SaqibAhmadBhat" },
            { icon: <FaLinkedin size={24} />, href: "https://linkedin.com/in/saqibahmadbhat" },
            { icon: <Mail size={24} />, href: "mailto:er.swt.saqibahmad@gmail.com" }
          ].map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all">
              {social.icon}
            </a>
          ))}
        </motion.div>

        <motion.a 
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 animate-bounce text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </div>
    </section>
  );
}
