"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{
        position: [10, 10, 10],
        fov: 50,
        near: 1, // Prevents clipping when very close
      }}
    >
      <directionalLight position={[-20, -20, 10]} intensity={6} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls makeDefault target={[-45, -30, -20]} maxDistance={100} />
    </Canvas>
  );
};

export default Scene;
