import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-Dy6qDWoX.mjs";
import { a as MapPin, P as Phone, I as Instagram, C as Clock, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Hi,

${form.message}

— ${form.name}
Email: ${form.email}
Phone: ${form.phone}`;
    window.location.href = `mailto:cafedevela@gmail.com?subject=${encodeURIComponent(`Enquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-36 pb-12 px-6 md:px-10 text-center border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-7xl text-cream text-balance", children: [
        "Find ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-serif italic text-lg md:text-xl text-foreground/80", children: "We'd love to have you visit." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-3xl md:text-4xl text-cream mb-10", children: [
          "Visit the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "cafe" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 20, className: "text-gold mt-1 shrink-0", strokeWidth: 1.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1", children: "Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-cream leading-relaxed", children: [
                "37, Shop 4, Ground Floor, Todapur,",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Satyaniketan, New Delhi – 110021"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 20, className: "text-gold mt-1 shrink-0", strokeWidth: 1.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919335778124", className: "text-cream link-elegant", children: "+91 93357 78124" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 20, className: "text-gold mt-1 shrink-0", strokeWidth: 1.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1", children: "Instagram" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/cafedevela", target: "_blank", rel: "noreferrer", className: "text-cream link-elegant", children: "@cafedevela" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 20, className: "text-gold mt-1 shrink-0", strokeWidth: 1.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1", children: "Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream", children: "Monday – Sunday · 12:00 PM – 10:00 PM" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.zomato.com/ncr/cafe-de-vela-satyaniketan-new-delhi/book", target: "_blank", rel: "noreferrer", className: "mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all", children: [
          "Book a Table ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://maps.app.goo.gl/jnMmvsXz8ZJNs8nj6", target: "_blank", rel: "noreferrer", className: "block relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden border border-border group", "aria-label": "Open in Google Maps", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Cafe De Vela location", src: "https://www.google.com/maps?q=28.5880128,77.1677122&z=17&output=embed", className: "absolute inset-0 w-full h-full grayscale-[0.4] contrast-[0.95] brightness-[0.7] sepia-[0.2]", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/30 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-cream opacity-0 group-hover:opacity-100 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open in Google Maps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "text-gold" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 py-20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold mb-5", children: "Say Hello" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-4xl md:text-5xl text-cream text-balance", children: [
          "Send us a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "message" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", id: "name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", id: "name", value: form.name, onChange: (e) => setForm({
          ...form,
          name: e.target.value
        }), className: "contact-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", id: "email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", id: "email", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), className: "contact-input" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", id: "phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", id: "phone", value: form.phone, onChange: (e) => setForm({
            ...form,
            phone: e.target.value
          }), className: "contact-input" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", id: "message", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, id: "message", rows: 5, value: form.message, onChange: (e) => setForm({
          ...form,
          message: e.target.value
        }), className: "contact-input resize-none" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all", children: [
          "Send Message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` })
  ] });
}
function Field({
  label,
  id,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: id, className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2", children: label }),
    children
  ] });
}
export {
  ContactPage as component
};
