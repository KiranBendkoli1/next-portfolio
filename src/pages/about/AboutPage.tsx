import CustomCard from "@/components/Cards/CustomCard";
import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.webp";

import CircleNavCard from "@/components/Cards/CircleNavCard";

const AboutPage = () => {
  return (
    <div className="container grid grid-cols-3 gap-2">
      <CustomCard>
        <div className="w-full h-[400px]">
          <div className="flex w-full justify-center">
            <Image
              src={profile}
              alt={"Kiran Bendkoli"}
              className="size-[200px] rounded-full"
            />
          </div>
          <h2 className="mt-8 text-xl">Hi, I'm Kiran Bendkoli</h2>
          <p className="mt-6">
            I'm a Software Engineer with 2 years of experience of building
            scalable frontend and micro frontend systems. Actively expanding
            into backend development.
          </p>
        </div>
      </CustomCard>
      <CustomCard>
        <CircleNavCard />
      </CustomCard>
      <div className="h-[600px] w-full row-span-2 bg-emerald-300">Hello</div>
      <div className="h-96 w-full  bg-amber-200">Hello</div>
      <div className="h-96 w-full bg-cyan-500">Hello</div>
    </div>
  );
};

export default AboutPage;
