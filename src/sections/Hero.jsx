import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 gap-10 bg-gray-900 text-gray-100 transition-colors duration-500"
    >
      {/* Ảnh đại diện */}
      <motion.div
        className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/your-image.jpg" // thay sau
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Nội dung bên phải */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <p className="text-gray-400">Programmer | Back-end Developer</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ocean
        </h1>
        <p className="text-gray-300 mb-6">
          Dynamic team leader experienced in project management, Node.js, and MongoDB.
          Passionate about building practical web applications and solving real-world problems.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Portfolio
          </button>
          <button className="px-6 py-2 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-800 transition">
            Contact
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
