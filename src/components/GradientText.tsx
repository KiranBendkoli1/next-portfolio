"use client";

import { motion } from "framer-motion";

const GradientText = ({
  children,
  gradientColors = ["#f6339a", "#a855f7", "#3b82f6"],
}: {
  children: React.ReactNode;
  gradientColors?: string[];
}) => {
  return (
    <motion.h1
      className="text-5xl md:text-6xl  font-bold whitespace-nowrap"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundImage: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </motion.h1>
  );
};

export default GradientText;
