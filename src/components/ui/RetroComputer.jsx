"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Model({ position = [0, -1, 0], rotation = [0, 4.8, 0], scale = 3 }) {
  const { scene } = useGLTF("/models/retro_computer/scene.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => {
            mat.side = THREE.DoubleSide;
            mat.needsUpdate = true;
            mat.depthWrite = true;
            mat.depthTest = true;
            mat.transparent = false;
          });
        } else {
          child.material.side = THREE.DoubleSide;
          child.material.needsUpdate = true;
          child.material.depthWrite = true;
          child.material.depthTest = true;
          child.material.transparent = false;
        }
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

export default function RetroComputer({
  modelPosition = [0, -1, 0],
  modelRotation = [0, 6.1, 0],
  modelScale = 3,
  cameraPosition = [0, 5, 18],
  fov = 30,
}) {
  return (
    <div
      style={{
        height: "450px",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <style>{`
        @media (max-width: 600px) {
          .retro-canvas-container {
            height: 400px !important;
          }
        }
      `}</style>
      <div
        className="retro-canvas-container"
        style={{ height: "100%", width: "100%" }}
      >
        <Canvas
          camera={{ position: cameraPosition, fov }}
          gl={{ antialias: true, preserveDrawingBuffer: true, alpha: false }}
          style={{ background: "transparent", height: "100%", width: "100%" }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[2, 3, 3]} intensity={1} />
          <Model
            position={modelPosition}
            rotation={modelRotation}
            scale={modelScale}
          />
          <OrbitControls enableZoom={false} makeDefault />
        </Canvas>
      </div>
    </div>
  );
}
