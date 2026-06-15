"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * The enchanted rose in a glass dome (Beauty and the Beast reference).
 * Procedural — rose geometry + glass cloche.
 */
export function EnchantedRose({ scale = 1 }: { scale?: number }) {
  const roseRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (roseRef.current) {
      roseRef.current.rotation.y = clock.elapsedTime * 0.3;
    }
    if (glowRef.current) {
      glowRef.current.intensity = 1.2 + Math.sin(clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group scale={scale}>
      {/* Rose */}
      <group ref={roseRef} position={[0, -0.3, 0]}>
        {/* Stem */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1, 8]} />
          <meshStandardMaterial color="#2d5016" roughness={0.6} />
        </mesh>
        {/* Leaves */}
        <mesh position={[0.15, -0.7, 0]} rotation={[0, 0, -0.6]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#3a6b1f" roughness={0.7} />
        </mesh>
        <mesh position={[-0.15, -0.4, 0]} rotation={[0, 0, 0.6]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#3a6b1f" roughness={0.7} />
        </mesh>
        {/* Rose petals — stacked spheres with red emissive */}
        <mesh>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color="#8B1A3E"
            roughness={0.4}
            metalness={0.1}
            emissive="#8B1A3E"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.05, 0.05, 0.05]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial
            color="#A02050"
            roughness={0.4}
            emissive="#A02050"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[-0.03, 0.08, -0.04]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#C93368"
            roughness={0.4}
            emissive="#C93368"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Glass dome */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.95}
          roughness={0}
          thickness={0.1}
          ior={1.5}
          metalness={0}
          opacity={0.3}
          transparent
        />
      </mesh>

      {/* Base */}
      <mesh position={[0, -0.95, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 0.2, 32]} />
        <meshStandardMaterial
          color="#3a2418"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Inner glow */}
      <pointLight
        ref={glowRef}
        position={[0, 0, 0]}
        color="#E8C97A"
        intensity={1.2}
        distance={3}
      />
    </group>
  );
}
