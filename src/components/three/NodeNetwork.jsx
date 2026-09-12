import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Builds a fixed set of nodes distributed on a sphere, connected to their
// nearest neighbours — reads as "software / data / connected systems"
// without being a literal or cartoonish shape.
function useNetworkGeometry(count, radius) {
  return useMemo(() => {
    const nodes = [];
    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      nodes.push(
        new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(
          radius
        )
      );
    }

    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      const distances = nodes
        .map((n, j) => ({ j, d: nodes[i].distanceTo(n) }))
        .filter((e) => e.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      distances.forEach(({ j }) => {
        if (j > i) lines.push([nodes[i], nodes[j]]);
      });
    }

    return { nodes, lines };
  }, [count, radius]);
}

function LineSegment({ start, end }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    return geo;
  }, [start, end]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color="#B3212E"
        transparent
        opacity={0.22}
        toneMapped={false}
      />
    </line>
  );
}

function Node({ position, scale = 1 }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.045 * scale, 12, 12]} />
      <meshStandardMaterial
        color="#EDEEF0"
        emissive="#B3212E"
        emissiveIntensity={0.4}
        roughness={0.35}
        metalness={0.4}
      />
    </mesh>
  );
}

function DustParticles({ count = 180 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#767A85"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function NodeNetwork({ mobile = false }) {
  const group = useRef();
  const inner = useRef();
  const { nodes, lines } = useNetworkGeometry(mobile ? 20 : 30, 2.1);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useFrame((state, delta) => {
    const target = state.pointer;
    mouse.current.x += (target.x - mouse.current.x) * 0.03;
    mouse.current.y += (target.y - mouse.current.y) * 0.03;

    if (group.current) {
      group.current.rotation.y += delta * 0.06;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouse.current.y * 0.25,
        0.05
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        -mouse.current.x * 0.12,
        0.05
      );
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.1;
      inner.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group scale={size.width < 640 ? 0.75 : 1}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#EDEEF0" />
      <pointLight position={[-4, -3, -2]} intensity={20} color="#B3212E" />

      <group ref={group}>
        <mesh ref={inner}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#111318"
            emissive="#B3212E"
            emissiveIntensity={0.08}
            roughness={0.25}
            metalness={0.7}
            wireframe
          />
        </mesh>

        {lines.map(([a, b], i) => (
          <LineSegment key={i} start={a} end={b} />
        ))}
        {nodes.map((n, i) => (
          <Node key={i} position={n} scale={i % 5 === 0 ? 1.6 : 1} />
        ))}
      </group>

      <DustParticles count={mobile ? 90 : 200} />
    </group>
  );
}
