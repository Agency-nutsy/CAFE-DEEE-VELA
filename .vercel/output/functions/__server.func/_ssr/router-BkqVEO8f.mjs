import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { u as useSpring, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { M as Menu, X, I as Instagram, a as MapPin, P as Phone, C as Clock, b as MessageCircle, N as Navigation } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-L8eS4Zpe.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-serif text-xl md:text-2xl tracking-wider text-cream", children: [
            "Cafe ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "De Vela" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.22em] text-foreground/85", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "link-elegant py-2",
              activeOptions: { exact: l.to === "/" },
              children: l.label
            }
          ) }, l.to)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Open menu",
              className: "md:hidden text-cream",
              onClick: () => setOpen(true),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.4 },
        className: "fixed inset-0 z-[60] bg-background md:hidden flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-20 px-6 flex items-center justify-between border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-xl text-cream", children: [
              "Cafe ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "De Vela" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Close menu", onClick: () => setOpen(false), className: "text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col items-center justify-center flex-1 gap-8", children: links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.li,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1 + i * 0.08 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "font-serif text-3xl text-cream",
                  children: l.label
                }
              )
            },
            l.to
          )) })
        ]
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-background/90 mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-serif text-3xl text-cream", children: [
          "Cafe ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "De Vela" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "Savor exquisite flavors in every bite. Create lasting memories under the glow of candlelight." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://instagram.com/cafedevela",
            target: "_blank",
            rel: "noreferrer",
            className: "mt-6 inline-flex items-center gap-2 text-sm link-elegant w-fit",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16, className: "text-gold" }),
              " @cafedevela"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.25em] text-gold mb-4", children: "Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "mt-1 shrink-0 text-gold" }),
            " 37, Shop 4, Ground Floor, Todapur, Satyaniketan, New Delhi – 110021"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "mt-1 shrink-0 text-gold" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919335778124", className: "link-elegant", children: "+91 93357 78124" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "mt-1 shrink-0 text-gold" }),
            " Daily, 12:00 PM — 10:00 PM"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.25em] text-gold mb-4", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [
          { to: "/", label: "Home" },
          { to: "/menu", label: "Menu" },
          { to: "/about", label: "About" },
          { to: "/gallery", label: "Gallery" },
          { to: "/contact", label: "Contact" }
        ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "link-elegant", children: l.label }) }, l.to)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-7xl mx-auto px-6 md:px-10 py-6 text-xs text-muted-foreground tracking-wider", children: "© 2025 Cafe De Vela. All rights reserved." }) })
  ] });
}
function FloatingWidgets() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "https://wa.me/919335778124",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "Chat on WhatsApp",
        initial: { x: 80, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { delay: 2.6, duration: 0.6, ease: [0.65, 0, 0.35, 1] },
        whileHover: { scale: 1.05 },
        className: "group flex items-center gap-3 h-13 pl-4 pr-5 py-3 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 hover:shadow-[#25D366]/40 transition-shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap transition-all duration-500 text-sm font-medium", children: "Chat with Us" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "https://maps.app.goo.gl/jnMmvsXz8ZJNs8nj6",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "Get Directions",
        initial: { x: 80, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { delay: 2.85, duration: 0.6, ease: [0.65, 0, 0.35, 1] },
        whileHover: { scale: 1.05 },
        className: "group flex items-center gap-3 h-13 pl-4 pr-5 py-3 rounded-full bg-gold text-primary-foreground shadow-xl shadow-black/40 hover:shadow-gold/50 transition-shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap transition-all duration-500 text-sm font-medium", children: "Get Directions" })
        ]
      }
    )
  ] });
}
function LoadingScreen() {
  const [visible, setVisible] = reactExports.useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("cdv-loaded");
  });
  reactExports.useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("cdv-loaded", "1");
    }, 2200);
    return () => clearTimeout(t);
  }, [visible]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { x: "0%" },
            exit: { x: "-100%" },
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
            className: "absolute top-0 left-0 bottom-0 w-[51%] bg-background pointer-events-auto"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { x: "0%" },
            exit: { x: "100%" },
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
            className: "absolute top-0 right-0 bottom-0 w-[51%] bg-background pointer-events-auto"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            exit: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
            transition: { duration: 0.5, ease: "easeInOut" },
            className: "relative z-10 flex flex-col items-center justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.h1,
                {
                  initial: { opacity: 0, letterSpacing: "0.4em" },
                  animate: { opacity: 1, letterSpacing: "0.18em" },
                  transition: { duration: 1.4, ease: "easeOut" },
                  className: "font-serif text-3xl md:text-5xl text-cream animate-flicker",
                  style: { textShadow: "0 0 30px #FFD1DC" },
                  children: "Cafe De Vela"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6, duration: 1 },
                  className: "mt-6",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "28", height: "44", viewBox: "0 0 28 44", className: "animate-flicker", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "14", cy: "10", rx: "4", ry: "7", fill: "#FFD1DC", opacity: "0.95", children: /* @__PURE__ */ jsxRuntimeExports.jsx("animate", { attributeName: "ry", values: "7;6.5;7.2;7", dur: "1.4s", repeatCount: "indefinite" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "14", cy: "11", rx: "2", ry: "4", fill: "#F3C6D3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "11", y: "18", width: "6", height: "22", fill: "#A984C3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "14", cy: "40", rx: "6", ry: "2", fill: "#4A2E59" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 0.6 },
                  transition: { delay: 1, duration: 1 },
                  className: "mt-6 text-xs tracking-[0.4em] uppercase text-muted-foreground",
                  children: "Lighting the room"
                }
              )
            ]
          }
        )
      ]
    },
    "loading-screen"
  ) });
}
function PageTransition({ children }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.98, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -20, filter: "blur(8px)" },
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        className: "h-full w-full",
        children
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { top: "100%" },
        animate: { top: "100%" },
        exit: { top: "0%" },
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
        className: "fixed inset-0 z-[100] bg-background pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { top: "100%" },
        animate: { top: "100%" },
        exit: { top: "0%" },
        transition: { duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] },
        className: "fixed inset-0 z-[101] bg-gold pointer-events-none"
      }
    )
  ] }, currentPath) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-7xl text-cream", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-2xl text-foreground", children: "This page hasn't been lit yet" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.25em] bg-gold text-primary-foreground hover:opacity-90 transition",
        children: "Return Home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl text-cream", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "px-5 py-3 text-xs uppercase tracking-[0.25em] bg-gold text-primary-foreground",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "px-5 py-3 text-xs uppercase tracking-[0.25em] border border-border text-foreground", children: "Go home" })
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cafe De Vela — Candlelit Dining in Satyaniketan, New Delhi" },
      { name: "description", content: "A candlelit cafe in Satyaniketan, New Delhi serving Italian, Continental, Chinese and American flavors. Reserve your table tonight." },
      { name: "author", content: "Cafe De Vela" },
      { property: "og:title", content: "Cafe De Vela — Candlelit Dining in Satyaniketan, New Delhi" },
      { property: "og:description", content: "A candlelit cafe in Satyaniketan, New Delhi serving Italian, Continental, Chinese and American flavors. Reserve your table tonight." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cafe De Vela" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cafe De Vela — Candlelit Dining in Satyaniketan, New Delhi" },
      { name: "twitter:description", content: "A candlelit cafe in Satyaniketan, New Delhi serving Italian, Continental, Chinese and American flavors. Reserve your table tonight." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2e18fc94-2e91-4fc8-856d-94182d019a6b/id-preview-45f69b43--98eaaa47-6f37-4753-b071-982e055f2354.lovable.app-1780295865169.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2e18fc94-2e91-4fc8-856d-94182d019a6b/id-preview-45f69b43--98eaaa47-6f37-4753-b071-982e055f2354.lovable.app-1780295865169.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function CustomCursor() {
  const [mousePosition, setMousePosition] = reactExports.useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = reactExports.useState("default");
  reactExports.useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const mouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "img" || target.closest(".image-hover")) {
        setHoverState("image");
      } else if (window.getComputedStyle(target).cursor === "pointer" || target.closest("a") || target.closest("button")) {
        setHoverState("pointer");
      } else {
        setHoverState("default");
      }
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, []);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);
  const size = hoverState === "image" ? 80 : hoverState === "pointer" ? 24 : 16;
  reactExports.useEffect(() => {
    cursorX.set(mousePosition.x - size / 2);
    cursorY.set(mousePosition.y - size / 2);
  }, [mousePosition, hoverState, cursorX, cursorY, size]);
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-black font-bold text-[10px] tracking-widest overflow-hidden",
      style: {
        x: cursorX,
        y: cursorY
      },
      animate: {
        width: size,
        height: size
      },
      transition: { type: "spring", stiffness: 300, damping: 25 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: hoverState === "image" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 },
          className: "absolute mix-blend-normal",
          children: "VIEW"
        }
      ) })
    }
  ) });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  reactExports.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWidgets, {})
  ] });
}
const $$splitComponentImporter$4 = () => import("./menu-BM4G5_EM.mjs");
const Route$4 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — Cafe De Vela"
    }, {
      name: "description",
      content: "Italian, Continental, Chinese and American — handcrafted dishes at Cafe De Vela, Satyaniketan."
    }, {
      property: "og:title",
      content: "Menu — Cafe De Vela"
    }, {
      property: "og:description",
      content: "Handcrafted with care. Savored with love."
    }, {
      property: "og:url",
      content: "/menu"
    }],
    links: [{
      rel: "canonical",
      href: "/menu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./gallery-D7mS9EAU.mjs");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Cafe De Vela"
    }, {
      name: "description",
      content: "A glimpse into Cafe De Vela — the food, the space, the stories."
    }, {
      property: "og:title",
      content: "Gallery — Cafe De Vela"
    }, {
      property: "og:description",
      content: "Moments at Cafe De Vela."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-Fe-My-3V.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Cafe De Vela"
    }, {
      name: "description",
      content: "Find Cafe De Vela in Satyaniketan, New Delhi. Reservations, directions and hours."
    }, {
      property: "og:title",
      content: "Find Us — Cafe De Vela"
    }, {
      property: "og:description",
      content: "We'd love to have you visit."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DXbb4z5m.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Cafe De Vela"
    }, {
      name: "description",
      content: "The story of Cafe De Vela — a candlelit cafe born in Satyaniketan, New Delhi."
    }, {
      property: "og:title",
      content: "Our Story — Cafe De Vela"
    }, {
      property: "og:description",
      content: "Born from a simple dream — to create a place where every evening glows with warmth."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DHmM-szF.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Cafe De Vela — Candlelit Dining in Satyaniketan, New Delhi"
    }, {
      name: "description",
      content: "A candlelit cafe in Satyaniketan serving Italian, Continental, Chinese and American flavors. Reserve your table tonight."
    }, {
      property: "og:title",
      content: "Cafe De Vela — Candlelit Dining"
    }, {
      property: "og:description",
      content: "Savor exquisite flavors in every bite. Create lasting memories under the glow of candlelight."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const MenuRoute = Route$4.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$5
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  MenuRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
