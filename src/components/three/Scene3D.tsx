"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";
import { Environment } from "@react-three/drei";
import { isLowEndDevice } from "@/lib/utils";

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  enableBloom?: boolean;
  /** Optional PostFX element — pass <PostFX/> if you want bloom. */
  effects?: ReactNode;
}

/**
 * Reusable 3D Canvas wrapper. Sets up camera, lighting, environment.
 * Adapts pixel ratio for low-end devices automatically.
 */
export function Scene3D({
  children,
  cameraPosition = [0, 0, 5],
  effects,
}: Scene3DProps) {
  const lowEnd = isLowEndDevice();

  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 50 }}
      dpr={lowEnd ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !lowEnd, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        {/* Ambient + key lighting */}
        <ambientLight intensity={0.4} color="#C9A8FF" />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFFFFF" />
        <directionalLight position={[-5, 3, -5]} intensity={0.6} color="#5B2A86" />
        <pointLight position={[0, 3, 2]} intensity={0.8} color="#E8C97A" />

        {/* Environment for nice reflections */}
        <Environment preset="night" />

        {children}

        {effects}
      </Suspense>
    </Canvas>
  );
}
