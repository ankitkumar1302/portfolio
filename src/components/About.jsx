import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#7127BA] mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-[#1A0B2E]/40 backdrop-blur-sm rounded-lg p-8 border border-[#7127BA]/10">
              <h3 className="text-xl font-bold text-white mb-4">
                Software Developer
              </h3>
              <p className="text-[#FFFFFF]/70 mb-6">
                Hello! I'm Ankit, a passionate software developer specializing in Android development
                and Spring Boot applications. With a strong foundation in both mobile and backend
                development, I create robust and user-friendly applications that solve real-world problems.
              </p>
              <p className="text-[#FFFFFF]/70">
                My journey in software development began with a curiosity for creating mobile applications.
                Since then, I've worked on various projects that have helped me develop a deep understanding
                of software architecture, clean code practices, and user experience design.
              </p>
            </div>

            {/* Skills Overview */}
            <div className="bg-[#1A0B2E]/40 backdrop-blur-sm rounded-lg p-8 border border-[#7127BA]/10">
              <h3 className="text-xl font-bold text-white mb-4">
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white mb-2">Mobile Development</h4>
                  <ul className="space-y-2 text-[#FFFFFF]/70">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7127BA] rounded-full" />
                      Android (Kotlin/Java)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7127BA] rounded-full" />
                      Jetpack Compose
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7127BA] rounded-full" />
                      Material Design
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-2">Backend Development</h4>
                  <ul className="space-y-2 text-[#FFFFFF]/70">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7127BA] rounded-full" />
                      Spring Boot
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7127BA] rounded-full" />
                      RESTful APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7127BA] rounded-full" />
                      MySQL/PostgreSQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
