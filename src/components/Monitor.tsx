import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

import React from "react";
import { TextureLoader } from "three";
useGLTF.preload("/uc_monitor.glb");

const Monitor = () => {
  const { nodes, materials, scene } = useGLTF("/uc_monitor.glb");
  const texture = useLoader(TextureLoader, "/foodplaces.png");
  console.log({ nodes, materials });
  const screen = materials["Screen"] as any;
  if (screen) {
    screen.map = texture;  
    screen.emissiveMap = texture;  
    screen.needsUpdate = true;
  }
  return (
    <group dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default Monitor;
