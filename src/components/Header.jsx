import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-gray-900/80 border-b border-gray-700/50 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo with animation */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ocean
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
                {navLinks.map((link, index) => (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    onSetActive={() => setActiveSection(link.to)}
                    className="relative cursor-pointer group"
                  >
                    <motion.div
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeSection === link.to
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                      
                      {/* Active indicator */}
                      <AnimatePresence>
                        {activeSection === link.to && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -z-10"
                            layoutId="activeTab"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gray-700/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                    </motion.div>
                  </ScrollLink>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full mt-1 transition-all duration-300"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full mt-1 transition-all duration-300"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-lg border-l border-gray-700/50 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-20">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ScrollLink
                        to={link.to}
                        smooth={true}
                        duration={600}
                        offset={-80}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                      >
                        <motion.span
                          className="block"
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {link.label}
                        </motion.span>
                      </ScrollLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Social Links */}
                <motion.div
                  className="mt-8 pt-8 border-t border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    {['GitHub', 'LinkedIn', 'Email'].map((social) => (
                      <motion.div
                        key={social}
                        className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 cursor-pointer transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-xs font-medium">{social[0]}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;