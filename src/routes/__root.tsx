import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingWidgets } from "../components/FloatingWidgets";
import { LoadingScreen } from "../components/LoadingScreen";
import { PageTransition } from "../components/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-cream">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">This page hasn't been lit yet</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.25em] bg-gold text-primary-foreground hover:opacity-90 transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-cream">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-3 text-xs uppercase tracking-[0.25em] bg-gold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="px-5 py-3 text-xs uppercase tracking-[0.25em] border border-border text-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
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
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2e18fc94-2e91-4fc8-856d-94182d019a6b/id-preview-45f69b43--98eaaa47-6f37-4753-b071-982e055f2354.lovable.app-1780295865169.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState<"default" | "pointer" | "image">("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "img" || target.closest(".image-hover")) {
        setHoverState("image");
      } else if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") ||
        target.closest("button")
      ) {
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
  const size = hoverState === "image" ? 44 : hoverState === "pointer" ? 18 : 14;

  useEffect(() => {
    cursorX.set(mousePosition.x - size / 2);
    cursorY.set(mousePosition.y - size / 2);
  }, [mousePosition, hoverState, cursorX, cursorY, size]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-black font-bold text-[10px] tracking-widest overflow-hidden"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: size,
          height: size,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence>
          {hoverState === "image" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute mix-blend-normal"
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <LoadingScreen />
      <Nav />
      <main className="min-h-screen relative z-10">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <FloatingWidgets />
    </QueryClientProvider>
  );
}
