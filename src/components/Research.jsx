import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Research & <span className="text-gradient">Publications</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Pushing the boundaries of Edge AI and Intelligent Healthcare Systems.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
            <BookOpen className="w-64 h-64" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="md:w-1/3">
              <span className="inline-block px-3 py-1 rounded-full border border-pink-500/30 text-pink-400 text-sm font-semibold mb-4 bg-pink-500/10">Under Preparation</span>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">IEEE Transactions Paper</h3>
              <p className="text-cyan-400 font-medium">AI-Based Emergency Traffic System</p>
            </div>
            
            <div className="md:w-2/3 space-y-4 text-slate-300">
              <p className="leading-relaxed">
                Currently preparing a comprehensive research paper intended for IEEE Transactions detailing the architecture and empirical results of the <strong className="text-white">SmartTrafficAI</strong> system. 
              </p>
              <p className="leading-relaxed">
                The research focuses on the optimization of YOLOv8 inference times on edge devices, the latency reductions achieved through MQTT broker integration, and the statistical improvements in emergency vehicle transit times across simulated urban grids.
              </p>
              
              <div className="pt-6 mt-6 border-t border-slate-700/50">
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Core Research Focus Areas</h4>
                <div className="flex flex-wrap gap-3">
                  {['Medical Robotics', 'Edge AI', 'Intelligent Healthcare', 'Sensor Fusion', 'Autonomous Systems'].map((area, i) => (
                    <span key={i} className="px-4 py-2 glass-panel rounded-lg text-sm text-slate-200">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
