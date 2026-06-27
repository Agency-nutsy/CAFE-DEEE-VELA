import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrubbableText({ children, className = "" }: { children: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = children.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap justify-center gap-x-[0.25em] ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const color = useTransform(scrollYProgress, [start, end], ["#fcf9f2", "#D4AF37"]);
        
        return (
          <motion.span key={i} style={{ opacity, color }} className="transition-none">
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}
