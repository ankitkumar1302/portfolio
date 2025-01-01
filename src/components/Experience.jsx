import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const experiences = [
    {
      company: "Viprab Technologies Ltd Pvt",
      title: "Android Developer Intern",
      duration: "2023",
      points: [
        "Developed mobile applications using Android and Kotlin",
        "Implemented modern UI designs using Material Design principles",
        "Created responsive and user-friendly mobile interfaces",
        "Integrated RESTful APIs with Android applications",
        "Collaborated with design team using Figma for UI/UX implementation"
      ]
    },
    {
      company: "Viprab Technologies Ltd Pvt",
      title: "Spring Boot Developer Intern",
      duration: "2023",
      points: [
        "Developed backend services using Spring Boot and Java",
        "Implemented RESTful APIs and microservices architecture",
        "Created and maintained database schemas using SQL",
        "Utilized Docker for containerization of services",
        "Implemented authentication and authorization systems"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto" id="experience">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-light relative inline-block"
      >
        <span className="text-primary">#</span> Experience
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary/20 rounded-full">
          <motion.div 
            className="w-1/3 h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "33.333333%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          />
        </div>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 mt-16">
        {/* Tab buttons with enhanced animations */}
        <div className="md:w-72 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-none">
          {experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-4 text-left border-l-2 whitespace-nowrap font-mono text-sm relative ${
                activeTab === index
                  ? 'text-primary border-primary bg-primary/5'
                  : 'text-light/50 border-light/10 hover:text-light/80 hover:border-light/30 hover:bg-light/5'
              } transition-all duration-300`}
              whileHover={{ x: 4 }}
              whileTap={{ x: 2 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block"
              >
                {exp.title}
                <span className="block text-xs text-light/30 mt-1">
                  @ {exp.company}
                </span>
              </motion.span>
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/5 -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content with enhanced animations */}
        <div className="flex-1 relative min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-light break-words">
                  {experiences[activeTab].title}
                  <span className="text-primary block md:inline md:ml-2"> @ {experiences[activeTab].company}</span>
                </h3>
                
                <p className="text-light/60 font-mono text-sm tracking-wider">
                  {experiences[activeTab].duration}
                </p>
              </motion.div>

              <ul className="space-y-4 text-light/70">
                {experiences[activeTab].points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredPoint(index)}
                    onHoverEnd={() => setHoveredPoint(null)}
                    className="flex items-start group relative"
                  >
                    <motion.span 
                      className="text-primary mr-3 mt-1.5 transform transition-all duration-300 flex-shrink-0"
                      animate={{ 
                        scale: hoveredPoint === index ? 1.2 : 1,
                        rotate: hoveredPoint === index ? 90 : 0
                      }}
                    >
                      ▹
                    </motion.span>
                    <motion.span 
                      className="transition-colors duration-300"
                      animate={{ 
                        color: hoveredPoint === index ? "rgb(226, 232, 240)" : "rgb(226, 232, 240, 0.7)"
                      }}
                    >
                      {point}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced background decorations */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
          <motion.div 
            className="absolute right-0 bottom-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience; 