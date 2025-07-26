import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex flex-wrap items-center justify-start text-lg">
        <span className="px-4 border-r border-gray-600 text-[#62728e]">find me in:</span>

        <a
          href="https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-2 transition  border-r border-gray-600 hover:scale-110"
        >
          <FaLinkedin size={28} color="#62728e" />
        </a>

        <a
          href="https://github.com/KiranBendkoli1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-2 transition border-r border-gray-600 hover:scale-110"
        >
          <FaGithubSquare size={28} color={"#62728e"}/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
