import { MapPin, Phone, Mail, Clock, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoMark } from "@/components/Logo";
import { waLink, emailLink, INSTAGRAM, LINKEDIN } from "@/lib/contact";

const anchorLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Como funciona", href: "/#processo" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "FAQ", href: "/#faq" },
];

const serviceLinks = [
  { label: "Tráfego Pago", to: "/trafego-pago-sao-mateus" },
  { label: "Social Media", to: "/social-media-sao-mateus" },
  { label: "Produção de Vídeo", to: "/videomaker-sao-mateus" },
  { label: "Criação de Conteúdo", to: "/criacao-de-conteudo-sao-mateus" },
  { label: "Tráfego Orgânico / SEO", to: "/trafego-organico-sao-mateus" },
  { label: "Sites e Landing Pages", to: "/criacao-de-sites-sao-mateus" },
  { label: "Acompanhamento Comercial", to: "/vendas-e-follow-up" },
  { label: "Blog", to: "/blog" },
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  { label: "Política de Segurança", to: "/politica-de-seguranca" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-white text-foreground border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Marca */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <LogoMark size={32} variant="color" />
              <span className="font-display font-bold text-lg text-foreground">
                Estúdio <span className="text-primary">2</span> Marketing
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs">
              Agência de marketing digital local para negócios em São Mateus,
              Guriri, Jaguaré, Pedro Canário e Conceição da Barra — ES.
              Produção própria, resultado real.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Estúdio 2 Marketing"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn do Estúdio 2 Marketing"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Navegação
            </h3>
            <nav aria-label="Links do rodapé — seções">
              <ul className="space-y-2">
                {anchorLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Serviços e páginas */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Serviços
            </h3>
            <nav aria-label="Links do rodapé — serviços e páginas">
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={waLink("footer", "saber mais sobre os serviços")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  aria-label="WhatsApp (27) 99714-3078"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  (27) 99714-3078
                </a>
              </li>
              <li>
                <a
                  href={emailLink("Contato via site")}
                  className="flex items-start gap-2 text-sm text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  contato@estudio2marketing.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <address className="not-italic">
                  São Mateus / Guriri — ES
                </address>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/70">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Seg–Sex 9h–12h e 14h–19h
                  <br />
                  Sáb 9h–12h e 13h–14h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 pb-20 md:pb-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Estúdio 2 Marketing. Todos os
            direitos reservados. CNPJ 62.583.360/0001-10
          </p>
          <p>
            Atendemos em São Mateus, Guriri, Jaguaré, Pedro Canário e Conceição
            da Barra — ES
          </p>
        </div>
      </div>
    </footer>
  );
}
