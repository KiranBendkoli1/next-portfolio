"use client"
import React from "react";
import { motion } from "framer-motion";

export type OrbitItem = { name: string; icon: React.ReactNode };

export interface OrbitRingProps {
  radius: number;
  size?: number;
  duration?: number;
  reverse?: boolean;
  items: OrbitItem[];
}

export interface OrbitSkillsProps {
  center?: {
    label?: string;
    icon?: React.ReactNode;
  };
  rings: OrbitRingProps[];
  className?: string;
}

const OrbitSkills: React.FC<OrbitSkillsProps> = ({ rings, className = "" }) => {
  return (
    <div
      className={`relative isolate aspect-square w-full max-w-[250px] md:max-w-[400px] mx-auto select-none ${className}`}
      aria-label="Skills orbit visualization"
      role="img"
    >
      {/* Orbit rings */}
      {rings?.map((ring, i) => (
        <OrbitRing key={i} {...ring} />
      ))}

      {/* Reduced motion CSS */}
      <style>{`@media (prefers-reduced-motion: reduce) { [data-anim="spin"] { animation: none !important; } }`}</style>
    </div>
  );
};

function OrbitRing({ radius, size = 56, duration = 24, reverse = false, items = [] }: OrbitRingProps) {
  const step = 360 / Math.max(items.length, 1);

  const ringStyle: React.CSSProperties = {
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    left: `calc(50% - ${radius}px)`,
    top: `calc(50% - ${radius}px)`,
    borderColor: "rgba(255,255,255,0.12)",
  };

  return (
    <div className="absolute" style={ringStyle} aria-hidden>
      {/* Ring outline */}
      <div className="absolute inset-0 rounded-full border" />

      {/* Rotating carrier */}
      <motion.div
        className="absolute inset-0"
        data-anim="spin"
        style={{ originX: 0.5, originY: 0.5 }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        {items.map((item, idx) => (
          <OrbitIcon
            key={idx}
            angle={idx * step}
            radius={radius}
            size={size}
            name={item.name}
            icon={item.icon}
            counterRotate={!reverse}
            duration={duration}
          />
        ))}
      </motion.div>
    </div>
  );
}
function OrbitIcon({ angle, radius, size, name, icon, counterRotate, duration }: {
  angle: number;
  radius: number;
  size: number;
  name: string;
  icon: React.ReactNode;
  counterRotate: boolean;
  duration: number;
}) {
  const wrapperStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    left: `calc(50% - ${size / 2}px)`,
    top: `calc(50% - ${size / 2}px)`,
    transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
  };

  return (
    <div className="absolute" style={wrapperStyle} title={name}>
      {/* Counter-rotation so icons stay upright while orbiting */}
      <motion.div
        className="group w-full h-full rounded-full bg-bg border border-white/20 shadow-md flex items-center justify-center hover:bg-white/15 transition"
        animate={{ rotate: counterRotate ? -360 : 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        <div className="group-hover:opacity-100">{icon}</div>
      </motion.div>
    </div>
  );
}

export default OrbitSkills;
