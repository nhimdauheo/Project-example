import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TexturedSphereTwo from "../components/TexturedSphereTwo";

const SceneTwo = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ height: "100vh", width: "100vw" }}
    >
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <TexturedSphereTwo />
      <OrbitControls />
    </Canvas>
  );
};

export default SceneTwo;
