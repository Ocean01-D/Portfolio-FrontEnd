// src/sections/About.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-gray-100 dark:bg-gray-800 py-16 px-4 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Cột trái - Avatar hoặc Icon */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-blue-600 dark:text-blue-400 text-8xl"
        >
          <FaUserCircle />
        </motion.div>

        {/* Cột phải - Nội dung giới thiệu */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a <span className="font-medium text-blue-600 dark:text-blue-400">Computer Science student at UIT</span>,
            passionate about <strong>full-stack web development</strong> and
            <strong> AI applications like natural language processing</strong>.
            I enjoy building practical tools that solve real-world problems,
            especially with modern web technologies like Node.js, Flask, and MongoDB.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
