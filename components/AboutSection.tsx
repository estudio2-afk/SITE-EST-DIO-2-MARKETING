import { MapPin, Users, Camera, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { waLink, CTA } from "@/lib/contact";

const stats = [
  {
    icon: MapPin,
    value: "5",
    label: "cidades atendidas",
    sub: "presencialmente no ES",
  },
  {
    icon: Camera,
    value: "100%",
    label: "produção própria",
    sub: "câmera e equipamento da agência",
  },
  {
    icon: Users,
    value: "Local",
    label: "conhecemos sua cidade",
    sub: "equipe baseada em Guriri",
  },
  {
    icon: Star,
    value: "Zero",
    label: "surpresas",
    sub: "você aprova tudo antes",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="section-padding bg-white"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Sobre nós
            </Badge>
            <h2
              id="about-heading"
              className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight"
            >
              A gente existe pra fazer o seu negócio{" "}
              <span className="text-primary">vender mais.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Esse é o começo, o meio e o fim de tudo que fazemos. Porque um negócio que vende mais — e com uma margem melhor — muda a vida de quem está por trás dele: o dono, a família, o time, todo mundo ao redor.
              </p>
              <p>
                Criei o Estúdio 2 pra isso: ajudar negócios locais a venderem mais e melhor pelas redes. A gente estrutura sua presença, produz com qualidade de perto (com equipamento profissional de ponta), anuncia e acompanha os resultados junto com você. Do jeito que faz sentido pro seu momento — seja um serviço ou a jornada completa.
              </p>
              <p>
                Somos de Guriri, São Mateus — ES, e atendemos presencialmente a região. Você aprova tudo antes de ir ao ar. Sem surpresa, sem número inflado.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a
                  href={waLink("sobre", CTA.about)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CTA.about}
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="bg-muted rounded-xl p-5 flex flex-col gap-3"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-foreground leading-none">
                    {stat.value}
                  </div>
                  <div className="font-medium text-sm text-foreground mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
