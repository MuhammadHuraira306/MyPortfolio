import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import CanvasWrapper from "./CanvasWrapper";

function Crystal() {
  const mesh = useRef();
  const wire = useRef();

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.15;
      mesh.current.rotation.x += delta * 0.05;
    }
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={30} color="#EDEEF0" />
      <pointLight position={[-3, -2, -3]} intensity={18} color="#B3212E" />

      <mesh ref={mesh}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#161922"
          roughness={0.2}
          metalness={0.75}
          emissive="#B3212E"
          emissiveIntensity={0.05}
        />
      </mesh>
      <mesh ref={wire} scale={1.35}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial color="#B3212E" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function AmbientCrystal({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <CanvasWrapper camera={{ position: [0, 0, 5], fov: 40 }}>
        <Crystal />
      </CanvasWrapper>
    </div>
  );
}
