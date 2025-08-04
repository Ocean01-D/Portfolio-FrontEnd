// src/sections/Contact.jsx
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form validation and UI state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [showToast, setShowToast] = useState(false);

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "23560085@gm.uit.edu.vn",
      link: "mailto:23560085@gm.uit.edu.vn",
      color: "text-blue-400"
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone", 
      value: "0971000000",
      link: "tel:0971000000",
      color: "text-green-400"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      link: null,
      color: "text-red-400"
    },
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      value: "facebook.com/Ocean",
      link: "https://facebook.com/Ocean",
      color: "text-blue-500"
    },
    {
      icon: <SiZalo />,
      label: "Zalo",
      value: "zalo.me/0971000000",
      link: "https://zalo.me/0971000000",
      color: "text-cyan-400"
    }
  ];

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/failure randomly for demo
      const isSuccess = Math.random() > 0.3; // 70% success rate for demo
      
      if (isSuccess) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
      
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toast notification component
  const Toast = ({ type, message, onClose }) => (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.8 }}
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg backdrop-blur-lg border max-w-sm ${
        type === 'success' 
          ? 'bg-green-500/20 border-green-500/50 text-green-100' 
          : 'bg-red-500/20 border-red-500/50 text-red-100'
      }`}
    >
      <div className="flex items-center gap-3">
        {type === 'success' ? (
          <FaCheckCircle className="text-green-400 text-xl" />
        ) : (
          <FaExclamationCircle className="text-red-400 text-xl" />
        )}
        <div className="flex-1">
          <p className="font-semibold">
            {type === 'success' ? 'Message Sent!' : 'Error Occurred'}
          </p>
          <p className="text-sm opacity-90">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
    </motion.div>
  );

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10 py-20 px-4 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%234F46E5%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M0%200h80v80H0V0zm20%2020v40h40V20H20zm20%2035a15%2015%200%201%201%200-30%2015%2015%200%200%201%200%2030z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-purple-400/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
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
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly conversation about technology and development.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  {contact.link ? (
                    <a
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    >
                      <div className={`text-2xl ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                      <div className={`text-2xl ${contact.color}`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="text-white font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Quick Response</span>
              </div>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. Looking forward to hearing from you!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              {/* Name Field */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-700/50 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-gray-600 focus:border-blue-400 focus:ring-blue-400/50'
                  }`}
                  placeholder="Your full name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    >
                      <FaExclamationCircle className="text-xs" />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-700/50 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-gray-600 focus:border-blue-400 focus:ring-blue-400/50'
                  }`}
                  placeholder="your@email.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    >
                      <FaExclamationCircle className="text-xs" />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-700/50 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-gray-600 focus:border-blue-400 focus:ring-blue-400/50'
                  }`}
                  placeholder="What's this about?"
                />
                <AnimatePresence>
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    >
                      <FaExclamationCircle className="text-xs" />
                      {errors.subject}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-700/50 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-gray-600 focus:border-blue-400 focus:ring-blue-400/50'
                  }`}
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    >
                      <FaExclamationCircle className="text-xs" />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-gray-400 text-sm text-center">
                * Required fields
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Notifications */}
      <AnimatePresence>
        {showToast && (
          <Toast
            type={submitStatus}
            message={
              submitStatus === 'success' 
                ? "Thanks for reaching out! I'll get back to you soon." 
                : "Something went wrong. Please try again or contact me directly."
            }
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;