"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

useGLTF.preload("/phoenix_bird.glb");

const BirdModel = () => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/phoenix_bird.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  return (
    <>
      <group ref={group} scale={[0.002, 0.002, 0.002]} position={[0,0,3]}>
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
