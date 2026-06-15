"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode, Component, ErrorInfo } from "react";
import { Environment } from "@react-three/drei";
import { isLowEndDevice } from "@/lib/utils";

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  enableBloom?: boolean;
  effects?: ReactNode;
}

class EnvironmentErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(
      "Environment map failed to load; falling back to lights.",
      error,
      errorInfo
    );
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

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
      onCreated={({ gl }) => {
        const canvas = gl.domElement;
        canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          console.warn("WebGL context lost; renderer will try to restore.");
        });
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} color="#C9A8FF" />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          color="#FFFFFF"
        />
        <directionalLight
          position={[-5, 3, -5]}
          intensity={0.6}
          color="#5B2A86"
        />
        <pointLight position={[0, 3, 2]} intensity={0.8} color="#E8C97A" />

        <EnvironmentErrorBoundary
          fallback={
            <>
              <color attach="background" args={["#050210"]} />
              <ambientLight intensity={0.6} color="#C9A8FF" />
              <directionalLight
                position={[5, 5, 5]}
                intensity={1.5}
                color="#FFFFFF"
              />
            </>
          }
        >
          <Environment
            files="/hdri/dikhololo_night_1k.hdr"
            background={false}
          />
        </EnvironmentErrorBoundary>

        {children}
        {effects}
      </Suspense>
    </Canvas>
  );
}
