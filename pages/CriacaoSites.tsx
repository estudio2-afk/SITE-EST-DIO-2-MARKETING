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
  Globe,
  Search,
  Zap,
  FileText,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Lock,
  BarChart3,
} from "lucide-react";

const TITLE =
  "Criação de Sites e Landing Pages em São Mateus - ES | Estúdio 2 Marketing";
const DESCRIPTION =
  "Sites rápidos, otimizados para o Google e pensados para gerar contato. Criação de sites e landing pages para negócios em São Mateus e região — ES.";
const PATH = "/criacao-de-sites-sao-mateus";

const faqs = [
  {
    q: "Qual a diferença entre site e landing page?",
    a: "Um site tem várias páginas (home, sobre, serviços, contato) e serve para apresentar a empresa de forma completa. Uma landing page é uma única página focada em uma ação específica: agendar, pedir orçamento, baixar algo ou comprar. O Estúdio 2 Marketing avalia qual formato faz mais sentido para o seu objetivo antes de começar o projeto.",
  },
  {
    q: "O site que vocês criam é otimizado para celular?",
    a: "Sim. Todos os sites e landing pages criados pelo Estúdio 2 Marketing são 100% responsivos — se adaptam automaticamente a qualquer tamanho de tela, do celular ao desktop. Hoje mais de 70% do tráfego de negócios locais vem do celular, então isso não é opcional: é obrigatório.",
  },
  {
    q: "Quanto tempo leva para criar um site?",
    a: "Para uma landing page focada, de 7 a 14 dias. Para um site completo com várias páginas e blog, de 3 a 6 semanas. O prazo depende da agilidade nas aprovações e da quantidade de conteúdo a produzir. O Estúdio 2 Marketing define o cronograma no início do projeto para você saber o que esperar.",
  },
  {
    q: "O site fica hospedado onde?",
    a: "O Estúdio 2 Marketing faz a hospedagem e garante que o site fique no ar com boa velocidade. Usamos servidores modernos com certificado SSL (cadeado verde) incluído. Você não precisa se preocupar com contratação de hospedagem — cuidamos de tudo isso.",
  },
  {
    q: "Vocês fazem a manutenção do site depois de pronto?",
    a: "Sim. Oferecemos suporte e manutenção mensal para garantir que o site continue rápido, seguro e atualizado. Atualizações de conteúdo simples (texto, fotos, horários) também estão incluídas. Você nos chama pelo WhatsApp e resolvemos.",
  },
  {
    q: "O site vem com SEO incluído?",
    a: "Sim. O SEO básico está incluído: títulos otimizados, meta descrições, dados estruturados (Schema.org), sitemap, velocidade de carregamento e integração com o Google Search Console. Para uma estratégia de SEO contínua e conteúdo para rankear no Google, o Estúdio 2 Marketing oferece um serviço separado de tráfego orgânico.",
  },
  {
    q: "Posso atualizar o site depois sozinho?",
    a: "Depende do tipo de site. Para sites com painel de administração (CMS), você consegue atualizar textos e imagens sem precisar de código. Para sites de performance máxima (como os que o Estúdio 2 Marketing cria), alterações são feitas pela nossa equipe — mas respondemos rápido e o custo é simples.",
  },
  {
    q: "Vocês integram o site com WhatsApp?",
    a: "Sim. Todos os sites do Estúdio 2 Marketing já vêm com botão de WhatsApp integrado — botão flutuante e CTAs direcionando para o seu número com mensagem pré-preenchida. É uma das formas mais eficazes de converter visitante em lead para negócios locais.",
  },
  {
    q: "O site inclui blog?",
    a: "Sim, se você quiser. O Estúdio 2 Marketing pode incluir um blog no site, com estrutura de SEO preparada para artigos que rankeiam no Google. Para negócios que querem construir autoridade no segmento e atrair tráfego orgânico, o blog é um dos melhores investimentos de longo prazo.",
  },
  {
    q: "Preciso ter domínio próprio?",
    a: "Recomendamos fortemente ter um domínio próprio (ex: seunegocio.com.br). O Estúdio 2 Marketing pode ajudar com o registro e configuração do domínio. Um domínio próprio transmite credibilidade, facilita o Google Meu Negócio e é seu mesmo que você troque de agência no futuro.",
  },
];

const processo = [
  {
    icon: FileText,
    num: "01",
    titulo: "Briefing e planejamento",
    desc: "Reunião para entender o negócio, o público e o objetivo principal do site. Definimos estrutura, seções e CTA antes de uma linha de código.",
  },
  {
    icon: Globe,
    num: "02",
    titulo: "Design e desenvolvimento",
    desc: "Criamos o design e desenvolvemos o site com foco em velocidade, clareza e conversão. Você aprova cada etapa antes de avançar.",
  },
  {
    icon: Search,
    num: "03",
    titulo: "SEO e performance",
    desc: "SEO técnico aplicado desde o início: titles, metas, Schema.org, velocidade e integração com Google Search Console.",
  },
  {
    icon: Zap,
    num: "04",
    titulo: "Publicação e entrega",
    desc: "Site no ar com domínio, certificado SSL e hospedagem configurados. Treinamento básico para você entender o que tem no ar.",
  },
];

