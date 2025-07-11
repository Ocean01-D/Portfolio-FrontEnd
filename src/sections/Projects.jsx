// src/sections/Projects.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Auto-Grading AI Website",
      description:
        "A website to grade student answers automatically using AI. Built with Flask backend, NLP for scoring, and simple frontend.",
      tech: ["Flask", "NLP", "Python", "HTML/CSS"],
      link: "#", // bạn có thể cập nhật link sau nếu có
    },
    {
      title: "Bookstore Website",
      description:
        "An online bookstore built using Node.js and ExpressJS. Includes book management, authentication, and MongoDB database.",
      tech: ["NodeJS", "ExpressJS", "MongoDB", "EJS"],
      link: "#",
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
            >
              <ProjectItem data={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
