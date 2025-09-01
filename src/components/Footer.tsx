import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-300 py-8 px-6 overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.2),transparent_70%)]" />
      {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-white tracking-wide">
          ✦ Connect with me ✦
        </h2>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/KiranBendkoli1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:kiranbendkoli24@gmail.com"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          © 2025 Kiran Bendkoli
        </p>
      </div>
    </footer>
  );
}
