import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { menu } from "@/lib/menu-data";
import { Reveal } from "@/components/Reveal";
import { SplitText } from "@/components/SplitText";

const PREMIUM_GLOWS = [
  "rgba(255, 209, 220, 0.8)", // Rose Gold
  "rgba(212, 175, 55, 0.8)",  // Soft Gold
  "rgba(169, 132, 195, 0.8)", // Lavender
  "rgba(247, 231, 206, 0.8)", // Champagne
  "rgba(255, 182, 193, 0.8)", // Blush Pink
  "rgba(255, 140, 0, 0.6)",   // Warm Amber
];

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cafe De Vela" },
      { name: "description", content: "Italian, Continental, Chinese and American — handcrafted dishes at Cafe De Vela, Satyaniketan." },
      { property: "og:title", content: "Menu — Cafe De Vela" },
      { property: "og:description", content: "Handcrafted with care. Savored with love." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState(menu[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section with the largest intersection ratio
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio (highest first)
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActive(visibleEntries[0].target.id);
          
          // Scroll the tab into view (for mobile horizontal nav)
          const activeTab = document.getElementById(`tab-${visibleEntries[0].target.id}`);
          if (activeTab && window.innerWidth < 1024) {
            activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      // Account for the height of the sticky header on mobile
      const offset = window.innerWidth < 1024 ? 140 : 80;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="paper-texture min-h-screen">
      <section className="pt-36 pb-16 px-6 md:px-10 text-center border-b border-border">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-liquid-gold mb-5">The Menu</p>
          <SplitText className="font-serif text-5xl md:text-7xl text-cream text-balance justify-center mb-6">
            Culinary Excellence
          </SplitText>
          <p className="mt-6 font-serif italic text-lg md:text-xl text-foreground/80">
            Handcrafted with care. Savored with love.
          </p>
        </Reveal>
      </section>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row relative">
        {/* Mobile Horizontal Tabs */}
        <div className="lg:hidden sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
          <div className="overflow-x-auto no-scrollbar" style={{ scrollbarWidth: "none" }}>
            <div className="flex gap-2 px-6 py-4 min-w-max">
              {menu.map((c) => {
                const isActive = c.id === active;
                return (
                  <button
                    id={`tab-${c.id}`}
                    key={c.id}
                    onClick={() => scrollToSection(c.id)}
                    className={`relative py-3 px-4 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap rounded-full ${
                      isActive ? "bg-espresso text-cream" : "text-muted-foreground hover:bg-border/50"
                    }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Sticky Sidebar */}
        <div className="hidden lg:block w-72 shrink-0 border-r border-border relative">
          <div className="sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto p-8 no-scrollbar">
            <h3 className="font-serif text-2xl text-cream mb-8">Categories</h3>
            <div className="flex flex-col gap-2">
              {menu.map((c, idx) => {
                const isActive = c.id === active;
                const glowColor = PREMIUM_GLOWS[idx % PREMIUM_GLOWS.length];
                return (
                  <motion.button
                    key={c.id}
                    onClick={() => scrollToSection(c.id)}
                    whileHover={{ 
                      textShadow: `0px 0px 12px ${glowColor}`,
                      fontWeight: 600,
                      scale: 1.03,
                      originX: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`group relative py-3 px-4 text-left text-sm uppercase tracking-wider transition-colors duration-500 overflow-hidden ${
                      isActive 
                        ? "text-cream bg-espresso/10 pl-6 font-semibold" 
                        : "text-muted-foreground hover:text-cream hover:pl-6"
                    }`}
                  >
                    {/* Animated Left Border */}
                    <span className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${isActive ? "bg-gold" : "bg-gold scale-y-0 group-hover:scale-y-100 origin-top"}`} />
                    
                    {/* Subtle background glow on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-espresso/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    <span className="relative z-10 transition-all duration-500 group-hover:tracking-widest">{c.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Menu Items List */}
        <div className="flex-1 py-12 px-6 md:px-12 lg:px-16">
          <div className="space-y-24 max-w-4xl">
            {menu.map((c, idx) => (
              <div
                key={c.id}
                id={c.id}
                ref={(el) => (sectionRefs.current[idx] = el)}
                className="scroll-mt-40 lg:scroll-mt-32"
              >
                <Reveal>
                  <motion.h2 
                    whileHover={{ 
                      textShadow: `0px 0px 25px ${PREMIUM_GLOWS[idx % PREMIUM_GLOWS.length]}`,
                      fontWeight: 700,
                      scale: 1.02,
                      originX: 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-serif text-4xl text-cream mb-10 pb-4 border-b border-border/60 cursor-pointer inline-block w-full"
                  >
                    {c.name}
                  </motion.h2>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {c.items.map((item) => (
                    <Reveal key={item.name} delay={0.1}>
                      <div className="group relative flex items-start gap-4 p-5 -mx-5 rounded-2xl transition-all duration-500 hover:bg-espresso/5 cursor-pointer">
                        {/* Premium Bottom Border Sweep */}
                        <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-border/60 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-5 h-[1px] w-[calc(100%-40px)] bg-liquid-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                        
                        <span
                          aria-hidden
                          className={`mt-1.5 w-3 h-3 border shrink-0 rounded-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                            item.veg ? "border-green-600/50 bg-green-600/10" : "border-red-600/50 bg-red-600/10"
                          }`}
                        >
                          <span className={`block w-1.5 h-1.5 rounded-full ${item.veg ? "bg-green-600" : "bg-red-600"}`} />
                        </span>
                        
                        <div className="flex-1 min-w-0 transition-transform duration-500 ease-out group-hover:translate-x-2">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="font-serif text-xl text-cream leading-tight transition-colors duration-500 group-hover:text-liquid-gold">
                              {item.name}
                            </h3>
                            <span className="text-gold tracking-wider font-semibold whitespace-nowrap bg-espresso/5 px-2 py-0.5 rounded transition-all duration-500 group-hover:bg-gold/10 group-hover:shadow-[0_0_15px_rgba(169,132,195,0.3)]">
                              {item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-24 text-center text-xs text-muted-foreground italic max-w-md mx-auto pb-12">
            Menu items and prices are subject to change. Please ask our staff for the latest menu.
          </p>
        </div>
      </div>
    </div>
  );
}
