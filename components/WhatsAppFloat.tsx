import { MessageCircle } from "lucide-react";
import { waLink, CTA } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("botao-flutuante", CTA.float)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp — Estúdio 2 Marketing"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 group-hover:gap-2.5 bg-primary text-primary-foreground rounded-full shadow-glow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 p-3.5"
    >
      <MessageCircle
        className="h-5 w-5 shrink-0"
        aria-hidden="true"
      />
      <span className="text-sm font-semibold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[160px] group-hover:ml-2.5 transition-all duration-300 ease-in-out">
        Falar no WhatsApp
      </span>
    </a>
  );
}
