import { useState } from "react";
import {
  Phone, Mail, MapPin, Star, Send, Calendar, User, MessageSquare,
  Drum, Music2, Car, Sparkles, Crown, Clock, BadgeIndianRupee, Users, Heart, X,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import { Nav } from "@/components/site/Nav";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { FloatingCall } from "@/components/site/FloatingCall";

import heroImg from "@/assets/hero-dhol.jpg";
import sDhol from "@/assets/service-dhol.jpg";
import sDj from "@/assets/service-dj.jpg";
import sCar from "@/assets/service-car.jpg";
import sBaraat from "@/assets/service-baraat.jpg";
import sPunjabi from "@/assets/service-punjabi.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishal Dholis — Wedding Dhol, DJ on Wheel & Vintage Cars in Ahmedabad" },
      {
        name: "description",
        content:
          "Premium wedding dhol players, Punjabi dhol, DJ on Wheel and vintage wedding car rentals in Ahmedabad. Make every baraat unforgettable with Vishal Dholis.",
      },
      { property: "og:title", content: "Vishal Dholis — Premium Wedding Entertainment, Ahmedabad" },
      { property: "og:description", content: "Dhol Wala, DJ on Wheel and Vintage Car rentals for weddings & baraats in Ahmedabad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { title: "Wedding Dhol", icon: Drum, img: sDhol, desc: "Show-stopping dhol performances tailored for your wedding rituals and welcome." },
  { title: "Punjabi Dhol", icon: Music2, img: sPunjabi, desc: "High-energy Punjabi bhangra dhol troupes that turn baraats into pure josh." },
  { title: "DJ on Wheel", icon: Sparkles, img: sDj, desc: "State-of-the-art DJ truck with sound, lights and smoke for unforgettable processions." },
  { title: "Vintage Car Rental", icon: Car, img: sCar, desc: "Iconic vintage cars decorated in royal flowers for a grand wedding entry." },
  { title: "Baraat Entry", icon: Crown, img: sBaraat, desc: "Cinematic baraat choreography with dhol, dancers, sparklers and fireworks." },
];

const features = [
  { icon: Users, title: "Professional Team", desc: "Trained performers with 10+ years of stage experience." },
  { icon: Sparkles, title: "Energetic Live Shows", desc: "Crowd-pumping beats that get every guest dancing." },
  { icon: Crown, title: "Luxury Experience", desc: "Premium decor, attire and stagecraft worthy of royalty." },
  { icon: BadgeIndianRupee, title: "Affordable Packages", desc: "Transparent pricing crafted for every wedding budget." },
  { icon: Clock, title: "Always On Time", desc: "Punctual arrival and seamless coordination, every time." },
  { icon: Heart, title: "Custom Entries", desc: "Personalised baraat scripts built around your love story." },
];

const gallery = [
  { src: g1, h: "row-span-2", alt: "Baraat procession with sparklers" },
  { src: g2, h: "row-span-1", alt: "Close up of dhol drum" },
  { src: g3, h: "row-span-2", alt: "Wedding crowd dancing" },
  { src: g4, h: "row-span-1", alt: "Vintage wedding car" },
  { src: g5, h: "row-span-1", alt: "DJ truck with lights" },
  { src: g6, h: "row-span-2", alt: "Dhol player silhouette with fireworks" },
];

