"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { random } from "@/lib/utils";
import * as THREE from "three";

/**
 * Floating lanterns — used in Scene 2 (Nile) and Scene 10 (Forever).
 */
export function Lanterns({ count = 12, upward = false }: { count?: number; upward?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  // Pre-compute positions deterministically
  const lanterns = Array.from({ length: count }, (_, i) => ({
    x: random(-5, 5),
    y: upward ? random(-8, 2) : random(-2, 4),
    z: random(-4, -1),
    speed: random(0.15, 0.4),
    phase: random(0, Math.PI * 2),
    size: random(0.15, 0.3),
  }));

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const data = lanterns[i];
      if (!data) return;
      const t = clock.elapsedTime;
      const drift = upward ? t * data.speed : Math.sin(t * data.speed + data.phase) * 0.5;
      child.position.y = data.y + drift;
      child.position.x = data.x + Math.sin(t * 0.3 + data.phase) * 0.3;
    });
  });

  return (
    <group ref={groupRef}>
      {lanterns.map((d, i) => (
        <group key={i} position={[d.x, d.y, d.z]}>
          {/* Lantern body */}
          <mesh>
            <sphereGeometry args={[d.size, 16, 16]} />
            <meshStandardMaterial
              color="#E8C97A"
              emissive="#E8C97A"
              emissiveIntensity={1.5}
              transparent
              opacity={0.85}
            />
          </mesh>
          {/* Inner core */}
          <mesh>
            <sphereGeometry args={[d.size * 0.5, 8, 8]} />
            <meshStandardMaterial
              color="#FFFFFF"
              emissive="#FFFFFF"
              emissiveIntensity={2}
            />
          </mesh>
          <pointLight color="#E8C97A" intensity={0.4} distance={2} />
        </group>
      ))}
    </group>
  );
}
