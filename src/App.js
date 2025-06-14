import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import './App.css'; // Optional, especially if you're using Tailwind only

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />

      {/* Add other components like Hero, About, Projects, etc. here */}
    </div>
  );
}

export default App;

