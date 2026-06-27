import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function MaskedButton({ 
  to, 
  href, 
  children,
  className = "",
  showArrow = false
}: { 
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}) {
  const content = (
    <motion.div
      className="relative overflow-hidden group cursor-pointer inline-flex items-center gap-3 border border-gold/60 bg-black/60 backdrop-blur-md shadow-lg px-8 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-300"
      whileHover="hover"
      initial="initial"
    >
      {/* Primary layer */}
      <motion.span 
        className="flex items-center gap-3 text-gold relative z-10"
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" }
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        {children} {showArrow && <ArrowRight size={14} />}
      </motion.span>
      
      {/* Masked reveal layer */}
      <motion.span 
        className="flex items-center gap-3 text-primary-foreground bg-gold absolute inset-0 px-8 py-4 z-20"
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        {children} {showArrow && <ArrowRight size={14} className="translate-x-1" />}
      </motion.span>
    </motion.div>
  );

  if (to) {
    return <Link to={to as any} className={className}>{content}</Link>;
  }
  
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
