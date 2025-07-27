"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typer = () => {
  return (
    <TypeAnimation
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
    />
  );
};

export default Typer;
