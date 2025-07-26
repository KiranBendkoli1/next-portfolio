// 'use client';
import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
import Comment from "../components/Comment";
import profile from "@/assets/profile.webp";

export default function Home() {
  const description = `Frontend developer at Winjit Technologies with 2 years of experience building responsive web apps using React.js. Now expanding into backend to go full-stack.`;

  return (
    <section className="flex items-center border-b border-gray-600 justify-center px-4 py-12 text-white min-h-[80vh]">
      <div className="flex flex-col-reverse items-center justify-between w-full max-w-5xl gap-12 md:flex-row">
        <div className="flex-1 text-start  sm:text-center md:text-left">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-4xl">
            Hi, I’m <span className="text-primary">Kiran Bendkoli</span>
          </h1>
          <h2 className="mb-6 font-semibold text-gray-300 sm:text-xl md:text-2xl">
            {/* <TypeAnimation
              sequence={[
                "> Web developer",
                2000,
                "> Software engineer",
                2000,
                "> React developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl text-[#7dc3ff] font-mono"
            /> */}
          </h2>

          <Comment type="multi">{description}</Comment>
          <Comment type="single">find my profile on github: </Comment>
          <code>
            <span className="text-blue-600">const</span>{" "}
            <a
              href="https://github.com/KiranBendkoli1/"
              target="_blank"
              className="text-green-700"
            >
              githubLink
            </a>{" "}
            ={" "}
            <a
              href="https://github.com/KiranBendkoli1/"
              target="_blank"
              className="text-[#dc8c9a]"
            >
              "https://github.com/KiranBendkoli1/ "
            </a>
            ;
          </code>
        </div>

        {/* Image */}
        <div className="flex justify-center flex-1">
          <Image
            src={profile}
            alt="Kiran Bendkoli"
            className="object-cover w-40 h-40 border-4 border-orange-400 rounded-full shadow-lg sm:w-52 sm:h-52 md:w-72 md:h-72"
          />
        </div>
      </div>
    </section>
  );
}
