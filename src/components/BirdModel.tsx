"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

useGLTF.preload("/little-astronaut.glb");

const BirdModel = () => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/little-astronaut.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    setTimeout(() => {
      if (actions && actions["Armature|Plane.001Action.001"]) {
        actions["Armature|Plane.001Action.001"].play();
      }
    }, 5000)

  }, [actions]);

  return (
    <>
      <group ref={group} position={[0, 0, 0]}>
        <primitive object={scene} />
      </group>

      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </>
  );
};

export default BirdModel;
