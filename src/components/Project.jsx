import project1 from "../assets/portfolioImage.png";
import project2 from "../assets/EcommerceImage.png";
import project3 from "../assets/weatherImage.png";
import useTypewriter from "../hooks/useTypeWriter";


function Projects() {
  const text = useTypewriter("Some of the projects I have built using React & Tailwind CSS.")
  const projectList = [
    {
      title: "Portfolio Website",
      img: project1,
      desc: "A responsive personal portfolio built with React, Tailwind CSS, and Vite.",
      link: "#",
    },
    {
      title: "E-commerce App",
      img: project2,
      desc: "comming Soon.....",
      link: "#",
    },
    {
      title: "Weather APP",
      img: project3,
      desc: "comming Soon....",
      link: "#",
    },
  ];

  return (
    <section id="project" className="bg-black text-white py-2 mt-10 ">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">
            My Projects
          </h1>
          <p className="text-gray-400 mt-4">
            {text}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800
              shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  className="text-indigo-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
