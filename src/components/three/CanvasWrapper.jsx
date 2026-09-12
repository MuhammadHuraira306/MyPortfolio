import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function CanvasWrapper({
  children,
  camera = { position: [0, 0, 8], fov: 45 },
  className = "",
  style,
}) {
  return (
    <Canvas
      className={className}
      style={style}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={camera}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
