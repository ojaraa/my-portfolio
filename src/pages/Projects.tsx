import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { LiaGithub } from "react-icons/lia";
import { projects } from "../data";

import Footer from "../components/Footer";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div className="">
      <div className="w-full h-75 md:h-60 overflow-hidden relative ">
        <img
          src="/assets/banner.jpg"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0E14] to-transparent"></div>
      </div>

      <main className="max-w-5xl mx-auto px-6 -mt-32 relative z-10">
        <section id="projects" className="mb-20">
          <h2 className="font-bold uppercase tracking-widest text-center text-3xl">
            MY PROJECTS
          </h2>
          <div className="flex justify-between items-end mt-8 mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-blue-400"
            >
              <FaArrowLeft />
              back
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div className="glass-card overflow-hidden group " key={index}>
                <div className="h-55 p-2 ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" rounded-lg group-hover:scale-105 transition-transform duration-500  "
                  />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center pt-3">
                    <a
                      target="_blank"
                      href={project?.projectLink}
                      rel="noopener noreferrer"
                      className="inline-flex  items-center"
                    >
                      <h3 className="font-bold mb-1 text-xl mr-1.5">
                        {project?.title}
                      </h3>
                      {project.status && (
                        <div className="inline-flex gap-1.5 items-center">
                          <span className="text-green-500">•</span>

                          <span className="text-green-500 text-xs">
                            {project.status}
                          </span>
                        </div>
                      )}
                    </a>
                    <div className="flex items-center gap-3 my-2">
                      <a
                        href={project.gitHub}
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LiaGithub size={20} />
                      </a>
                      <a
                        href={project.projectLink}
                        className=""
                        target="_blank"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-6  mb-4">
                    {project?.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {project.stack.map((item, index) => (
                      <span
                        className="text-[10px] uppercase font-bold tracking-tighter border border-white/10 px-2 py-1 rounded"
                        key={index}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Projects;
