import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function CandleEmbers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 30;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = canvas!.height + Math.random() * 200; // start below screen
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * -1.5 - 0.5; // drift up
        this.opacity = Math.random() * 0.8 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Swirl effect
        this.x += Math.sin(this.y * 0.01) * 0.5;

        // Fade out as they go up
        if (this.y < canvas!.height / 2) {
            this.opacity -= 0.005;
        }

        if (this.opacity <= 0 || this.y < 0) {
          this.y = canvas!.height + 50;
          this.x = Math.random() * canvas!.width;
          this.opacity = Math.random() * 0.8 + 0.2;
        }
      }
      draw() {
        ctx!.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
        
        // Glow
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = "rgba(255, 209, 220, 0.8)";
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.canvas
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      ref={canvasRef}
      className="absolute inset-0 z-20 pointer-events-none mix-blend-screen"
    />
  );
}
