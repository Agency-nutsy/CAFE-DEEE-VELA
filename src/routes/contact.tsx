import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Instagram, Clock, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cafe De Vela" },
      { name: "description", content: "Find Cafe De Vela in Satyaniketan, New Delhi. Reservations, directions and hours." },
      { property: "og:title", content: "Find Us — Cafe De Vela" },
      { property: "og:description", content: "We'd love to have you visit." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi,\n\n${form.message}\n\n— ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`;
    window.location.href = `mailto:cafedevela@gmail.com?subject=${encodeURIComponent(
      `Enquiry from ${form.name}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="pt-36 pb-12 px-6 md:px-10 text-center border-b border-border">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Contact</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream text-balance">
            Find <span className="italic">Us</span>
          </h1>
          <p className="mt-6 font-serif italic text-lg md:text-xl text-foreground/80">
            We'd love to have you visit.
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-10">
              Visit the <span className="italic">cafe</span>.
            </h2>
            <ul className="space-y-7">
              <li className="flex gap-4">
                <MapPin size={20} className="text-gold mt-1 shrink-0" strokeWidth={1.4} />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Address</p>
                  <p className="text-cream leading-relaxed">37, Shop 4, Ground Floor, Todapur,<br />Satyaniketan, New Delhi – 110021</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-gold mt-1 shrink-0" strokeWidth={1.4} />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+919335778124" className="text-cream link-elegant">+91 93357 78124</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Instagram size={20} className="text-gold mt-1 shrink-0" strokeWidth={1.4} />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Instagram</p>
                  <a href="https://instagram.com/cafedevela" target="_blank" rel="noreferrer" className="text-cream link-elegant">@cafedevela</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock size={20} className="text-gold mt-1 shrink-0" strokeWidth={1.4} />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Hours</p>
                  <p className="text-cream">Monday – Sunday · 12:00 PM – 10:00 PM</p>
                </div>
              </li>
            </ul>
            <a
              href="https://www.zomato.com/ncr/cafe-de-vela-satyaniketan-new-delhi/book"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all"
            >
              Book a Table <ArrowRight size={14} />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href="https://maps.app.goo.gl/jnMmvsXz8ZJNs8nj6"
              target="_blank"
              rel="noreferrer"
              className="block relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden border border-border group"
              aria-label="Open in Google Maps"
            >
              <iframe
                title="Cafe De Vela location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.392064137901!2d77.1677122!3d28.5880128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df2d109e63b%3A0x4c99d9274c6f6516!2scafe%20de%20vela!5e0!3m2!1sen!2sin!4v1782590983951!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full grayscale-[0.4] contrast-[0.95] brightness-[0.7] sepia-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-cream opacity-0 group-hover:opacity-100 transition">
                <span>Open in Google Maps</span>
                <ArrowRight size={14} className="text-gold" />
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="px-6 md:px-10 py-20 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-5">Say Hello</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream text-balance">
              Send us a <span className="italic">message</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Field label="Name" id="name">
                <input
                  required
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="contact-input"
                />
              </Field>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Email" id="email">
                  <input
                    required
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="contact-input"
                  />
                </Field>
                <Field label="Phone" id="phone">
                  <input
                    type="tel"
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="contact-input"
                  />
                </Field>
              </div>
              <Field label="Message" id="message">
                <textarea
                  required
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="contact-input resize-none"
                />
              </Field>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all"
              >
                Send Message <ArrowRight size={14} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 12px 2px;
          color: var(--cream);
          font-family: var(--font-sans);
          font-size: 16px;
          outline: none;
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .contact-input:focus {
          border-color: var(--gold);
          box-shadow: 0 1px 0 0 var(--gold);
        }
      `}</style>
    </>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}


//this is a comment