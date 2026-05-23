import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const msg = encodeURIComponent(
    "Hi Vishal Dholis, I'd like to enquire about wedding entertainment services.",
  );
  return (
    <a
      href={`https://wa.me/917069447227?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl animate-pulse-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
