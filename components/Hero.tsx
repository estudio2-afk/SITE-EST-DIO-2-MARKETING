import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { waLink } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col overflow-hidden bg-foreground"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4 pt-12 pb-12 md:pt-16 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <Badge
              variant="secondary"
              className="mb-6 bg-primary/20 text-primary border-primary/30 font-medium"
            >
              Agência de marketing · São Mateus e Guriri
            </Badge>

            <h1
              id="hero-heading"
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white leading-tight mb-6"
            >
              Seu negócio é bom.{" "}
              <span className="text-primary block">
                As redes ainda não contam isso.
              </span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Marketing não é sobre curtida nem sorte. É sobre fazer o seu negócio vender mais — com mais margem e mais tranquilidade pra quem toca ele. Por isso a gente acompanha cada passo do digital, do primeiro conteúdo até o cliente no caixa. Sem achismo, sem promessa mágica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="xl" variant="default" asChild className="text-base font-semibold">
                <a
                  href={waLink("hero", "quero vender mais pelas redes")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar com o Estúdio 2 Marketing pelo WhatsApp"
                >
                  Quero vender mais pelas redes
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#servicos" aria-label="Ver todos os serviços">
                  Ver serviços
                </a>
              </Button>
            </div>

            <p className="mt-4 text-white/40 text-xs">
              Sem compromisso. Reunião de 30 min, gratuita, por videochamada ou presencial.
            </p>
          </div>

          {/* Foto do fundador */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden ring-2 ring-primary/40 shadow-2xl" style={{ aspectRatio: "3/4" }}>
              <img
                src="/raniel.jpg"
                alt="Raniel Benigno, fundador do Estúdio 2 Marketing, em São Mateus - ES"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
              <p className="absolute bottom-4 left-4 text-white/80 text-sm font-medium tracking-wide">
                Raniel Benigno · fundador
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa de prova social */}
      <div className="relative z-10 w-full border-t border-white/10 bg-white/5 py-4 px-4">
        <p className="container max-w-6xl mx-auto text-center text-sm text-white/60 leading-relaxed">
          Resultado real — cliente do ramo de petshop, em 1 mês:{" "}
          <strong className="text-white font-bold">67.197</strong> visualizações ·{" "}
          <strong className="text-white font-bold">10.301</strong> pessoas alcançadas.{" "}
          Número real, não média inventada.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-white/30 text-xs">role para baixo</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
