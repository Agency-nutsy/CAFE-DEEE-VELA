import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cafe De Vela" },
      { name: "description", content: "A glimpse into Cafe De Vela — the food, the space, the stories." },
      { property: "og:title", content: "Gallery — Cafe De Vela" },
      { property: "og:description", content: "Moments at Cafe De Vela." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Ambiance" | "Food" | "Drinks" | "Video";

const photos: { src: string; alt: string; cat: Exclude<Cat, "All">; isVideo?: boolean }[] = [
  { src: "/gallery-ambiance-4.jpg", alt: "Floral Mirror Arch", cat: "Ambiance" },
  { src: "/gallery-new-1.jpg", alt: "French Fries Platter", cat: "Food" },
  { src: "/gallery-ambiance-2.jpg", alt: "Golden Balloons Decor", cat: "Ambiance" },
  { src: "/gallery-new-2.jpg", alt: "Chilli Chicken Rose Petals", cat: "Food" },
  { src: "/gallery-ambiance-3.jpg", alt: "Green Sofa Corner", cat: "Ambiance" },
  { src: "/gallery-new-3.jpg", alt: "Gourmet Pizza", cat: "Food" },
  { src: "/gallery-new-4.jpg", alt: "Mint Mojito", cat: "Drinks" },
  { src: "/gallery-drink-2.jpg", alt: "Strawberry Shake", cat: "Drinks" },
  { src: "/gallery-drink-3.jpg", alt: "Chocolate Milkshake", cat: "Drinks" },
  { src: "/gallery-new-5.jpg", alt: "Full Table Spread", cat: "Food" },
  { src: "/video-1.mp4", alt: "Cafe De Vela Tour", cat: "Video", isVideo: true },
  { src: "/video-2.mp4", alt: "Cafe De Vela Ambiance", cat: "Video", isVideo: true },
];

// Masonry pattern: positions in 4-col grid with big tiles
const tileClass = (i: number) => {
  const pattern = i % 7;
  if (pattern === 0) return "col-span-2 row-span-2 aspect-square";
  if (pattern === 5) return "col-span-2 aspect-[2/1]";
  return "aspect-square";
};

const cats: Cat[] = ["All", "Ambiance", "Food", "Drinks", "Video"];

function GalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = cat === "All" ? photos : photos.filter((p) => p.cat === cat);

  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <>
      <section className="pt-36 pb-12 px-6 md:px-10 text-center border-b border-border">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Gallery</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream text-balance">
            Moments at <span className="italic">Cafe De Vela</span>
          </h1>
          <p className="mt-6 font-serif italic text-lg md:text-xl text-foreground/80 max-w-xl mx-auto">
            A glimpse into our world — the food, the space, the stories.
          </p>
        </Reveal>
      </section>

      <div className="sticky top-20 z-30 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex gap-2 md:gap-1 justify-start md:justify-center overflow-x-auto">
          {cats.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative py-5 px-4 text-[11px] md:text-xs uppercase tracking-[0.25em] transition-colors whitespace-nowrap ${
                  active ? "text-gold" : "text-muted-foreground hover:text-cream"
                }`}
              >
                {c}
                {active && <motion.span layoutId="gallery-underline" className="absolute left-3 right-3 bottom-0 h-px bg-gold" />}
              </button>
            );
          })}
        </div>
      </div>

      <section className="px-4 md:px-10 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          {filtered.map((p, i) => (
            <motion.button
              key={p.src + i}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: (i % 8) * 0.05 }}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden ${tileClass(i)} md:${tileClass(i)}`}
              style={{}}
            >
              {p.isVideo ? (
                <>
                  <video
                    src={p.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                      <Play size={22} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-cream hover:text-gold transition"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-4 md:left-10 text-cream hover:text-gold transition"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={40} />
            </button>
            {filtered[lightbox].isVideo ? (
              <motion.video
                key={lightbox}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={filtered[lightbox].src}
                controls
                autoPlay
                playsInline
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              />
            ) : (
              <motion.img
                key={lightbox}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-[90vw] object-contain"
              />
            )}
            <button
              aria-label="Next"
              className="absolute right-4 md:right-10 text-cream hover:text-gold transition"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
