// src/sections/Projects.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Auto-Grading AI Website",
      description:
        "A website to grade student answers automatically using AI. Built with Flask backend, NLP for scoring, and simple frontend.",
      technologies: ["Flask", "NLP", "Python", "HTML/CSS"],
    },
    {
      title: "Bookstore Website",
      description:
        "An online bookstore built using Node.js and ExpressJS. Includes book management, authentication, and MongoDB database.",
      technologies: ["NodeJS", "ExpressJS", "MongoDB", "EJS"],
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-white dark:bg-gray-800 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 * index }}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
