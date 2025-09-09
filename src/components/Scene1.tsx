"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import AstronautModel from "./AstronautModel";

const OscillatingControls = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlsRef = useRef<any>(null);
  const direction = useRef(1); // 1 = forward, -1 = backward

  useFrame(() => {
    if (controlsRef.current) {
      const speed = 0.005; // rotation speed
      let angle = controlsRef.current.getAzimuthalAngle(); // current horizontal angle

      angle += speed * direction.current; // move angle

      // Clamp range (radians)
      const minAngle = -0.6; // ~ -34°
      const maxAngle = 0.6;  // ~ +34°

      if (angle > maxAngle) {
        angle = maxAngle;
        direction.current = -1; // reverse
      } else if (angle < minAngle) {
        angle = minAngle;
        direction.current = 1; // reverse
      }

      controlsRef.current.setAzimuthalAngle(angle);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      target={[0, 0, 0]}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const Scene1 = () => {
  return (
    <Canvas
      style={{ minHeight: "400px" }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [1, 0.6, 0.6], fov: 50 }}
    >
      <ambientLight position={[20, -20, 20]} intensity={2} />
      <Suspense fallback={null}>
        <AstronautModel />
      </Suspense>
      <OscillatingControls />
    </Canvas>
  );
};

export default Scene1;
