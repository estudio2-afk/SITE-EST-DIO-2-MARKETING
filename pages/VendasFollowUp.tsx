import { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Testimonials, { testimonials } from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { setSEO, SITE_URL, OG_IMAGE, injectSchema } from "@/lib/seo";
import { waLink } from "@/lib/contact";
import {
  MessageSquare,
  PhoneCall,
  BarChart3,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";

const TITLE = "Vendas e Follow-Up para Pequenas Empresas em São Mateus - ES";
const DESCRIPTION =
  "Pare de depender só de indicação. O Estúdio 2 Marketing estrutura seu processo comercial com follow-up estratégico para que você venda com previsibilidade em São Mateus.";
const PATH = "/vendas-e-follow-up";

const faqs = [
  {
    q: "O que é follow-up de vendas e por que é importante para negócios em São Mateus?",
    a: "Follow-up é o processo de acompanhar um potencial cliente depois do primeiro contato. Estudos mostram que mais de 80% das vendas acontecem após o 5º contato — mas a maioria das empresas desiste após o 1º ou 2º. Estruturar o follow-up em São Mateus significa transformar leads que não fecharam na hora em clientes nos próximos dias ou semanas.",
  },
  {
    q: "Minha empresa depende muito de indicação. O que fazer para mudar isso?",
    a: "Indicação é um ativo valioso, mas instável — você não controla o volume, o timing ou o perfil do cliente. O Estúdio 2 Marketing te ajuda a criar uma estrutura de geração de oportunidades (tráfego pago, presença orgânica e captura de leads) combinada com um processo de follow-up que transforma esses leads em clientes sem depender de quem te indica.",
  },
  {
    q: "Quanto tempo leva para montar um processo comercial estruturado?",
    a: "A estruturação básica leva entre 2 e 4 semanas: definição do perfil de cliente ideal, script de abordagem, sequência de follow-up e ferramentas de controle (pode ser uma planilha ou CRM simples). Os primeiros resultados costumam aparecer já no primeiro mês de execução consistente.",
  },
  {
    q: "Preciso de um CRM caro para fazer follow-up?",
    a: "Não. O Estúdio 2 Marketing adapta o processo à realidade do seu negócio. Para a maioria das pequenas empresas em São Mateus, uma planilha bem estruturada ou o próprio WhatsApp com organização de etiquetas já resolve no início. CRM é uma ferramenta — o processo comercial é o que gera resultado.",
  },
  {
    q: "Como o Estúdio 2 Marketing ajuda no processo de vendas?",
    a: "O Estúdio 2 Marketing estrutura o diagnóstico do processo atual, define os pontos de contato ideais com o cliente (desde o primeiro interesse até o fechamento), cria scripts de abordagem e follow-up, e acompanha a execução. Além disso, o marketing digital alimenta o processo com novos leads de forma contínua.",
  },
  {
    q: "Qual é a diferença entre processo de vendas e script de vendas?",
    a: "O processo de vendas é o mapa completo — todas as etapas desde o primeiro contato até o pós-venda. O script é o guia de conversa para cada etapa. Você precisa dos dois: o processo garante que nenhum lead caia no esquecimento; o script garante que a abordagem seja consistente e profissional.",
  },
  {
    q: "Minha equipe de vendas tem dificuldade em seguir processos. Isso funciona para mim?",
    a: "O Estúdio 2 Marketing cria processos simples o suficiente para serem seguidos. A chave não é o processo mais sofisticado, mas o mais prático — aquele que sua equipe vai realmente usar. Começamos simples e ajustamos conforme a equipe ganha confiança.",
  },
  {
    q: "Como saber se meu processo de vendas atual tem gargalos?",
    a: "Os sintomas mais comuns são: muitos leads que 'somem' sem resposta, clientes que pedem proposta mas nunca fecham, dependência de um ou dois vendedores que fazem tudo no 'feeling', e faturamento imprevisível todo mês. Se você se identificou com algum desses, há gargalos a resolver.",
  },
  {
    q: "O Estúdio 2 Marketing também ajuda com a abordagem inicial (prospecção)?",
    a: "Sim. Além de estruturar o follow-up de leads que já entraram em contato, o Estúdio 2 Marketing pode ajudar a definir estratégias de prospecção ativa para o seu segmento em São Mateus — inclusive combinando com os esforços de tráfego pago e redes sociais para criar um fluxo contínuo de oportunidades.",
  },
  {
    q: "Como integrar o processo de vendas com o marketing digital?",
    a: "O marketing digital gera leads; o processo comercial os converte. O Estúdio 2 Marketing integra as duas frentes: quando um lead chega pelo anúncio ou pelo Instagram, ele entra em uma sequência de follow-up definida — não fica esperando no WhatsApp sem resposta. Isso fecha o ciclo entre atração e conversão.",
  },
];

const etapas = [
  { icon: Target, num: "01", titulo: "Diagnóstico comercial", desc: "Mapeamos como você vende hoje: como chegam os leads, o que acontece com cada um, onde mais negócios se perdem e qual é o ciclo médio de venda." },
  { icon: MessageSquare, num: "02", titulo: "Estrutura e script", desc: "Desenhamos as etapas do seu processo comercial e criamos guias de conversa para cada momento — da primeira mensagem ao fechamento." },
  { icon: PhoneCall, num: "03", titulo: "Sequência de follow-up", desc: "Definimos quantos toques, em que canal e com que mensagem você segue um lead que ainda não decidiu — sem parecer insistente, sem perder o timing." },
  { icon: BarChart3, num: "04", titulo: "Controle e melhoria contínua", desc: "Você passa a enxergar os números: quantos leads entram, em que etapa travam e qual é a taxa de conversão. Com isso, ajustamos mês a mês." },
];

const diferenciais = [
  { icon: TrendingUp, titulo: "Previsibilidade de vendas", desc: "Com processo estruturado, você para de depender de 'mês bom' e começa a ter uma curva de vendas mais estável e planejável." },
  { icon: Users, titulo: "Menos dependência de indicação", desc: "Marketing digital + follow-up criam um fluxo próprio de clientes — independente de quem te indica ou deixa de indicar." },
  { icon: Repeat, titulo: "Processo replicável", desc: "Um processo bem definido pode ser seguido por qualquer pessoa da equipe — não fica preso na cabeça de um vendedor." },
  { icon: Clock, titulo: "Ciclo de venda mais curto", desc: "Follow-up estruturado reduz o tempo entre o primeiro contato e o fechamento — porque o lead não esfria por falta de acompanhamento." },
];

export default function VendasFollowUp() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Estruturação de Vendas e Follow-Up — São Mateus",
        description: DESCRIPTION,
        provider: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL },
        areaServed: { "@type": "City", name: "São Mateus" },
        url: `${SITE_URL}${PATH}`,
      })
    );

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Vendas e Follow-Up", item: `${SITE_URL}${PATH}` },
        ],
      })
    );

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      })
    );

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: TITLE,
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        image: OG_IMAGE,
      })
    );

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Estúdio 2 Marketing",
        url: SITE_URL,
        telephone: "+5527997143078",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: String(testimonials.length),
          bestRating: "5",
        },
        review: testimonials.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.nome },
          datePublished: t.data,
          reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
          reviewBody: t.texto,
        })),
      })
    );

    return () => { scripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border py-2 px-4">
        <div className="container max-w-6xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Início</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Vendas e Follow-Up</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section aria-labelledby="vf-hero-heading" className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-medium">
            <TrendingUp className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
            Processo Comercial · São Mateus, ES
          </Badge>
          <h1 id="vf-hero-heading" className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Pare de depender de indicação.{" "}
            <span className="text-primary">Venda com previsibilidade.</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
            O Estúdio 2 Marketing estrutura seu processo de vendas e follow-up para que você tenha um fluxo constante de clientes — sem depender de sorte, sazonalidade ou quem te indica este mês.
          </p>
          <ul className="space-y-2.5 mb-8" aria-label="O que você vai ganhar">
            {["Processo comercial que sua equipe consegue seguir", "Sequência de follow-up que não deixa nenhum lead esquecer", "Integração entre marketing digital e vendas"].map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-white/80 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <Button size="xl" asChild className="text-base font-semibold">
            <a href={waLink("vendas-followup", "estruturar meu processo comercial")} target="_blank" rel="noopener noreferrer">
              Quero estruturar minhas vendas <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* Problema */}
      <section aria-labelledby="vf-prob-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">O que tranca o crescimento</Badge>
          <h2 id="vf-prob-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            Se você se vê nisto, <span className="text-primary">é hora de mudar</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Mês bom e mês ruim sem entender o porquê",
              "Leads que somem depois do primeiro contato",
              "Clientes que pedem proposta e nunca fecham",
              "Faturamento que depende só de quem te indica",
              "Sem tempo para fazer follow-up de quem não respondeu",
              "Não sabe quantos leads entram nem qual é a conversão",
            ].map((item) => (
              <div key={item} className="flex gap-3 p-4 bg-muted rounded-xl">
                <span className="text-primary font-bold text-lg leading-none mt-0.5" aria-hidden="true">—</span>
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section aria-labelledby="vf-processo-heading" className="section-padding bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">Como funciona</Badge>
          <h2 id="vf-processo-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight">
            Estruturação comercial em <span className="text-primary">4 etapas</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {etapas.map((e) => (
              <div key={e.num} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <e.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{e.num}</p>
                  <h3 className="font-display font-bold text-foreground mb-1">{e.titulo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section aria-labelledby="vf-dif-heading" className="section-padding bg-foreground text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">O que muda na prática</Badge>
          <h2 id="vf-dif-heading" className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight">
            Negócio que vende com <span className="text-primary">processo, não sorte</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="flex gap-4">
                <div className="w-11 h-11 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <d.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1">{d.titulo}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section aria-labelledby="vf-faq-heading" className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Perguntas frequentes</Badge>
            <h2 id="vf-faq-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Dúvidas sobre <span className="text-primary">vendas e follow-up</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">O que as empresas de São Mateus mais perguntam antes de estruturar o processo comercial.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`vf-faq-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base">{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center p-6 bg-muted rounded-2xl">
            <p className="font-display font-semibold text-foreground mb-2">Sua dúvida não está aqui?</p>
            <p className="text-sm text-muted-foreground mb-4">Fale com o Estúdio 2 Marketing pelo WhatsApp.</p>
            <Button size="lg" asChild>
              <a href={waLink("vendas-followup-faq", "tirar uma dúvida sobre processo de vendas")} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section aria-labelledby="vf-cta-heading" className="section-padding bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 id="vf-cta-heading" className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            Pronto para ter <span className="text-primary">previsibilidade de vendas</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Converse com o Estúdio 2 Marketing. Vamos mapear como você vende hoje, identificar os gargalos e propor uma estrutura que funcione para o seu time.
          </p>
          <Button size="xl" asChild className="text-base font-semibold">
            <a href={waLink("vendas-followup-cta", "estruturar processo comercial")} target="_blank" rel="noopener noreferrer">
              Quero mais previsibilidade nas vendas <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-4 text-white/40 text-xs">Diagnóstico gratuito de 30 min — sem compromisso.</p>
        </div>
      </section>

      <LocationSection />
      <WhatsAppFloat />
    </main>
  );
}
