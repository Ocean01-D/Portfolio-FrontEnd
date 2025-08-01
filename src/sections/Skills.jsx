// src/sections/Skills.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillGroups = [
    {
      title: "Back-end skills",
      skills: [
        { name: "Node.js", level: 70, icon: <FaNodeJs /> },
        { name: "MongoDB", level: 65, icon: <FaDatabase /> },
        { name: "Express", level: 60 },
        { name: "NLP", level: 50 },
      ],
    },
    {
      title: "Front-end skills",
      skills: [
        { name: "JavaScript", level: 70, icon: <FaJsSquare /> },
        { name: "HTML", level: 50, icon: <FaHtml5 /> },
        { name: "CSS", level: 40, icon: <FaCss3Alt /> },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="bg-gray-900 py-20 px-4 text-gray-100 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-[#1e293b] rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-1">
                      <span className="flex items-center gap-2">
                        {skill.icon && (
                          <span className="text-blue-400 text-lg">
                            {skill.icon}
                          </span>
                        )}
                        {skill.name}
                      </span>
                      <span className="text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.1 * i }}
                        className="h-3 bg-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
