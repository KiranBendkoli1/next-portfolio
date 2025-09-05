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
  const [isMounted, setIsMounted] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(1024); // default desktop width

  // Scale rings for mobile responsiveness
  const getResponsiveRings = (rings: OrbitRingProps[], width: number) => {
    return rings.map(ring => ({
      ...ring,
      radius: width < 640 
        ? ring.radius * 0.6  // small mobile
        : width < 768 
          ? ring.radius * 0.75 // large mobile
          : width < 1024
            ? ring.radius * 0.85 // tablet
            : ring.radius, // desktop
      size: width < 640
        ? (ring.size || 56) * 0.7
        : ring.size,
      duration: width < 768
        ? (ring.duration || 24) * 1.5 // slower on mobile for better performance
        : ring.duration
    }));
  };

  const [responsiveRings, setResponsiveRings] = React.useState(rings);

  React.useEffect(() => {
    setIsMounted(true);
    const updateSize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Initial size
    updateSize();
    
    // Add resize listener
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Update rings when window size changes or rings prop changes
  React.useEffect(() => {
    if (isMounted) {
      setResponsiveRings(getResponsiveRings(rings, windowWidth));
    }
  }, [rings, windowWidth, isMounted]);

  return (
    <div
      className={`relative isolate aspect-square w-full 
        max-w-[260px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 
        mx-auto select-none overflow-hidden touch-none
        ${className}`}
      aria-label="Skills orbit visualization"
      role="img"
    >
      {/* Orbit rings */}
      {responsiveRings?.map((ring, i) => (
        <OrbitRing key={i} {...ring} />
      ))}
    </div>
  );
};

function OrbitRing({ radius, size = 56, duration = 24, reverse = false, items = [] }: OrbitRingProps) {
  const step = 360 / Math.max(items.length, 1);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const ringStyle: React.CSSProperties = {
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    left: `calc(50% - ${radius}px)`,
    top: `calc(50% - ${radius}px)`,
    borderColor: "rgba(255,255,255,0.12)",
  };

  // Calculate z-index based on radius - smaller radius (inner rings) get higher z-index
  const zIndex = Math.floor(1000 / radius); // This will make inner rings have higher z-index

  if (!isMounted) {
    return (
      <div 
        className="absolute" 
        style={{
          ...ringStyle,
          zIndex: zIndex
        }}
      >
        <div className="absolute inset-0 rounded-full border sm:border-2" />
      </div>
    );
  }

  return (
    <div 
      className="absolute" 
      style={{
        ...ringStyle,
        zIndex: zIndex
      }}
      aria-hidden
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Ring outline with responsive border width */}
      <div className="absolute inset-0 rounded-full border sm:border-2" />

      {/* Rotating carrier */}
      <motion.div
        className="absolute inset-0"
        data-anim="spin"
        style={{ 
          originX: 0.5, 
          originY: 0.5,
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        initial={{ rotate: 0 }}
        animate={isPaused ? { rotate: reverse ? -360 : 360, scale: 1 } : { rotate: reverse ? -360 : 360 }}
        transition={{ 
          rotate: {
            repeat: Infinity, 
            ease: "linear", 
            duration: isPaused ? duration * 2 : duration
          }
        }}
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
            isPaused={isPaused}
          />
        ))}
      </motion.div>
    </div>
  );
}
function OrbitIcon({ 
  angle, 
  radius, 
  size, 
  name, 
  icon, 
  counterRotate, 
  duration,
  isPaused 
}: {
  angle: number;
  radius: number;
  size: number;
  name: string;
  icon: React.ReactNode;
  counterRotate: boolean;
  duration: number;
  isPaused?: boolean;
}) {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const wrapperStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    left: `calc(50% - ${size / 2}px)`,
    top: `calc(50% - ${size / 2}px)`,
    transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
  };

  return (
    <div 
      className="absolute z-30" 
      style={wrapperStyle}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setShowTooltip(false)}
    >
      {/* Counter-rotation so icons stay upright while orbiting */}
      <motion.div
        className={`
          group relative w-full h-full rounded-full bg-bg 
          border border-white/20 shadow-md 
          flex items-center justify-center 
          active:scale-95
          transition-all duration-300
        `}
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        animate={isPaused ? { rotate: 0 } : { rotate: counterRotate ? -360 : 360 }}
        transition={{ 
          rotate: {
            repeat: Infinity, 
            ease: "linear", 
            duration: isPaused ? duration * 2 : duration
          },
          scale: {
            duration: 0.2
          }
        }}
      >
        <div className={`
          transform transition-all duration-300 
          sm:group-hover:scale-125
        `}>
          {icon}
        </div>

        {/* Tooltip */}
        {showTooltip && (
          <div 
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 
              bg-black/80 text-white px-2.5 py-1 rounded text-sm whitespace-nowrap
              shadow-lg backdrop-blur-sm z-50 pointer-events-none
              animate-in fade-in duration-200"
          >
            {name}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
              border-4 border-transparent border-t-black/80"></div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default OrbitSkills;
