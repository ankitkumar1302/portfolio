import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Viprab Technologies Ltd Pvt",
      title: "Android Developer Intern",
      duration: "2023",
      location: "Uttar Pradesh, India",
      points: [
        "Developed mobile applications using Android and Kotlin",
        "Implemented modern UI designs using Material Design principles",
        "Created responsive and user-friendly mobile interfaces",
        "Integrated RESTful APIs with Android applications",
        "Collaborated with design team using Figma for UI/UX implementation"
      ],
      technologies: ["Kotlin", "Android SDK", "Material Design", "REST APIs", "Figma"]
    },
    {
      company: "Viprab Technologies Ltd Pvt",
      title: "Spring Boot Developer Intern",
      duration: "2023",
      location: "Uttar Pradesh, India",
      points: [
        "Developed backend services using Spring Boot and Java",
        "Implemented RESTful APIs and microservices architecture",
        "Created and maintained database schemas using SQL",
        "Utilized Docker for containerization of services",
        "Implemented authentication and authorization systems"
      ],
      technologies: ["Spring Boot", "Java", "MySQL", "Docker", "REST APIs"]
    }
  ];

  return (
    <section className="py-12 md:py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#7127BA]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-72 md:w-96 h-72 md:h-96 bg-[#7127BA]/10 rounded-full blur-[100px]" />
      </div>

      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          <span className="text-[#7127BA]">#</span> Experience
        </h2>
        <p className="text-[#FFFFFF]/60 max-w-2xl mx-auto text-sm md:text-base">
          My professional journey and internships in software development
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#7127BA]/20">
          <motion.div 
            className="w-full bg-[#7127BA] h-0"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        <div className="relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[0.5rem] md:left-1/2 transform -translate-x-1/2 w-4 md:w-5 h-4 md:h-5 top-0 md:top-4">
                <div className="w-full h-full bg-[#1A0B2E] rounded-full border-2 border-[#7127BA] relative">
                  <div className="absolute inset-0 bg-[#7127BA] rounded-full animate-ping opacity-20" />
                </div>
              </div>

              {/* Content */}
              <div className={`bg-[#1A0B2E]/40 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-[#7127BA]/10 ${
                index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
              }`}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {exp.title}
                      <span className="text-[#7127BA] block text-base mt-1">
                        @ {exp.company}
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 text-white/40 text-xs md:text-sm mt-2">
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <span className="text-[#7127BA] mt-1.5 transform group-hover:rotate-90 transition-transform duration-300">
                          ▹
                        </span>
                        <span className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm md:text-base">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-[#7127BA]/10 text-[#7127BA] rounded-full text-xs md:text-sm border border-[#7127BA]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty column for timeline layout */}
              <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 