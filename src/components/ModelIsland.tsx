import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/final_islands_campsite_diorama.glb");

const ModelIsland = () => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/final_islands_campsite_diorama.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Play the first animation
    console.log(actions);
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default ModelIsland;
