import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaNodeJs, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaPython,
  FaReact,
  FaFigma,
  FaLinux,
  FaCode,
  FaTools,
  FaCloud,
  FaPalette
} from "react-icons/fa";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillGroups = [
    {
      title: "Back-end skills",
      skills: [
        { name: "Node.js", level: 70, icon: <FaNodeJs /> },
        { name: "MongoDB", level: 65, icon: <FaDatabase /> },
        { name: "Express", level: 60, icon: <FaCode /> },
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

  const otherSkills = [
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
    { name: "Tailwind", icon: <FaPalette />, color: "text-cyan-400" },
    { name: "VS Code", icon: <FaCode />, color: "text-blue-500" },
    { name: "Postman", icon: <FaTools />, color: "text-orange-400" },
    { name: "Vercel", icon: <FaCloud />, color: "text-white" },
    { name: "Figma", icon: <FaFigma />, color: "text-purple-400" },
    { name: "Linux", icon: <FaLinux />, color: "text-yellow-300" },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="bg-gray-900 py-20 px-4 text-gray-100 font-sans"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Skills - Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-[#1e293b] rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                      <span className="flex items-center gap-2">
                        {skill.icon && (
                          <span className="text-blue-400 text-lg">
                            {skill.icon}
                          </span>
                        )}
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.3 + (0.1 * i),
                          ease: "easeOut"
                        }}
                        className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                      >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-50"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills - Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Other Skills & Tools
          </h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 + (index * 0.05),
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group flex flex-col items-center justify-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 hover:bg-gray-800/70 cursor-pointer transition-all duration-300"
              >
                {/* Icon */}
                <div className={`text-3xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                
                {/* Name */}
                <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-medium">
                  {skill.name}
                </span>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-4 text-gray-500"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
              <span className="text-sm font-medium">Always learning more</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;