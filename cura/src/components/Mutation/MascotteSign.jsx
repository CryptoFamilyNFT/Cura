import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from "@react-three/fiber";
import masc3d from "../../../public/glb/mascotte.glb";

export function MascotteSign(props) {
  const { scene, materials } = useLoader(GLTFLoader, masc3d);

  const mascotte = useRef(null);

  React.useEffect(() => {
    if (mascotte.current) {
      mascotte.current.scale.set(1.2, 1.2, 1.2);
    }
    if (materials) {
      Object.values(materials).forEach((material) => {
        material.transparent = false;
        material.opacity = 1;
      });
    }
  }, [materials, scene]);

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth) * 2 - 0.8; // Normalize X to [-1, 1]
      const y = -(event.clientY / innerHeight) * 2 - 0.1; // Normalize Y to [-1, 1]

      if (mascotte.current) {
        const targetPosition = {
          x: x * 10,
          y: y * 10,
          z: 5,
        };

        mascotte.current.lookAt(
          targetPosition.x,
          targetPosition.y,
          targetPosition.z
        );
      }
    };

    const handleResize = () => {
      // Handle any necessary adjustments on window resize
      console.log("Window resized, adjust if needed.");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <group {...props} dispose={null}>
      <group ref={mascotte} position={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

export default function WrappedSignMascotte() {
  return (
    <Canvas>
      <ambientLight intensity={2.2} />
      <MascotteSign />
    </Canvas>
  );
}
