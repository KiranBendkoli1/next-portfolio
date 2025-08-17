"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ShaderMaterial, type Points } from "three";
import * as THREE from "three";

// Aurora Shader
const auroraVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const auroraFragmentShader = `
  uniform float uTime;
  uniform float uIntensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  // Noise function
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 4; i++) {
      value += amplitude * smoothNoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    
    return value;
  }
  
  void main() {
    vec2 uv = vUv;
    
    // Create vertical curtain effect
    float curtain = sin(uv.x * 12.0 + uTime * 0.5) * 0.5 + 0.5;
    curtain *= sin(uv.x * 8.0 + uTime * 0.3) * 0.5 + 0.5;
    
    // Add flowing movement
    float flow = fbm(vec2(uv.x * 3.0, uv.y * 2.0 + uTime * 0.2));
    flow += fbm(vec2(uv.x * 6.0, uv.y * 4.0 - uTime * 0.15)) * 0.5;
    
    // Create vertical streaks
    float streaks = smoothstep(0.3, 0.7, flow) * curtain;
    
    // Fade from bottom to top
    float verticalGradient = smoothstep(0.0, 0.6, uv.y) * smoothstep(1.0, 0.7, uv.y);
    
    // Aurora colors - primarily green with blue variations
    vec3 green = vec3(0.2, 1.0, 0.4);
    vec3 blueGreen = vec3(0.1, 0.8, 0.6);
    vec3 darkGreen = vec3(0.1, 0.6, 0.3);
    
    // Mix colors based on position and noise
    vec3 color = mix(darkGreen, green, streaks);
    color = mix(color, blueGreen, flow * 0.3);
    
    // Apply intensity and gradient
    float alpha = streaks * verticalGradient * uIntensity;
    alpha *= smoothstep(0.0, 0.1, uv.y); // Fade in from bottom
    
    gl_FragColor = vec4(color, alpha);
  }
`;

function Stars() {
  const pointsRef = useRef<Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      // Distribute stars across the sky
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;

      // White stars with slight variations
      const brightness = 0.8 + Math.random() * 0.2;
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={positions}
          itemSize={3}
          args={[] as any}
        />
        <bufferAttribute
          attach="attributes-color"
          count={2000}
          array={colors}
          itemSize={3}
          args={[] as any}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.8} />
    </points>
  );
}

function Aurora() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const shaderMaterial = useMemo(() => {
    return new ShaderMaterial({
      vertexShader: auroraVertexShader,
      fragmentShader: auroraFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: 0.8 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <planeGeometry args={[26, 8]} />
      <shaderMaterial ref={materialRef} attach="material" {...shaderMaterial} />
    </mesh>
  );
}

function AuroraScene() {
  return (
    <>
      {/* Dark sky background */}
      <color attach="background" args={["#0a0a1a"]} />

      <Stars />

      <Aurora />
    </>
  );
}

const AuroraCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="absolute inset-0"
    >
      <Suspense fallback={null}>
        <AuroraScene />
      </Suspense>
    </Canvas>
  );
};

export default AuroraCanvas;
