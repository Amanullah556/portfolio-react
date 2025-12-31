// import heroImg from "../assets/hero.jpeg";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import useTypewriter from "../hooks/useTypeWriter";

// function Hero() {
//   const typedText = useTypewriter("Web Developer", 150);

//   // Generate stars randomly
//   const stars = Array.from({ length: 50 });
//   const shootingStars = Array.from({ length: 3 });

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-indigo-950 text-white min-h-screen flex items-center"
//     >
//       {/* 🌟 Twinkling Stars */}
//       {stars.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full bg-white"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//           animate={{ opacity: [0.2, 1, 0.2] }}
//           transition={{
//             duration: 2 + Math.random() * 3,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}

//       {/* 🌠 Shooting Stars */}
//       {shootingStars.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-white rounded-full"
//           style={{
//             top: `${Math.random() * 50}%`,
//             left: `-${Math.random() * 100}px`,
//           }}
//           animate={{ x: [0, 800], y: [0, 200], opacity: [1, 0] }}
//           transition={{
//             duration: 2 + Math.random() * 1,
//             repeat: Infinity,
//             repeatDelay: 3 + Math.random() * 2,
//           }}
//         />
//       ))}

//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 z-10">
//         {/* LEFT CONTENT */}
//         <div className="flex-1 text-center md:text-left">
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ type: "spring", bounce: 0.4, duration: 1 }}
//           >
//             <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400 animate-pulse">
//               🎆 Happy New Year 2026! 🎆
//             </h4>

//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 animate-pulse">
//               Aman Ullah
//             </h1>

//             <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-cyan-400 animate-bounce">
//               {typedText}
//             </h3>

//             <p className="text-gray-300 max-w-lg sm:text-lg md:text-xl leading-relaxed mb-6">
//               A passionate Software Engineer building modern web designing & development with scalable backend systems and clean, beautiful UI.
//             </p>
//           </motion.div>

//           {/* Buttons with sparkles */}
//           <div className="flex justify-center md:justify-start gap-6 mt-6 relative">
//             <a className="rounded-full border-2 border-indigo-600 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-indigo-600 transition transform hover:scale-105 relative overflow-hidden">
//               View Project
//               <span className="absolute top-0 left-0 w-full h-full pointer-events-none animate-ping rounded-full bg-white opacity-20"></span>
//             </a>

//             <a className="rounded-full border-2 border-indigo-600 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-indigo-600 transition transform hover:scale-105 relative overflow-hidden">
//               About Me
//               <span className="absolute top-0 left-0 w-full h-full pointer-events-none animate-ping rounded-full bg-white opacity-20"></span>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex-1 flex justify-center relative">
//           {/* Neon Glow */}
//           <motion.div
//             animate={{
//               boxShadow: [
//                 "0 0 20px 10px rgba(255, 215, 0, 0.4)",
//                 "0 0 40px 20px rgba(255, 69, 0, 0.6)",
//                 "0 0 20px 10px rgba(0, 191, 255, 0.4)",
//               ],
//             }}
//             transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
//             className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full top-1/2 -translate-y-1/2 -z-10"
//           ></motion.div>

//           {/* Profile Image */}
//           <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 lg:w-120 lg:h-120 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl relative">
//             <img src={heroImg} alt="Profile" className="w-full h-full object-cover" />
//             {/* Floating sparkles around image */}
//             {Array.from({ length: 6 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-2 h-2 bg-white rounded-full"
//                 style={{
//                   top: `${Math.random() * 80 + 10}%`,
//                   left: `${Math.random() * 80 + 10}%`,
//                 }}
//                 animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 2 + Math.random() * 1,
//                   delay: Math.random(),
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import heroImg from "../assets/hero.jpeg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useTypewriter from "../hooks/useTypeWriter";
import Confetti from "react-confetti";

function Hero() {
  const typedText = useTypewriter("Web Developer", 150);

  // ⭐ Window size (for confetti)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🌟 Stars
  const stars = Array.from({ length: 50 });
  const shootingStars = Array.from({ length: 3 });

  // 🎨 Confetti colors
  const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#8B5CF6", "#EC4899"];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-indigo-950 text-white min-h-screen flex items-center"
    >
      {/* 🎉 CONFETTI DECORATION */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={120}
        gravity={0.08}
        colors={googleColors}
        opacity={0.35}
      />

      {/* ✨ Floating festive icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * windowSize.width, opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute text-2xl opacity-20"
          >
            {["✨", "🎈", "🎉", "🎊", "⭐"][i % 5]}
          </motion.div>
        ))}
      </div>

      {/* 🌟 Twinkling Stars */}
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* 🌠 Shooting Stars */}
      {shootingStars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 50}%`,
            left: `-${Math.random() * 100}px`,
          }}
          animate={{ x: [0, 800], y: [0, 200], opacity: [1, 0] }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 2,
          }}
        />
      ))}

      {/* ================= MAIN CONTENT (UNCHANGED) ================= */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 z-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          >
            <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-400 animate-pulse">
              🎆 Happy New Year 2026! 🎆
            </h4>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 animate-pulse">
              Aman Ullah
            </h1>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-cyan-400 animate-bounce">
              {typedText}
            </h3>

            <p className="text-gray-300 max-w-lg sm:text-lg md:text-xl leading-relaxed mb-6">
              A passionate Software Engineer building modern web designing &
              development with scalable backend systems and clean, beautiful UI.
            </p>
          </motion.div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 relative">
            <a className="rounded-full border-2 border-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-600 transition transform hover:scale-105">
              View Project
            </a>

            <a className="rounded-full border-2 border-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-600 transition transform hover:scale-105">
              About Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center relative">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px 10px rgba(255, 215, 0, 0.4)",
                "0 0 40px 20px rgba(255, 69, 0, 0.6)",
                "0 0 20px 10px rgba(0, 191, 255, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full top-1/2 -translate-y-1/2 -z-10"
          />

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
            <img src={heroImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
