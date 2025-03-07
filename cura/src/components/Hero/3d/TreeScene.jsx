import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import masc3d from '../../../assets/glb/curalogo.glb';

export function ThreeScene(props) {
    const { scene, materials } = useLoader(GLTFLoader, masc3d)

    const mascotte = useRef(null);

    React.useEffect(() => {
        if (mascotte.current) {
            mascotte.current.scale.set(1, 1, 1);
        }
        if (materials) {
            Object.values(materials).forEach((material) => {
                material.transparent = false;
                material.opacity = 1;
            });
        }
    }, [materials, scene]);

    useFrame(() => {
        mascotte.current.rotation.y += 0.005 * (mascotte.current.userData.direction || 1);
    });

    return (
        <group {...props} dispose={null}>
            <group
                ref={mascotte}
                position={[0, -1, 1]}
            >
                <primitive object={scene} />
            </group>
        </group>
    )
}

export default function WrappedTreeScene() {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 3} />
            <spotLight position={[2 , 1, 2]} angle={0.15} penumbra={0} decay={0} intensity={Math.PI} color="aqua" />
            <pointLight position={[-10, -100, -10]} decay={0} intensity={Math.PI} color="rosybrown" />
            <ThreeScene/>
        </Canvas>
    )
}
