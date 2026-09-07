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
  TrendingUp,
  Search,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Repeat,
  Globe,
} from "lucide-react";

const TITLE =
  "Tráfego Orgânico e SEO em São Mateus - ES | Estúdio 2 Marketing";
const DESCRIPTION =
  "Apareça no Google e nas redes sem depender só de anúncio. Estratégia de tráfego orgânico e SEO para negócios locais em São Mateus e região — ES.";
const PATH = "/trafego-organico-sao-mateus";

const faqs = [
  {
    q: "O que é tráfego orgânico?",
    a: "Tráfego orgânico são as visitas que seu site, perfil ou negócio recebe sem pagar por anúncio. Quando alguém pesquisa no Google 'dentista em São Mateus' e encontra você, isso é tráfego orgânico. O Estúdio 2 Marketing trabalha para que seu negócio apareça nessas buscas de forma consistente e crescente.",
  },
  {
    q: "Qual a diferença entre tráfego orgânico e tráfego pago?",
    a: "Tráfego pago (Meta Ads) gera resultado enquanto você está investindo — para o investimento, para o resultado. Tráfego orgânico (SEO e conteúdo) demora mais para aparecer, mas continua trazendo visitas mesmo depois que o trabalho inicial foi feito. O Estúdio 2 Marketing recomenda combinar os dois para resultado de curto e longo prazo.",
  },
  {
    q: "Quanto tempo leva para aparecer no Google?",
    a: "O SEO é um trabalho de médio e longo prazo. Os primeiros resultados — mais visitas, aparecendo para novas pesquisas — costumam aparecer entre 60 e 120 dias. Posições mais fortes no Google para termos competitivos levam de 4 a 12 meses. O Estúdio 2 Marketing monitora o progresso mensalmente e ajusta a estratégia.",
  },
  {
    q: "SEO é só para sites ou também serve para redes sociais?",
    a: "SEO clássico é para sites e Google. Mas as redes sociais têm o próprio mecanismo de descoberta: o Instagram funciona como motor de busca para o público local. O Estúdio 2 Marketing trabalha tanto o SEO do site quanto a otimização do perfil nas redes para que seu negócio apareça quando o público pesquisa pelo segmento.",
  },
  {
    q: "Vocês fazem SEO local (Google Meu Negócio)?",
    a: "Sim. O Google Meu Negócio (Google Business Profile) é um dos pilares do tráfego orgânico para negócios locais. O Estúdio 2 Marketing otimiza sua ficha — fotos, categoria, horários, avaliações, posts — para que você apareça no Google Maps e no resultado local quando alguém pesquisa pelo seu tipo de negócio em São Mateus.",
  },
  {
    q: "Preciso ter site para trabalhar SEO?",
    a: "Para SEO no Google Search, sim — você precisa de um site. O Estúdio 2 Marketing pode criar o site junto com a estratégia de SEO para que tudo funcione de forma integrada desde o início. Para aparecer no Google Maps e em buscas locais, o Google Meu Negócio já ajuda mesmo sem site.",
  },
  {
    q: "Como vocês medem o resultado do tráfego orgânico?",
    a: "Monitoramos impressões no Google, cliques, posição média das palavras-chave e tráfego no site via Google Search Console e Analytics. Mensalmente o Estúdio 2 Marketing apresenta um relatório claro com o que melhorou, o que ainda está sendo trabalhado e o próximo passo da estratégia.",
  },
  {
    q: "Tráfego orgânico funciona para negócios pequenos em São Mateus?",
    a: "Sim — e funciona especialmente bem para negócios locais. Um salão de beleza, clínica, escritório ou loja em São Mateus concorre com muito menos empresas no Google do que uma empresa nacional. Isso significa que é mais fácil aparecer nas primeiras posições para buscas locais do que parece à primeira vista.",
  },
  {
    q: "Com que frequência o trabalho de SEO é feito?",
    a: "SEO é um trabalho contínuo, não pontual. O Estúdio 2 Marketing faz otimizações mensais no site, produz conteúdo estratégico, acompanha as mudanças do algoritmo do Google e ajusta a estratégia conforme os dados. Um trabalho feito uma vez e abandonado perde posição para concorrentes que continuam investindo.",
  },
  {
    q: "Tráfego orgânico substitui o tráfego pago?",
    a: "A longo prazo, um bom SEO reduz a dependência de anúncio. Mas no curto prazo eles se complementam: tráfego pago traz resultado imediato enquanto o orgânico está sendo construído. O Estúdio 2 Marketing avalia o momento do seu negócio para recomendar o mix ideal entre os dois.",
  },
];

