import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypeWriter";

function Experience() {
  const text = useTypewriter("Skills and technologies I have hands-on experience with.",120)
  const experienceCards = [
    {
      title: "Frontend",
      details: [
        "Building responsive UI with HTML, CSS & JavaScript",
        "Creating interactive web apps with React",
        "Implementing responsive layouts with Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      details: [
        "Node.js server-side development",
        "REST API design & integration",
        "Understanding basic backend architecture",
      ],
    },
    {
      title: "App Development",
      details: [
        "Building cross-platform apps with Flutter",
        "API integration in mobile apps",
        "Writing maintainable code in Dart",
      ],
    },
    {
      title: "Programming Languages",
      details: [
        "JavaScript for web development",
        "Python for scripting & automation",
        "C++ for algorithm & data structure",
      ],
    },
  ];

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

    <section id="experience" className="bg-black text-white py-24">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase">
            My Experience
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            {text}
          </p>
        </div>

        {/* Experience Cards */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experienceCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-lg hover:scale-105 transform transition duration-300"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{card.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {card.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;
