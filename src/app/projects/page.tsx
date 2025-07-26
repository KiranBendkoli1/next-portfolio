'use client';
import { useState, useMemo } from "react";
import projects, { ProjectType } from "./data";
import ProjectCard from "@/components/ProjectCard";

const techList: string[] = [
  "Python",
  "ReactJs",
  "Flutter",
  "Android",
  "PHP",
  "NPM",
];

const Projects = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const filteredProjects: ProjectType[] = useMemo(() => {
    if (filters.length === 0) return projects;
    return projects.filter((project) =>
      filters.some((filter) =>
        project.domain.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
      ),
    );
  }, [filters]);

  const toggleFilter = (tech: string): void => {
    setFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  return (
    <div className="flex flex-col md:flex-row text-white min-h-[80vh] font-mono border-b border-gray-600">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 p-4 border-b md:border-b-0 md:border-r border-gray-600">
        <div className="mb-2 text-sm text-gray-400">Technologies</div>
        <div className="flex flex-wrap sm:flex-col gap-3">
          {techList.map((tech) => (
            <label
              key={tech}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="accent-black"
                checked={filters.includes(tech)}
                onChange={() => toggleFilter(tech)}
              />
              <span>{tech}</span>
            </label>
          ))}
        </div>
      </aside>

      <section className="w-full flex flex-col flex-1 sm:max-h-[80vh]">
        <div className="px-4 py-2 border-b border-gray-600 bg-gray-800/40">
          <span className="font-semibold">Projects</span>
        </div>
          <main className="flex-1 p-6 overflow-auto">
            <div className="grid grid-cols-1 gap-6 pr-2 overflow-y-auto sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </main>
      </section>
    </div>
  );
};
export default Projects;
