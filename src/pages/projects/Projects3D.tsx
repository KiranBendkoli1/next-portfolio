"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { projects } from "../../data/projects";
const MonitorScene = dynamic(() => import("@/components/MonitorScene"), {
  ssr: false,
});

const Projects3D = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [animatingProjects, setAnimatingProjects] = useState<number[]>([]);

  useEffect(() => {
    // Initially animate the first three projects
    const initialProjects = Array.from({ length: visibleProjects }, (_, i) => i);
    animateProjectsSequentially(initialProjects);
  }, []);

  const handleViewMore = () => {
    const nextBatch = Array.from(
      { length: 3 },
      (_, i) => i + visibleProjects
    ).filter(index => index < projects.length);
    
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
    animateProjectsSequentially(nextBatch);
  };

  const animateProjectsSequentially = (projectIndices: number[]) => {
    projectIndices.forEach((index, i) => {
      setTimeout(() => {
        setAnimatingProjects(prev => [...prev, index]);
      }, i * 300); // 300ms delay between each project
    });
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-white mb-4">My Projects</h2>
        </div>

        <div className="space-y-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.index}
              className={`flex flex-col md:flex-row items-center gap-x-4 gap-y-2 md:gap-8 p-2 sm:p-8 rounded-lg 
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                transition-all duration-500 ease-out
                ${animatingProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              {/* Left Column - Content */}
              <div className="flex-1 space-y-4">
                <div className="text-4xl font-bold text-accent-cyan">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{project.desc}</p>

                <div className="flex items-center space-x-4">
                  {
                    project.tech.map((tech, idx) => (
                      <div key={idx}>
                        <span className="inline-block px-3 py-1 text-sm font-medium text-gray-300 border border-gray-600 rounded">
                          {tech}
                        </span>
                      </div>
                    ))
                  }

                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm">Source</span>
                  </a>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="w-full sm:w-[500px] h-[300px] backdrop-blur-md bg-gray-900/60 border-white/10 shadow-lg rounded-lg">
                <MonitorScene
                  textureUrl={project.vid ? project.vid : project.img}
                />
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleViewMore}
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Click to view more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects3D;
