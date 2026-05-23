import React from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-navy-900 border-t border-slate-800 py-8 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Saqib Ahmad Bhat. All rights reserved.</p>
        <p className="text-sm mt-2">Designed for the Future of AI.</p>
      </footer>
    </div>
  );
}

export default App;
