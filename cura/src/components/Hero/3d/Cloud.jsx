import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import cloud from "../../../assets/glb/cloud.glb";

export function Cloud(props) {
  const { nodes, materials } = useLoader(GLTFLoader, cloud);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          {...materials["lambert2SG.001"]}
          transparent
          opacity={props.opacity}
        />
      </mesh>
    </group>
  );
}
