import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-Dy6qDWoX.mjs";
import { a as useScroll, b as useTransform, m as motion, c as useMotionValue, u as useSpring } from "../_libs/framer-motion.mjs";
import { F as Flame, U as UtensilsCrossed, a as MapPin, A as ArrowRight, S as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Magnetic({ children }) {
  const ref = reactExports.useRef(null);
  const [position, setPosition] = reactExports.useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: handleMouse,
      onMouseLeave: reset,
      animate: { x: position.x, y: position.y },
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
      className: "inline-block",
      children
    }
  );
}
function Tilt3D({ children, className = "" }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.4]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);
  const [isHovering, setIsHovering] = reactExports.useState(false);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      style: {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      },
      className: `relative overflow-hidden ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "translateZ(30px)" }, className: "w-full h-full", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "pointer-events-none absolute inset-0 z-50 bg-gradient-to-br from-white via-white/10 to-transparent mix-blend-overlay",
            style: {
              opacity: isHovering ? glareOpacity : 0,
              translateX: isHovering ? glareX : "-100%",
              translateY: isHovering ? glareY : "-100%"
            },
            transition: { type: "tween", duration: 0.2 }
          }
        )
      ]
    }
  );
}
function MaskedButton({
  to,
  href,
  children,
  className = "",
  showArrow = false
}) {
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "relative overflow-hidden group cursor-pointer inline-flex items-center gap-3 border border-gold/60 px-8 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-300",
      whileHover: "hover",
      initial: "initial",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.span,
          {
            className: "flex items-center gap-3 text-gold relative z-10",
            variants: {
              initial: { y: 0 },
              hover: { y: "-100%" }
            },
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
            children: [
              children,
              " ",
              showArrow && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.span,
          {
            className: "flex items-center gap-3 text-primary-foreground bg-gold absolute inset-0 px-8 py-4 z-20",
            variants: {
              initial: { y: "100%" },
              hover: { y: 0 }
            },
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
            children: [
              children,
              " ",
              showArrow && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "translate-x-1" })
            ]
          }
        )
      ]
    }
  );
  if (to) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className, children: content });
  }
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noreferrer", className, children: content });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: content });
}
function ScrubbableText({ children, className = "" }) {
  const containerRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });
  const words = children.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: `flex flex-wrap justify-center gap-x-[0.25em] ${className}`, children: words.map((word, i) => {
    const start = i / words.length;
    const end = start + 1 / words.length;
    const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
    const color = useTransform(scrollYProgress, [start, end], ["#fcf9f2", "#D4AF37"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { style: { opacity, color }, className: "transition-none", children: word }, i);
  }) });
}
const HERO_BG = "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=2000&q=80";
const ABOUT_IMG = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80";
const AMBIANCE_IMG = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80";
const featured = [{
  name: "Veg Tandoori Delight",
  price: "₹280",
  img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
}, {
  name: "Peri Peri Pizza",
  price: "₹290",
  img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
}, {
  name: "Chili Garlic Noodles",
  price: "₹200",
  img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80"
}, {
  name: "White Sauce Arrabiata",
  price: "₹240",
  img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
}];
const reviews = [{
  text: "Lovely experience, Lovely place ❤️😊🌹 so pretty cafe 😍❣️ staff is very humble 😊💐",
  name: "Sarika Chauhan",
  stars: 5
}, {
  text: "Really really good place highly recommended.....awesome food really friendly staff....trust me guys genuine worth it for the price...a must go..",
  name: "Parv",
  stars: 5
}, {
  text: "If you are looking for a good ambience to click cute pictures, this is the place! The food and the service provided here are amazing. Indeed, a go-to place to grab food and coffee. It also has a good ambience to study:)",
  name: "Aidozilin Tayeng",
  stars: 5
}, {
  text: "Food and ambiance is 10 on 10 and the owners are very sweet. I loved this place. Would totally recommend. Do visit <3",
  name: "Swapnil Badge",
  stars: 5
}, {
  text: "The ambience is really nicee, it gives aesthetic Pinterest vibes, loved the food(especially the coffee). Will definitely visit again 😋.",
  name: "Antekshika",
  stars: 5
}, {
  text: "Absolutely loved the experience at Cafe de vela The service was exceptional—staff was attentive, friendly, and made us feel right at home. The ambiance is cozy and perfect for a relaxing meal. The food was fresh, flavorful, and beautifully presented. Definitely a place worth revisiting! Highly recommend it to anyone looking for great vibes and even better service♥️",
  name: "Rohan Thakur",
  stars: 5
}, {
  text: "The best cafe I have ever been too , The food was so delicious that I didn’t wanted it to end the spices everything was so perfect the service was 10/10 and the atmosphere if u haven’t been there u are missing out on your life its so comfy I can sit there forever without worrying about anything … the best place u can visit so what are you waiting for GOOOOOOOOO THEREEEE AND ENJOYYYYYYYYY !!!!!!!",
  name: "Avina Kaur",
  stars: 5
}, {
  text: "The atmosphere is very lovely and the candlelight in the evening is amazing and the staff here behaves very well, everyone should definitely visit here once with their partner. 🥰❤️",
  name: "Nitesh Sunar",
  stars: 5
}, {
  text: "Very delicious...you should try for sure",
  name: "Shivam Awasthi",
  stars: 5
}, {
  text: "This cafe is very good, the service is very good, it is perfect & affordable, the ambiance and the food is also good, you must visit it once💕",
  name: "Himanshi Rawat",
  stars: 5
}, {
  text: "Best dine in experience candle light is love Best for valentine modification was reallly awesome of my date loved it food is best",
  name: "Shivam Chaurasia",
  stars: 5
}, {
  text: "Such a peaceful and aesthetic café — great for dates, work, or just relaxing alone.",
  name: "Janki Devi",
  stars: 5
}, {
  text: "Perfect for date night , they offer candle night dinner in the evening , must visit place",
  name: "Harman Preet Singh",
  stars: 5
}];
function Sparkle({
  delay = 0,
  style,
  size = 16
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.svg, { width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute pointer-events-none z-20 text-gold", style, initial: {
    scale: 0,
    opacity: 0,
    rotate: 0
  }, animate: {
    scale: [0, 1, 0.4, 1, 0],
    opacity: [0, 1, 0.6, 1, 0],
    rotate: [0, 90, 180]
  }, transition: {
    duration: 3 + Math.random() * 2,
    repeat: Infinity,
    repeatDelay: Math.random() * 3,
    delay,
    ease: "easeInOut"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 0L9.4 6.6L16 8L9.4 9.4L8 16L6.6 9.4L0 8L6.6 6.6L8 0Z", fill: "currentColor" }) });
}
function Bokeh() {
  const dots = Array.from({
    length: 14
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: dots.map((_, i) => {
    const size = 6 + i % 5 * 4;
    const left = i * 37 % 100;
    const delay = i * 1.1 % 10;
    const duration = 12 + i % 6 * 2;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute rounded-full animate-float-up", style: {
      left: `${left}%`,
      bottom: `-${size}px`,
      width: size,
      height: size,
      background: "radial-gradient(circle, #F3C6D3, rgba(244, 238, 250, 0) 70%)",
      filter: "blur(2px)",
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    } }, i);
  }) });
}
function Ticker() {
  const words = ["Candlelit Dining", "Artisan Flavors", "Cozy Ambience", "Unforgettable Moments", "Aesthetic Vibes"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gold/5 border-y border-gold/10 py-4 overflow-hidden flex relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap min-w-max", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: words.map((w, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center text-[11px] md:text-sm uppercase tracking-[0.4em] text-gold mx-10", children: [
    w,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, className: "mx-10 text-gold/30" })
  ] }, j)) }, i)) }) });
}
function Home() {
  const [delayOffset] = reactExports.useState(() => {
    if (typeof window === "undefined") return 0;
    return !sessionStorage.getItem("cdv-loaded") ? 2.8 : 0;
  });
  const heroRef = reactExports.useRef(null);
  const {
    scrollYProgress: heroScroll
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
  const ambianceRef = reactExports.useRef(null);
  const {
    scrollYProgress: ambianceScroll
  } = useScroll({
    target: ambianceRef,
    offset: ["start end", "end start"]
  });
  const ambianceY = useTransform(ambianceScroll, [0, 1], ["-25%", "25%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: heroRef, className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: `url(${HERO_BG})`,
        y: heroY,
        scale: 1.05
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bokeh, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        opacity: heroOpacity
      }, className: "relative z-10 text-center px-8 py-12 md:py-16 md:px-16 max-w-4xl mx-auto rounded-3xl bg-background/50 backdrop-blur-md border border-gold/20 shadow-[0_8px_32px_rgba(74,46,89,0.2)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { delay: 0.2 + delayOffset, size: 24, style: {
          top: "-12px",
          left: "10%"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { delay: 1.5 + delayOffset, size: 18, style: {
          top: "20%",
          right: "-8px"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { delay: 0.8 + delayOffset, size: 32, style: {
          bottom: "-16px",
          right: "20%"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { delay: 2.1 + delayOffset, size: 14, style: {
          bottom: "30%",
          left: "-6px"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          scale: 0.8
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          delay: 0.3 + delayOffset,
          duration: 1,
          type: "spring"
        }, className: "text-xs md:text-sm uppercase tracking-[0.5em] text-gold mb-6", children: "Satyaniketan · New Delhi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { className: "font-serif text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.95] text-balance flex flex-wrap justify-center overflow-hidden py-4", initial: "hidden", animate: "visible", variants: {
          hidden: {
            opacity: 1
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.5 + delayOffset
            }
          }
        }, children: "Cafe De Vela".split("").map((char, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: i >= 5 ? "italic text-gold" : "text-cream", style: {
          textShadow: "0 0 40px rgba(169, 132, 195, 0.5)"
        }, variants: {
          hidden: {
            y: 120,
            opacity: 0,
            rotateZ: 15,
            scale: 0.5
          },
          visible: {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            scale: 1,
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 100
            }
          }
        }, children: char === " " ? " " : char }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.5 + delayOffset,
          duration: 1
        }, className: "mt-6 font-serif italic text-xl md:text-2xl text-foreground/85 text-balance", children: "Savor exquisite flavors in every bite." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.8 + delayOffset,
          duration: 1
        }, className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MaskedButton, { to: "/menu", showArrow: true, children: "Explore Menu" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MaskedButton, { href: "https://www.zomato.com/ncr/cafe-de-vela-satyaniketan-new-delhi/book", children: "Reserve a Table" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 0.5
      }, transition: {
        delay: 2,
        duration: 1
      }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/60", children: "Scroll" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ticker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto grid md:grid-cols-3 gap-12 md:gap-6", children: [{
      icon: Flame,
      title: "Candlelit Ambiance",
      text: "Warm amber light, intimate corners."
    }, {
      icon: UtensilsCrossed,
      title: "Artisan Flavors",
      text: "Italian, Continental, Chinese, American."
    }, {
      icon: MapPin,
      title: "Satyaniketan, Delhi",
      text: "Tucked into Todapur's quiet lanes."
    }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.15, className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 28, className: "mx-auto text-gold mb-5", strokeWidth: 1.2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-cream mb-2", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground tracking-wide", children: item.text })
    ] }, item.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 md:px-10 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ABOUT_IMG, alt: "Inside Cafe De Vela", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/20" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.15, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-4xl md:text-5xl text-cream leading-tight text-balance", children: [
          "A sanctuary of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "flavor" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "candlelight." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/80 leading-relaxed", children: "Tucked into the charming lanes of Todapur, Cafe De Vela was born from a simple dream — to create a place in the heart of Satyaniketan where every table feels like home, every dish is crafted with intention, and every evening glows with warmth." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "link-elegant inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.25em] text-gold", children: [
          "Learn More ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 md:px-10 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "From the Kitchen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-4xl md:text-6xl text-cream text-balance", children: [
          "Signature ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Dishes" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6", children: featured.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tilt3D, { className: "group relative aspect-[4/5] rounded-xl shadow-[0_4px_20px_rgba(74,46,89,0.1)] border border-gold/20 image-hover", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-500 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 p-5 w-full transform transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-cream drop-shadow-md", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold text-sm mt-1 tracking-wider drop-shadow-md font-medium", children: d.price })
        ] })
      ] }) }, d.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "text-center mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MaskedButton, { to: "/menu", children: "View Full Menu" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: ambianceRef, className: "relative h-[150vh] mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "sticky top-0 h-[100vh] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center scale-110", style: {
        backgroundImage: `url(${AMBIANCE_IMG})`,
        y: ambianceY
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full flex items-center justify-center text-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrubbableText, { className: "font-serif italic text-3xl md:text-5xl lg:text-6xl text-balance max-w-3xl", children: '"A space to unwind. A place to remember."' }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 md:py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "Guest Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-4xl md:text-6xl text-cream text-balance", children: [
          "Words from our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "table" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full flex overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee group-hover:[animation-play-state:paused] space-x-6 md:space-x-8 px-3 md:px-4", children: [...reviews, ...reviews].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative p-8 md:p-10 bg-card border border-border w-[320px] md:w-[400px] shrink-0 flex flex-col justify-between whitespace-normal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-6 left-6 font-serif text-7xl text-gold/40 leading-none", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-serif italic text-base md:text-lg text-cream/90 leading-relaxed mb-6 line-clamp-6", children: r.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-auto flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm uppercase tracking-[0.25em] text-muted-foreground truncate mr-4", children: [
            "— ",
            r.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex gap-0.5 shrink-0", children: Array.from({
            length: r.stars
          }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-gold text-gold" }, j)) })
        ] })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto relative overflow-hidden bg-card border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-terracotta/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative px-8 md:px-16 py-16 md:py-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "Tonight" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-4xl md:text-6xl text-cream text-balance", children: [
          "Reserve your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "table" }),
          " today"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground max-w-md mx-auto", children: "Intimate seating, slow evenings, and the glow of candlelight await." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.zomato.com/ncr/cafe-de-vela-satyaniketan-new-delhi/book", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-3 bg-gold text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-300", children: [
          "Book Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] }) }) })
      ] }) })
    ] }) })
  ] });
}
export {
  Home as component
};
