
"use client"
import React from "react";
import dynamic from "next/dynamic";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import AstroDestroyer from "@/components/AstroDestroyer";

const Astronaut = dynamic(() => import("@/components/Scene1"));

const HomePage = () => {

  const handleLinkClick = (url: string, isEmail: boolean = false) => {
    if (isEmail) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="home"
      className="grid py-12 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto relative"
    >
      <div className="col-span-1 flex flex-col justify-center items-start text-start px-4">
        <h1 className="text-5xl font-bold ">
          Hi, I am <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Kiran Bendkoli</span> <span className="text-4xl text-gray-300">Full Stack Developer</span>
        </h1>
        <p className="text-lg mt-4 max-w-2xl text-text-muted">
          Experienced Frontend Developer at Winjit Technologies with 2+ years of expertise in
          building modern, responsive web applications using React.js.
          Currently expanding into full-stack development with Node.js and Express.js to deliver
          comprehensive web solutions.
        </p>

        <div className="w-full flex items-center py-12 gap-6 max-w-6xl mx-auto">
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
      </div>
      <div className="col-span-1 flex justify-center items-start text-start px-4">
        {/* <Astronaut />
         */}
        <AstroDestroyer />
      </div>
    </section>
  );
};

export default HomePage;
