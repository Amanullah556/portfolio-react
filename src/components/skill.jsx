import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypeWriter";



function Skills() {

  const text = useTypewriter("A showcase of my skills with progress levels.",150)

  const skillCategories = [
    {
      category: "Frontend (Web)",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Responsive Design", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "REST APIs", level: 65 },
        { name: "Basic Backend Architecture", level: 60 },
      ],
    },
    {
      category: "App Development",
      skills: [
        { name: "Flutter", level: 70 },
        { name: "API Integration", level: 65 },
        { name: "Dart", level: 60 },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "C++", level: 65 },
      ],
    },
  ];

  return (
    
    <section id="skill" className="bg-black text-white py-24">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase">
            My Skills
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
           {text}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Single Skill Card Component with Progress Bars
function SkillCard({ category }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-2xl p-6 flex flex-col border border-gray-800 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold mb-4 text-center">{category.category}</h3>

      <div className="space-y-3">
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-300 text-sm">{skill.name}</span>
              <span className="text-indigo-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <motion.div
                className="bg-indigo-400 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
