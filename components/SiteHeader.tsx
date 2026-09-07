import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { LogoMark } from "@/components/Logo";
import { waLink, CTA } from "@/lib/contact";

const anchorLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Como funciona", href: "/#processo" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "FAQ", href: "/#faq" },
  { label: "Localização", href: "/#localizacao" },
];

const pageLinks = [
  { label: "Tráfego Pago", to: "/trafego-pago-sao-mateus" },
  { label: "Social Media", to: "/social-media-sao-mateus" },
  { label: "Videomaker", to: "/videomaker-sao-mateus" },
  { label: "Blog", to: "/blog" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Estúdio 2 Marketing — Página inicial"
          >
            <LogoMark size={32} variant="color" />
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              Estúdio <span className="text-primary">2</span> Marketing
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-5"
          >
            {anchorLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
              </a>
            ))}
            <span className="w-px h-4 bg-border" aria-hidden="true" />
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" asChild className="ml-2">
              <a
                href={waLink("header", CTA.hero)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar reunião gratuita pelo WhatsApp"
              >
                Reunião gratuita
              </a>
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Menu mobile" className="flex flex-col gap-1 mt-6">
                {anchorLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="px-3 py-3 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="my-2 border-t border-border" />
                <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Páginas
                </p>
                {pageLinks.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <Link
                      to={link.to}
                      className="px-3 py-3 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="pt-4 mt-2 border-t border-border">
                  <Button asChild className="w-full" size="lg">
                    <a
                      href={waLink("menu-mobile", CTA.hero)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reunião gratuita
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
