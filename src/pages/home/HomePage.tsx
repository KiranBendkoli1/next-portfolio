import GradientText from "@/components/GradientText";
import Typer from "@/components/Typer";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-3 ">
      <div className="min-h-screen  col-span-1 sm:col-span-2 flex flex-col justify-center items-start text-start text-white px-4">
        <GradientText>Kiran Bendkoli</GradientText>
        <p className="text-lg  mt-4 max-w-2xl">
          Frontend developer at Winjit Technologies with 2 years of experience
          building responsive web apps using React.js. Continously expanding
          into backend development to go full-stack.
        </p>
        <Typer />
        <Link
          href="/Kiran_Bendkoli_Resume.pdf"
          target="_blank"
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Download Resume
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
