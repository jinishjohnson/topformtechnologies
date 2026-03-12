"use client";
import { useCallback, useEffect, useMemo, useRef } from "react"
import { cn } from "~/lib/utils"

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      r: Number.parseInt(result[1], 16),
      g: Number.parseInt(result[2], 16),
      b: Number.parseInt(result[3], 16),
    }
    : { r: 0, g: 0, b: 0 };
}

export function DotPattern({
  className,
  children,
  proximity = 180,
  waveSpeed = 0.6
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const dotsRef = useRef([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef()
  const startTimeRef = useRef(Date.now())

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    const ctx = canvas.getContext("2d")
    if (ctx) ctx.scale(dpr, dpr)

    const particleCount = 1000;
    const particles = []
    const colors = ["#4D83F6", "#9D4EDD", "#F72585", "#FF9E00", "#4CC9F0", "#3A0CA3"];
    
    // Max radius based on screen corner
    const maxRadius = Math.sqrt(Math.pow(rect.width/2, 2) + Math.pow(rect.height/2, 2));
    
    // Create a vortex of dashed particles
    for (let i = 0; i < particleCount; i++) {
      // Non-linear distribution to make it look organic, keeping the center (r < 250) empty
      const t = Math.pow(Math.random(), 1.5); 
      const radius = 250 + t * (maxRadius - 100); 
      const angle = Math.random() * Math.PI * 2;
      
      particles.push({
        r: radius,
        baseR: radius,
        a: angle,
        color: hexToRgb(colors[Math.floor(Math.random() * colors.length)]),
        opacity: 0.2 + Math.random() * 0.7,
        length: 5 + Math.random() * 10,
        thickness: 1.5 + Math.random() * 2,
        speed: 0.0003 + Math.random() * 0.0006, 
        floatOffset: Math.random() * Math.PI * 2,
      })
    }
    dotsRef.current = particles;
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)

    const { x: mx, y: my } = mouseRef.current
    const proxSq = proximity * proximity
    const time = (Date.now() - startTimeRef.current) * waveSpeed * 0.15

    const cx = canvas.width / dpr / 2;
    const cy = canvas.height / dpr / 2;

    for (const dot of dotsRef.current) {
      // 1. Calculate base rotating position
      const currentAngle = dot.a + time * dot.speed;
      
      // Floating offset for organic movement
      const radialFloat = Math.sin(time * 0.01 + dot.floatOffset) * 20;
      const currentR = dot.r + radialFloat;

      let targetX = cx + Math.cos(currentAngle) * currentR;
      let targetY = cy + Math.sin(currentAngle) * currentR;

      // 2. Mouse Anti-gravity repulsion calculation
      const dx = targetX - mx
      const dy = targetY - my
      const distSq = dx * dx + dy * dy

      let isGlowing = false;
      let glowIntensity = 0;

      if (distSq < proxSq && distSq > 0) {
        const dist = Math.sqrt(distSq)
        // Stronger repulsion closer to mouse
        const force = Math.pow(1 - dist / proximity, 2)
        const repulsion = force * 60; // Max displacement
        
        targetX += (dx / dist) * repulsion;
        targetY += (dy / dist) * repulsion;
        
        isGlowing = true;
        glowIntensity = force;
      }

      // Draw dashed particle
      // Tangential angle to orbit, with slight inward slant
      const moveAngle = currentAngle + Math.PI / 2 + 0.15;
      
      ctx.save();
      ctx.translate(targetX, targetY);
      ctx.rotate(moveAngle);
      
      let alpha = dot.opacity;
      if (isGlowing) {
         alpha = Math.min(1, alpha + glowIntensity * 0.8);
      }
      
      ctx.globalAlpha = alpha;
      ctx.fillStyle = `rgb(${dot.color.r}, ${dot.color.g}, ${dot.color.b})`;
      
      ctx.beginPath();
      if (ctx.roundRect) {
         ctx.roundRect(-dot.length / 2, -dot.thickness / 2, dot.length, dot.thickness, dot.thickness / 2);
      } else {
         ctx.rect(-dot.length / 2, -dot.thickness / 2, dot.length, dot.thickness);
      }
      ctx.fill();
      
      // Add strong glow when interacting
      if (isGlowing && glowIntensity > 0.1) {
         ctx.shadowColor = `rgb(${dot.color.r}, ${dot.color.g}, ${dot.color.b})`;
         ctx.shadowBlur = 10 * glowIntensity;
         ctx.fill();
      }
      
      ctx.restore();
    }

    animationRef.current = requestAnimationFrame(draw)
  }, [proximity, waveSpeed])

  useEffect(() => {
    buildGrid()

    const container = containerRef.current
    if (!container) return

    const ro = new ResizeObserver(buildGrid)
    ro.observe(container)

    return () => ro.disconnect();
  }, [buildGrid])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(draw)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    };
  }, [draw])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    };
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden bg-white", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.6) 100%)",
        }} />
      {/* Content layer */}
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  );
}

export default function DotPatternDemo() {
  return <DotPattern />;
}
