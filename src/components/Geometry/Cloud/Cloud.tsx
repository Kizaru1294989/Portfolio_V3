'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function RainEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // SCENE
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x111111, 0.002)

    // CAMERA
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.z = 1
    camera.rotation.x = 1.16
    camera.rotation.y = -0.12
    camera.rotation.z = 0.27

    // RENDERER
    const renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(scene.fog.color)
    renderer.setSize(window.innerWidth, window.innerHeight)

    containerRef.current?.appendChild(renderer.domElement)

    // Lights
    const ambient = new THREE.AmbientLight(0xaaaaaa)
    scene.add(ambient)

    const directionalLight = new THREE.DirectionalLight(0xaaaaaa)
    directionalLight.position.set(0, 0, 1)
    scene.add(directionalLight)

    // Rain
    const rainGeometry = new THREE.BufferGeometry()
    const rainCount = 1200

    const positions = new Float32Array(rainCount * 3)
    const velocities = new Float32Array(rainCount)

    for (let i = 0; i < rainCount * 3; i += 3) {
      positions[i] = Math.random() * 400 - 200
      positions[i + 1] = Math.random() * 500 - 250
      positions[i + 2] = Math.random() * 400 - 200
      velocities[i / 3] = 0
    }

    rainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    rainGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1))

    const rainMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.3,
      transparent: true
    })

    const rain = new THREE.Points(rainGeometry, rainMaterial)
    scene.add(rain)

    // Clouds
    const cloudParticles: THREE.Mesh[] = []
    const loader = new THREE.TextureLoader()

    loader.load("https://raw.githubusercontent.com/navin-navi/codepen-assets/master/images/smoke.png", (texture) => {
      const cloudGeometry = new THREE.PlaneGeometry(600, 600)
      const cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true
      })

      for (let p = 0; p < 25; p++) {
        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial)
        cloud.position.set(
          Math.random() * 800 - 400,
          500,
          Math.random() * 500 - 450
        )
        cloud.rotation.x = 1.16
        cloud.rotation.y = -0.12
        cloud.rotation.z = Math.random() * 360
        cloud.material.opacity = 0.6
        cloudParticles.push(cloud)
        scene.add(cloud)
      }
    })

    // Animation
    function render() {
      cloudParticles.forEach(p => {
        p.rotation.z -= 0.002
      })

      const positions = rainGeometry.attributes.position.array as Float32Array
      const velocities = rainGeometry.attributes.velocity.array as Float32Array

      for (let i = 0; i < positions.length; i += 3) {
        velocities[i / 3] -= 0.1 + Math.random() * 0.1
        positions[i + 1] += velocities[i / 3]
        if (positions[i + 1] < -200) {
          positions[i + 1] = 200
          velocities[i / 3] = 0
        }
      }

      rainGeometry.attributes.position.needsUpdate = true
      rain.rotation.y += 0.002

      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }

    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onWindowResize)

    render()

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef}       style={{
    position: 'absolute',  
    top: 0,
    left: 0,
    zIndex: -1,  
    pointerEvents: 'none',  
  }} />
}

