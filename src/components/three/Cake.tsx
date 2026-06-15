"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * The three-tier purple-ombre birthday cake.
 * Pure procedural geometry.
 */
export function Cake({ cut = false }: { cut?: boolean }) {
  const cakeRef = useRef<THREE.Group>(null);
  const leftRef = useRef<THREE.Group>(null);
  const rightRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (cakeRef.current && !cut) {
      cakeRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.05;
    }
    if (cut && leftRef.current && rightRef.current) {
      leftRef.current.position.x = THREE.MathUtils.lerp(
        leftRef.current.position.x,
        -0.8,
        0.04,
      );
      rightRef.current.position.x = THREE.MathUtils.lerp(
        rightRef.current.position.x,
        0.8,
        0.04,
      );
    }
  });

  const cakeGroup = (
    <>
      {/* Bottom tier — deepest purple */}
      <mesh position={[0, -0.7, 0]} castShadow>
        <cylinderGeometry args={[1.2, 1.3, 0.7, 32]} />
        <meshStandardMaterial
          color="#3B1F5E"
          roughness={0.4}
          metalness={0.2}
          emissive="#3B1F5E"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Gold band */}
      <mesh position={[0, -0.4, 0]}>
        <torusGeometry args={[1.21, 0.025, 8, 32]} />
        <meshStandardMaterial
          color="#E8C97A"
          metalness={1}
          roughness={0.2}
          emissive="#E8C97A"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Middle tier — velvet purple */}
      <mesh position={[0, -0.1, 0]} castShadow>
        <cylinderGeometry args={[0.9, 1, 0.6, 32]} />
        <meshStandardMaterial
          color="#5B2A86"
          roughness={0.4}
          metalness={0.2}
          emissive="#5B2A86"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <torusGeometry args={[0.91, 0.02, 8, 32]} />
        <meshStandardMaterial
          color="#E8C97A"
          metalness={1}
          roughness={0.2}
          emissive="#E8C97A"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Top tier — lilac */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.7, 0.5, 32]} />
        <meshStandardMaterial
          color="#C9A8FF"
          roughness={0.3}
          metalness={0.2}
          emissive="#C9A8FF"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Rose decorations on top */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.4, 0.72, Math.sin(angle) * 0.4]}
          >
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial
              color="#E8A0BF"
              emissive="#E8A0BF"
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}

      {/* Candles */}
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2;
        return (
          <group key={i} position={[Math.cos(angle) * 0.25, 0.85, Math.sin(angle) * 0.25]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 0.25, 8]} />
              <meshStandardMaterial color="#FFF8DC" />
            </mesh>
            {/* Flame */}
            <mesh position={[0, 0.18, 0]}>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshStandardMaterial
                color="#FFD700"
                emissive="#FFD700"
                emissiveIntensity={2}
              />
            </mesh>
            <pointLight
              position={[0, 0.2, 0]}
              color="#FFD700"
              intensity={0.3}
              distance={1}
            />
          </group>
        );
      })}
    </>
  );

  if (cut) {
    return (
      <group ref={cakeRef} position={[0, 0, 0]}>
        <group ref={leftRef}>{cakeGroup}</group>
        <group ref={rightRef}>{cakeGroup}</group>
      </group>
    );
  }

  return <group ref={cakeRef}>{cakeGroup}</group>;
}
