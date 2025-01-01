import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const DirectionalHint = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = currentScrollY / (documentHeight - windowHeight);
      setScrollProgress(progress);
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);

      // Show/hide based on scroll position and progress
      if (currentScrollY > 100 && progress < 0.95) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Progress bar */}
      <div className="relative h-64 w-[2px] bg-light/5 rounded-full">
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-primary/20 rounded-full"
          animate={{
            height: `${scrollProgress * 100}%`,
          }}
          transition={{ duration: 0.1 }}
        />
        
        {/* Scroll indicator dot */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4"
          animate={{
            y: `${scrollProgress * 256}px`,
          }}
          transition={{ duration: 0.1 }}
        >
          <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary/20 rounded-full animate-ping" />
        </motion.div>
      </div>

      {/* Direction text */}
      <motion.div
        className="relative"
        animate={{
          y: scrollDirection === 'down' ? [0, 5, 0] : [0, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/5 rounded-full blur-lg" />
        <p className="text-primary/80 font-mono text-sm whitespace-nowrap transform rotate-90 relative">
          Scroll {scrollDirection === 'down' ? 'Down' : 'Up'}
        </p>
      </motion.div>

      {/* Progress percentage */}
      <motion.div
        className="absolute -left-12 top-1/2 -translate-y-1/2 bg-dark-gray/80 backdrop-blur-sm px-3 py-1 rounded-full"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-primary font-mono text-sm">
          {Math.round(scrollProgress * 100)}%
        </span>
      </motion.div>
    </motion.div>
  );
};

export default DirectionalHint; 