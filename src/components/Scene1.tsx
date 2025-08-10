"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import ModelIsland from "./ModelIsland";

const Scene1 = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 5, 5], fov: 50 }} // Move camera back
    >
      <directionalLight position={[20, 20, 20]} intensity={6} />
      <Suspense fallback={null}>
        <ModelIsland />
      </Suspense>
      <OrbitControls
        makeDefault
        target={[0, 0, 0]}
        maxDistance={0.7} 
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default Scene1;
