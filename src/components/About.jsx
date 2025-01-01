import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const technologies = [
    'Android', 'Spring Boot', 'Kotlin', 'Java',
    'Docker', 'REST APIs', 'Git', 'GitHub',
    'React', 'Ktor', 'Figma', 'Material UI'
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-8 text-light relative inline-block">
          <span className="text-primary">#</span> About Me
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary/20 rounded-full">
            <div className="w-1/3 h-full bg-primary rounded-full" />
          </div>
        </h2>
        
        <div className="space-y-4 text-light/70">
          <p>
            Hello! I'm Ankit, a passionate software developer specializing in Android development
            and backend services. I love building robust and scalable applications that provide
            exceptional user experiences.
          </p>
          
          <p>
            My journey in software development has led me to work with a diverse set of
            technologies, from mobile development with Kotlin to creating backend services
            with Spring Boot. I'm particularly interested in creating seamless mobile
            experiences and robust server architectures.
          </p>

          <p>
            Currently, I'm focused on developing Android applications and RESTful services,
            while continuously learning and exploring new technologies in the mobile and
            backend development space.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6 text-light">
              Technologies I work with
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-primary">▹</span>
                  <span className="text-light/70 hover:text-light transition-colors">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative group"
      >
        <div className="relative w-80 h-80 mx-auto">
          <div className="absolute inset-0 bg-primary/20 rounded-lg transform -rotate-6 group-hover:rotate-6 transition-transform duration-300"></div>
          <img
            src="/your-photo.png" // Add your photo here
            alt="Ankit"
            className="relative z-10 w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 shadow-xl"
          />
          <div className="absolute inset-0 bg-primary/10 rounded-lg group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
