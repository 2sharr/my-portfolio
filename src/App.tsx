import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Qualifications from './components/Qualifications/Qualifications.tsx';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Qualifications />
      <Contact />
    </div>
  );
}

export default App;