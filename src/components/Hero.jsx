import heroImg from "../assets/hero.jpeg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useTypewriter from "../hooks/useTypeWriter";

function Hero() {

  // ONLY left content animation
  const leftContentAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  // Typewriter effect for "Web Developer"
  const fullText = "Web Developer";
    const typedText = useTypewriter("Web Developer", 150);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150); // speed of typing
    return () => clearInterval(interval);
  }, []);

  return (
    <section  id="home" className="bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            variants={leftContentAnimation}
            initial="hidden"
            animate="visible"
          >
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">
              Hi, I'M
            </h4>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
              Aman Ullah
            </h1>
        

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              {typedText}
           
            </h3>

            <p className="text-gray-300 max-w-lg sm:text-lg md:text-xl leading-relaxed mb-6">
              A passionate Software Engineer building modern web designing &amp;
              development with scalable backend systems and clean, beautiful UI.
            </p>
          </motion.div>

          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <a 
              href="#project"
              className="rounded-full border-2 border-indigo-600 px-6 py-3
                         text-sm sm:text-base font-semibold text-white
                         hover:bg-indigo-600 transition"
            >
              View Project
            </a>
            <a
              href="#about"
              className="rounded-full border-2 border-indigo-600 px-6 py-3
                         text-sm sm:text-base font-semibold text-white
                         hover:bg-indigo-600 transition"
            >
              About Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE WITH REACT CSS GLOW ANIMATION */}
        <div className="flex-1 flex justify-center relative">

          {/* Animated Glow */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px 10px rgba(0, 112, 244, 0.4)",
                "0 0 40px 20px rgba(0, 112, 244, 0.6)",
                "0 0 20px 10px rgba(0, 112, 244, 0.4)"
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80
                       rounded-full top-1/2 -translate-y-1/2 -z-10"
          ></motion.div>

          <div
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 lg:w-120 lg:h-120 md:h-80
                       rounded-full overflow-hidden border-4
                       border-indigo-500 shadow-xl"
          >
            <img
              src={heroImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
