import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // Raw mouse position for the spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Normalized position (-1 to 1) for 3D rotation
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);

  // Smooth springs for a very fluid, Apple-like rotation
  const xSpring = useSpring(xPct, { stiffness: 150, damping: 20, mass: 0.5 });
  const ySpring = useSpring(yPct, { stiffness: 150, damping: 20, mass: 0.5 });

  // Map to degrees (max 12 degrees of tilt)
  const rotateX = useTransform(ySpring, [-1, 1], [12, -12]);
  const rotateY = useTransform(xSpring, [-1, 1], [-12, 12]);

  function handleMouseMove(e: MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const clientX = e.clientX;
    const clientY = e.clientY;

    const left = clientX - rect.left;
    const top = clientY - rect.top;

    mouseX.set(left);
    mouseY.set(top);

    // Calculate normalized values (-1 to 1)
    const xPctRaw = (left / rect.width) * 2 - 1;
    const yPctRaw = (top / rect.height) * 2 - 1;

    xPct.set(xPctRaw);
    yPct.set(yPctRaw);
  }

  function handleMouseLeave() {
    xPct.set(0);
    yPct.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200, // Provides the depth for the parallax
      }}
      className={`group relative ${className}`}
    >
      {/* Background Layer (Stays at Z=0) */}
      <div 
        className="absolute inset-0 rounded-2xl bg-card border border-border shadow-lg transition-shadow duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(169,132,195,0.4)] overflow-hidden"
      >
        {/* Soft background glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(169, 132, 195, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        {/* Glossy Glass Reflection */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.15),
                transparent 40%
              )
            `,
            mixBlendMode: "overlay"
          }}
        />
        
        {/* Intense border tracing glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                250px circle at ${mouseX}px ${mouseY}px,
                rgba(169, 132, 195, 0.9),
                transparent 80%
              )
            `,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1.5px", 
          }}
        />
      </div>

      {/* Floating Content Layer (Pops out in 3D) */}
      <div 
        className="relative z-10 h-full w-full"
        style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
