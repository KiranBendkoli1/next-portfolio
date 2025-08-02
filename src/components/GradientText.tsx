"use client";

import { motion } from "framer-motion";

const GradientText = ({
  children,
  gradientColors = ["#FFAD60", "#FF6B3E", "#FF4E50"],
}: {
  children: React.ReactNode;
  gradientColors?: string[];
}) => {
  return (
    <motion.div
      className="text-4xl font-bold whitespace-nowrap"
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
    </motion.div>
  );
};

export default GradientText;
