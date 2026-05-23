import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+917069447227"
      aria-label="Call now"
      className="fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl animate-pulse-glow hover:scale-110 transition-transform"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
