import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import canyoufindImg from "../../assets/projects/canyoufind.png";
import recrunImg from "../../assets/projects/recrun.png";
import bookflowImg from "../../assets/projects/bookflow.svg";

const projects = [
  {
    name: "Canyoufind",
    image: canyoufindImg,
    description:
      "Interactive web platform for finding secret places. Register and take part in different types of quests, get game coins, be the first!",
    live: "https://canyoufind.fun",
    github: "https://github.com/papchenko/canyoufind",
  },
  {
    name: "Recrun",
    image: recrunImg,
    description:
      "A web platform for athletes. Accurately track every run, analyze your progress, and compete in organized team competitions.",
    live: "https://recruns.pro",
    github: "https://github.com/papchenko/recruns",
  },
  {
    name: "BookFlow",
    image: bookflowImg,
    description:
      "A fully-featured book marketplace where users can sell books as premium members or purchase books easily after registration.",
    live: "https://bookflow.guru",
    github: "https://github.com/papchenko/bookflow",
    invert: true,
  },
];

const Projects = () => {
  return (
      <section
        id="projects"
        className="scroll-mt-4 py-20 px-6 md:px-20 lg:px-32 bg-[radial-gradient(circle_at_top,_#0a0a0a,_#111)]"
      >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Projects
        </h2>
        <p className="text-white/60 mt-4 text-lg md:text-xl">
          Selected works showcasing my frontend development skills
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-500/40 transition duration-500 shadow-lg flex flex-col"
          >
            <div className="aspect-[16/10] flex items-center justify-center bg-black/40">
              <img
                src={project.image}
                alt={project.name}
                className={`max-h-28 md:max-h-32 transition ${
                  project.invert ? "invert" : ""
                }`}
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.name}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex gap-6 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 text-lg transition"
                >
                  <FaArrowUpRightFromSquare />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 text-lg transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;