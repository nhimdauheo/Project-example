import { Sphere, useTexture } from "@react-three/drei";
import window2 from "../assets/360 images/window-table-2.jpeg";

const TexturedSphereTwo = () => {
  const texture = useTexture(window2);
  return (
    <>
      <Sphere args={[10, 32, 32]} scale={[-1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial map={texture} side={2} />
      </Sphere>
    </>
  );
};

export default TexturedSphereTwo;
