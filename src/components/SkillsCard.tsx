import React from "react";
import { motion } from "framer-motion";
import {
  Typescript,
  Tailwindcss,
  ReactDark,
  Nodejs,
  ExpressjsDark,
  PostgresqlDark,
  Flutter,
  Git,
  GithubLight,
  Mongodb,
  PythonDark,
  JavaDark,
  PhpDark,
} from "./icons";

const skills = [
  Typescript,
  Tailwindcss,
  ReactDark,
  Nodejs,
  ExpressjsDark,
  PostgresqlDark,
  Flutter,
  Git,
  GithubLight,
  Mongodb,
  PythonDark,
  JavaDark,
  PhpDark,
];

const SkillsCard = () => {
  return (
    <>
      <h2 className="text-2xl font-medium mb-6">My Skills</h2>

      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 10, // slower = smoother
            repeat: Infinity,
          }}
        >
          {/* First row */}
          {skills.map((Icon, i) => (
            <div
              key={`row1-${i}`}
              className="flex justify-center items-center w-16 h-16"
            >
              <Icon />
            </div>
          ))}
          {/* Duplicate row for seamless loop */}
          {skills.map((Icon, i) => (
            <div
              key={`row2-${i}`}
              className="flex justify-center items-center w-16 h-16"
            >
              <Icon />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SkillsCard;
