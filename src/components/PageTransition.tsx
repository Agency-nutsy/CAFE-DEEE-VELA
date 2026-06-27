import { useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <AnimatePresence mode="wait">
      <motion.div key={currentPath} className="relative h-full w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
        
        {/* Curtains for transition */}
        <motion.div
          initial={{ top: "100%" }}
          animate={{ top: "100%" }}
          exit={{ top: "0%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-background pointer-events-none"
        />
        <motion.div
          initial={{ top: "100%" }}
          animate={{ top: "100%" }}
          exit={{ top: "0%" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[101] bg-gold pointer-events-none"
        />
      </motion.div>
    </AnimatePresence>
  );
}
