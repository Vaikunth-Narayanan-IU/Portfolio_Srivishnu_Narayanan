"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const points = useRef<THREE.Points>(null);
  
  const count = 1500;
  const [positions, phases] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Create a widespread field
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return [positions, phases];
  }, [count]);

  // Target rotations for smooth easing
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!points.current) return;
    const time = state.clock.getElapsedTime();
    
    // Mouse interaction with easing
    targetRotation.current.x = (state.pointer.y * 0.1);
    targetRotation.current.y = (state.pointer.x * 0.1);

    points.current.rotation.y += (targetRotation.current.y - points.current.rotation.y) * 0.02;
    points.current.rotation.x += (targetRotation.current.x - points.current.rotation.x) * 0.02;
    
    // Base rotation
    points.current.rotation.y += 0.001;
    points.current.rotation.x += 0.0005;

    // Animate points subtly
    const positionsAttr = points.current.geometry.attributes.position;
    for(let i = 0; i < count; i++) {
      const i3 = i * 3;
      const phase = phases[i];
      // Subtle vertical drift
      positionsAttr.array[i3 + 1] += Math.sin(time * 0.5 + phase) * 0.001;
    }
    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#14b8a6"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-background pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={["#09090b", 2, 7]} />
        <Particles />
      </Canvas>
    </div>
  );
}
