"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * F1-inspired neon track with a streaking car silhouette.
 */
export function F1Track() {
  const carRef = useRef<THREE.Group>(null);
  const tRef = useRef(0);

  // Curved path
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-4, 0, -2),
    new THREE.Vector3(-2, 0.3, -1),
    new THREE.Vector3(0, 0.2, -1.5),
    new THREE.Vector3(2, 0, -2),
    new THREE.Vector3(4, 0.2, -1.5),
  ]);

  useFrame(({ clock }, delta) => {
    if (!carRef.current) return;
    tRef.current = (tRef.current + delta * 0.08) % 1;
    const point = curve.getPoint(tRef.current);
    carRef.current.position.copy(point);
    carRef.current.position.y += 0.3;
    // Face direction of travel
    const tangent = curve.getTangent(tRef.current);
    carRef.current.lookAt(point.clone().add(tangent));
  });

  return (
    <group>
      {/* The neon track itself — glowing tube */}
      <mesh>
        <tubeGeometry args={[curve, 64, 0.04, 8, false]} />
        <meshStandardMaterial
          color="#C9A8FF"
          emissive="#C9A8FF"
          emissiveIntensity={2}
          metalness={0.5}
        />
      </mesh>

      {/* Track outer glow */}
      <mesh>
        <tubeGeometry args={[curve, 64, 0.08, 8, false]} />
        <meshBasicMaterial color="#5B2A86" transparent opacity={0.3} />
      </mesh>

      {/* F1 car silhouette streaking along the curve */}
      <group ref={carRef}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <coneGeometry args={[0.15, 0.5, 8]} />
          <meshStandardMaterial
            color="#E8C97A"
            emissive="#E8C97A"
            emissiveIntensity={1.5}
            metalness={1}
            roughness={0.2}
          />
        </mesh>
        {/* Trail */}
        <pointLight color="#C9A8FF" intensity={1} distance={2} />
      </group>
    </group>
  );
}
