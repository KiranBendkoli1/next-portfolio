"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import EarthModel from "./EarthModel";
import { ErrorBoundary } from "react-error-boundary";

const EarthScene = () => {
    return (
        <ErrorBoundary
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <p>Unable to load 3D scene. Please refresh the page.</p>
                </div>
            }
        >
            <Canvas
                gl={{ antialias: true }}
                dpr={[1, 1.5]}
                camera={{ position: [0, 3, 3], fov: 50 }}
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
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    enableRotate={false}
                />
            </Canvas>
        </ErrorBoundary>
    );
};

export default EarthScene;
