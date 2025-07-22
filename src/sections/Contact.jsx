// src/sections/Contact.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-gray-100 dark:bg-gray-900 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Thông tin liên hệ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Contact Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to reach out to me through the form or contact info below.
          </p>
          <ul className="space-y-4 text-gray-800 dark:text-gray-200">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" /> 23560085@gm.uit.edu.vn
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" /> 0971000000
            </li>
            <li className="flex items-center gap-3">
              <FaFacebookF className="text-blue-600" /> facebook.com/Ocean
            </li>
            <li className="flex items-center gap-3">
              <SiZalo className="text-blue-600" /> zalo.me/0971000000
            </li>
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow space-y-6"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
