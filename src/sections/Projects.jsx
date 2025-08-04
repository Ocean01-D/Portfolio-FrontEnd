import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaCode, FaEye } from "react-icons/fa";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      title: "Auto-Grading AI Website",
      subtitle: "Featured Project",
      description: "An intelligent web application that automatically grades student answers using advanced Natural Language Processing. Built with Flask backend for robust API handling, integrated NLP models for accurate scoring, and a clean, intuitive frontend for seamless user experience.",
      tech: ["Flask", "NLP", "Python", "HTML/CSS", "Machine Learning"],
      link: "#",
      github: "#",
      featured: true,
      mockupType: "desktop", // desktop, mobile, both
    },
    {
      id: 2,  
      title: "Bookstore Website",
      subtitle: "Featured Project",
      description: "A comprehensive online bookstore platform featuring complete book catalog management, secure user authentication, shopping cart functionality, and order processing. Built with modern Node.js architecture and MongoDB for scalable data management.",
      tech: ["NodeJS", "ExpressJS", "MongoDB", "EJS", "Authentication"],
      link: "#",
      github: "https://github.com/Ocean01-D/BookStore", 
      featured: true,
      mockupType: "both",
    },
  ];

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * 1200,
            y: Math.random() * 800,
            rotate: 0,
            opacity: 0.1
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          <div className="w-4 h-4 text-blue-400/20">
            <FaCode />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const DeviceMockup = ({ type, children }) => {
    if (type === "desktop") {
      return (
        <div className="relative">
          {/* Desktop Frame */}
          <div className="bg-gray-800 rounded-t-lg p-3 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-white rounded aspect-video overflow-hidden">
              {children}
            </div>
          </div>
          {/* Desktop stand */}
          <div className="w-32 h-2 bg-gray-700 mx-auto rounded-b-lg"></div>
          <div className="w-48 h-3 bg-gray-800 mx-auto rounded-b-xl"></div>
        </div>
      );
    }

    if (type === "mobile") {
      return (
        <div className="relative">
          {/* Mobile Frame */}
          <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
            <div className="bg-white rounded-[1.5rem] aspect-[9/19] overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <DeviceMockup type="desktop">{children}</DeviceMockup>
        </div>
        <div className="w-32">
          <DeviceMockup type="mobile">{children}</DeviceMockup>
        </div>
      </div>
    );
  };

  const ProjectMockupContent = ({ project }) => (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-gray-400 text-4xl mb-4">
          <FaCode />
        </div>
        <h4 className="text-gray-600 font-semibold mb-2">{project.title}</h4>
        <p className="text-gray-400 text-sm">Project Preview</p>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="h-2 bg-gray-300 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 py-20 px-4 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234F46E5%22%20fill-opacity%3D%221%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 * index }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Mockup */}
              <motion.div
                className="flex-1 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="transform hover:rotate-1 transition-transform duration-500"
                  style={{
                    transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'
                  }}
                  whileHover={{
                    transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
                  }}
                >
                  <DeviceMockup type={project.mockupType}>
                    <ProjectMockupContent project={project} />
                  </DeviceMockup>
                </motion.div>

                {/* Floating tech badges */}
                <div className="absolute -top-4 -right-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="flex-1 max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                >
                  {/* Project Label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-700/50">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + i * 0.05 }}
                        className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-600/50 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEye className="group-hover:scale-110 transition-transform" />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.github}
                      className="group flex items-center gap-3 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="group-hover:scale-110 transition-transform" />
                      Source Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.button
            className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              View More Projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaExternalLinkAlt />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;