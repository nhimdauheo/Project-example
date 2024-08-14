import React, { useState } from "react";
import { Html, useTexture, Plane } from "@react-three/drei";
import foot from "../assets/footstep.png";

const Footstep = ({ position, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(foot);

  return (
    <group position={position}>
       <Plane
        args={[1, 1]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        rotation={[Math.PI / 10, 0, 0]}
        position={[0.2, 0.1, 5]}
      >
        <meshBasicMaterial map={texture} />
      </Plane>
      <Html
        position={[0.2, 0.1, 5]}
        style={{
          pointerEvents: "none",
          cursor: "pointer",
          color: hovered ? "blue" : "white",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        <img width="50" src={foot} />
      </Html>
    </group>
  );
};

export default Footstep;
