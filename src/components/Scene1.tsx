"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import BirdModel from "./BirdModel";

const Scene1 = () => {
  return (
    <Canvas
      style={{  height: "100vh" }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 5, 5], fov: 50 }} // Move camera back
    >
      <ambientLight position={[20, -20, 20]} intensity={2} />
      <Suspense fallback={null}>
        <BirdModel />
      </Suspense>
      <OrbitControls
        makeDefault
        target={[0, 0, 0]}
        autoRotate
        enableZoom={false}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default Scene1;