const diferenciais = [
  {
    icon: BarChart3,
    titulo: "Site feito para gerar contato",
    desc: "Não é cartão de visita digital. É uma máquina de gerar lead: CTA claro, WhatsApp integrado, formulário funcional.",
  },
  {
    icon: Search,
    titulo: "SEO integrado desde o início",
    desc: "Não adicionamos SEO como afterthought. A estrutura, os títulos e os dados estruturados são planejados antes da primeira linha.",
  },
  {
    icon: Smartphone,
    titulo: "Velocidade e performance",
    desc: "Sites rápidos rankeiam melhor no Google e convertem mais. Otimizamos imagens, código e carregamento para máxima performance.",
  },
  {
    icon: Lock,
    titulo: "Entrega sem surpresa",
    desc: "Orçamento fechado, prazo definido, você aprova cada etapa. Sem custo extra surpresa no meio do projeto.",
  },
];

export default function CriacaoSites() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Criação de Sites e Landing Pages em São Mateus",
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
          { "@type": "ListItem", position: 2, name: "Criação de Sites São Mateus", item: `${SITE_URL}${PATH}` },
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
            { "@type": "ListItem", position: 2, name: "Criação de Sites", item: `${SITE_URL}${PATH}` },
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
                <BreadcrumbPage>Criação de Sites São Mateus</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section
        aria-labelledby="cs-hero-heading"
        className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-medium">
            <Globe className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
            Sites e Landing Pages · São Mateus, ES
          </Badge>
          <h1
            id="cs-hero-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Sites e Landing Pages que{" "}
            <span className="text-primary">Geram Clientes em São Mateus</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
            Não é cartão de visita digital. É uma máquina de gerar contato. O Estúdio 2 Marketing
            cria sites rápidos, otimizados para o Google e pensados para converter visitante em cliente
            — desde a primeira linha de código.
          </p>
          <ul className="space-y-2.5 mb-8" aria-label="Diferenciais da criação de sites">
            {[
              "Sites rápidos e responsivos para celular e desktop",
              "SEO integrado desde o início do projeto",
              "Botão de WhatsApp e CTAs de conversão incluídos",
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
                href={waLink("criacao-sites", "saber mais sobre criação de site")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero um site que gera cliente{" "}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dor */}
      <section aria-labelledby="cs-dor-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            O problema
          </Badge>
          <h2
            id="cs-dor-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight"
          >
            Seu negócio não aparece no Google —{" "}
            <span className="text-primary">e o link do Instagram não resolve</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                titulo: "Sem presença no Google",
                desc: "Sem site, você não aparece nas buscas. Quem não é visto no Google, para o cliente novo que pesquisa, não existe.",
              },
              {
                titulo: "Site lento espanta cliente",
                desc: "Site que demora para carregar perde visitante antes de apresentar sua empresa. Google também penaliza sites lentos no ranqueamento.",
              },
              {
                titulo: "Sem CTA claro, sem contato",
                desc: "Um site bonito que não tem botão de WhatsApp, formulário ou CTA direto é um desperdício. Visitante entra e sai sem fazer nada.",
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
      <section aria-labelledby="cs-solucao-heading" className="section-padding bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            A solução
          </Badge>
          <h2
            id="cs-solucao-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight"
          >
            Site criado para{" "}
            <span className="text-primary">aparecer no Google e converter visitante</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
            O Estúdio 2 Marketing desenvolve sites com foco em três pilares: velocidade (carregamento
            rápido no celular), SEO (aparecer no Google) e conversão (visitante vira lead pelo
            WhatsApp ou formulário).
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Design responsivo e moderno",
                desc: "Funciona em qualquer tela — do iPhone ao notebook. Identidade visual alinhada ao seu negócio e aprovada por você.",
              },
              {
                titulo: "SEO técnico incluído",
                desc: "Títulos, meta descrições, Schema.org, sitemap, velocidade e Google Search Console configurados desde o início.",
              },
              {
                titulo: "Botão de WhatsApp e CTAs",
                desc: "Cada página tem um próximo passo claro para o visitante: agendar, pedir orçamento ou falar no WhatsApp.",
              },
              {
                titulo: "Hospedagem e domínio",
                desc: "Cuidamos de tudo: certificado SSL, hospedagem de qualidade e configuração de domínio. Você não precisa entender de servidor.",
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
      <section aria-labelledby="cs-processo-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            Como funciona
          </Badge>
          <h2
            id="cs-processo-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight"
          >
            Do briefing ao site no ar em{" "}
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
      <section aria-labelledby="cs-dif-heading" className="section-padding bg-foreground text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Por que o Estúdio 2 Marketing
          </Badge>
          <h2
            id="cs-dif-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight"
          >
            Sites que trabalham por você{" "}
            <span className="text-primary">enquanto você toca o negócio</span>
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
      <section aria-labelledby="cs-faq-heading" className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Perguntas frequentes
            </Badge>
            <h2
              id="cs-faq-heading"
              className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
            >
              Dúvidas sobre{" "}
              <span className="text-primary">criação de sites</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Respondemos as perguntas mais comuns de donos de negócios antes de criar um site.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`cs-faq-${i}`}>
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
                href={waLink("criacao-sites-faq", "tirar uma dúvida sobre criação de site")}
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
        aria-labelledby="cs-cta-heading"
        className="section-padding bg-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2
            id="cs-cta-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight"
          >
            Seu negócio precisa de um site que{" "}
            <span className="text-primary">gera cliente de verdade</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Fale com o Estúdio 2 Marketing. Em 30 minutos, mostramos como um site bem construído pode
            se tornar o melhor vendedor do seu negócio em São Mateus.
          </p>
          <Button size="xl" asChild className="text-base font-semibold">
            <a
              href={waLink("criacao-sites-cta", "solicitar orçamento de site")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento de site{" "}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-4 text-white/40 text-xs">
            Sem compromisso. Orçamento gratuito por WhatsApp ou presencial.
          </p>
        </div>
      </section>

      <LocationSection />
      <WhatsAppFloat />
    </main>
  );
}
