"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "./data";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects3D = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleViewMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
        </div>

        <div className="space-y-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.index}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg border border-gray-700 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Left Column - Content */}
              <div className="flex-1 space-y-4">
                <div className="text-4xl font-bold text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{project.desc}</p>

                <div className="flex items-center space-x-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-gray-300 border border-gray-600 rounded">
                    {project.domain}
                  </span>
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
              <div className="flex-shrink-0">
                <div className="relative w-80 h-48 rounded-lg overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                    width={320}
                    height={192}
                  />
                </div>
              </div>
            </motion.div>
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
