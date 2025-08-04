// src/sections/About.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  FaUserCircle, 
  FaGraduationCap, 
  FaCode, 
  FaBrain,
  FaRocket,
  FaHeart,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDownload,
  FaEye
} from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    { number: "2+", label: "Projects Completed", icon: <FaCode /> },
    { number: "2+", label: "Years Learning", icon: <FaGraduationCap /> },
    { number: "10+", label: "Technologies", icon: <FaBrain /> },
    { number: "100%", label: "Passion Level", icon: <FaHeart /> },
  ];

  const timeline = [
    {
      year: "2027",
      title: "Graduation Goal",
      description: "Expected to graduate from UIT with Computer Science degree, ready to start professional career",
      technologies: ["Advanced Projects", "Thesis", "Industry Ready"],
      achievement: "Bachelor's Degree in Computer Science",
      color: "from-gold-400 to-yellow-400",
      status: "upcoming"
    },
    {
      year: "2025",
      title: "First Major Projects",
      description: "Completed first significant projects including Auto-Grading AI Website and Bookstore Management System",
      technologies: ["Node.js", "Flask", "NLP", "MongoDB"],
      achievement: "Successfully built full-stack applications",
      color: "from-emerald-400 to-teal-400",
      status: "completed"
    },
    {
      year: "2024",
      title: "Started Computer Science at UIT",
      description: "Began my formal Computer Science education, diving deeper into programming fundamentals and web development",
      technologies: ["Data Structures", "Algorithms", "Web Development"],
      achievement: "Enrolled in Computer Science program",
      color: "from-blue-400 to-cyan-400",
      status: "completed"
    },
    {
      year: "2023",
      title: "High School Graduation & First Code",
      description: "Graduated from high school and discovered my passion for programming. Started learning HTML, CSS, and JavaScript",
      technologies: ["HTML", "CSS", "JavaScript", "Basic Programming"],
      achievement: "First lines of code written",
      color: "from-green-400 to-blue-400",
      status: "completed"
    }
  ];

  const interests = [
    { name: "Web Development", icon: "🌐", description: "Building modern, scalable applications" },
    { name: "AI & Machine Learning", icon: "🤖", description: "Exploring NLP and intelligent systems" },
    { name: "Problem Solving", icon: "🧩", description: "Creating solutions for real-world challenges" },
    { name: "Continuous Learning", icon: "📚", description: "Always exploring new technologies" },
  ];

  const TabButton = ({ id, label, isActive, onClick }) => (
    <motion.button
      onClick={() => onClick(id)}
      className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
        isActive 
          ? "text-white" 
          : "text-gray-400 hover:text-gray-200"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeAboutTab"
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.button>
  );

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10 py-20 px-4 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%234F46E5%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M20%2020c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010zm10%200c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center group hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="text-3xl text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
            <TabButton 
              id="story" 
              label="My Story" 
              isActive={activeTab === "story"} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="timeline" 
              label="Journey" 
              isActive={activeTab === "timeline"} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="interests" 
              label="Interests" 
              isActive={activeTab === "interests"} 
              onClick={setActiveTab} 
            />
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* My Story Tab */}
          {activeTab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Avatar & Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center lg:text-left"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <div className="relative w-48 h-48 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center border-4 border-gray-700/50">
                    <FaUserCircle className="text-8xl text-blue-400/80" />
                  </div>
                </div>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <FaGraduationCap className="text-blue-400" />
                    <span>Computer Science Student at UIT</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <FaCalendarAlt className="text-blue-400" />
                    <span>Class of 2025</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                  <motion.button
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload />
                    Download CV
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-3 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye />
                    View Portfolio
                  </motion.button>
                </div>
              </motion.div>

              {/* Story Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <FaRocket className="text-blue-400" />
                    Hello, I'm Ocean! 👋
                  </h3>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      I'm a passionate <span className="text-blue-400 font-semibold">Computer Science student at UIT</span>, 
                      deeply fascinated by the intersection of technology and creativity. My journey began with curiosity 
                      about how websites work, and it has evolved into a love for building full-stack applications.
                    </p>
                    
                    <p>
                      What drives me most is <span className="text-purple-400 font-semibold">problem-solving through code</span>. 
                      Whether it's developing an AI-powered grading system or creating a seamless bookstore management 
                      platform, I find joy in turning complex challenges into elegant, user-friendly solutions.
                    </p>
                    
                    <p>
                      Currently, I'm exploring the exciting world of <span className="text-green-400 font-semibold">
                      Natural Language Processing</span> and its applications, while continuously improving my 
                      full-stack development skills with modern technologies like Node.js, React, and MongoDB.
                    </p>

                    <p>
                      When I'm not coding, you'll find me learning about new technologies, contributing to open-source 
                      projects, or brainstorming the next big idea that could make a difference in people's lives.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Journey Timeline Tab */}
          {activeTab === "timeline" && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className="relative flex items-start gap-8 pb-12"
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center font-bold text-white text-sm shadow-lg`}>
                      {item.year}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h4>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                            item.status === 'completed' 
                              ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                              : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                          }`}
                        >
                          {item.status === 'completed' ? '✓ Completed' : '🎯 Goal'}
                        </motion.div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Achievement */}
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-yellow-400">🏆</span>
                        <span className="text-yellow-300 font-medium">Key Achievement:</span>
                        <span className="text-gray-300">{item.achievement}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Current Goals */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
                >
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FaRocket className="text-blue-400" />
                    Current Focus & Near-term Goals
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Master React & modern frameworks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Learn Python & AI basics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Build more projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">Excel in CS coursework</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Interests Tab */}
          {activeTab === "interests" && (
            <motion.div
              key="interests"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {interest.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{interest.name}</h4>
                  <p className="text-gray-300 leading-relaxed">{interest.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;