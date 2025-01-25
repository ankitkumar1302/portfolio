import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-between">
      {/* Left Content */}
      <div className="max-w-3xl">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-[#7127BA] font-mono mb-5 tracking-wider"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7127BA] to-[#9F5AE5] bg-clip-text text-transparent"
        >
          Ankit.
        </motion.h1>

        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
        >
          I build things for Android & Spring Boot
        </motion.h2>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-[#FFFFFF]/60 text-lg max-w-xl mb-12"
        >
          I'm a software developer specializing in building exceptional mobile applications 
          and backend services. Currently, I'm focused on creating robust and scalable 
          solutions using Kotlin and Java.
        </motion.p>

        <motion.div
          className="flex gap-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-[#7127BA] text-white rounded-lg hover:bg-[#9F5AE5] transition-colors duration-300"
          >
            Check out my work
          </a>
        </motion.div>
      </div>

      {/* Right Content - Animated Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block relative w-[500px] h-[500px]"
      >
        {/* Main circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[300px] rounded-full border-2 border-[#7127BA] relative animate-[spin_20s_linear_infinite]">
            {/* Orbital circles */}
            <div className="absolute -inset-4">
              <div className="w-4 h-4 bg-[#7127BA] rounded-full absolute top-1/2 -translate-y-1/2 -left-2 animate-pulse" />
              <div className="w-4 h-4 bg-[#9F5AE5] rounded-full absolute top-1/2 -translate-y-1/2 -right-2 animate-pulse" />
              <div className="w-4 h-4 bg-[#7127BA] rounded-full absolute left-1/2 -translate-x-1/2 -top-2 animate-pulse" />
              <div className="w-4 h-4 bg-[#9F5AE5] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-2 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Outer rotating circles */}
        <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7127BA] rounded-full shadow-[0_0_15px_5px_rgba(113,39,186,0.3)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#9F5AE5] rounded-full shadow-[0_0_15px_5px_rgba(159,90,229,0.3)]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#7127BA] rounded-full shadow-[0_0_15px_5px_rgba(113,39,186,0.3)]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#9F5AE5] rounded-full shadow-[0_0_15px_5px_rgba(159,90,229,0.3)]" />
        </div>

        {/* Inner rotating gradient ring */}
        <div className="absolute inset-[100px] animate-[spin_10s_linear_infinite]">
          <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-[#7127BA] to-[#9F5AE5] mask-gradient" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
