import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Backend Developer", "AI Fresher", "Game Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const floatingPositions = useMemo(() => (
    Array.from({ length: 6 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: Math.random() * 800,
      y: Math.random() * 600,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  ), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234F46E5%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{ x: pos.x, y: pos.y }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
            }}
            style={{
              left: pos.left,
              top: pos.top,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar */}
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-700/50 backdrop-blur-sm">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-8xl text-blue-400/80">👨‍💻</div>
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.p
              className="text-blue-400 font-medium mb-2 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ocean
            </motion.h1>

            {/* Animated Job Title */}
            <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
              <AnimatePresence initial={false}>
                <motion.p
                  key={currentText}
                  className="text-xl md:text-2xl text-gray-300 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {texts[currentText]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Computer Science student passionate about building scalable web applications
              and exploring AI technologies. Turning ideas into digital reality.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:text-blue-400 transition-colors">Get In Touch</span>
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {['GitHub', 'LinkedIn', 'Email'].map((social) => (
                <motion.div
                  key={social}
                  className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 cursor-pointer transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <span className="text-sm font-medium">{social[0]}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-gray-500 rounded-full"></div>
        </motion.div>
        <p className="text-gray-500 text-sm mt-2 text-center">Scroll</p>
      </motion.div>
    </section>
  );
};

export default Hero;
