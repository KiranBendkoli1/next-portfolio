"use client"; // temp
import CustomCard from "@/components/Cards/CustomCard";
import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.webp";

import CircleNavCard from "@/components/Cards/CircleNavCard";
import ExperienceCard from "@/components/Cards/ExperienceCard";

import SkillsCard from "@/components/SkillsCard";
const AboutPage = () => {
  return (
    <div className="pt-0 sm:pt-16 grid grid-cols-1 md:grid-cols-3 gap-2">
      <CustomCard>
        <div className="h-[290px]">
          <div className="flex w-full mt-0 pt-0 justify-center">
            <Image
              src={profile}
              alt={"Kiran Bendkoli"}
              className="size-[150px] rounded-full"
            />
          </div>
          <h2 className="mt-6 text-xl">Hi, I'm Kiran Bendkoli</h2>
          <p className="mt-4">
            I'm a Software Engineer with 2 years of experience of building
            scalable frontend and micro frontend systems. Actively expanding
            into backend development.
          </p>
        </div>
      </CustomCard>
      <CustomCard>
        <CircleNavCard />
      </CustomCard>
      <div className="row-span-2">
        <CustomCard>
          <ExperienceCard />
        </CustomCard>
      </div>
      <div className="w-full col-span-1 md:col-span-2">
        <CustomCard className="max-w-full">
          <SkillsCard />
        </CustomCard>
      </div>
    </div>
  );
};

export default AboutPage;
