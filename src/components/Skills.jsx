import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "YOLOv8", level: 95 },
        { name: "OpenCV", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas/NumPy", level: 90 },
      ]
    },
    {
      title: "Programming",
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 80 },
        { name: "PHP", level: 75 },
      ]
    },
    {
      title: "Systems & Backend",
      icon: <Server className="w-5 h-5 text-pink-500" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "MQTT", level: 90 },
        { name: "Socket.io", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Distributed Systems", level: 80 },
      ]
    },
    {
      title: "Frontend & Tools",
      icon: <Layout className="w-5 h-5 text-purple-500" />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vite", level: 85 },
        { name: "Git/Linux", level: 90 },
        { name: "Docker (Basic)", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive overview of my technological proficiencies across the stack.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-800/80">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm font-medium text-cyan-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
