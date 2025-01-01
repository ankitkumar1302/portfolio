import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

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
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-light relative inline-block">
        <span className="text-primary">#</span> Experience
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary/20 rounded-full">
          <div className="w-1/3 h-full bg-primary rounded-full" />
        </div>
      </h2>

      <div className="flex flex-col md:flex-row gap-8 mt-16">
        {/* Tab buttons */}
        <div className="md:w-64 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-none">
          {experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-4 text-left border-l-2 whitespace-nowrap font-mono text-sm ${
                activeTab === index
                  ? 'text-primary border-primary bg-primary/5'
                  : 'text-light/50 border-light/10 hover:text-light/80 hover:border-light/30 hover:bg-light/5'
              } transition-all duration-300`}
              whileHover={{ x: 4 }}
              whileTap={{ x: 2 }}
            >
              {exp.title}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 relative min-w-0">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-light break-words">
                {experiences[activeTab].title}
                <span className="text-primary block md:inline"> @ {experiences[activeTab].company}</span>
              </h3>
              
              <p className="text-light/60 font-mono text-sm tracking-wider">
                {experiences[activeTab].duration}
              </p>
            </div>

            <ul className="space-y-4 text-light/70">
              {experiences[activeTab].points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start group"
                >
                  <span className="text-primary mr-3 mt-1.5 transform group-hover:scale-125 transition-transform flex-shrink-0">▹</span>
                  <span className="group-hover:text-light/90 transition-colors">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Experience; 