import React, { useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import GridBackground from './components/GridBackground';
import CustomCursor from './components/CustomCursor';
import DirectionalHint from './components/DirectionalHint';
import ThreeBackground from './components/ThreeBackground';
import PageTransition from './components/PageTransition';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 150,
      delay: 100,
      easing: 'ease-out-cubic'
    });

    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="relative min-h-screen bg-gradient-to-b from-secondary via-dark-gray to-secondary overflow-hidden">
        {/* Background Elements (lowest z-index) */}
        <div className="fixed inset-0 z-0">
          <Suspense fallback={null}>
            <ThreeBackground />
          </Suspense>
          <GridBackground />
          
          {/* Gradient Orbs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-[150px] animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[150px] animate-float" style={{ animationDelay: '-2s' }} />
          </div>
        </div>

        {/* UI Elements (higher z-index) */}
        <CustomCursor />
        <DirectionalHint />
        <Header />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <main className="relative">
            {/* Hero Section */}
            <PageTransition>
              <section
                id="home"
                className="min-h-screen flex items-center justify-center px-4 pt-20 pb-32"
              >
                <div className="container mx-auto max-w-6xl">
                  <Hero />
                </div>
              </section>
            </PageTransition>
            
            {/* Content Sections */}
            <div className="space-y-32">
              {/* About Section */}
              <PageTransition>
                <section
                  id="about"
                  className="min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-to-b from-transparent via-dark-gray/30 to-transparent"
                >
                  <div className="container mx-auto max-w-6xl" data-aos="fade-up">
                    <About />
                  </div>
                </section>
              </PageTransition>
              
              {/* Projects Section */}
              <PageTransition>
                <section
                  id="projects"
                  className="min-h-screen flex items-center justify-center px-4 py-32"
                >
                  <div className="container mx-auto max-w-7xl" data-aos="fade-up">
                    <Projects />
                  </div>
                </section>
              </PageTransition>
              
              {/* Experience Section */}
              <PageTransition>
                <section
                  id="experience"
                  className="min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-to-b from-transparent via-dark-gray/30 to-transparent"
                >
                  <div className="container mx-auto max-w-6xl" data-aos="fade-up">
                    <Experience />
                  </div>
                </section>
              </PageTransition>
              
              {/* Contact Section */}
              <PageTransition>
                <section
                  id="contact"
                  className="min-h-screen flex items-center justify-center px-4 py-32 mb-20"
                >
                  <div className="container mx-auto max-w-4xl" data-aos="fade-up">
                    <Contact />
                  </div>
                </section>
              </PageTransition>
            </div>
          </main>

          {/* Social Links */}
          <motion.div 
            className="fixed left-12 bottom-0 hidden lg:block z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-col items-center space-y-6">
              <a 
                href="https://github.com/ankitkumar1302" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light/60 hover:text-primary hover:-translate-y-1 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/ankit1302" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light/60 hover:text-primary hover:-translate-y-1 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <div className="w-[1px] h-32 bg-light/20 mt-6" />
            </div>
          </motion.div>

          {/* Email Link */}
          <motion.div 
            className="fixed right-12 bottom-0 hidden lg:block z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-col items-center space-y-6">
              <a 
                href="mailto:ankit_1302@outlook.com" 
                className="text-light/60 hover:text-primary transition-colors writing-mode-vertical transform rotate-180"
                style={{ writingMode: 'vertical-rl' }}
              >
                ankit_1302@outlook.com
              </a>
              <div className="w-[1px] h-32 bg-light/20 mt-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;
