import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Importazione del loader

export default function ScenaMeditazione({ modelPath }) {
  const mountRef = useRef(null); // Riferimento per il div in cui inserire il canvas

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / 2 / window.innerHeight, // Impostato su metà larghezza della finestra
      0.5,
      800
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight); // Imposta la dimensione del canvas

    mountRef.current.appendChild(renderer.domElement); // Aggiungi il canvas al div

    const loader = new GLTFLoader();
    loader.load(
      modelPath, // Percorso del modello
      (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(1, 1, 1); // Scala il modello per adattarlo meglio

        // Posiziona la fotocamera più vicina
        camera.position.z = 30;

        // Animazione
        const animate = () => {
          requestAnimationFrame(animate);
          gltf.scene.rotation.y += 0.009;
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error("An error happened while loading the model:", error);
      }
    );

    // Gestire il resize della finestra
    const onResize = () => {
      camera.aspect = window.innerWidth / 2 / window.innerHeight; // Corretto per metà della finestra
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    //light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  return <div ref={mountRef} className="w-[50%] h-screen"></div>;
}
