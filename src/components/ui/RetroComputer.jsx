"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * How to change the starting position of the model:
 *
 * - To change where the model appears (its "starting position"),
 *   update the `modelPosition` prop when you use <RetroComputer/>.
 *   This sets the [x, y, z] position in 3D space.
 *
 *      <RetroComputer modelPosition={[x, y, z]} />
 *
 * - To rotate the model initially, change the `modelRotation` prop:
 *
 *      <RetroComputer modelRotation={[rx, ry, rz]} />
 *
 * - To move the camera's starting viewpoint (like zoom or angle),
 *   change the `cameraPosition` prop:
 *
 *      <RetroComputer cameraPosition={[camX, camY, camZ]} />
 *
 * --- DEFAULTS BELOW ---
 */

function Model({ position = [0, -1, 0], rotation = [0, 4.8, 0], scale = 3 }) {
  const { scene } = useGLTF("/models/retro_computer/scene.gltf");

  // Ensure all materials are double-sided and depth correct
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Set double side to prevent faces from disappearing
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

  // position/rotation get passed as props here
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

// --- USAGE INFO ---
// To change the starting model position, use modelPosition prop
// Example: <RetroComputer modelPosition={[1, 2, 0]} />
export default function RetroComputer({
  modelPosition = [0, -1, 0], // change this to alter models starting position
  modelRotation = [0, 6.1, 0], // <-- CHANGE THIS to alter model's starting rotation
  modelScale = 3,
  cameraPosition = [0, 5, 18], // CHANGE THIS to alter camera's initial position
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
          camera={{ position: cameraPosition, fov }} // <-- camera starting point
          gl={{ antialias: true, preserveDrawingBuffer: true, alpha: false }}
          style={{ background: "transparent", height: "100%", width: "100%" }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[2, 3, 3]} intensity={1} />
          {/* Model position & rotation passed as props for easy change */}
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

/*
HOW TO CHANGE THE STARTING POSITION OF THE MODEL:

  <RetroComputer modelPosition={[x, y, z]} />

  Example:
    <RetroComputer modelPosition={[2, 0, -3]} />

You can also adjust rotation and camera like so:

  <RetroComputer
    modelPosition={[1, -2, 0]}
    modelRotation={[0, Math.PI / 4, 0]}
    cameraPosition={[2, 7, 21]}
  />

Default starting position is [0, -1, 0].
*/
