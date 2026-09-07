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
import { Card, CardContent } from "@/components/ui/card";
import Testimonials, { testimonials } from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { setSEO, SITE_URL, OG_IMAGE, injectSchema } from "@/lib/seo";
import { waLink } from "@/lib/contact";
import {
  Target,
  BarChart3,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  Search,
  Zap,
  FileText,
  Repeat,
} from "lucide-react";

const TITLE = "Gestão de Tráfego Pago em São Mateus - ES | Resultados Reais";
const DESCRIPTION =
  "Pare de depender de indicações. Gestão de tráfego pago profissional em São Mateus para empresas que buscam escala e previsibilidade. Meta Ads e Google Ads com foco em resultado.";
const PATH = "/trafego-pago-sao-mateus";

const faqs = [
  {
    q: "O que é gestão de tráfego pago em São Mateus?",
    a: "Gestão de tráfego pago é o serviço em que um especialista cria, otimiza e monitora campanhas pagas no Meta Ads (Instagram/Facebook) e Google Ads para atrair clientes até o seu negócio. O Estúdio 2 Marketing faz isso com foco no público local de São Mateus e região, para que cada real investido traga retorno mensurável.",
  },
  {
    q: "Qual a diferença entre Meta Ads e Google Ads?",
    a: "Meta Ads (Instagram e Facebook) alcança pessoas pelo perfil de interesse — ideal para criar desejo e capturar quem ainda não está procurando. Google Ads (search e display) alcança quem já está buscando ativamente pelo seu produto ou serviço. O Estúdio 2 Marketing avalia qual canal faz mais sentido para o seu negócio antes de recomendar o investimento.",
  },
  {
    q: "Quanto preciso investir em anúncios por mês?",
    a: "O valor de mídia (verba em anúncio) depende do seu segmento, concorrência local e meta. Para a maioria dos negócios em São Mateus, resultados iniciais aparecem com R$ 600 a R$ 1.500/mês em mídia. O Estúdio 2 Marketing define com você o investimento ideal na reunião de diagnóstico, sem empurrar mais do que faz sentido.",
  },
  {
    q: "Quanto tempo até ver resultado com tráfego pago?",
    a: "Os primeiros leads costumam aparecer em 7 a 15 dias após o início das campanhas. Resultado consistente e previsível, com custo por lead estável, costuma se consolidar entre 60 e 90 dias — período em que o Estúdio 2 Marketing otimiza criativos, segmentação e funil de conversão.",
  },
  {
    q: "O Estúdio 2 Marketing cria os criativos dos anúncios?",
    a: "Sim. Nossa equipe cria os artes, textos e vídeos dos anúncios com base na identidade da sua marca e no comportamento do público local. Tudo aprovado por você antes de ir ao ar — sem surpresas.",
  },
  {
    q: "Como vocês medem o resultado das campanhas?",
    a: "Monitoramos métricas de resultado real: custo por lead, custo por cliente, ROAS (retorno sobre o investimento em anúncio) e conversões. Mensalmente o Estúdio 2 Marketing envia um relatório completo e faz uma reunião de alinhamento para apresentar os números e ajustar a estratégia.",
  },
  {
    q: "Preciso de site para anunciar com tráfego pago?",
    a: "Não necessariamente. Dependendo do objetivo, podemos direcionar o anúncio para o WhatsApp, para uma landing page simples criada pela nossa equipe, ou para o Instagram do seu negócio. O Estúdio 2 Marketing define a melhor rota de conversão com base no tipo de venda.",
  },
  {
    q: "A gestão de tráfego pago inclui follow-up dos leads?",
    a: "Nos planos mais completos, sim. O Estúdio 2 Marketing pode integrar a gestão de tráfego com um processo de follow-up estruturado: scripts de abordagem, automações de WhatsApp e orientação para o time comercial fechar mais dos leads que chegam pelos anúncios.",
  },
  {
    q: "Vocês gerenciam Google Ads também?",
    a: "Hoje nosso tráfego pago é focado em Meta Ads (Instagram e Facebook) com resultados comprovados para negócios locais. Google Ads está sendo adicionado ao portfólio do Estúdio 2 Marketing — converse conosco para saber a disponibilidade atual.",
  },
  {
    q: "O valor de gestão está incluso no valor dos anúncios?",
    a: "Não. A verba de anúncio (mídia) vai direto para o Meta Ads ou Google Ads na sua conta — você controla o dinheiro. O Estúdio 2 Marketing cobra uma taxa separada de gestão pelo trabalho de estratégia, criação, otimização e relatórios. Essa separação garante total transparência sobre onde cada real está sendo investido.",
  },
];

