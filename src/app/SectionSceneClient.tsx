"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import HomePage from "@/pages/home/HomePage";

export type SectionType = "home" | "about" | "projects" | "contact";
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const SECTIONS = ["home", "about", "projects", "contact"];

export default function SectionSceneClient() {
  const [currentSection, setCurrentSection] = useState<SectionType>("home");
  const sectionRefs = useRef<any>({});

  console.log({ currentSection });
  useEffect(() => {
    const handleScroll = () => {
      let found: SectionType = "home";
      for (const id of SECTIONS) {
        const el = sectionRefs.current[id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            found = id as SectionType;
            break;
          }
        }
      }
      setCurrentSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="text-white min-h-screen relative">
      <div className="absolute h-full">
        <Scene section={currentSection} />
      </div>
      <section
        id="home"
        ref={(el) => {
          sectionRefs.current["home"] = el;
        }}
        className="h-screen w-screen flex items-center justify-center"
      >
        <HomePage />
      </section>
      <section
        id="about"
        ref={(el) => {
          sectionRefs.current["about"] = el;
        }}
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl">About</h1>
      </section>
      <section
        id="projects"
        ref={(el) => {
          sectionRefs.current["projects"] = el;
        }}
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl">Projects</h1>
      </section>
      <section
        id="contact"
        ref={(el) => {
          sectionRefs.current["contact"] = el;
        }}
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl">Contact</h1>
      </section>
    </main>
  );
}
