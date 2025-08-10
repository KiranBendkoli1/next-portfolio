import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/multi_universe_space_ship_3d_model.glb");

const Model = () => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/multi_universe_space_ship_3d_model.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Play the first animation
    console.log(actions);
    if (actions && actions["Animation"]) {
      actions["Animation"].play();
    }
  }, [actions]);
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