const processo = [
  {
    icon: Search,
    num: "01",
    titulo: "Auditoria e diagnóstico",
    desc: "Analisamos seu site, perfis e presença no Google. Identificamos o que está faltando e as oportunidades de ranqueamento local.",
  },
  {
    icon: Globe,
    num: "02",
    titulo: "Otimização técnica e on-page",
    desc: "Ajustamos velocidade do site, estrutura de URLs, títulos, meta descrições, Google Meu Negócio e dados estruturados.",
  },
  {
    icon: FileText,
    num: "03",
    titulo: "Conteúdo estratégico",
    desc: "Criamos conteúdo (posts, páginas, artigos) voltado para as buscas que seu público faz no Google — em São Mateus e região.",
  },
  {
    icon: BarChart3,
    num: "04",
    titulo: "Monitoramento e ajustes",
    desc: "Relatório mensal com posições, cliques e tráfego. Ajustamos a estratégia conforme os dados e as mudanças de algoritmo.",
  },
];

const diferenciais = [
  {
    icon: MapPin,
    titulo: "SEO focado em São Mateus",
    desc: "Otimizamos para buscas locais — quem procura pelo seu serviço na sua cidade. Não é SEO genérico, é estratégia local.",
  },
  {
    icon: TrendingUp,
    titulo: "Resultado que permanece",
    desc: "Diferente do anúncio, o SEO continua gerando tráfego depois que o trabalho inicial é feito. Investimento que se acumula.",
  },
  {
    icon: FileText,
    titulo: "Conteúdo que educa e converte",
    desc: "Artigos e páginas que tiram dúvidas do cliente antes de ele chegar até você — qualificando o lead desde a busca.",
  },
  {
    icon: Repeat,
    titulo: "Transparência nos números",
    desc: "Relatório mensal com posições reais no Google, tráfego e cliques. Você vê o progresso, não só a promessa.",
  },
];

