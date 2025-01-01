import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-dark-gray/95 backdrop-blur-sm shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold relative group z-50"
            onClick={(e) => handleNavClick(e, 'home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-primary">AK</span>
            <span className="text-light/80">.dev</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'experience', 'contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-light/60 hover:text-primary transition-colors relative group font-mono text-sm"
                >
                  <span className="text-primary mr-1">0{index + 1}.</span>
                  <span className="capitalize">{item}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-light transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
            <div className={`w-6 h-0.5 bg-light mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`} />
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-0 bg-dark-gray/95 backdrop-blur-md md:hidden z-40"
              >
                <div className="flex items-center justify-center h-full">
                  <ul className="flex flex-col items-center space-y-8">
                    {['about', 'projects', 'experience', 'contact'].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={`#${item}`}
                          onClick={(e) => handleNavClick(e, item)}
                          className="text-light/80 hover:text-primary transition-colors relative group font-mono text-lg"
                        >
                          <span className="text-primary mr-2">0{index + 1}.</span>
                          <span className="capitalize">{item}</span>
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
