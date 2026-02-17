import heroImg from "../assets/hero.jpeg";
import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypeWriter";

function Hero() {
  const typedText = useTypewriter("Web Developer", 150);

  return (
    <section
      id="home"
      className="bg-black text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-indigo-400">
            Hi, I'm
          </h4>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3">
            Aman Ullah
          </h1>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
            {typedText}
          </h3>

          <p className="text-gray-400 max-w-lg sm:text-lg md:text-xl leading-relaxed mb-6 mx-auto md:mx-0">
            A passionate Software Engineer building modern web applications 
            with scalable backend systems and clean, beautiful UI.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <a
              href="#project"
              className="rounded-full border-2 border-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-600 transition transform hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#about"
              className="rounded-full border-2 border-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-600 transition transform hover:scale-105"
            >
              About Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE (BIGGER) */}
        <div className="flex-1 flex justify-center relative">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px 20px rgba(79,70,229,0.4)",
                "0 0 70px 35px rgba(79,70,229,0.6)",
                "0 0 40px 20px rgba(79,70,229,0.4)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full top-1/2 -translate-y-1/2 -z-10"
          />

          <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl">
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
