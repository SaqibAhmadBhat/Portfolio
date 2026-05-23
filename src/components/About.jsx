import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, HeartPulse } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "Edge AI & AIoT",
      desc: "Deploying high-performance models on resource-constrained devices like ESP32 and specialized edge NPUs."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "Computer Vision",
      desc: "Architecting real-time object detection pipelines using YOLOv8, OpenCV, and deep learning architectures."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-pink-500" />,
      title: "Biomedical AI",
      desc: "Innovating non-invasive diagnostic tools, cardiopulmonary monitoring, and autonomous medical robotics."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Architecting <span className="text-gradient">Intelligence</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Bridging the gap between cutting-edge research and real-world deployment.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-300 leading-relaxed"
          >
            <p>
              Currently pursuing my B.E. in Computer Science and Engineering (2023-2027) at the Government College of Engineering, Tirunelveli. My journey is defined by a relentless pursuit of scalable, intelligent systems.
            </p>
            <p>
              As the Founder of <strong className="text-cyan-400">CuraBotics AI</strong>, I lead the development of intelligent robotic solutions for hospital environments, integrating computer vision, IoT, and real-time decision-making to automate workflows and assist healthcare professionals.
            </p>
            <p>
              My expertise spans the entire AI pipeline—from collecting and labeling custom datasets to training state-of-the-art models and optimizing them for edge inference. Whether it's prioritizing ambulances in heavy traffic or detecting structural anomalies on roads, my goal is to build AI that saves lives and improves infrastructure.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((f, i) => (
              <div key={i} className="glass-card p-6 flex gap-4 items-start group">
                <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-800 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