const testimonials = [
  { name: "Priya & Rohan", role: "Wedding · Ahmedabad", text: "Vishal Dholis turned our baraat into a Bollywood scene. The energy was unreal — every guest was dancing!", rating: 5 },
  { name: "Karan Mehta", role: "Sangeet · Gandhinagar", text: "The Punjabi dhol team set the tone for the whole night. Punctual, professional and absolutely electric.", rating: 5 },
  { name: "Anjali Shah", role: "Wedding · Ahmedabad", text: "We booked the vintage car with dhol entry — the photos look like a movie poster. Worth every rupee.", rating: 5 },
  { name: "Devansh Patel", role: "Reception · Ahmedabad", text: "DJ on Wheel was a game-changer. Lights, sound, smoke — they delivered a true celebration on the move.", rating: 5 },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <FloatingWhatsApp />
      <FloatingCall />
      <Toaster richColors position="top-center" />

      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Dhol performers at Indian wedding baraat"
        className="absolute inset-0 -z-10 h-full w-full object-cover scale-105"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/60 to-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.10_0.02_30/_0.8))]" />

      <div className="relative mx-auto max-w-5xl px-6 pt-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Ahmedabad's premier wedding entertainers
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl">
          Make Your Wedding{" "}
          <span className="relative inline-block">
            <span className="text-gradient-gold">Entry</span>
            <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          </span>
          <br />
          Unforgettable
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/75 sm:text-lg">
          Premium Dhol, DJ On Wheel & Vintage Wedding Car services in Ahmedabad —
          cinematic baraat experiences crafted by Vishal Dholis.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3.5 text-sm font-semibold">
            <Sparkles className="h-4 w-4" /> Book Now
          </a>
          <a href="tel:+917069447227" className="inline-flex items-center gap-2 rounded-full btn-outline-gold px-7 py-3.5 text-sm font-semibold">
            <Phone className="h-4 w-4" /> +91 70694 47227
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            { n: "500+", l: "Weddings" },
            { n: "12+", l: "Years" },
            { n: "100%", l: "Happy Couples" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-5">
              <div className="font-display text-3xl text-gradient-gold sm:text-4xl">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-float">
        Scroll
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const words = ["Dhol Wala", "Baraat Entry", "DJ on Wheel", "Punjabi Dhol", "Vintage Cars", "Wedding Dhol"];
  return (
    <div className="relative overflow-hidden border-y border-border/40 bg-ink py-5">
      <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl text-gradient-gold sm:text-3xl">
            {w} <span className="text-primary/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-royal opacity-60 blur-2xl" />
          <img src={sBaraat} alt="Groom on horse with dhol baraat" className="relative rounded-3xl object-cover shadow-[var(--shadow-deep)]" width={900} height={1100} loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden glass rounded-2xl p-5 text-center sm:block">
            <div className="font-display text-4xl text-gradient-gold">12+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Years of Beats</div>
          </div>
        </div>

        <div>
          <SectionEyebrow>About Vishal Dholis</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Where every <span className="text-gradient-gold">beat</span> tells a love story.
          </h2>
          <p className="mt-6 text-foreground/75">
            Born in the heart of Ahmedabad, Vishal Dholis has been crafting unforgettable
            baraat moments for over a decade. From the thunder of the traditional dhol to
            the spectacle of our DJ-on-Wheel processions, every performance is choreographed
            to celebrate your union with josh, jazba and joy.
          </p>
          <p className="mt-4 text-foreground/70">
            We blend the soul of Indian tradition with modern showmanship — vintage cars,
            sparkler entries and live drumming — to make sure your wedding entry is the
            story everyone tells for years.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: Crown, t: "Royal Treatment" },
              { icon: Sparkles, t: "Cinematic Entries" },
              { icon: Users, t: "Skilled Troupe" },
              { icon: Heart, t: "Made With Love" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
      <span className="h-px w-8 bg-primary" />
    </div>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Built for the <span className="text-gradient-gold">grandest</span> entries
          </h2>
          <p className="mt-4 text-foreground/70">
            Five signature experiences, endless ways to make your celebration legendary.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-deep)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Book this service <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-royal opacity-40" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Why Choose Us</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            The <span className="text-gradient-gold">gold standard</span> of celebration
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent transition-transform group-hover:rotate-6">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Moments</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            A wall of <span className="text-gradient-gold">celebrations</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(g.src)}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 ${g.h}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-xs font-medium text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {g.alt}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-6 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <img src={active} alt="Preview" className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl" />
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full glass"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}



/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center">
          <SectionEyebrow>Kind Words</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Loved by <span className="text-gradient-gold">500+ couples</span>
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="glass rounded-3xl p-8 sm:p-14 text-center">
            <div className="mb-5 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
              "{t.text}"
            </p>
            <div className="mt-8">
              <div className="font-semibold text-gradient-gold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} className="h-10 w-10 rounded-full glass hover:bg-primary/10">←</button>
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Review ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-muted"}`}
              />
            ))}
            <button onClick={next} className="h-10 w-10 rounded-full glass hover:bg-primary/10">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    const text = `Booking enquiry%0AName: ${form.name}%0APhone: ${form.phone}%0AEvent Date: ${form.date}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917069447227?text=${text}`, "_blank");
    toast.success("Opening WhatsApp to send your enquiry…");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Let's plan your <span className="text-gradient-gold">grand entry</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <a href="tel:+917069447227" className="flex items-start gap-4 glass rounded-2xl p-5 transition hover:border-primary/60">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent"><Phone className="h-5 w-5 text-primary-foreground" /></span>
              <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div><div className="font-semibold">+91 70694 47227</div></div>
            </a>
            <a href="mailto:vishaldholis.gmb@gmail.com" className="flex items-start gap-4 glass rounded-2xl p-5 transition hover:border-primary/60">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent"><Mail className="h-5 w-5 text-primary-foreground" /></span>
              <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div><div className="font-semibold break-all">vishaldholis.gmb@gmail.com</div></div>
            </a>
            <div className="flex items-start gap-4 glass rounded-2xl p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent"><MapPin className="h-5 w-5 text-primary-foreground" /></span>
              <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Visit</div><div className="text-sm text-foreground/85">Surdhi Nagar, 110, Chandlodiya Rd, Surdhi Nagar Society, Chandlodiya, Ahmedabad, Gujarat 382481</div></div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/60">
              <iframe
                title="Vishal Dholis location"
                src="https://www.google.com/maps?q=Surdhi+Nagar+Chandlodiya+Ahmedabad+Gujarat+382481&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 glass rounded-3xl p-7 sm:p-9 space-y-5">
            <Field icon={User} label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Full name" />
            <Field icon={Phone} label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+91" type="tel" />
            <Field icon={Calendar} label="Event Date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} type="date" />
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-input/40 px-4 py-3 focus-within:border-primary">
                <MessageSquare className="mt-1 h-5 w-5 text-primary" />
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your event…"
                  className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full btn-gold px-7 py-4 text-sm font-semibold">
              <Send className="h-4 w-4" /> Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon, label, value, onChange, placeholder, type = "text",
}: {
  icon: React.ElementType; label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <div className="flex items-center gap-3 rounded-xl border border-border bg-input/40 px-4 py-3 focus-within:border-primary">
        <Icon className="h-5 w-5 text-primary" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground [color-scheme:dark]"
        />
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-royal ring-1 ring-primary/60">
              <span className="font-display text-xl font-bold text-gradient-gold">V</span>
            </span>
            <span className="font-display text-xl text-gradient-gold">Vishal Dholis</span>
          </div>
          <p className="mt-4 text-sm text-foreground/70">
            Ahmedabad's premier wedding entertainment studio — dhol, DJ on wheel and vintage cars.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "Services", "Gallery", "Reviews", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="text-foreground/70 hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            {services.map((s) => <li key={s.title}>{s.title}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/70">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +91 70694 47227</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> vishaldholis.gmb@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Chandlodiya, Ahmedabad — 382481</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <div>© {new Date().getFullYear()} Vishal Dholis. All rights reserved.</div>
          <div>Crafted with <span className="text-primary">♥</span> in Ahmedabad</div>
        </div>
      </div>
    </footer>
  );
}
