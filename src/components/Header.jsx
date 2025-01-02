import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    if (!isMenuOpen) {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          const elementBottom = bottom + window.pageYOffset;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      setActiveSection(target.slice(1));
      setIsMenuOpen(false);

      // Reset body styles
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.width = '';

      const headerHeight = window.innerWidth < 768 ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      gsap.to(window, {
        duration: 0.4,
        scrollTo: {
          y: offsetPosition,
          autoKill: false,
        },
        ease: "power4.out",
      });
    }
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${
          isScrolled || isMenuOpen ? 'bg-secondary/90 backdrop-blur-lg shadow-lg' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between relative">
            <motion.a
              href="#home"
              className="text-xl sm:text-2xl font-bold text-primary relative group z-[101]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleNavClick(e, '#home')}
            >
              AK
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === 'home' ? 1 : 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`text-sm lg:text-base text-light/70 hover:text-primary transition-all duration-150 relative group ${
                    activeSection === item.href.slice(1) ? 'text-primary translate-y-[-2px]' : ''
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="text-primary font-mono text-sm">0{index + 1}. </span>
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeSection === item.href.slice(1) ? 1 : 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  />
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-primary text-primary text-sm lg:text-base rounded hover:bg-primary/10 transition-all duration-150"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center text-light/70 hover:text-primary z-[101]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 relative"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="absolute top-0 left-0 right-0 h-0.5 bg-current transform-origin-right"
                  variants={{
                    open: { rotate: -45, y: 0, width: "100%" },
                    closed: { rotate: 0, y: 0, width: "100%" }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-[11px] left-0 right-0 h-0.5 bg-current"
                  variants={{
                    open: { opacity: 0, x: -20 },
                    closed: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-current transform-origin-right"
                  variants={{
                    open: { rotate: 45, y: 0, width: "100%" },
                    closed: { rotate: 0, y: 0, width: "100%" }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-secondary/98 backdrop-blur-lg z-[99] md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col justify-center items-center min-h-screen px-6 pt-20">
              <nav className="flex flex-col items-center justify-center space-y-8 w-full max-w-sm mx-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <motion.a
                      href={item.href}
                      className={`block text-center text-light/70 hover:text-primary transition-all duration-150 relative group py-2 ${
                        activeSection === item.href.slice(1) ? 'text-primary' : ''
                      }`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span className="text-primary font-mono text-base block mb-1">0{index + 1}.</span>
                      <span className="text-xl sm:text-2xl font-medium block">{item.label}</span>
                      <motion.div
                        className="absolute -bottom-2 left-1/2 w-12 h-0.5 bg-primary -translate-x-1/2"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeSection === item.href.slice(1) ? 1 : 0 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      />
                    </motion.a>
                  </motion.div>
                ))}
              </nav>
              <motion.a
                href="/resume.pdf"
                className="mt-12 px-8 py-3 border-2 border-primary text-primary text-lg rounded-lg hover:bg-primary/10 transition-all duration-150"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
