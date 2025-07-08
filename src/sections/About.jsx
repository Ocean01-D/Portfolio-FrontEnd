// src/sections/About.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-gray-100 dark:bg-gray-800 py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Tiêu đề */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6"
        >
          About Me
        </motion.h2>

        {/* Đoạn giới thiệu */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center"
        >
          I'm a Computer Science student at UIT, passionate about full-stack web development
          and AI applications like natural language processing. I enjoy building practical tools
          that solve real-world problems, especially with modern web technologies.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
