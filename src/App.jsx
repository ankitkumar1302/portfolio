import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="relative min-h-screen bg-[#1A0B2E] overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none">
          {/* Purple gradient orb - top right */}
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#7127BA]/20 blur-[120px]" />
          {/* Purple gradient orb - bottom left */}
          <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#7127BA]/20 blur-[120px]" />
        </div>

        <Header />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <main>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center">
              <div className="container mx-auto max-w-6xl px-4">
                <Hero />
              </div>
            </section>
            
            {/* Content Sections */}
            <div className="space-y-20">
              {/* About Section */}
              <section id="about" className="min-h-screen flex items-center">
                <div className="container mx-auto max-w-6xl px-4" data-aos="fade-up">
                  <About />
                </div>
              </section>
              
              {/* Experience Section */}
              <section id="experience" className="min-h-screen flex items-center">
                <div className="container mx-auto max-w-6xl px-4" data-aos="fade-up">
                  <Experience />
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="min-h-screen flex items-center">
                <div className="container mx-auto max-w-6xl px-4" data-aos="fade-up">
                  <Projects />
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="min-h-screen flex items-center">
                <div className="container mx-auto max-w-6xl px-4" data-aos="fade-up">
                  <Contact />
                </div>
              </section>
            </div>
          </main>

          {/* Email on side */}
          <motion.div 
            className="fixed right-8 bottom-0 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col items-center space-y-8">
              <a 
                href="mailto:ankit_1302@outlook.com" 
                className="text-[#FFFFFF]/40 hover:text-[#7127BA] transition-colors duration-300 text-sm tracking-widest"
                style={{ writingMode: 'vertical-rl' }}
              >
                ankit_1302@outlook.com
              </a>
              <div className="w-[1px] h-24 bg-[#FFFFFF]/20" />
            </div>
          </motion.div>
        </motion.div>

        <Footer />
        <SpeedInsights />
      </div>
    </AnimatePresence>
  );
}

export default App;
