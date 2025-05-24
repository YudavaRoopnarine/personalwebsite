import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';


function IndexPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default IndexPage;
