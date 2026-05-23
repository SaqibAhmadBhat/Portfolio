import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Founder & AI Systems Lead",
      company: "CuraBotics AI",
      date: "Present",
      description: "Founded a healthcare startup focused on medical robotics and AI-driven automation systems. Leading system architecture, product vision, and end-to-end development of healthcare robotic solutions."
    },
    {
      role: "AI Intern",
      company: "IBM",
      date: "Ongoing",
      description: "Working on Cognos Analytics dashboards, frontend data visualization, and AI-assisted insights generation. Developing interactive data-driven interfaces and integrating analytics workflows."
    },
    {
      role: "AI & Robotics Intern",
      company: "Hadron RoboLabs",
      date: "Past",
      description: "Developed AI-integrated robotics systems with embedded system exposure."
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16">
        
        {/* Experience Timeline */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-cyan-400" />
              <span className="text-gradient">Experience</span>
            </h2>
          </motion.div>
          
          <div className="relative border-l-2 border-slate-700/50 pl-8 space-y-12 ml-4">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-navy-900 border-2 border-cyan-400"></span>
                <div className="flex flex-col mb-2">
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <span className="font-semibold text-cyan-400">{exp.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{exp.date}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-pink-500" />
              <span className="text-gradient">Achievements</span>
            </h2>
          </motion.div>
          
          <div className="grid gap-6">
            {[
              "First Prize — IBM Hackathon (Naan Mudhalvan Initiative)",
              "First Prize — Engage Hackathon",
              "GATE CS Qualified",
              "Winner — Multiple Inter-College Competitions",
              "Leadership roles in NGO and technical initiatives"
            ].map((achieve, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="p-2 rounded-full bg-pink-500/10 text-pink-400 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <p className="text-slate-200 font-medium leading-relaxed">{achieve}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
