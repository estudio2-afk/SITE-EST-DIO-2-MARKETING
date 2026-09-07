import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { waLink, CTA } from "@/lib/contact";

export const faqs = [
  {
    q: "Vocês atendem só São Mateus ou outras cidades também?",
    a: "Atendemos presencialmente São Mateus, Guriri, Jaguaré, Pedro Canário e Conceição da Barra. Para gestão de redes e tráfego pago, conseguimos atender qualquer cidade do Brasil de forma remota.",
  },
  {
    q: "Quanto custa para contratar o Estúdio 2 Marketing?",
    a: "Nossos serviços são a partir de R$ 1.000/mês. Não trabalhamos com pacote engessado: o investimento final é definido conforme o tamanho do seu negócio, os serviços contratados e a frequência de produção. O valor exato é enviado depois da nossa conversa inicial, em uma proposta personalizada feita de acordo com o que foi discutido.",
  },
  {
    q: "Em quanto tempo começo a ver resultado?",
    a: "Os primeiros sinais (mais alcance, comentários, mensagens) costumam aparecer em 30 a 45 dias. Resultado consistente em vendas vem a partir de 90 dias, dependendo do segmento, do investimento em tráfego e da maturidade do seu negócio.",
  },
  {
    q: "Vocês produzem o vídeo e a foto ou eu preciso enviar?",
    a: "Nós produzimos. Vamos presencialmente ao seu negócio com equipamento profissional próprio — câmera, microfone, iluminação. Para stories, não gravamos no lugar do cliente: o próprio cliente interage com o público dele. Mas fornecemos o direcionamento completo para que cada story converta.",
  },
  {
    q: "Posso aprovar o conteúdo antes de ser publicado?",
    a: "Sim, cada post é aprovado individualmente por você através da nossa estrutura. Além do calendário editorial, você sabe exatamente o que está acontecendo.",
  },
  {
    q: "Preciso já ter Instagram ou posso começar do zero?",
    a: "Pode começar do zero. A gente cuida da criação do perfil, identidade visual, bio, destaques e da estratégia inicial pra acelerar o crescimento.",
  },
  {
    q: "Vocês fazem anúncio no Google também?",
    a: "Atualmente, nosso tráfego pago é focado em Meta Ads (Instagram e Facebook). Para o Google, trabalhamos com tráfego orgânico (SEO) e Google Meu Negócio. Google Ads entra em breve no nosso portfólio de serviços.",
  },
  {
    q: "Vocês só fazem marketing ou ajudam a vender mais também?",
    a: "Dependendo do plano, entramos no seu setor comercial: ajudamos a estabelecer metas de faturamento, analisar sazonalidade, treinar o atendimento do time de vendas e criar estratégias de retenção e aumento de ticket médio. O objetivo é multiplicar o faturamento com a base de clientes que você já tem, enquanto o tráfego pago expande essa base.",
  },
  {
    q: "E se eu não gostar do resultado depois de 1 mês?",
    a: "Nosso contrato mínimo é de 6 meses, com resultados sólidos prometidos a partir do terceiro mês (90 dias). Cancelamento antes do fim do período tem multa de 50% do valor do contrato. Mensalmente a gente se alinha sobre ajustes e evolução da estratégia.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-white"
    >
      <div className="container max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Perguntas frequentes
          </Badge>
          <h2
            id="faq-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
          >
            Dúvidas que aparecem{" "}
            <span className="text-primary">antes de começar</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Respostas diretas para as perguntas mais comuns que recebemos de
            donos de negócios locais.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-sm md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA abaixo do FAQ */}
        <div className="mt-10 text-center p-6 bg-muted rounded-2xl">
          <p className="font-display font-semibold text-foreground mb-2">
            Ficou com alguma dúvida que não está aqui?
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Mande uma mensagem direto no WhatsApp — respondo rápido.
          </p>
          <Button size="lg" asChild>
            <a
              href={waLink("faq", "tirar uma dúvida sobre os serviços")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA.float}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
