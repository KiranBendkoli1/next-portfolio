"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/little-astronaut.glb");

const AstronautModel = () => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/little-astronaut.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["Armature|ArmatureAction"]) {
      actions["Armature|ArmatureAction"].play();
    }

  }, [actions]);

  return (
    <group ref={group} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

export default AstronautModel;
