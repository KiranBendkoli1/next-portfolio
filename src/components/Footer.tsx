import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-300 py-8 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.2),transparent_70%)]" />

      <div className="w-full flex items-center gap-4 max-w-6xl mx-auto">
        <a
          href="https://github.com/KiranBendkoli1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full bg-gradient-to-tr from-gray-800 via-gray-700 to-blue-500 p-2 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
        >
          <FaGithub className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full bg-gradient-to-tr from-gray-800 via-gray-700 to-blue-500 p-2 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
        >
          <FaLinkedin className="w-6 h-6 text-white" />
        </a>
        <a
          href="mailto:kiranbendkoli24@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="rounded-full bg-gradient-to-tr from-gray-800 via-gray-700 to-blue-500 p-2 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
        >
          <FaEnvelope className="w-6 h-6 text-white" />
        </a>
      </div>
    </footer>
  );
}
