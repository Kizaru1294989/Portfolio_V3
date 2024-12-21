import React, { useEffect, useRef } from 'react';

// Constants
const NUM_PARTICLES = 1000;
const PARTICLE_SIZE = 0.2; // View heights
const SPEED = 10000; // Milliseconds

function randomNormal({ mean = 0, dev = 1, pool = [] }) {
  function normalPool(o) {
    let r = 0;
    do {
      const a = Math.round(normal({ mean: o.mean, dev: o.dev }));
      if (a < o.pool.length && a >= 0) return o.pool[a];
      r++;
    } while (r < 100);
  }

  function normal(o) {
    let r, a, n, e;
    const t = o.dev;
    const l = o.mean;
    do {
      r = (a = 2 * Math.random() - 1) * a + (n = 2 * Math.random() - 1) * n;
    } while (r >= 1);
    e = a * Math.sqrt(-2 * Math.log(r) / r);
    return t * e + l;
  }

  if (Array.isArray(pool) && pool.length > 0) return normalPool({ mean, dev, pool });
  return normal({ mean, dev });
}

function rand(low, high) {
  return Math.random() * (high - low) + low;
}

function createParticle() {
  const colour = {
    r: 255, 
    g: 255,
    b: 255,
    a: rand(0.1, 0.9), 
  };
  return {
    x: -2,
    y: -2,
    diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
    duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
    amplitude: randomNormal({ mean: 16, dev: 2 }),
    offsetY: randomNormal({ mean: 0, dev: 10 }),
    arc: Math.PI * 2,
    startTime: performance.now() - rand(0, SPEED),
    colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
  };
}

function moveParticle(particle, time) {
  const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
  return {
    ...particle,
    x: progress,
    y: Math.sin(progress * particle.arc) * particle.amplitude + particle.offsetY,
  };
}

function drawParticle(ctx, particle, canvasHeight, canvasWidth, vh) {
  ctx.fillStyle = particle.colour;
  ctx.beginPath();
  ctx.ellipse(
    particle.x * canvasWidth,
    particle.y * vh + canvasHeight / 2,
    particle.diameter * vh,
    particle.diameter * vh,
    0,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Adjust canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    particlesRef.current = Array.from({ length: NUM_PARTICLES }, () => createParticle());

    const draw = (time) => {
      const canvasHeight = canvas.height;
      const canvasWidth = canvas.width;
      const vh = canvasHeight / 100;

      // Move and update particles
      particlesRef.current = particlesRef.current.map((particle) => moveParticle(particle, time));

      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw particles
      particlesRef.current.forEach((particle) =>
        drawParticle(ctx, particle, canvasHeight, canvasWidth, vh)
      );

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <div 
  style={{
    position: "absolute", // Position absolute to overlay on the page
    top: 0,
    left: 0,
    width: "100%",
    height: "180vh",
    zIndex: -1, // z-index set to -1 to place behind other components
    pointerEvents: "none", // Ensure it doesn't block interaction with other elements
  }}
  > <canvas  ref={canvasRef} id="particle-canvas"        />;</div>
};

export default ParticleAnimation;
