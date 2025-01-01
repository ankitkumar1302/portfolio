import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "BasicDesign App",
      description: "A showcase of Android UI/UX design patterns and implementation best practices. Features modern Material Design components and smooth animations.",
      tech: ["Android", "Kotlin", "Material UI", "XML"],
      link: "https://github.com/ankitkumar1302/BasicDesign",
      image: "/projects/basicdesign.png",
      featured: true
    },
    {
      title: "Spring Boot REST API",
      description: "A RESTful API service built with Spring Boot, featuring authentication, database integration, and comprehensive documentation.",
      tech: ["Spring Boot", "Java", "MySQL", "Docker"],
      link: "#",
      image: "/projects/springboot.png"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and clean design.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
      image: "/projects/portfolio.png"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto" id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-light relative inline-block"
      >
        <span className="text-primary">#</span> Projects
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-dark-gray/30 rounded-xl overflow-hidden hover:bg-dark-gray/50 transition-all duration-300 transform hover:-translate-y-2 border border-light/5"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-4">
                {project.featured && (
                  <motion.p 
                    className="text-primary font-mono text-sm mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Featured Project
                  </motion.p>
                )}
                <motion.h3 
                  className="text-xl font-bold text-light mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-light/70 text-sm mb-4 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.description}
                </motion.p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + techIndex * 0.1 }}
                    className="px-3 py-1 text-xs text-primary bg-primary/10 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-light/60 hover:text-primary transition-all duration-300 text-sm group"
                >
                  <span className="mr-2 group-hover:mr-3 transition-all">View Project</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
