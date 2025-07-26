import React, { FC } from "react";
import { ProjectType } from "../app/projects/data";
import { FaGithub, FaNpm, FaReact, FaPython, FaPhp } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
import { IoLogoAndroid } from "react-icons/io";

type iconsMappingKeys = "reactjs" | "npm" | "flutter" | "python" | "php";
const iconsMapping = {
  reactjs: (
    <div className="p-3 bg-cyan-900 rounded-lg">
      <FaReact className="text-cyan-300 text-xl hover:scale-120  transition-all ease-in-out" />
    </div>
  ),
  npm: (
    <div className="p-3 bg-red-900 rounded-lg">
      <FaNpm className="text-red-300 text-xl hover:scale-120  transition-all ease-in-out" />
    </div>
  ),
  flutter: (
    <div className="p-3 bg-blue-900 rounded-lg">
      <FaFlutter className="text-blue-300 text-xl hover:scale-120  transition-all ease-in-out" />
    </div>
  ),
  python: (
    <div className="p-3 bg-yellow-900 rounded-lg">
      <FaPython className="text-yellow-300 text-xl hover:scale-120  transition-all ease-in-out" />
    </div>
  ),
  php: (
    <div className="p-3 bg-indigo-900 rounded-lg">
      <FaPhp className="text-indigo-300 text-xl hover:scale-120  transition-all ease-in-out" />
    </div>
  ),
  android: (
    <div className="p-3 bg-green-900 rounded-lg">
      <IoLogoAndroid className="text-green-300 text-xl hover:scale-120  transition-all ease-in-out" />
    </div>
  ),
};
const ProjectCard: FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div key={project.title}>
      <span className="text-gray-400 truncate">
        // _{project.title.toLowerCase().replace(/\s+/g, "-")}
      </span>
      <div className="border border-[#3c3c3c] bg-opacity-30 backdrop-blur-md  rounded-xl overflow-hidden shadow-md hover:shadow-lg transition relative">
        <Image
          src={project.img}
          alt={project.title}
          className="object-cover w-full h-40"
        />
        <div className="absolute top-2 right-2">
          {iconsMapping[project?.domain?.toLowerCase() as iconsMappingKeys]}
        </div>
        <div className="p-4 min-h-48">
          <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
          <p className="mb-4 text-sm text-gray-300">{project.desc}</p>
          <div className="flex justify-start gap-x-2 text-sm absolute bottom-2">
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:underline"
            >
              <FaGithub size={24} />
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-400 hover:underline"
              >
                <GoLinkExternal size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
