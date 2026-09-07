import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const testimonials = [
  {
    nome: "Edmara Araújo",
    cargo: "Aroeira Móveis",
    cidade: "São Mateus — ES",
    texto: "Excelentes profissionais qualificados e competentes. Parabéns!",
    rating: 5,
    data: "2026-06-26",
    initials: "EA",
  },
  {
    nome: "Dra. Joici Escarabelle",
    cargo: "Cliente — Saúde",
    cidade: "São Mateus — ES",
    texto:
      "Minha experiência tem sido excelente. Além de serem extremamente profissionais, são atenciosos, prestativos e sempre dispostos a ajudar. Tenho percebido o cuidado e a dedicação em cada detalhe, desde a criação dos conteúdos até o acompanhamento das estratégias. Desde que assumiram minhas redes, percebi uma mudança muito positiva na qualidade dos conteúdos e na forma como minha marca é apresentada.",
    rating: 5,
    data: "2026-06-24",
    initials: "JE",
  },
  {
    nome: "Maritana Benigno",
    cargo: "H2M Contabilidade",
    cidade: "Região de São Mateus — ES",
    texto:
      "Passando aqui pra agradecer pela parceria e pelo excelente trabalho com a nossa empresa. É muito bom trabalhar com pessoas comprometidas, atenciosas e que realmente fazem acontecer. Obrigada por todo suporte, dedicação e cuidado em cada detalhe. Vocês fazem diferença!",
    rating: 5,
    data: "2026-06-25",
    initials: "MB",
  },
  {
    nome: "Gabriel Malacarne",
    cargo: "Agrimac",
    cidade: "Guriri — ES",
    texto:
      "São profissionais de mais alto nível de qualidade, cada post, cada reel são sensacionais.",
    rating: 5,
    data: "2026-06-24",
    initials: "GM",
  },
  {
    nome: "Cleidiomar Da Cruz Pereira",
    cargo: "Cliente",
    cidade: "Região de São Mateus — ES",
    texto: "Experiência fantástica. Pensa em uma equipe sensacional!!!",
    rating: 5,
    data: "2026-06-24",
    initials: "CP",
  },
  {
    nome: "Leticia Benigno",
    cargo: "Cliente",
    cidade: "Região de São Mateus — ES",
    texto: "Trabalho excelente!",
    rating: 5,
    data: "2026-06-24",
    initials: "LB",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="section-padding bg-muted"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Depoimentos
          </Badge>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
          >
            O que os clientes dizem sobre{" "}
            <span className="text-primary">trabalhar com a gente</span>
          </h2>
          {/* Nota de avaliação do Google */}
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 shadow-sm">
            <div className="flex gap-0.5" aria-label="5 estrelas no Google">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <span className="font-display font-bold text-sm text-foreground">5,0</span>
            <span className="text-muted-foreground text-sm">· 5 avaliações no Google</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article key={t.nome}>
              <Card className="h-full hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-5 flex flex-col gap-4 h-full">
                  {/* Stars */}
                  <div
                    className="flex gap-0.5"
                    aria-label={`Avaliação: ${t.rating} de 5 estrelas`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative flex-1">
                    <Quote
                      className="absolute -top-1 -left-1 h-5 w-5 text-primary/20"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-foreground/80 leading-relaxed pl-4">
                      "{t.texto}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div
                      className="w-9 h-9 bg-primary/15 rounded-full flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <span className="font-display font-bold text-xs text-primary">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-sm text-foreground">
                        {t.nome}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.cargo} · {t.cidade}
                      </div>
                    </div>
                    <time
                      dateTime={t.data}
                      className="ml-auto text-xs text-muted-foreground/60 shrink-0"
                    >
                      {new Date(t.data).toLocaleDateString("pt-BR", {
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
