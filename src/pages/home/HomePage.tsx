
"use client"
import React from "react";
import dynamic from "next/dynamic";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Astronaut = dynamic(() => import("@/components/Scene1"));

const HomePage = () => {
  return (
    <section
      id="home"
      className="grid py-12 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto relative"
    >
      <div className="col-span-1 flex flex-col justify-center items-start text-start px-4">
        <h1 className="text-5xl font-bold ">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Kiran Bendkoli</span>
        </h1>
        <p className="text-lg  mt-4 max-w-2xl text-text-muted">
          Frontend developer at Winjit Technologies with 2 years of experience
          building responsive web apps using React.js. Continously expanding
          into backend development to go full-stack.
        </p>

        <div className="py-12 flex items-center gap-4">
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
      </div>
      <div className="col-span-1 hidden sm:flex flex-col justify-center items-start text-start px-4">
        <Astronaut />
      </div>
    </section>
  );
};

export default HomePage;
