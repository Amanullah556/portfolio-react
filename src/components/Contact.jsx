import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypeWriter";

function Contact() {
  const text = useTypewriter("Have a question or want to work together? Fill out the form below.")
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.2, duration: 0.6 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase">
            Contact Me
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            {text}
          </p>
        </div>

        {/* Contact Form */}
        <motion.form
          className="max-w-2xl mx-auto bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            variants={itemVariants}
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;
