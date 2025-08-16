import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Monitor from "./Monitor";

const MonitorScene = () => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      gl={{ antialias: true }}
     
      camera={{
        position: [10, 10, 2],
        
      }}
    >
      <directionalLight  position= {[10, 10, 2]}  />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Monitor />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default MonitorScene;
