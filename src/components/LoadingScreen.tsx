import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setLoadingComplete(true);
    }, 3800);
    
    const t2 = setTimeout(() => {
      setUnmount(true);
      sessionStorage.setItem("cdv-loaded", "1");
      onComplete?.();
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (unmount) return null;

  return (
    <AnimatePresence>
      {!unmount && (
        <motion.div
          key="wax-loader"
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none overflow-hidden bg-black"
          animate={{ opacity: loadingComplete ? 0 : 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Subtle breathing purple aura in the background */}
          <motion.div
            className="absolute w-[60vw] h-[60vw] rounded-full mix-blend-screen pointer-events-none"
            style={{ 
              background: "radial-gradient(circle, rgba(169,132,195,0.15) 0%, rgba(0,0,0,0) 70%)",
              filter: "blur(60px)"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* CAFÈ text */}
            <motion.h1 
              className="font-serif text-6xl md:text-7xl tracking-[0.15em] uppercase font-light mb-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="bg-gradient-to-r from-[#d972ff] to-[#ffffff] text-transparent bg-clip-text">
                CAFÈ
              </span>
            </motion.h1>

            <div className="flex items-center gap-4">
              {/* DE */}
              <motion.span 
                className="font-sans text-xl md:text-2xl tracking-[0.25em] text-white/90"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                DE
              </motion.span>
              
              {/* The Candle / Drop Sequence */}
              <div className="relative flex flex-col items-center justify-end w-6 h-12">
                
                {/* 1. The Falling Drop of Molten Wax */}
                <motion.div
                  className="bg-[#d972ff] absolute"
                  initial={{ 
                    y: -400, 
                    width: 6,
                    height: 6, 
                    borderRadius: "50%", 
                    opacity: 1,
                    boxShadow: "0 0 20px #d972ff"
                  }}
                  animate={{ 
                    y: 20, 
                    width: [6, 4, 6], // stretch while falling
                    height: [6, 12, 6], 
                    opacity: [1, 1, 0] // fades out as it forms candle
                  }}
                  transition={{ 
                    y: { type: "spring", damping: 14, stiffness: 80, delay: 0.5 },
                    width: { duration: 0.8, delay: 0.5 },
                    height: { duration: 0.8, delay: 0.5 },
                    opacity: { duration: 0.2, delay: 1.4 }
                  }}
                />

                {/* 2. The Glass Ripple when it hits */}
                <motion.div 
                  className="absolute bottom-0 w-8 h-8 rounded-full border border-[#d972ff]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 2.5], opacity: [0, 0.8, 0] }}
                  transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                />

                {/* 3. The Candle Body (Fades in as drop lands) */}
                <motion.div
                  className="bg-white absolute bottom-0"
                  initial={{ 
                    width: 6,
                    height: 0, 
                    borderRadius: "1px", 
                    opacity: 0 
                  }}
                  animate={{ 
                    height: 18, 
                    opacity: 1 
                  }}
                  transition={{ 
                    height: { type: "spring", damping: 12, stiffness: 100, delay: 1.4 },
                    opacity: { duration: 0.2, delay: 1.4 }
                  }}
                />

                {/* 4. The Flame Ignites */}
                <motion.div 
                  className="w-2.5 h-3.5 absolute bottom-5"
                  style={{
                    background: "linear-gradient(to top, #ffffff, #d972ff)",
                    borderRadius: "50% 50% 20% 20% / 60% 60% 40% 40%",
                    boxShadow: "0 0 12px #d972ff, 0 0 20px #A984C3"
                  }}
                  initial={{ opacity: 0, scale: 0, y: 5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [1, 1.15, 0.95, 1.1, 1],
                    y: 0
                  }}
                  transition={{ 
                    opacity: { duration: 0.3, delay: 1.8 },
                    scale: { duration: 2, delay: 1.8, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 0.3, delay: 1.8, type: "spring" }
                  }}
                />
              </div>

              {/* VELA */}
              <motion.span 
                className="font-sans text-xl md:text-2xl tracking-[0.25em] text-white/90"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                VELA
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


