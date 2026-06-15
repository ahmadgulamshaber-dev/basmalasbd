"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * A stylized 3D white fluffy puppy.
 * Pure procedural — sphere/ellipsoid composition, no external models.
 * Plus a tiny gold crown.
 */
export function PuppyModel() {
  const tailRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (tailRef.current) {
      tailRef.current.rotation.z = Math.sin(clock.elapsedTime * 8) * 0.4 - 0.2;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={0.9}>
      {/* Body */}
      <mesh position={[0, -0.3, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.9}
          metalness={0}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.35, 0.15]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>

      {/* Fluffy head fur tuft */}
      <mesh position={[0, 0.6, 0.1]} castShadow>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={1} />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.3, 0.55, 0]} rotation={[0, 0, -0.3]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.95} />
      </mesh>
      <mesh position={[0.3, 0.55, 0]} rotation={[0, 0, 0.3]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.95} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.13, 0.4, 0.32]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.13, 0.4, 0.32]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.28, 0.4]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Tiny crown */}
      <group position={[0, 0.78, 0.1]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 6]} />
          <meshStandardMaterial
            color="#E8C97A"
            metalness={1}
            roughness={0.2}
            emissive="#E8C97A"
            emissiveIntensity={0.4}
          />
        </mesh>
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i / 5) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.15, 0.08, Math.sin(angle) * 0.15]}
            >
              <coneGeometry args={[0.03, 0.08, 8]} />
              <meshStandardMaterial
                color="#E8C97A"
                metalness={1}
                roughness={0.2}
                emissive="#E8C97A"
                emissiveIntensity={0.5}
              />
            </mesh>
          );
        })}
        {/* Center gem */}
        <mesh position={[0, 0.04, 0]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#C93368"
            emissive="#C93368"
            emissiveIntensity={0.6}
            metalness={0.5}
          />
        </mesh>
      </group>

      {/* Tail */}
      <group ref={tailRef} position={[0, -0.1, -0.4]}>
        <mesh position={[0, 0.1, -0.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.95} />
        </mesh>
      </group>

      {/* Paws */}
      <mesh position={[-0.25, -0.65, 0.15]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.95} />
      </mesh>
      <mesh position={[0.25, -0.65, 0.15]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.95} />
      </mesh>
      <mesh position={[-0.2, -0.65, -0.2]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.95} />
      </mesh>
      <mesh position={[0.2, -0.65, -0.2]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.95} />
      </mesh>

      {/* Ambient glow */}
      <pointLight position={[0, 0.5, 0]} color="#E8C97A" intensity={0.6} distance={2} />
    </group>
  );
}
