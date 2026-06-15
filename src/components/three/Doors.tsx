"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * The two golden doors of Scene 1 (and Scene 0).
 * Pure procedural geometry — no external models.
 */
export function Doors({ open = false }: { open?: boolean }) {
  const leftRef = useRef<THREE.Group>(null);
  const rightRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!leftRef.current || !rightRef.current) return;
    const targetLeft = open ? -Math.PI / 2 : 0;
    const targetRight = open ? Math.PI / 2 : 0;
    leftRef.current.rotation.y += (targetLeft - leftRef.current.rotation.y) * 0.04;
    rightRef.current.rotation.y += (targetRight - rightRef.current.rotation.y) * 0.04;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Left door */}
      <group ref={leftRef} position={[-1.5, 0, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.4, 4, 0.15]} />
          <meshStandardMaterial
            color="#3a2418"
            metalness={0.7}
            roughness={0.3}
            emissive="#E8C97A"
            emissiveIntensity={0.05}
          />
        </mesh>
        {/* Gold trim */}
        <mesh position={[0, 1.7, 0.08]}>
          <torusGeometry args={[0.3, 0.04, 8, 32]} />
          <meshStandardMaterial
            color="#E8C97A"
            metalness={1}
            roughness={0.2}
            emissive="#E8C97A"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Decorative panel */}
        <mesh position={[0, -0.5, 0.08]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial
            color="#5B2A86"
            metalness={0.5}
            roughness={0.4}
            emissive="#5B2A86"
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* B monogram */}
        <mesh position={[0, -0.5, 0.1]}>
          <ringGeometry args={[0.15, 0.22, 32]} />
          <meshStandardMaterial
            color="#E8C97A"
            metalness={1}
            roughness={0.2}
            emissive="#E8C97A"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>

      {/* Right door (mirror) */}
      <group ref={rightRef} position={[1.5, 0, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.4, 4, 0.15]} />
          <meshStandardMaterial
            color="#3a2418"
            metalness={0.7}
            roughness={0.3}
            emissive="#E8C97A"
            emissiveIntensity={0.05}
          />
        </mesh>
        <mesh position={[0, 1.7, 0.08]}>
          <torusGeometry args={[0.3, 0.04, 8, 32]} />
          <meshStandardMaterial
            color="#E8C97A"
            metalness={1}
            roughness={0.2}
            emissive="#E8C97A"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0, -0.5, 0.08]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial
            color="#5B2A86"
            metalness={0.5}
            roughness={0.4}
            emissive="#5B2A86"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[0, -0.5, 0.1]}>
          <ringGeometry args={[0.15, 0.22, 32]} />
          <meshStandardMaterial
            color="#E8C97A"
            metalness={1}
            roughness={0.2}
            emissive="#E8C97A"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>

      {/* Ambient particles */}
      <Sparkles
        count={40}
        scale={[6, 6, 2]}
        size={2}
        speed={0.3}
        color="#C9A8FF"
      />
    </group>
  );
}
