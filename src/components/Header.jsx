import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A0B2E]/80 backdrop-blur-lg border-b border-[#7127BA]/10">
      <nav className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          <span className="bg-gradient-to-r from-[#7127BA] to-[#9F56DB] text-transparent bg-clip-text">
            Ankit
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavClick(item.id)}
              className="relative text-sm font-medium group"
            >
              <span className={`${
                activeSection === item.id ? 'text-[#7127BA]' : 'text-white/70'
              } group-hover:text-white transition-colors`}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7127BA]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
        >
          <div className="w-6 h-5 relative">
            <span className={`absolute w-full h-0.5 bg-white transition-all ${
              isOpen ? 'top-2 rotate-45' : 'top-0'
            }`} />
            <span className={`absolute w-full h-0.5 bg-white top-2 transition-all ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`absolute w-full h-0.5 bg-white transition-all ${
              isOpen ? 'top-2 -rotate-45' : 'top-4'
            }`} />
          </div>
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-[#1A0B2E]/95 backdrop-blur-lg border-b border-[#7127BA]/10 overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#7127BA]/10"
              >
                <span className={activeSection === item.id ? 'text-[#7127BA]' : 'text-white/70'}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
