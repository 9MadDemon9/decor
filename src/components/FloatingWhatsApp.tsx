import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/966556870840";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[hsl(142,70%,49%)] to-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-[0_8px_30px_-8px_hsl(142,70%,49%/0.5)] hover:shadow-[0_12px_40px_-8px_hsl(142,70%,49%/0.7)] transition-all hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
};

export default FloatingWhatsApp;
