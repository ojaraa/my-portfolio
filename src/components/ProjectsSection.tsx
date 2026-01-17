
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { LiaGithub } from 'react-icons/lia'
import { Link } from 'react-router'
import { projects } from '../data'

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-20">
          <div className="flex justify-between items-end mt-8 mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              My Projects
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-white  hover:text-blue-400"
            >
              View all projects 
              <FaArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0,4).map((project, index) => (
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
                    <h3 className="font-bold mb-1 text-xl">{project?.title}</h3>
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
  )
}

export default ProjectsSection