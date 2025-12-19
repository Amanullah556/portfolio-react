import aboutImage from "../assets/about.jpeg";

function About() {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="container mx-auto px-6 lg:px-24">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase">
            About Me
          </h1>
        </div>

        {/* Image Left | Content Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-1">

          {/* LEFT IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96
                            rounded-2xl overflow-hidden border-4
                            border-indigo-500 shadow-xl">
              <img
                src={aboutImage}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="flex-1 flex flex-col justify-center
                       max-w-full lg:max-w-md xl:max-w-lg
                       text-center lg:text-left
                       m-0 p-0"
          >

            {/* PARAGRAPH 1 */}
            <p
              className="leading-relaxed mb-4
                         text-gray-400
                         text-sm sm:text-base lg:text-lg xl:text-xl
                         transition-all duration-300 ease-out
                         hover:text-blue-500 hover:scale-[1.02]"
            >
              I specialize in building modern, scalable, and user-friendly web
              applications. With a strong foundation in frontend technologies
              like React and Tailwind CSS, as well as experience in backend
              systems, I design and implement applications that are not only
              visually appealing but also performant and maintainable.
            </p>

            {/* PARAGRAPH 2 */}
            <p
              className="leading-relaxed
                         text-gray-400
                         text-sm sm:text-base lg:text-lg xl:text-xl
                         transition-all duration-300 ease-out
                         hover:text-blue-500 hover:scale-[1.02]"
            >
              I enjoy tackling challenging problems, writing clean code, and
              continuously learning new technologies to deliver real-world
              solutions. My goal is to contribute to impactful projects while
              expanding my skills as a full-stack software engineer.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
