import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-Dy6qDWoX.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, c as ChevronLeft, d as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const photos = [{
  src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
  alt: "Candlelit interior",
  cat: "Ambiance"
}, {
  src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  alt: "Pizza",
  cat: "Food"
}, {
  src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
  alt: "Warm seating",
  cat: "Ambiance"
}, {
  src: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80",
  alt: "Coffee art",
  cat: "Drinks"
}, {
  src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
  alt: "Pasta",
  cat: "Food"
}, {
  src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
  alt: "Cocktail",
  cat: "Drinks"
}, {
  src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  alt: "Bar lights",
  cat: "Ambiance"
}, {
  src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
  alt: "Tandoori pizza",
  cat: "Food"
}, {
  src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
  alt: "Latte close-up",
  cat: "Drinks"
}, {
  src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=900&q=80",
  alt: "Friends gathered",
  cat: "Events"
}, {
  src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  alt: "Window seat",
  cat: "Ambiance"
}, {
  src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
  alt: "Mocktail",
  cat: "Drinks"
}, {
  src: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80",
  alt: "Noodles bowl",
  cat: "Food"
}, {
  src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80",
  alt: "Birthday gathering",
  cat: "Events"
}];
const tileClass = (i) => {
  const pattern = i % 7;
  if (pattern === 0) return "col-span-2 row-span-2 aspect-square";
  if (pattern === 5) return "col-span-2 aspect-[2/1]";
  return "aspect-square";
};
const cats = ["All", "Ambiance", "Food", "Drinks", "Events"];
function GalleryPage() {
  const [cat, setCat] = reactExports.useState("All");
  const [lightbox, setLightbox] = reactExports.useState(null);
  const filtered = cat === "All" ? photos : photos.filter((p) => p.cat === cat);
  const next = () => setLightbox((i) => i === null ? null : (i + 1) % filtered.length);
  const prev = () => setLightbox((i) => i === null ? null : (i - 1 + filtered.length) % filtered.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-36 pb-12 px-6 md:px-10 text-center border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-7xl text-cream text-balance", children: [
        "Moments at ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Cafe De Vela" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-serif italic text-lg md:text-xl text-foreground/80 max-w-xl mx-auto", children: "A glimpse into our world — the food, the space, the stories." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-20 z-30 bg-background/85 backdrop-blur-md border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-10 flex gap-2 md:gap-1 justify-start md:justify-center overflow-x-auto", children: cats.map((c) => {
      const active = c === cat;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCat(c), className: `relative py-5 px-4 text-[11px] md:text-xs uppercase tracking-[0.25em] transition-colors whitespace-nowrap ${active ? "text-gold" : "text-muted-foreground hover:text-cream"}`, children: [
        c,
        active && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "gallery-underline", className: "absolute left-3 right-3 bottom-0 h-px bg-gold" })
      ] }, c);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 md:px-10 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { layout: true, initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.6,
      delay: i % 8 * 0.05
    }, onClick: () => setLightbox(i), className: `group relative overflow-hidden ${tileClass(i)} md:${tileClass(i)}`, style: {}, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.alt, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition" })
    ] }, p.src + i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightbox !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[80] bg-background/95 backdrop-blur-sm flex items-center justify-center p-6", onClick: () => setLightbox(null), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Close", className: "absolute top-6 right-6 text-cream hover:text-gold transition", onClick: () => setLightbox(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Previous", className: "absolute left-4 md:left-10 text-cream hover:text-gold transition", onClick: (e) => {
        e.stopPropagation();
        prev();
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 40 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
        opacity: 0,
        scale: 0.98
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.4
      }, src: filtered[lightbox].src, alt: filtered[lightbox].alt, onClick: (e) => e.stopPropagation(), className: "max-h-[85vh] max-w-[90vw] object-contain" }, lightbox),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Next", className: "absolute right-4 md:right-10 text-cream hover:text-gold transition", onClick: (e) => {
        e.stopPropagation();
        next();
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 40 }) })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
