"use client";


import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  const handleLinkClick = (url: string, isEmail: boolean = false) => {
    if (isEmail) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="relative w-full bg-black text-gray-300 py-8 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.2),transparent_70%)]" />

      <div className="w-full flex items-center justify-center gap-6 max-w-6xl mx-auto">
        <button
          onClick={() => handleLinkClick('https://github.com/KiranBendkoli1')}
          aria-label="Visit my GitHub profile"
          className="rounded-full bg-gradient-to-tr z-10 from-gray-800 via-gray-700 to-blue-500 p-2.5 shadow-md 
            transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
            active:scale-95"
        >
          <FaGithub className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={() => handleLinkClick('https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/')}
          aria-label="Connect with me on LinkedIn"
          className="rounded-full bg-gradient-to-tr z-10 from-gray-800 via-gray-700 to-blue-500 p-2.5 shadow-md 
            transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
            active:scale-95"
        >
          <FaLinkedin className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={() => handleLinkClick('mailto:kiranbendkoli24@gmail.com', true)}
          aria-label="Send me an email"
          className="rounded-full bg-gradient-to-tr z-10 from-gray-800 via-gray-700 to-blue-500 p-2.5 shadow-md 
            transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
            active:scale-95"
        >
          <FaEnvelope className="w-6 h-6 text-white" />
        </button>
      </div>
    </footer>
  );
}
