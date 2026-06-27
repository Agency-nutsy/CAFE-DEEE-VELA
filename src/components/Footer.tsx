import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/90 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl text-cream">
            Cafe <span className="text-gold italic">De Vela</span>
          </h3>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Savor exquisite flavors in every bite. Create lasting memories under the glow of
            candlelight.
          </p>
          <a
            href="https://instagram.com/cafedevela"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm link-elegant w-fit"
          >
            <Instagram size={16} className="text-gold" /> @cafedevela
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2"><MapPin size={14} className="mt-1 shrink-0 text-gold" /> 37, Shop 4, Ground Floor, Todapur, Satyaniketan, New Delhi – 110021</li>
            <li className="flex gap-2"><Phone size={14} className="mt-1 shrink-0 text-gold" /> <a href="tel:+919335778124" className="link-elegant">+91 93357 78124</a></li>
            <li className="flex gap-2"><Clock size={14} className="mt-1 shrink-0 text-gold" /> Daily, 12:00 PM — 10:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-elegant">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-xs text-muted-foreground tracking-wider">
          © 2025 Cafe De Vela. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
