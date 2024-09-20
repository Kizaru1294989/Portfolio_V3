import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const WaveParticles = () => {
  const pointsRef = useRef(null)
  const particleCount = 10000
  const gridSize = 100

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * gridSize
      const z = (Math.random() - 0.5) * gridSize
      const y = Math.sin(x * 0.1) * Math.sin(z * 0.1) * 5

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      const r = 0.2 + Math.random() * 0.3
      const g = 0.2 + Math.random() * 0.3
      const b = 0.8 + Math.random() * 0.2

      colors[i * 3] = r
      colors[i * 3 + 1] = g
      colors[i * 3 + 2] = b
    }

    return [positions, colors]
  }, [])

  useFrame((state) => {
    const { clock } = state
    if (pointsRef.current) {
      const positionAttribute = pointsRef.current.geometry.attributes.position
      const colorAttribute = pointsRef.current.geometry.attributes.color

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const x = positionAttribute.array[i3]
        const z = positionAttribute.array[i3 + 2]

        // Update y position to create wave effect
        positionAttribute.array[i3 + 1] = Math.sin(x * 0.1 + clock.elapsedTime) * Math.sin(z * 0.1 + clock.elapsedTime) * 5

        // Update color based on height
        const height = positionAttribute.array[i3 + 1]
        const r = 0.2 + Math.max(0, height / 10)
        const g = 0.2 + Math.max(0, height / 15)
        const b = 0.8 + Math.max(0, -height / 10)

        colorAttribute.array[i3] = r
        colorAttribute.array[i3 + 1] = g
        colorAttribute.array[i3 + 2] = b
      }

      positionAttribute.needsUpdate = true
      colorAttribute.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors />
    </points>
  )
}

const WaveParticlesScene = () => {
  return (
    <div 
      style={{
        position: 'absolute',  // Position absolute to overlay on the page
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,  // z-index set to -1 to place behind other components
        pointerEvents: 'none',  // Ensure it doesn't block interaction with other elements
      }}
    >
      <Canvas camera={{ position: [0, 30, 60], fov: 75 }}>
        <WaveParticles />
      </Canvas>
    </div>
  )
}

export default WaveParticlesScene
