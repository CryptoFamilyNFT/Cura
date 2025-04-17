import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model() {
  const { scene } = useGLTF("glb/mascotte.glb"); // Assicurati che sia in /public/model.glb
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    const offset = scroll.offset; // da 0 a 1
    if (ref.current) {
      ref.current.rotation.y = offset * Math.PI * 2;
      ref.current.position.y = -offset * 2;
    }
  });

  return <primitive object={scene} ref={ref} />;
}
