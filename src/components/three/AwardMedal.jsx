import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import CanvasWrapper from "./CanvasWrapper";

function Medal() {
  const ring = useRef();
  const core = useRef();

  useFrame((state, delta) => {
    if (ring.current) ring.current.rotation.y += delta * 0.25;
    if (core.current) core.current.rotation.y -= delta * 0.15;
  });

  return (
    <group rotation={[0.4, 0, 0]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 3, 3]} intensity={25} color="#EDEEF0" />
      <pointLight position={[-2, -2, -2]} intensity={15} color="#B3212E" />

      <mesh ref={core}>
        <torusGeometry args={[1, 0.09, 24, 64]} />
        <meshStandardMaterial
          color="#B3212E"
          metalness={0.8}
          roughness={0.25}
          emissive="#7A171F"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh ref={ring}>
        <torusGeometry args={[1, 0.015, 12, 64]} />
        <meshBasicMaterial color="#EDEEF0" transparent opacity={0.5} />
      </mesh>
      <mesh>
        <circleGeometry args={[0.78, 48]} />
        <meshStandardMaterial
          color="#161922"
          metalness={0.6}
          roughness={0.35}
        />
      </mesh>
    </group>
  );
}

export default function AwardMedal({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <CanvasWrapper camera={{ position: [0, 0, 3.6], fov: 40 }}>
        <Medal />
      </CanvasWrapper>
    </div>
  );
}
