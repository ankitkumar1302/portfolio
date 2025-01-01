import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="max-w-4xl">
        <motion.p
          variants={item}
          className="text-primary font-mono mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          Ankit.
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-light/70 mb-6"
        >
          I build things for Android & Spring Boot
        </motion.h2>

        <motion.p
          variants={item}
          className="text-light/60 text-lg max-w-xl mb-12"
        >
          I'm a software developer specializing in building exceptional mobile applications 
          and backend services. Currently, I'm focused on creating robust and scalable 
          solutions using Kotlin and Java.
        </motion.p>

        <motion.div variants={item}>
          <motion.a
            href="#projects"
            className="inline-block px-8 py-4 rounded border-2 border-primary text-primary 
                     hover:bg-primary/10 transition-colors duration-300 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check out my work!
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
