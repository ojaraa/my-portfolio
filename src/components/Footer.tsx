
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { LiaGithub } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center accent-text text-sm gap-4 mb-20">
      <p>Copyright &copy; 2026 Ojara Favour</p>
      <div className="flex gap-6">
        <a
          href="https://github.com/ojaraa"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <LiaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/okereke-favour-230234198"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="https://x.com/ojarraa"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter size={20} />
        </a>

        <a
          href="mailto:ojarafavour@yahoo.com"
          className="hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