export default function TrafegoOrganico() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Tráfego Orgânico e SEO em São Mateus",
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
          { "@type": "ListItem", position: 2, name: "Tráfego Orgânico São Mateus", item: `${SITE_URL}${PATH}` },
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
            { "@type": "ListItem", position: 2, name: "Tráfego Orgânico", item: `${SITE_URL}${PATH}` },
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

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border py-2 px-4">
        <div className="container max-w-6xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Tráfego Orgânico São Mateus</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section
        aria-labelledby="to-hero-heading"
        className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-medium">
            <TrendingUp className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
            Tráfego Orgânico · São Mateus, ES
          </Badge>
          <h1
            id="to-hero-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Tráfego Orgânico (SEO) para{" "}
            <span className="text-primary">Empresas em São Mateus</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
            Apareça no Google quando seu cliente está procurando o que você oferece — sem depender só
            de anúncio. O Estúdio 2 Marketing constrói presença orgânica que continua rendendo no
            longo prazo.
          </p>
          <ul className="space-y-2.5 mb-8" aria-label="Diferenciais do tráfego orgânico">
            {[
              "SEO local focado em buscas em São Mateus e região",
              "Otimização do Google Meu Negócio e do site",
              "Resultado que continua crescendo no longo prazo",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-white/80 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="xl" asChild className="text-base font-semibold">
              <a
                href={waLink("trafego-organico", "saber mais sobre tráfego orgânico e SEO")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero aparecer no Google{" "}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dor */}
      <section aria-labelledby="to-dor-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            O problema
          </Badge>
          <h2
            id="to-dor-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight"
          >
            Seu concorrente aparece no Google.{" "}
            <span className="text-primary">Você, ainda não</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                titulo: "Invisível na busca",
                desc: "Quando alguém pesquisa pelo seu serviço em São Mateus, você não aparece — mas o concorrente sim. Cada busca sem resposta é um cliente perdido.",
              },
              {
                titulo: "Dependência total de anúncio",
                desc: "Quando o anúncio para, o fluxo para. Negócio saudável precisa de fontes de cliente que não dependem de verba mensal.",
              },
              {
                titulo: "Google Meu Negócio abandonado",
                desc: "Ficha desatualizada, sem fotos, sem responder avaliações. Um perfil descuidado afasta cliente antes mesmo de chegar até você.",
              },
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
      <section aria-labelledby="to-solucao-heading" className="section-padding bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            A solução
          </Badge>
          <h2
            id="to-solucao-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight"
          >
            SEO local que coloca você nas{" "}
            <span className="text-primary">primeiras posições do Google</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
            O Estúdio 2 Marketing trabalha tráfego orgânico como estratégia de longo prazo: otimização
            técnica do site, Google Meu Negócio, conteúdo para buscas locais e monitoramento mensal
            de resultados.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Otimização do Google Meu Negócio",
                desc: "Ficha completa, atualizada e otimizada para aparecer no Google Maps e nas buscas locais de São Mateus.",
              },
              {
                titulo: "SEO técnico e on-page do site",
                desc: "Velocidade, estrutura de URLs, títulos, meta descrições e dados estruturados — tudo ajustado para o algoritmo do Google.",
              },
              {
                titulo: "Conteúdo estratégico para buscas locais",
                desc: "Artigos e páginas escritos para os termos que seu público pesquisa — posicionando seu negócio como referência na região.",
              },
              {
                titulo: "Monitoramento e relatório mensal",
                desc: "Google Search Console e Analytics configurados. Você vê posições, cliques e tráfego crescendo mês a mês.",
              },
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
      <section aria-labelledby="to-processo-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            Como funciona
          </Badge>
          <h2
            id="to-processo-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight"
          >
            Construindo presença orgânica em{" "}
            <span className="text-primary">4 etapas</span>
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
      <section aria-labelledby="to-dif-heading" className="section-padding bg-foreground text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Por que o Estúdio 2 Marketing
          </Badge>
          <h2
            id="to-dif-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight"
          >
            SEO que entende o{" "}
            <span className="text-primary">mercado local</span>
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
      <section aria-labelledby="to-faq-heading" className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Perguntas frequentes
            </Badge>
            <h2
              id="to-faq-heading"
              className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
            >
              Dúvidas sobre{" "}
              <span className="text-primary">tráfego orgânico</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Respondemos as perguntas mais comuns sobre SEO e tráfego orgânico para negócios locais.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`to-faq-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center p-6 bg-muted rounded-2xl">
            <p className="font-display font-semibold text-foreground mb-2">Ficou com alguma dúvida?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Chame no WhatsApp — respondemos rápido e sem compromisso.
            </p>
            <Button size="lg" asChild>
              <a
                href={waLink("trafego-organico-faq", "tirar uma dúvida sobre tráfego orgânico")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tirar dúvida no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        aria-labelledby="to-cta-heading"
        className="section-padding bg-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2
            id="to-cta-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight"
          >
            Pronto para aparecer no Google{" "}
            <span className="text-primary">sem depender só de anúncio</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Fale com o Estúdio 2 Marketing. Em 30 minutos, analisamos sua presença atual no Google e
            mostramos o que é possível construir com SEO local em São Mateus.
          </p>
          <Button size="xl" asChild className="text-base font-semibold">
            <a
              href={waLink("trafego-organico-cta", "conversar sobre tráfego orgânico e SEO")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero aparecer no Google{" "}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-4 text-white/40 text-xs">
            Sem compromisso. Diagnóstico gratuito de 30 min por WhatsApp ou presencial.
          </p>
        </div>
      </section>

      <LocationSection />
      <WhatsAppFloat />
    </main>
  );
}
