import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-Dy6qDWoX.mjs";
import { L as Leaf, F as Flame, b as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const HERO = "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=2000&q=80";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] min-h-[480px] overflow-hidden flex items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center animate-ken-burns", style: {
        backgroundImage: `url(${HERO})`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-8xl text-cream text-balance", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Story" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-5xl text-cream text-balance", children: [
        "Where it all ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "began." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-6 text-foreground/85 leading-loose md:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cafe De Vela was born from a simple dream — to create a place in the heart of Satyaniketan where every table feels like home, every dish is crafted with intention, and every evening glows with warmth. Tucked into the charming lanes of Todapur, Cafe De Vela opened its doors as a sanctuary for those who seek good food, great company, and a moment of quiet beauty in the middle of a busy city." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "The name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic font-serif italic", children: '"De Vela"' }),
          " evokes the romance of candlelight — and that philosophy is woven into every corner of the cafe. From the warm amber lighting to the carefully curated menu spanning Italian, American, Chinese, and Continental cuisines, Cafe De Vela is a celebration of flavor and atmosphere in equal measure."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rated 4.4+ stars and beloved by the Satyaniketan community, Cafe De Vela has become a go-to destination for students, professionals, couples, and families alike. Whether you come for the Tandoori Paneer Garlic Bread, the peach iced tea, or simply to find a quiet corner to work and think — you are always welcome here." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 py-24 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "What we believe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-4xl md:text-5xl text-cream text-balance", children: [
          "Small things, done with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "love" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [{
        icon: Leaf,
        title: "Fresh Ingredients",
        text: "Every dish is prepared with care using quality, fresh ingredients."
      }, {
        icon: Flame,
        title: "Warm Ambiance",
        text: "A cozy, candlelit setting designed for connection and calm."
      }, {
        icon: MessageCircle,
        title: "Friendly Service",
        text: "Our team is here to make your visit memorable, every single time."
      }].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-card border border-border h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { size: 28, strokeWidth: 1.2, className: "text-gold mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-cream mb-3", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic leading-relaxed", children: v.text })
      ] }) }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 py-24 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "The Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-4xl md:text-5xl text-cream", children: [
        "The faces behind the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "flame" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground italic", children: "Add owner/team details here." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-32 md:w-40 md:h-40 rounded-full bg-card border border-border flex items-center justify-center text-gold/40 font-serif text-3xl", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-serif text-cream", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-[0.2em]", children: "Role" })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground mb-10", children: "Featured on" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-12 gap-y-6 font-serif text-cream/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl italic", children: "Zomato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl italic", children: "Google Maps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl italic", children: "District" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl italic", children: "Instagram" })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
