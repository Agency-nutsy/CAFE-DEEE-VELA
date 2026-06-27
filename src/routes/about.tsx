import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Flame, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cafe De Vela" },
      { name: "description", content: "The story of Cafe De Vela — a candlelit cafe born in Satyaniketan, New Delhi." },
      { property: "og:title", content: "Our Story — Cafe De Vela" },
      { property: "og:description", content: "Born from a simple dream — to create a place where every evening glows with warmth." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const HERO = "/about-hero.jpg";

function AboutPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden flex items-end">
        <div className="absolute inset-0 bg-cover bg-bottom brightness-110 saturate-[1.1]" style={{ backgroundImage: `url(${HERO})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">About</p>
          <h1 className="font-serif text-5xl md:text-8xl text-cream text-balance">
            Our <span className="italic">Story</span>
          </h1>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl text-cream text-balance">
              Where it all <span className="italic">began.</span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-foreground/85 leading-loose md:text-lg">
            <Reveal delay={0.1}>
              <p>
                Cafe De Vela was born from a simple dream — to create a place in the heart of
                Satyaniketan where every table feels like home, every dish is crafted with intention,
                and every evening glows with warmth. Tucked into the charming lanes of Todapur,
                Cafe De Vela opened its doors as a sanctuary for those who seek good food, great
                company, and a moment of quiet beauty in the middle of a busy city.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                The name <em className="text-gold not-italic font-serif italic">"De Vela"</em> evokes
                the romance of candlelight — and that philosophy is woven into every corner of the
                cafe. From the warm amber lighting to the carefully curated menu spanning Italian,
                American, Chinese, and Continental cuisines, Cafe De Vela is a celebration of flavor
                and atmosphere in equal measure.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Rated 4.4+ stars and beloved by the Satyaniketan community, Cafe De Vela has become
                a go-to destination for students, professionals, couples, and families alike.
                Whether you come for the Tandoori Paneer Garlic Bread, the peach iced tea, or simply
                to find a quiet corner to work and think — you are always welcome here.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">What we believe</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream text-balance">
              Small things, done with <span className="italic">love</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Fresh Ingredients", text: "Every dish is prepared with care using quality, fresh ingredients." },
              { icon: Flame, title: "Warm Ambiance", text: "A cozy, candlelit setting designed for connection and calm." },
              { icon: MessageCircle, title: "Friendly Service", text: "Our team is here to make your visit memorable, every single time." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12} className="h-full">
                <SpotlightCard className="h-full">
                  <div className="p-8 h-full flex flex-col">
                    <v.icon size={28} strokeWidth={1.2} className="text-gold mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
                    <h3 className="font-serif text-2xl text-cream mb-3 transition-colors duration-500 group-hover:text-gold">{v.title}</h3>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">{v.text}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">The Team</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              The faces behind the <span className="italic">flame</span>.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground italic">
              Add owner/team details here.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-card border border-border flex items-center justify-center text-gold/40 font-serif text-3xl">
                    ✦
                  </div>
                  <p className="mt-4 font-serif text-cream">Name</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Role</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured On */}
      <section className="px-6 md:px-10 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-10">Featured on</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 font-serif text-cream/60">
            <span className="text-2xl italic">Zomato</span>
            <span className="text-2xl italic">Google Maps</span>
            <span className="text-2xl italic">District</span>
            <span className="text-2xl italic">Instagram</span>
          </div>
        </div>
      </section>
    </>
  );
}
