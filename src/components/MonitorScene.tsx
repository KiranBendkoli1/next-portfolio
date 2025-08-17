import React, { Suspense } from "react";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

useGLTF.preload("/ultrawide_monitor.glb");

const Monitor = ({ textureUrl }: { textureUrl: string }) => {
  const { scene, materials } = useGLTF("/ultrawide_monitor.glb");
  const texture = useLoader(TextureLoader, textureUrl);

  // clone material so each card has its own screen
  const screen = materials["Screen"].clone() as any;
  screen.map = texture;
  screen.emissiveMap = texture;
  screen.emissiveIntensity = 1;
  screen.needsUpdate = true;

  // clone scene so monitors don’t overwrite each other
  const clonedScene = scene.clone();
  clonedScene.traverse((obj: any) => {
    if (obj.isMesh && obj.material.name === "Screen") {
      obj.material = screen;
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[90, 90.2, 180.13]}>
      <primitive object={clonedScene} />
    </group>
  );
};

const MonitorScene = ({ textureUrl }: { textureUrl: string }) => {
  return (
    <Canvas
      camera={{
        position: [4.5, 4.2, 1.2],
      }}
    >
      <directionalLight position={[10, 10, 2]} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Center>
          <Monitor textureUrl={textureUrl} />
        </Center>
      </Suspense>
      <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
    </Canvas>
  );
};

export default MonitorScene;
