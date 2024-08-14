import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TexturedSphere from "./components/TexturedSphere";
import Footstep from "./components/Footstep";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  const handleFootstepClick = () => {
    navigate("/scene-two"); // Điều hướng đến URL tương ứng với SceneTwo
  };

  return (
    <>
      <Header />
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ height: "100vh", width: "100vw" }}
      >
        <ambientLight intensity={5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <TexturedSphere />

        <OrbitControls />
        <Footstep position={[5, 0, 0]} onClick={handleFootstepClick} />
      </Canvas>
    </>
  );
};

export default App;
