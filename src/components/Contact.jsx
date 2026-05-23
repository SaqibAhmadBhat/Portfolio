import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-navy-900/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-cyan-500/10 mb-6">
            <MessageSquare className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Collaborate</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Interested in AI research, IoT solutions, or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <form className="grid gap-6 text-left" action="mailto:er.swt.saqibahmad@gmail.com" method="GET">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea rows="4" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="w-full md:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-slate-400"
        >
          <p>Or email me directly at <a href="mailto:er.swt.saqibahmad@gmail.com" className="text-cyan-400 hover:underline">er.swt.saqibahmad@gmail.com</a></p>
        </motion.div>
      </div>
    </section>
  );
}
