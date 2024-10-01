"use client"

import React, { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    THREE: any;
    THREEx: any;
  }
}

const SCRIPT_URLS = [
  'https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/build/three-min.js',
  'https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/examples/js/SimplexNoise.js',
  'https://jeromeetienne.github.io/threex.terrain/threex.terrain.js'
]

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = reject
    document.head.appendChild(script)
  })
}

export default function TerrainViewer() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)

  useEffect(() => {
    // Add global styles
    document.body.style.margin = '0px'
    document.body.style.backgroundColor = '#222222'
    // document.body.style.overflow = 'hidden'

    Promise.all(SCRIPT_URLS.map(loadScript))
      .then(() => setScriptsLoaded(true))
      .catch(error => console.error("Failed to load scripts:", error))

    // Cleanup function
    return () => {
      document.body.style.margin = ''
      document.body.style.backgroundColor = ''
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!scriptsLoaded || !mountRef.current) return

    const { THREE, THREEx } = window

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x222222)
    scene.fog = new THREE.Fog(0x222222, 0, 45)

    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 1000)
    camera.position.set(0, 2, 15)

    const ambientLight = new THREE.AmbientLight(0x202020)
    scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight('white', 5)
    directionalLight1.position.set(0.5, 0.0, 2)
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight('white', 0.75 * 2)
    directionalLight2.position.set(-0.5, -0.5, -2)
    scene.add(directionalLight2)

    const heightMap = THREEx.Terrain.allocateHeightMap(256, 256)
    THREEx.Terrain.simplexHeightMap(heightMap)

    // Correction: Use THREEx.Terrain.heightMapToPlaneGeometry instead of PlaneGeometry
    const geometry = THREEx.Terrain.heightMapToPlaneGeometry(heightMap)
    THREEx.Terrain.heightMapToVertexColor(heightMap, geometry)

    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    mesh.lookAt(new THREE.Vector3(0, 1, 0))
    mesh.scale.set(30, 35, 2)

    let lastTimeMsec: number | null = null
    const animate = (nowMsec: number) => {
      requestAnimationFrame(animate)

      lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
      const deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
      lastTimeMsec = nowMsec

      mesh.rotation.z += 0.2 * deltaMsec / 1000

      renderer.render(scene, camera)
    }

    animate(0)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [scriptsLoaded])

  return <div ref={mountRef}  />
}