const processo = [
  {
    icon: Search,
    num: "01",
    titulo: "Diagnóstico e estratégia",
    desc: "Reunião para entender o seu negócio, público-alvo e metas. Definimos canais, verba e KPIs antes de qualquer centavo investido.",
  },
  {
    icon: Zap,
    num: "02",
    titulo: "Setup e criação de criativos",
    desc: "Criamos a conta de anúncios, desenvolvemos os criativos (arte, copy e vídeo) e montamos o funil de conversão aprovado por você.",
  },
  {
    icon: BarChart3,
    num: "03",
    titulo: "Campanhas no ar e otimização",
    desc: "Campanhas ativas com monitoramento diário. Ajustamos segmentação, lances e criativos para baixar o custo por lead continuamente.",
  },
  {
    icon: FileText,
    num: "04",
    titulo: "Relatório mensal e escala",
    desc: "Relatório completo de performance + reunião de alinhamento. Decidimos juntos o próximo passo: manter, escalar ou diversificar.",
  },
];

const diferenciais = [
  { icon: Target, titulo: "Foco no público local", desc: "Segmentação por cidade, bairro e raio. Seu anúncio só aparece para quem está perto — e pronto para comprar." },
  { icon: Users, titulo: "Agência da sua cidade", desc: "Conhecemos São Mateus e a região. Isso muda a linguagem, a segmentação e os resultados das campanhas." },
  { icon: Repeat, titulo: "Follow-up integrado", desc: "Não abandonamos o lead na porta. Podemos integrar o fluxo de tráfego com processo comercial no seu time." },
  { icon: TrendingUp, titulo: "Relatório de resultado real", desc: "ROAS, custo por lead e conversões — não métricas de vaidade. Você sabe exatamente o que está funcionando." },
];

