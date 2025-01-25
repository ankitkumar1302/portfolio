import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        {
          name: "Android Development",
          level: 90,
          description: "Native Android development using Kotlin and Java"
        },
        {
          name: "Jetpack Compose",
          level: 85,
          description: "Modern Android UI development"
        },
        {
          name: "Material Design",
          level: 88,
          description: "UI/UX implementation following Material guidelines"
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Spring Boot",
          level: 85,
          description: "Building robust backend services"
        },
        {
          name: "RESTful APIs",
          level: 88,
          description: "API design and implementation"
        },
        {
          name: "Database Management",
          level: 82,
          description: "MySQL, PostgreSQL, MongoDB"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          description: "Version control and collaboration"
        },
        {
          name: "Docker",
          level: 80,
          description: "Containerization and deployment"
        },
        {
          name: "CI/CD",
          level: 78,
          description: "Automated testing and deployment"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-[#7127BA] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-[#1A0B2E]/40 backdrop-blur-sm rounded-lg p-8 border border-[#7127BA]/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-[#FFFFFF]/70 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#7127BA]/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#7127BA] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                    <p className="text-[#FFFFFF]/70 text-sm">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-[#1A0B2E]/40 backdrop-blur-sm rounded-lg p-8 border border-[#7127BA]/10"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Firebase", "AWS", "Kotlin Coroutines", "RxJava",
              "JUnit", "Retrofit", "GraphQL", "Maven",
              "Gradle", "Jenkins", "Swagger", "Postman"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#7127BA]/10 text-[#FFFFFF]/80 rounded-lg border border-[#7127BA]/20 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 