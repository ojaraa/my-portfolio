import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCircleCheck, FaSquareXTwitter } from "react-icons/fa6";
import { TbFileDownload } from "react-icons/tb";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import { experience } from "../data";
import resume from "/Okereke_Favour_Ojara_Resume.pdf";
import { motion } from "motion/react";

const Home = () => {
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
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="relative inline-block">
                <img
                  src="/assets/me.jpg"
                  alt="Profile Picture"
                  className="w-32 h-32 rounded-full border-4 border-[#0B0E14] object-cover shadow-2xl"
                />
                <div className="absolute bottom-2 right-55  p-1.5 rounded-full ">
                  <FaCircleCheck className=" text-blue-500" size={16} />
                </div>
              </div>
              <div>
                <motion.h1
                  className="text-4xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                >
                  Okereke Favour Ojara
                </motion.h1>
                <p className="text-xl text-[#94A3B8] mt-1">
                  Frontend Developer
                </p>
              </div>
            </div>

            <div className="flex gap-3 pb-2">
              <a
                href={resume}
                // download={resume}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2.5 rounded-lg font-medium transition"
              >
                <TbFileDownload size={20} />
                Resume
              </a>

              <a
                href="mailto:ojarafavour@yahoo.com"
                className="flex items-center gap-2 bg-white text-black hover:bg-slate-100 px-6 py-2.5 rounded-lg font-medium transition"
              >
                <MdOutlineMail size={20} />
                Contact me
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
                About Me
              </h2>

              <p className="text-lg leading-relaxed text-[#94A3B8] mb-1.5">
                I’m a frontend developer with a B.Sc. in Computer Science and
                over 2 years of experience building modern web applications with
                React. I enjoy turning complex requirements into clean,
                functional, and scalable user interfaces.
              </p>

              <p className="text-lg leading-relaxed text-[#94A3B8] mb-1.5">
                I am constantly improving my craft by building functional
                projects, integrating APIs, and refining how I structure and
                reason about frontend applications.
              </p>

              <p className="text-lg leading-relaxed text-[#94A3B8]">
                My core technologies are: React.js, TypeScript, Next.js,
                Firebase, Redux ToolKit, Tailwind CSS.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
                  Email
                </h4>
                <a
                  href="mailto:ojarafavour@yahoo.com"
                  target="_blank"
                  className="text-sm font-medium"
                >
                  ojarafavour@yahoo.com
                </a>
              </div>

              <div>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
                  Location
                </h4>
                <p className="text-sm font-medium">(GMT+1)</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
                  Connect
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://github.com/ojaraa"
                    target="_blank"
                    className="text-sm text-[#94A3B8] hover:text-white flex items-center gap-2"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/okereke-favour-230234198"
                    className="text-sm text-[#94A3B8] hover:text-white flex items-center gap-2"
                    target="_blank"
                  >
                    <FaLinkedin size={20} />
                    LinkedIn
                  </a>

                  <a
                    href="https://x.com/ojarraa"
                    target="_blank"
                    className="text-sm text-[#94A3B8] hover:text-white flex items-center gap-2"
                  >
                    <FaSquareXTwitter size={20} />X (Twitter)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectsSection />

        <section id="experience" className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((item, index) => (
              <div
                className="glass-card p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
                key={index}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 font-bold">
                    {item.company.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.role}</h4>
                    <p className="text-sm font-medium text-[#94A3B8]">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <span className="block text-sm font-semibold text-white mb-1 md:mb-0">
                    {item?.startDate} — {item?.endDate}
                  </span>
                  <span className="block text-xs text-[#94A3B8]">
                    {item?.location} ({item?.roleType})
                  </span>
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

export default Home;