export default function TrafegoPago() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Gestão de Tráfego Pago em São Mateus",
        description: DESCRIPTION,
        provider: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL },
        areaServed: { "@type": "City", name: "São Mateus", "@id": "https://www.wikidata.org/wiki/Q742753" },
        url: `${SITE_URL}${PATH}`,
      })
    );

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Tráfego Pago São Mateus", item: `${SITE_URL}${PATH}` },
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
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Tráfego Pago", item: `${SITE_URL}${PATH}` },
          ],
        },
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
              <BreadcrumbItem><BreadcrumbPage>Tráfego Pago São Mateus</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section aria-labelledby="tp-hero-heading" className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-medium">
            <Target className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
            Tráfego Pago · São Mateus, ES
          </Badge>
          <h1 id="tp-hero-heading" className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Gestão de Tráfego Pago em São Mateus para{" "}
            <span className="text-primary">Empresas que Querem Escalar</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
            Chega de depender de indicação para crescer. O Estúdio 2 Marketing transforma seu investimento em anúncios em um fluxo previsível e constante de novos clientes — com estratégia, criativo e relatório de resultado real.
          </p>
          <ul className="space-y-2.5 mb-8" aria-label="Diferenciais do tráfego pago">
            {["Campanhas Meta Ads segmentadas para São Mateus e região", "Criativos criados pela nossa equipe — aprovados por você", "Relatório mensal de ROAS e custo por lead"].map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-white/80 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="xl" asChild className="text-base font-semibold">
              <a href={waLink("trafego-pago", "saber mais sobre gestão de tráfego pago")} target="_blank" rel="noopener noreferrer">
                Quero anunciar com estratégia <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dor */}
      <section aria-labelledby="tp-dor-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">O problema</Badge>
          <h2 id="tp-dor-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Seu negócio depende de indicação — e{" "}
            <span className="text-primary">quando param, o faturamento cai</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { titulo: "Sem previsibilidade", desc: "Alguns meses cheios, outros vazios. Sem controle sobre quantos clientes chegam por semana." },
              { titulo: "Dinheiro perdido em anúncio", desc: "Já investiu em impulsionar post sem resultado? Anúncio sem estratégia é despesa, não investimento." },
              { titulo: "Não sabe o que funciona", desc: "Curtidas não pagam boletos. Você não sabe quais ações realmente trazem clientes." },
            ].map((item) => (
              <Card key={item.titulo} className="border-l-4 border-l-primary/40">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-foreground mb-2">{item.titulo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section aria-labelledby="tp-solucao-heading" className="section-padding bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">A solução</Badge>
          <h2 id="tp-solucao-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Tráfego pago com <span className="text-primary">estratégia local</span>, não só clique
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
            O Estúdio 2 Marketing não fica só ligando o botão "impulsionar". Criamos campanhas completas no Meta Ads (Instagram e Facebook) com segmentação por cidade, público e comportamento — para cada real investido trazer retorno mensurável.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Meta Ads (Instagram e Facebook)", desc: "Campanhas de alcance, tráfego e conversão segmentadas para São Mateus e cidades vizinhas." },
              { titulo: "Criativos que convertem", desc: "Artes, textos e vídeos produzidos pela nossa equipe com base no comportamento do seu público." },
              { titulo: "Funil de conversão completo", desc: "Do anúncio até o WhatsApp ou landing page — sem perder lead no meio do caminho." },
              { titulo: "Otimização contínua", desc: "Monitoramento diário. Ajustamos lances, segmentação e criativos para reduzir custo por lead." },
            ].map((item) => (
              <div key={item.titulo} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.titulo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section aria-labelledby="tp-processo-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">Como funciona</Badge>
          <h2 id="tp-processo-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight">
            Do diagnóstico ao <span className="text-primary">resultado em 4 etapas</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processo.map((p) => (
              <div key={p.num} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <p.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{p.num}</p>
                  <h3 className="font-display font-bold text-foreground mb-1">{p.titulo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section aria-labelledby="tp-dif-heading" className="section-padding bg-foreground text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Por que o Estúdio 2 Marketing</Badge>
          <h2 id="tp-dif-heading" className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight">
            Não somos mais uma <span className="text-primary">agência de fora</span>
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
      <section aria-labelledby="tp-faq-heading" className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Perguntas frequentes</Badge>
            <h2 id="tp-faq-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Dúvidas sobre <span className="text-primary">tráfego pago</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">Respondemos as perguntas mais comuns de donos de negócios locais antes de contratar gestão de anúncios.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`tp-faq-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base">{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center p-6 bg-muted rounded-2xl">
            <p className="font-display font-semibold text-foreground mb-2">Ficou com alguma dúvida?</p>
            <p className="text-sm text-muted-foreground mb-4">Chame no WhatsApp — respondemos rápido e sem compromisso.</p>
            <Button size="lg" asChild>
              <a href={waLink("trafego-pago-faq", "tirar uma dúvida sobre tráfego pago")} target="_blank" rel="noopener noreferrer">
                Tirar dúvida no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section aria-labelledby="tp-cta-heading" className="section-padding bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 id="tp-cta-heading" className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            Pronto para ter um fluxo <span className="text-primary">previsível de clientes</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Agende uma conversa gratuita com o Estúdio 2 Marketing. Em 30 minutos, entendemos o seu negócio e mostramos como o tráfego pago pode funcionar para você em São Mateus.
          </p>
          <Button size="xl" asChild className="text-base font-semibold">
            <a href={waLink("trafego-pago-cta", "agendar diagnóstico gratuito de tráfego pago")} target="_blank" rel="noopener noreferrer">
              Agendar diagnóstico gratuito <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-4 text-white/40 text-xs">Sem compromisso. Diagnóstico gratuito de 30 min por WhatsApp ou presencial.</p>
        </div>
      </section>

      <LocationSection />
      <WhatsAppFloat />
    </main>
  );
}
