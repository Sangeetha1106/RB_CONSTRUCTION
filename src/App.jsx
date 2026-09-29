import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustHighlights from './components/TrustHighlights';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import ProjectCTA from './components/ProjectCTA';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-charcoal font-sans selection:bg-brand-amber selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections Stack */}
      <main>
        {/* Prompt 1 Sections */}
        <Hero />
        <TrustHighlights />
        <AboutUs />
        <Services />

        {/* Prompt 2 Sections */}
        <Process />
        <Projects />
        <WhyChooseUs />
        <Gallery />

        {/* Prompt 3 Sections */}
        <ProjectCTA />
        <Contact />
        <Location />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingContact />
    </div>
  );
}

export default App;
