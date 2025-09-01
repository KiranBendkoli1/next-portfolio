"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/earth.glb");

const EarthModel = () => {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/earth.glb");
  return (
    <group ref={group} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

export default EarthModel;
