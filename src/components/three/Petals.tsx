"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { random } from "@/lib/utils";
import * as THREE from "three";

/**
 * Falling rose petals — continuous ambient motion for several scenes.
 */
export function Petals({ count = 30 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const petals = Array.from({ length: count }, () => ({
    x: random(-6, 6),
    y: random(-6, 6),
    z: random(-3, 1),
    speed: random(0.2, 0.5),
    sway: random(0.5, 1.5),
    phase: random(0, Math.PI * 2),
    rotSpeed: random(0.5, 1.5),
  }));

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const d = petals[i];
      if (!d) return;
      const t = clock.elapsedTime;
      child.position.y -= delta * d.speed;
      child.position.x += Math.sin(t * d.sway + d.phase) * 0.002;
      child.rotation.x += delta * d.rotSpeed;
      child.rotation.z += delta * d.rotSpeed * 0.5;
      if (child.position.y < -6) child.position.y = 6;
    });
  });

  return (
    <group ref={groupRef}>
      {petals.map((d, i) => (
        <mesh key={i} position={[d.x, d.y, d.z]} rotation={[d.phase, 0, d.phase]}>
          <planeGeometry args={[0.12, 0.18]} />
          <meshStandardMaterial
            color="#E8A0BF"
            emissive="#E8A0BF"
            emissiveIntensity={0.3}
            transparent
            opacity={0.85}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
