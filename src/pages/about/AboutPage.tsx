"use client";
import CustomCard from "@/components/Cards/CustomCard";
import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.webp";
import ExperienceCard from "@/components/Cards/ExperienceCard";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiExpress, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import OrbitSkills from "@/components/OrbitSkills";
import GitHubCalendar from "react-github-calendar";

const AboutPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 sm:gap-x-2  sm:gap-2 max-w-6xl mx-auto">
      <CustomCard className="mx-2 sm:mx-0">
        <div >
          <div className="flex w-full mt-0 pt-0 justify-center">
            <Image
              src={profile}
              alt={"Kiran Bendkoli"}
              className="size-[250px] rounded-full"
            />
          </div>
          <p className="mt-4">
            I’m a software engineer based in Nashik, India, with around 2 years of experience working on frontends with React.js. Recently, I’ve been exploring backend development using Node.js and Express, and I also enjoy building Android apps with Flutter.
          </p>

        </div>
      </CustomCard>
      <CustomCard className="mx-2 sm:mx-0">
        <h2 className="text-2xl font-medium mb-6">My Skills</h2>
        <OrbitSkills
          rings={[
            {
              radius: 80,
              duration: 28,
              items: [
                { name: "React", icon: <FaReact size={22} /> },
                { name: "JavaScript", icon: <SiJavascript size={22} /> },
                { name: "TypeScript", icon: <SiTypescript size={22} /> },
                { name: "Tailwindcss", icon: <SiTailwindcss size={22} /> },
                { name: "NextJs", icon: <SiNextdotjs size={22} /> },
              ],
            },
            {
              radius: 150,
              reverse: true,
              duration: 36,
              items: [
                { name: "Node.js", icon: <SiNodedotjs size={22} /> },
                { name: "Express", icon: <SiExpress size={22} /> },
                { name: "PostgreSQL", icon: <SiPostgresql size={22} /> },
                { name: "Git", icon: <FaGitAlt size={22} /> },
                { name: "GitHub", icon: <FaGithub size={22} /> },
                { name: "Flutter", icon: <FaFlutter size={22} /> },
              ],
            },
          ]}
        />
      </CustomCard>
      <CustomCard className="mx-2 sm:mx-0">
        <ExperienceCard />
      </CustomCard>
      <CustomCard className="col-span-1 sm:col-span-3 mx-2 sm:mx-0">
        <div className="p-6 rounded-2xl shadow overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">Github Stats (Professional)</h2>
          <p className="text-sm pb-2">My personal GitHub isn’t the full story — here are my work contributions.</p>
          <p>User name : KiranBendkoli</p>
          <GitHubCalendar
            username="KiranBendkoli"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </div>
      </CustomCard>

    </div>
  );
};

export default AboutPage;
