import { Sphere, useTexture } from "@react-three/drei";
import Entrance from "../assets/360 images/1-Entrance.jpeg";

const TexturedSphere = () => {
  const texture = useTexture(Entrance);
  return (
    <>
      <Sphere args={[10, 32, 32]} scale={[-1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial map={texture} side={2} />
      </Sphere>
    </>
  );
};

export default TexturedSphere;
