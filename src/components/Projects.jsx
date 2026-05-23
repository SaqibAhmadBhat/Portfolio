import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, Target } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "SmartTrafficAI",
      category: "Computer Vision / AIoT",
      problem: "Emergency vehicles like ambulances face critical delays due to heavy traffic.",
      solution: "Engineered a real-time AI pipeline using YOLOv8 for ambulance detection with low-latency inference, fused with MQTT messaging for smart traffic light prioritization.",
      tech: ["YOLOv8", "Python", "MQTT", "Node.js"],
      github: "https://github.com/SaqibAhmadBhat",
    },
    {
      title: "AI-Based Road Pothole Detection",
      category: "Edge AI / Sensor Fusion",
      problem: "Poor road conditions lead to accidents and vehicle damage with no real-time reporting.",
      solution: "Built an IoT-integrated system using ESP32, IMU, and GPS. Applied sensor fusion combining vibration signals with vision-based classification for automated geospatial reporting.",
      tech: ["ESP32", "C++", "TensorFlow Lite", "GPS"],
      github: "https://github.com/SaqibAhmadBhat",
    },
    {
      title: "Contactless Vital Monitoring System",
      category: "Biomedical AI",
      problem: "Continuous vital monitoring typically requires invasive or uncomfortable wearable sensors.",
      solution: "Developed non-invasive cardiopulmonary monitoring using camera-based signal extraction, utilizing signal processing and ML for accurate heart rate and respiration estimation.",
      tech: ["OpenCV", "Python", "SciPy", "Scikit-learn"],
      github: "https://github.com/SaqibAhmadBhat",
    },
    {
      title: "Assistive AI Learning System",
      category: "Accessibility AI",
      problem: "Lack of adaptive learning interfaces for visually and hearing-impaired individuals.",
      solution: "Developed an inclusive AI platform integrating speech recognition, TTS, and adaptive natural language interfaces.",
      tech: ["React", "Python", "NLP", "Speech Recognition"],
      github: "https://github.com/SaqibAhmadBhat",
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl">Production-ready AI architectures and research-driven innovations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{proj.category}</span>
                <div className="flex gap-3">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4">{proj.title}</h3>
              
              <div className="space-y-3 mb-6 flex-grow">
                <div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold mb-1">
                    <Target className="w-4 h-4 text-pink-500" /> Problem
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{proj.problem}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold mb-1">
                    <Activity className="w-4 h-4 text-blue-500" /> Innovation
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{proj.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-cyan-300 rounded-full border border-slate-700/50">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
