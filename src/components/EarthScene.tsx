"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import EarthModel from "./EarthModel";

const EarthScene = () => {
    return (
        <Canvas
            gl={{ antialias: true }}
            dpr={[1, 2]}
            camera={{ position: [0, 3, 3], fov: 50 }} // Move camera back
        >
            <ambientLight position={[20, -20, 20]} intensity={2} />
            <Suspense fallback={null}>
                <EarthModel />
            </Suspense>
            <OrbitControls
                makeDefault
                target={[0, 0, 0]}
                autoRotate
                enableZoom={false}
                autoRotateSpeed={1}
            />
        </Canvas>
    );
};

export default EarthScene;
