
"use client"
import React from "react";
const HomePage = () => {
  return (
    <section
      id="home"
      className="grid py-12 grid-cols-1 h-screen md:grid-cols-2 max-w-6xl mx-auto relative"
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
        {/* TODO: Resume Download  */}
        <div className="py-12">

          <button className="gradient-btn">
            Download Resume
          </button>
        </div>
      </div>
      <div className="col-span-1 hidden sm:flex flex-col justify-center items-start text-start px-4">
        
      </div>
    </section>
  );
};

export default HomePage;
