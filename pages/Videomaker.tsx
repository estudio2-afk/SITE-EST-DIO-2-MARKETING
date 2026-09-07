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
  Film,
  Camera,
  PenTool,
  Zap,
  ArrowRight,
  CheckCircle2,
  Star,
  Target,
  Mic,
  Play,
} from "lucide-react";

const TITLE = "Videomaker em São Mateus - ES | Vídeos de Alto Impacto";
const DESCRIPTION =
  "Produção de vídeos profissionais para anúncios e posicionamento em São Mateus. Reels, vídeos institucionais e conteúdo que vende — com equipamento próprio e equipe local.";
const PATH = "/videomaker-sao-mateus";

const faqs = [
  {
    q: "Quais tipos de vídeo o Estúdio 2 Marketing produz em São Mateus?",
    a: "O Estúdio 2 Marketing produz reels para Instagram, vídeos de anúncio (Meta Ads), vídeos institucionais, depoimentos de clientes, apresentações de produto ou serviço, e vídeos para eventos e lançamentos. Tudo filmado presencialmente no seu negócio em São Mateus ou região.",
  },
  {
    q: "Vocês vêm filmar no meu estabelecimento?",
    a: "Sim. A equipe do Estúdio 2 Marketing vai presencialmente ao seu negócio em São Mateus e região para capturar as imagens. Não trabalhamos com material enviado por WhatsApp — a qualidade do vídeo começa na captação com equipamento profissional.",
  },
  {
    q: "Que equipamento de filmagem vocês usam?",
    a: "O Estúdio 2 Marketing utiliza câmera mirrorless profissional, microfone lapela e direcional, iluminação LED e estabilizador. Isso garante imagem nítida, áudio limpo e movimento suave — essencial para vídeos de anúncio que competem atenção em menos de 3 segundos.",
  },
  {
    q: "Quanto tempo demora a produção de um vídeo?",
    a: "Da filmagem à entrega final, o processo leva em média 5 a 10 dias úteis. O Estúdio 2 Marketing entrega um rascunho para revisão antes da versão final — você solicita ajustes e aprovamos juntos.",
  },
  {
    q: "Os vídeos são otimizados para anúncios no Instagram?",
    a: "Sim. Os vídeos produzidos pelo Estúdio 2 Marketing seguem os formatos, durações e estruturas que funcionam no Meta Ads: gancho nos primeiros 3 segundos, ritmo de edição adequado e chamada para ação clara no final.",
  },
  {
    q: "Preciso ter roteiro pronto ou o Estúdio 2 Marketing cria?",
    a: "O Estúdio 2 Marketing cria o roteiro para você. Fazemos um briefing sobre o objetivo do vídeo, o público e a mensagem principal — e desenvolvemos o roteiro completo, incluindo falas, cenas e estrutura. Você revisa antes da filmagem.",
  },
  {
    q: "Quantos vídeos recebo por mês no pacote?",
    a: "A quantidade de vídeos depende do plano contratado. Em geral, trabalhamos com 4 a 8 vídeos por mês (reels e stories em vídeo). Para campanhas específicas, produzimos lotes pontuais. O Estúdio 2 Marketing define a frequência ideal na proposta personalizada.",
  },
  {
    q: "Os vídeos podem ser usados em outros canais além do Instagram?",
    a: "Sim. Os vídeos entregues pelo Estúdio 2 Marketing podem ser usados em Meta Ads, WhatsApp, YouTube, site, apresentações e qualquer outro canal que fizer sentido para o seu negócio. A versão bruta (sem edição) também pode ser fornecida mediante combinação.",
  },
  {
    q: "Vocês fazem vídeo para eventos e lançamentos em São Mateus?",
    a: "Sim. O Estúdio 2 Marketing cobre eventos presenciais, inaugurações, lançamentos de produto e datas comemorativas. Entramos em contato para alinhar logística com antecedência — esse tipo de captação costuma ser agendado com pelo menos 1 semana de antecedência.",
  },
  {
    q: "Como o Estúdio 2 Marketing garante que o vídeo vai converter?",
    a: "Nossa base é conversão, não só estética. O roteiro é estruturado para prender atenção, comunicar o diferencial e gerar ação. A edição segue o ritmo certo para o formato. E quando o vídeo vai para anúncio, analisamos a performance e ajustamos criativos nas próximas rodadas — é um processo contínuo de melhoria.",
  },
];

const processo = [
  { icon: PenTool, num: "01", titulo: "Briefing e roteiro", desc: "Entendemos o objetivo, o público e a mensagem. Desenvolvemos o roteiro com gancho, argumento e CTA — aprovado por você antes de gravar." },
  { icon: Camera, num: "02", titulo: "Filmagem presencial", desc: "Nossa equipe vai ao seu negócio em São Mateus com equipamento profissional. Captamos cenas, depoimentos e ambientes com qualidade de produção." },
  { icon: Zap, num: "03", titulo: "Edição e pós-produção", desc: "Edição com ritmo certo para cada formato (reel, anúncio, institucional). Legenda, música, efeitos e gráficos inclusos." },
  { icon: Play, num: "04", titulo: "Revisão e entrega", desc: "Enviamos o rascunho para sua revisão. Ajustamos o necessário e entregamos o arquivo final nos formatos de uso." },
];

