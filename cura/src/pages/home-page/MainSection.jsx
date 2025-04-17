// Importa i moduli principali di React e librerie 3D
import React, { useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber"; // Canvas per la scena 3D, useFrame per animazioni, useThree per accedere alla scena
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"; // Drei aggiunge controlli utili come OrbitControls e ambiente HDR
import { useNavigate } from "react-router"; // useNavigate per navigare tra le pagine

function Planet() {
  const gltf = useGLTF("../../../public/Images/pianeta.glb"); // Carica il modello 3D dal file .glb
  const planet = gltf.scene; // Accede alla scena del modello caricato
  const navigate = useNavigate(); // Hook per cambiare pagina al click

  useFrame(() => {
    planet.rotation.y += 0.0001; // Ruota il pianeta continuamente lungo l'asse Y
  });

  useEffect(() => {
    // Cerca nel modello i nomi degli oggetti interattivi
    const Quiz = planet.getObjectByName("question_mark");
    const Mascotte = planet.getObjectByName("Cube");
    const Profilo = planet.getObjectByName("Cube020");
    const Meditazione = planet.getObjectByName("scena_meditazione001" || "Circle001" || "Cylinder_Pillow_Grey" || "Pillow001");
        
    // Se il modello esiste allora ci naviga
    if (Quiz)
      Quiz.userData = {
        onClick: () => {
          navigate("/Quiz"); //inserire rotte giuste
        },
      };

    if (Mascotte)
      Mascotte.userData = {
        onClick: () => {
          navigate("/chat");
        },
      };

    if (Profilo)
      Profilo.userData = {
        onClick: () => {
          navigate("/Profile");
        },
      };

    if (Meditazione)
      Meditazione.userData = {
        onClick: () => {
          navigate("/Meditazione");
        },
      };
  }, [planet]); // array delle dipendenze è il modello 3d

  return <primitive object={planet} scale={1.5} />; // Inserisce il modello nella scena con una scala 1.5
}

function ClickHandler() {
  const { scene, raycaster, mouse, camera, gl } = useThree(); // Prende gli oggetti principali della scena 3D

  useEffect(() => {
    const handleClick = (event) => {
      const bounds = gl.domElement.getBoundingClientRect(); // Ottiene dimensioni del canvas

      // Calcola coordinate normalizzate del mouse
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera); // Imposta il raggio partendo dalla camera e mouse
      const intersects = raycaster.intersectObjects(scene.children, true); // Trova oggetti "colpiti" dal click

      if (intersects.length > 0) {
        const object = intersects[0].object; // Primo oggetto colpito
        if (object.userData.onClick) {
          object.userData.onClick(); // Esegue l'azione associata
        }
      }
    };
    // Aggiunge e rimuove l'event listener
    gl.domElement.addEventListener("click", handleClick);
    return () => gl.domElement.removeEventListener("click", handleClick);
  }, [scene, raycaster, mouse, camera, gl]);

  return null;
}

export default function MainSection() {
  return (
    <div>
      {/* Crea il canvas 3D con telecamera iniziale */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <ambientLight intensity={0.5} /> {/* Luce ambientale */}
        <directionalLight position={[5, 5, 5]} intensity={1} />{" "}
        {/* Luce direzionale */}
        <Environment preset="sunset" />{" "}
        {/* Ambiente HDRI con preset "sunset" */}
        <OrbitControls enableZoom={false} autoRotate />{" "}
        {/* Permette all'utente di ruotare la scena con il mouse */}
        <Planet /> {/* Inserisce il pianeta nella scena */}
        <ClickHandler /> {/* Attiva i click sugli oggetti 3D */}
      </Canvas>
    </div>
  );
}
