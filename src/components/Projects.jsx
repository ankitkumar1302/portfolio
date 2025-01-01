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
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-light relative inline-block">
        <span className="text-primary">#</span> Projects
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary/20 rounded-full">
          <div className="w-1/3 h-full bg-primary rounded-full" />
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-dark-gray/30 rounded-lg overflow-hidden hover:bg-dark-gray/50 transition-colors duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-60 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-gray/90"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-4">
                {project.featured && (
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                )}
                <h3 className="text-xl font-bold text-light group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-light/70 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-primary bg-primary/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-light/60 hover:text-primary transition-colors text-sm"
                >
                  <span className="mr-2">View Project</span>
                  <svg
                    className="w-4 h-4"
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
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
