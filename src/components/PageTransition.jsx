import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className="relative"
    >
      <motion.div
        variants={childVariants}
        className="relative z-10"
      >
        {children}
      </motion.div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        variants={childVariants}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-radial from-primary/5 to-transparent"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default PageTransition; 