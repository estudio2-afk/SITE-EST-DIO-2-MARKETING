import {
  Share2,
  Film,
  Target,
  Globe,
  TrendingUp,
  PenTool,
  BarChart2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

export const services = [
  {
    icon: Share2,
    title: "Gestão de redes sociais",
    description:
      "Estratégia, calendário editorial aprovado por você, postagens, direcionamento para stories e métricas que mostram o que está dando resultado.",
    highlight: "Instagram + Facebook",
    href: "/social-media-sao-mateus",
  },
  {
    icon: Film,
    title: "Produção de reels e vídeos",
    description:
      "Gravação presencial no seu negócio com equipamento próprio. Edição rápida, formato que prende e gera vendas.",
    highlight: "Equip. próprio",
    href: "/videomaker-sao-mateus",
  },
  {
    icon: PenTool,
    title: "Criação de conteúdo",
    description:
      "Fotos, posts, copy e roteiros pensados para o seu público local. Conteúdo que comunica e converte.",
    highlight: "Design + Copy",
  },
  {
    icon: TrendingUp,
    title: "Tráfego orgânico (SEO)",
    description:
      "Posicionamos seu negócio no Google e nas redes sem depender só de anúncio. Crescimento que continua rendendo no longo prazo.",
    highlight: "Google + Social",
  },
  {
    icon: Globe,
    title: "Sites, landing pages e blogs",
    description:
      "Sites rápidos, otimizados para o Google e pensados para gerar contato. Não é cartão de visita — é máquina de cliente.",
    highlight: "SEO incluído",
  },
  {
    icon: Target,
    title: "Tráfego pago — Meta Ads",
    description:
      "Campanhas no Instagram e Facebook focadas em região, público e oferta. Cada real investido com objetivo claro.",
    highlight: "Meta Ads",
    href: "/trafego-pago-sao-mateus",
  },
  {
    icon: BarChart2,
    title: "Acompanhamento comercial e vendas",
    description:
      "Metas de faturamento, análise de sazonalidade, atendimento do time, retenção e aumento de ticket médio — para multiplicar o resultado com a base que você já tem.",
    highlight: "Vendas + Retenção",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="section-padding bg-muted"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-5 text-sm px-4 py-1.5">
            Serviços
          </Badge>
          <h2
            id="services-heading"
            className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 leading-tight"
          >
            Tudo que seu negócio precisa para{" "}
            <span className="text-primary">crescer no digital</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Do conteúdo orgânico à campanha paga — executamos cada etapa com
            profissionalismo e foco em resultado concreto para o seu negócio
            local.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.title}>
              <Card className="h-full hover:shadow-md transition-shadow duration-200 group flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                      <service.icon
                        className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-200"
                        aria-hidden="true"
                      />
                    </div>
                    <Badge variant="muted" className="text-xs">
                      {service.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-base leading-snug">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  {service.href && (
                    <div className="mt-4 flex items-center gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={service.href}>
                          Saiba mais <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </Button>
                      <a
                        href={waLink("servicos", `saber mais sobre ${service.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        Falar no WhatsApp
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* CTA abaixo dos cards */}
        <div className="mt-10 text-center">
          <Button size="lg" asChild className="whitespace-normal h-auto">
            <a
              href={waLink("servicos", "saber mais sobre os serviços e valores")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero saber quais serviços fazem sentido para meu negócio
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