const diferenciais = [
  { icon: Camera, titulo: "Equipamento profissional próprio", desc: "Câmera mirrorless, iluminação LED e microfone direcional — sem terceirizar equipamento ou equipe." },
  { icon: Target, titulo: "Foco em conversão", desc: "Cada vídeo é planejado para gerar resultado: clique no anúncio, mensagem no WhatsApp ou visita presencial." },
  { icon: Mic, titulo: "Roteiro criado pela equipe", desc: "Não enviamos uma câmera e esperamos o cliente improvisar. Desenvolvemos o roteiro completo antes de filmar." },
  { icon: Star, titulo: "Agência local em São Mateus", desc: "Equipe baseada em Guriri — presença ágil para filmar no seu negócio, sem logística de outra cidade." },
];

export default function Videomaker() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Videomaker em São Mateus — Produção de Vídeos",
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
          { "@type": "ListItem", position: 2, name: "Videomaker São Mateus", item: `${SITE_URL}${PATH}` },
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
              <BreadcrumbItem><BreadcrumbPage>Videomaker São Mateus</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section aria-labelledby="vm-hero-heading" className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-medium">
            <Film className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
            Produção de Vídeo · São Mateus, ES
          </Badge>
          <h1 id="vm-hero-heading" className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Produção de Vídeos de Alto Impacto{" "}
            <span className="text-primary">em São Mateus</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
            Vídeos profissionais gravados no seu negócio, com equipamento próprio e roteiro focado em conversão. O Estúdio 2 Marketing produz reels e anúncios que prendem atenção e trazem clientes — sem terceirizar.
          </p>
          <ul className="space-y-2.5 mb-8" aria-label="Diferenciais do videomaker">
            {["Filmagem presencial no seu negócio em São Mateus", "Roteiro criado pela nossa equipe — você só revisa", "Vídeos otimizados para anúncios e redes sociais"].map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-white/80 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <Button size="xl" asChild className="text-base font-semibold">
            <a href={waLink("videomaker", "saber mais sobre produção de vídeo")} target="_blank" rel="noopener noreferrer">
              Quero produzir vídeos profissionais <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* Solução */}
      <section aria-labelledby="vm-solucao-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">O que produzimos</Badge>
          <h2 id="vm-solucao-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Do reel ao anúncio — <span className="text-primary">tudo com foco em vender</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              { titulo: "Reels para Instagram", desc: "Conteúdo de vídeo curto com ritmo, gancho e edição que para o scroll e gera engajamento." },
              { titulo: "Vídeos de anúncio (Meta Ads)", desc: "Criativos em vídeo para campanhas pagas — estruturados para converter em 3 a 15 segundos." },
              { titulo: "Vídeo institucional", desc: "Apresentação do seu negócio, equipe e diferenciais — para site, pitch ou WhatsApp." },
              { titulo: "Depoimentos de clientes", desc: "Captamos depoimentos reais que geram prova social e quebram objeções de compra." },
              { titulo: "Produtos e serviços", desc: "Demonstração do que você vende — close de produto, processo de atendimento, resultado do serviço." },
              { titulo: "Eventos e lançamentos", desc: "Cobertura de inaugurações, datas especiais e lançamentos com entrega ágil." },
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
      <section aria-labelledby="vm-processo-heading" className="section-padding bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">Como funciona</Badge>
          <h2 id="vm-processo-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight">
            Do briefing à <span className="text-primary">entrega final em 4 etapas</span>
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
      <section aria-labelledby="vm-dif-heading" className="section-padding bg-foreground text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Por que o Estúdio 2 Marketing</Badge>
          <h2 id="vm-dif-heading" className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight">
            Produção local, resultado <span className="text-primary">de alto padrão</span>
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
      <section aria-labelledby="vm-faq-heading" className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Perguntas frequentes</Badge>
            <h2 id="vm-faq-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Dúvidas sobre <span className="text-primary">produção de vídeo</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">Respondemos as dúvidas mais comuns antes de contratar um videomaker em São Mateus.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`vm-faq-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base">{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center p-6 bg-muted rounded-2xl">
            <p className="font-display font-semibold text-foreground mb-2">Ficou com dúvida?</p>
            <p className="text-sm text-muted-foreground mb-4">Fale com o Estúdio 2 Marketing — respondemos rápido.</p>
            <Button size="lg" asChild>
              <a href={waLink("videomaker-faq", "tirar uma dúvida sobre produção de vídeo")} target="_blank" rel="noopener noreferrer">
                Tirar dúvida no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section aria-labelledby="vm-cta-heading" className="section-padding bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 id="vm-cta-heading" className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            Pronto para ter vídeos que <span className="text-primary">vendem de verdade</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Converse com o Estúdio 2 Marketing. Vamos entender o seu negócio, mostrar os formatos certos e criar um plano de produção que encaixa no seu objetivo.
          </p>
          <Button size="xl" asChild className="text-base font-semibold">
            <a href={waLink("videomaker-cta", "agendar produção de vídeo profissional")} target="_blank" rel="noopener noreferrer">
              Falar sobre produção de vídeo <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
