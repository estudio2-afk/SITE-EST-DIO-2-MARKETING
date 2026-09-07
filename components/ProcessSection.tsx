import { Calendar, FileText, CheckSquare, Zap, BarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { waLink, CTA } from "@/lib/contact";

export const processoPassos = [
  {
    icon: Calendar,
    titulo: "Reunião de diagnóstico gratuita",
    descricao:
      "30 minutos para entender seu negócio, seu público e o que está travando suas vendas no digital. Por videochamada ou presencial em São Mateus e região.",
  },
  {
    icon: FileText,
    titulo: "Proposta personalizada",
    descricao:
      "Com base no diagnóstico, montamos uma proposta sob medida para o tamanho e necessidade do seu negócio — sem pacote engessado, sem pagar por o que não vai usar.",
  },
  {
    icon: CheckSquare,
    titulo: "Aprovação do calendário editorial",
    descricao:
      "Antes de produzir qualquer conteúdo, você recebe o planejamento completo do mês para aprovação. Cada post, cada reels, cada campanha — você decide antes de ir ao ar.",
  },
  {
    icon: Zap,
    titulo: "Produção e publicação",
    descricao:
      "Executamos tudo: gravação de vídeo no seu negócio, edição, design, copywriting e publicação nas datas certas. Você cuida do seu negócio — a gente cuida do digital.",
  },
  {
    icon: BarChart2,
    titulo: "Acompanhamento de resultados",
    descricao:
      "Relatórios mensais com os números que importam: alcance, engajamento, cliques e conversões. Ajustamos a estratégia continuamente para melhorar os resultados ao longo do tempo.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="processo"
      aria-labelledby="process-heading"
      className="section-padding bg-muted"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Como funciona
          </Badge>
          <h2
            id="process-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
          >
            Do primeiro contato à{" "}
            <span className="text-primary">publicação com resultado</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Processo simples, transparente e sem burocracia. Você sabe exatamente
            o que acontece em cada etapa — sem achismos e sem surpresas no final.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Linha vertical */}
          <div
            className="absolute left-5 md:left-7 top-6 bottom-6 w-px bg-border hidden sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-6" aria-label="Etapas do processo">
            {processoPassos.map((passo, index) => (
              <li key={passo.titulo} className="relative flex gap-5 md:gap-8">
                {/* Número + ícone */}
                <div className="shrink-0 relative z-10">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary flex flex-col items-center justify-center shadow-md">
                    <passo.icon
                      className="h-4 w-4 md:h-5 md:w-5 text-white"
                      aria-hidden="true"
                    />
                    <span className="text-white/60 text-[9px] font-bold leading-none mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 bg-white rounded-xl p-5 border border-border shadow-sm pb-6">
                  <h3 className="font-display font-semibold text-base text-foreground mb-1.5 leading-snug">
                    {passo.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {passo.descricao}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <a
              href={waLink("processo", "agendar minha reunião gratuita de 30 minutos")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA.hero}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
