import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flame, UtensilsCrossed, MapPin, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { Tilt3D } from "@/components/Tilt3D";
import { MaskedButton } from "@/components/MaskedButton";
import { ScrubbableText } from "@/components/ScrubbableText";
import { SplitText } from "@/components/SplitText";
import { CandleEmbers } from "@/components/CandleEmbers";
import { SpotlightCard } from "@/components/SpotlightCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cafe De Vela — Candlelit Dining in Satyaniketan, New Delhi" },
      { name: "description", content: "A candlelit cafe in Satyaniketan serving Italian, Continental, Chinese and American flavors. Reserve your table tonight." },
      { property: "og:title", content: "Cafe De Vela — Candlelit Dining" },
      { property: "og:description", content: "Savor exquisite flavors in every bite. Create lasting memories under the glow of candlelight." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const HERO_BG = "/hero-cafe.jpg";
const ABOUT_IMG = "/about-cafe.jpg";
const AMBIANCE_IMG = "/ambiance-cafe-clean.png";

const featured = [
  { name: "Veg Tandoori Delight", price: "₹280", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" },
  { name: "Peri Peri Pizza", price: "₹290", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80" },
  { name: "Chili Garlic Noodles", price: "₹200", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80" },
  { name: "White Sauce Arrabiata", price: "₹240", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80" },
];

const reviews = [
  { text: "Lovely experience, Lovely place ❤️😊🌹 so pretty cafe 😍❣️ staff is very humble 😊💐", name: "Sarika Chauhan", stars: 5 },
  { text: "Really really good place highly recommended.....awesome food really friendly staff....trust me guys genuine worth it for the price...a must go..", name: "Parv", stars: 5 },
  { text: "If you are looking for a good ambience to click cute pictures, this is the place! The food and the service provided here are amazing. Indeed, a go-to place to grab food and coffee. It also has a good ambience to study:)", name: "Aidozilin Tayeng", stars: 5 },
  { text: "Food and ambiance is 10 on 10 and the owners are very sweet. I loved this place. Would totally recommend. Do visit <3", name: "Swapnil Badge", stars: 5 },
  { text: "The ambience is really nicee, it gives aesthetic Pinterest vibes, loved the food(especially the coffee). Will definitely visit again 😋.", name: "Antekshika", stars: 5 },
  { text: "Absolutely loved the experience at Cafe de vela The service was exceptional—staff was attentive, friendly, and made us feel right at home. The ambiance is cozy and perfect for a relaxing meal. The food was fresh, flavorful, and beautifully presented. Definitely a place worth revisiting! Highly recommend it to anyone looking for great vibes and even better service♥️", name: "Rohan Thakur", stars: 5 },
  { text: "The best cafe I have ever been too , The food was so delicious that I didn’t wanted it to end the spices everything was so perfect the service was 10/10 and the atmosphere if u haven’t been there u are missing out on your life its so comfy I can sit there forever without worrying about anything … the best place u can visit so what are you waiting for GOOOOOOOOO THEREEEE AND ENJOYYYYYYYYY !!!!!!!", name: "Avina Kaur", stars: 5 },
  { text: "The atmosphere is very lovely and the candlelight in the evening is amazing and the staff here behaves very well, everyone should definitely visit here once with their partner. 🥰❤️", name: "Nitesh Sunar", stars: 5 },
  { text: "Very delicious...you should try for sure", name: "Shivam Awasthi", stars: 5 },
  { text: "This cafe is very good, the service is very good, it is perfect & affordable, the ambiance and the food is also good, you must visit it once💕", name: "Himanshi Rawat", stars: 5 },
  { text: "Best dine in experience candle light is love Best for valentine modification was reallly awesome of my date loved it food is best", name: "Shivam Chaurasia", stars: 5 },
  { text: "Such a peaceful and aesthetic café — great for dates, work, or just relaxing alone.", name: "Janki Devi", stars: 5 },
  { text: "Perfect for date night , they offer candle night dinner in the evening , must visit place", name: "Harman Preet Singh", stars: 5 },
];

function Sparkle({ delay = 0, style, size = 16 }: { delay?: number; style: React.CSSProperties; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none z-20 text-gold"
      style={style}
      initial={{ scale: 0, opacity: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0.4, 1, 0],
        opacity: [0, 1, 0.6, 1, 0],
        rotate: [0, 90, 180]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      <path d="M8 0L9.4 6.6L16 8L9.4 9.4L8 16L6.6 9.4L0 8L6.6 6.6L8 0Z" fill="currentColor" />
    </motion.svg>
  );
}

function Bokeh() {
  const dots = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 6 + (i % 5) * 4;
        const left = (i * 37) % 100;
        const delay = (i * 1.1) % 10;
        const duration = 12 + (i % 6) * 2;
        return (
          <span
            key={i}
            className="absolute rounded-full animate-float-up"
            style={{
              left: `${left}%`,
              bottom: `-${size}px`,
              width: size,
              height: size,
              background: "radial-gradient(circle, #F3C6D3, rgba(244, 238, 250, 0) 70%)",
              filter: "blur(2px)",
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function Ticker() {
  const words = ["Candlelit Dining", "Artisan Flavors", "Cozy Ambience", "Unforgettable Moments", "Aesthetic Vibes"];
  return (
    <div className="w-full bg-gold/5 border-y border-gold/10 py-4 overflow-hidden flex relative z-20">
      <div className="flex animate-marquee whitespace-nowrap min-w-max">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((w, j) => (
              <span key={j} className="flex items-center text-[11px] md:text-sm uppercase tracking-[0.4em] text-gold mx-10">
                {w}
                <Star size={12} className="mx-10 text-gold/30" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState, useRef } from "react";

function Home() {
  const [delayOffset] = useState(() => {
    if (typeof window === "undefined") return 0;
    return !sessionStorage.getItem("cdv-loaded") ? 2.8 : 0;
  });

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const ambianceRef = useRef(null);
  const { scrollYProgress: ambianceScroll } = useScroll({ target: ambianceRef, offset: ["start end", "end start"] });
  const ambianceY = useTransform(ambianceScroll, [0, 1], ["-25%", "25%"]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center brightness-110 saturate-[1.1]"
          style={{ backgroundImage: `url(${HERO_BG})`, y: heroY }}
          animate={{ scale: [1.05, 1.15] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        <CandleEmbers />
        <Bokeh />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-8 py-12 md:py-16 md:px-16 max-w-4xl mx-auto rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Sparkles around the box */}
          <Sparkle delay={0.2 + delayOffset} size={24} style={{ top: "-12px", left: "10%" }} />
          <Sparkle delay={1.5 + delayOffset} size={18} style={{ top: "20%", right: "-8px" }} />
          <Sparkle delay={0.8 + delayOffset} size={32} style={{ bottom: "-16px", right: "20%" }} />
          <Sparkle delay={2.1 + delayOffset} size={14} style={{ bottom: "30%", left: "-6px" }} />

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + delayOffset, duration: 1, type: "spring" }}
            className="text-xs md:text-sm uppercase tracking-[0.5em] text-gold mb-6"
          >
            Satyaniketan · New Delhi
          </motion.p>
          <motion.h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.95] text-balance flex flex-wrap justify-center overflow-hidden py-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.5 + delayOffset,
                },
              },
            }}
          >
            {"Cafe De Vela".split("").map((char, i) => (
              <motion.span
                key={i}
                className={i >= 5 ? "italic text-liquid-gold" : "text-cream"}
                style={{ textShadow: "0 0 40px rgba(169, 132, 195, 0.5)" }}
                variants={{
                  hidden: { y: 120, opacity: 0, rotateZ: 15, scale: 0.5 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    rotateZ: 0,
                    scale: 1,
                    transition: { type: "spring", damping: 12, stiffness: 100 },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + delayOffset, duration: 1 }}
            className="mt-6 font-serif italic text-xl md:text-2xl text-foreground/85 text-balance"
          >
            Savor exquisite flavors in every bite.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 + delayOffset, duration: 1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnetic>
              <MaskedButton to="/menu" showArrow>
                Explore Menu
              </MaskedButton>
            </Magnetic>
            <Magnetic>
              <MaskedButton href="https://www.zomato.com/ncr/cafe-de-vela-satyaniketan-new-delhi/book">
                Reserve a Table
              </MaskedButton>
            </Magnetic>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/60"
        >
          Scroll
        </motion.div>
      </section>
      <Ticker />

      {/* EXPERIENCE STRIP */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 md:gap-6">
          {[
            { icon: Flame, title: "Candlelit Ambiance", text: "Warm amber light, intimate corners." },
            { icon: UtensilsCrossed, title: "Artisan Flavors", text: "Italian, Continental, Chinese, American." },
            { icon: MapPin, title: "Satyaniketan, Delhi", text: "Tucked into Todapur's quiet lanes." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.15} className="h-full">
              <SpotlightCard className="h-full rounded-2xl">
                <div className="p-10 md:p-12 h-full flex flex-col items-center text-center">
                  <item.icon size={32} className="text-gold mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" strokeWidth={1.2} />
                  <SplitText delay={i * 1.5} className="font-serif text-2xl text-cream mb-4 justify-center">{item.title}</SplitText>
                  <p className="text-sm text-muted-foreground tracking-wide leading-relaxed">{item.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 px-6 md:px-10 border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={ABOUT_IMG} alt="Inside Cafe De Vela" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.4em] text-liquid-gold mb-5">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight text-balance">
              A sanctuary of <span className="italic">flavor</span> and <span className="italic">candlelight.</span>
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Tucked into the charming lanes of Todapur, Cafe De Vela was born from a simple dream —
              to create a place in the heart of Satyaniketan where every table feels like home,
              every dish is crafted with intention, and every evening glows with warmth.
            </p>
            <Link to="/about" className="link-elegant inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.25em] text-gold">
              Learn More <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-24 px-6 md:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-liquid-gold mb-4">Our Signature Dishes</p>
            <SplitText className="font-serif text-4xl md:text-5xl text-cream mb-6">Culinary Excellence</SplitText>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.1}>
                <Tilt3D className="group relative aspect-[4/5] rounded-xl shadow-[0_4px_20px_rgba(74,46,89,0.1)] border border-gold/20 image-hover">
                  <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-500 pointer-events-none" />
                  <div className="absolute bottom-0 p-5 w-full transform transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
                    <h3 className="font-serif text-xl text-cream drop-shadow-md">{d.name}</h3>
                    <p className="text-gold text-sm mt-1 tracking-wider drop-shadow-md font-medium">{d.price}</p>
                  </div>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-14">
            <Magnetic>
              <MaskedButton to="/menu">
                View Full Menu
              </MaskedButton>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section ref={ambianceRef} className="relative h-[150vh] mt-12">
        <motion.div className="sticky top-0 h-[100vh] w-full overflow-hidden">
          <motion.div className="absolute inset-0 bg-cover bg-center scale-110 brightness-110 saturate-[1.1]" style={{ backgroundImage: `url(${AMBIANCE_IMG})`, y: ambianceY }} />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <ScrubbableText className="font-serif font-bold italic text-3xl md:text-5xl lg:text-6xl text-balance max-w-3xl drop-shadow-2xl">
              "A space to unwind. A place to remember."
            </ScrubbableText>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-liquid-gold mb-5">Guest Stories</p>
            <SplitText className="font-serif text-4xl md:text-6xl text-cream text-balance justify-center">
              Words from our table
            </SplitText>
          </Reveal>
        </div>
        <div className="relative w-full flex overflow-hidden group">
          {/* Pause animation on hover */}
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] space-x-6 md:space-x-8 px-3 md:px-4">
            {[...reviews, ...reviews].map((r, i) => (
              <figure key={i} className="relative p-8 md:p-10 bg-card border border-border w-[320px] md:w-[400px] shrink-0 flex flex-col justify-between whitespace-normal">
                <span className="absolute -top-6 left-6 font-serif text-7xl text-gold/40 leading-none">"</span>
                <blockquote className="font-serif italic text-base md:text-lg text-cream/90 leading-relaxed mb-6 line-clamp-6">
                  {r.text}
                </blockquote>
                <figcaption className="mt-auto flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground truncate mr-4">— {r.name}</span>
                  <span className="flex gap-0.5 shrink-0">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold text-gold" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE BANNER */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto relative overflow-hidden bg-card border border-border">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-terracotta/10" />
          <div className="relative px-8 md:px-16 py-16 md:py-24 text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Tonight</p>
              <h2 className="font-serif text-4xl md:text-6xl text-cream text-balance">
                Reserve your <span className="italic">table</span> today
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md mx-auto">
                Intimate seating, slow evenings, and the glow of candlelight await.
              </p>
              <div className="mt-10 inline-block">
                <Magnetic>
                  <a
                    href="https://www.zomato.com/ncr/cafe-de-vela-satyaniketan-new-delhi/book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Now <ArrowRight size={14} />
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
