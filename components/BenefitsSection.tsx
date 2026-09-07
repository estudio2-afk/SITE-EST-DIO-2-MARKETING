import { MapPin, Video, CheckCircle2, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: MapPin,
    title: "Agência local com atendimento presencial",
    description:
      "Somos de Guriri, São Mateus — ES. Atendemos presencialmente para produção de vídeo e foto em São Mateus, Jaguaré, Pedro Canário e Conceição da Barra. Você não é só mais um número em uma agência grande de fora.",
    highlight: "São Mateus · Guriri · Jaguaré · Pedro Canário · Conceição da Barra",
  },
  {
    icon: Video,
    title: "Produção profissional sem terceirizar",
    description:
      "Câmeras, iluminação e tudo mais são nossos. Não dependemos de fotógrafo externo nem de estúdio alugado. Isso garante mais agilidade, mais consistência de qualidade e menos custo repassado para você.",
    highlight: "Equipamento próprio",
  },
  {
    icon: CheckCircle2,
    title: "Você aprova o calendário antes de tudo",
    description:
      "Enviamos o planejamento editorial com antecedência para sua aprovação. Nenhuma publicação vai ao ar sem o seu aval — sem surpresas, sem aquele post que envergonha, sem retrabalho desnecessário.",
    highlight: "Zero surpresas",
  },
  {
    icon: TrendingUp,
    title: "Foco em vendas, não em seguidores",
    description:
      "Cada ação que executamos tem um objetivo claro: trazer clientes reais para o seu negócio. Não trabalhamos para inflar número de seguidores — trabalhamos para aumentar seu faturamento.",
    highlight: "Resultado = cliente no caixa",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-heading"
      className="section-padding bg-white"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Por que nos escolher
          </Badge>
          <h2
            id="benefits-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
          >
            Quatro razões que fazem diferença{" "}
            <span className="text-primary">na prática</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Não são promessas genéricas — são diferenciais concretos que impactam
            diretamente na qualidade do que entregamos e no resultado para o seu
            negócio.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="relative flex gap-5 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200 group"
            >
              {/* Number */}
              <div
                className="absolute top-5 right-5 font-display font-bold text-5xl text-foreground/5 group-hover:text-primary/10 transition-colors leading-none select-none"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  <benefit.icon
                    className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-200"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-semibold text-base text-foreground mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {benefit.description}
                </p>
                <span className="inline-flex items-center text-xs font-medium text-primary bg-primary/8 px-2.5 py-1 rounded-full">
                  {benefit.highlight}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
