import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, emailLink, CTA } from "@/lib/contact";

const garantias = [
  "Reunião 100% gratuita, sem compromisso",
  "Diagnóstico honesto do seu digital",
  "Proposta personalizada para o seu negócio",
];

export default function FinalCTA() {
  return (
    <section
      id="contato"
      aria-labelledby="finalcta-heading"
      className="section-padding bg-foreground relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-3xl mx-auto px-4 relative z-10 text-center">
        {/* Urgência sutil */}
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Clock className="h-4 w-4" aria-hidden="true" />
          Atendimento de segunda a sexta, 9h–12h e 14h–19h
        </div>

        <h2
          id="finalcta-heading"
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight"
        >
          Pronto para trazer mais{" "}
          <span className="text-primary">clientes reais</span> para o seu
          negócio?
        </h2>

        <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Comece com uma reunião gratuita de{" "}
          <strong className="text-white font-medium">30 minutos</strong>.
          Analisamos seu negócio, identificamos o que está travando suas vendas
          no digital e mostramos o caminho certo — sem enrolação.
        </p>

        {/* Garantias */}
        <ul
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          aria-label="O que está incluído na reunião gratuita"
        >
          {garantias.map((g) => (
            <li key={g} className="flex items-center gap-2 text-white/70 text-sm">
              <CheckCircle2
                className="h-4 w-4 text-primary shrink-0"
                aria-hidden="true"
              />
              {g}
            </li>
          ))}
        </ul>

        {/* Botões CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" asChild className="text-base font-semibold shadow-xl">
            <a
              href={waLink("final-cta", "agendar minha reunião gratuita de 30 minutos")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar reunião gratuita pelo WhatsApp"
            >
              {CTA.final}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button
            size="xl"
            variant="outline"
            asChild
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <a
              href={emailLink("Contato via site — quero saber mais")}
              aria-label="Enviar e-mail para o Estúdio 2 Marketing"
            >
              Enviar um e-mail
            </a>
          </Button>
        </div>

        <p className="mt-6 text-white/30 text-xs">
          São Mateus · Guriri · Jaguaré · Pedro Canário · Conceição da Barra — ES
        </p>
      </div>
    </section>
  );
}
