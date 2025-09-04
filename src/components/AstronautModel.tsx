"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { Group } from "three";

useGLTF.preload("/little-astronaut.glb");

const AstronautModel = () => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/little-astronaut.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["Scene"]) {
      actions["Scene"].play();
    }
  }, [actions]);

  return (
    <>
      <group ref={group} position={[0, -0.4, 0]}>
        <primitive object={scene} />
      </group>
      <EffectComposer multisampling={4} autoClear={false}>
        <SelectiveBloom
          intensity={1}
          luminanceThreshold={0}
          luminanceSmoothing={0.2}
          mipmapBlur
          lights={[]}
        />
      </EffectComposer>
    </>
  );
};

export default AstronautModel;
