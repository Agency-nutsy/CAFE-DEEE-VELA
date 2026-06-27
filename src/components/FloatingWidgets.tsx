import { MessageCircle, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/919335778124"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        whileHover={{ scale: 1.05 }}
        className="group flex items-center gap-3 h-13 pl-4 pr-5 py-3 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 hover:shadow-[#25D366]/40 transition-shadow"
      >
        <MessageCircle size={20} />
        <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap transition-all duration-500 text-sm font-medium">
          Chat with Us
        </span>
      </motion.a>
      <motion.a
        href="https://maps.app.goo.gl/jnMmvsXz8ZJNs8nj6"
        target="_blank"
        rel="noreferrer"
        aria-label="Get Directions"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.85, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        whileHover={{ scale: 1.05 }}
        className="group flex items-center gap-3 h-13 pl-4 pr-5 py-3 rounded-full bg-gold text-primary-foreground shadow-xl shadow-black/40 hover:shadow-gold/50 transition-shadow"
      >
        <Navigation size={20} />
        <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap transition-all duration-500 text-sm font-medium">
          Get Directions
        </span>
      </motion.a>
    </div>
  );
}
