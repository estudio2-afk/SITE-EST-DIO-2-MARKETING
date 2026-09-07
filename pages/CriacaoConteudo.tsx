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
  PenTool,
  Camera,
  FileText,
  CheckCircle2,
  ArrowRight,
  Layers,
  Users,
  Repeat,
  Star,
} from "lucide-react";

const TITLE =
  "Criação de Conteúdo para Empresas em São Mateus - ES | Estúdio 2 Marketing";
const DESCRIPTION =
  "Fotos, posts, copy e roteiros pensados para o público local de São Mateus. Criação de conteúdo profissional que comunica a identidade da sua empresa e gera vendas.";
const PATH = "/criacao-de-conteudo-sao-mateus";

const faqs = [
  {
    q: "O que inclui o serviço de criação de conteúdo?",
    a: "O serviço do Estúdio 2 Marketing inclui planejamento editorial, produção de fotos e artes para feed e stories, redação de copy (texto) para os posts e roteiros para vídeos e reels. Tudo alinhado à identidade visual e ao tom de voz do seu negócio, aprovado por você antes de publicar.",
  },
  {
    q: "Vocês criam o conteúdo sem eu precisar aparecer?",
    a: "Sim, conseguimos criar conteúdo baseado nos seus produtos, serviços e ambiente sem que o dono precise aparecer em todos os posts. Mas quando faz sentido para o seu negócio — e você se sentir confortável — conteúdo com o rosto do fundador tende a gerar mais conexão com o público local. Decidimos juntos o que faz sentido para o seu momento.",
  },
  {
    q: "Como funciona a aprovação do conteúdo?",
    a: "Antes de qualquer post ir ao ar, você recebe o conteúdo completo — imagem, texto e hora de publicação — para revisar e aprovar. Nada é publicado sem o seu ok. Se precisar de ajuste, a gente refaz. Sem surpresa, sem post que você não gostou.",
  },
  {
    q: "Com que frequência o conteúdo é entregue?",
    a: "Depende do plano contratado. Trabalhamos com entregas semanais planejadas no início do mês. Você recebe o calendário completo para aprovar tudo de uma vez ou post a post — do jeito que for mais prático para a sua rotina.",
  },
  {
    q: "Vocês fazem copy (texto) para os posts também?",
    a: "Sim. O texto dos posts — legenda, chamada e CTA — faz parte do serviço. O Estúdio 2 Marketing escreve com o tom de voz do seu negócio, focado no público local de São Mateus e região. Não é texto genérico copiado de template.",
  },
  {
    q: "Preciso de fotógrafo separado para as fotos?",
    a: "Não. O Estúdio 2 Marketing tem equipe e equipamento próprio para fazer a sessão de fotos presencialmente no seu negócio em São Mateus e região. Uma visita já rende material para semanas de conteúdo — sem custo adicional de fotógrafo terceirizado.",
  },
  {
    q: "O conteúdo criado é exclusivo para o meu negócio?",
    a: "Sim. Todo conteúdo é produzido exclusivamente para o seu negócio — fotos originais do seu ambiente, textos escritos especificamente para sua marca. Não usamos banco de imagens genérico nem texto que serve para qualquer empresa do seu ramo.",
  },
  {
    q: "Vocês criam conteúdo para qual plataforma?",
    a: "Produzimos principalmente para Instagram (feed, reels e stories) e Facebook. Também adaptamos para WhatsApp Business (catálogo e status) e criamos materiais para Google Meu Negócio. Se você precisar de outro formato, conversa conosco.",
  },
  {
    q: "Criação de conteúdo já inclui gestão de redes sociais?",
    a: "Não necessariamente. A criação de conteúdo é um serviço que pode ser contratado separado — você recebe o conteúdo pronto e faz as publicações. Mas o Estúdio 2 Marketing também oferece gestão completa, que inclui criação, publicação, resposta a comentários e métricas. Conversa com a gente para ver o que faz mais sentido.",
  },
  {
    q: "Vocês fazem roteiros para reels e vídeos?",
    a: "Sim. Escrevemos roteiros práticos para reels e vídeos: o que falar, em que ordem, qual a chamada de atenção nos primeiros 3 segundos e qual o CTA no final. O Estúdio 2 Marketing também pode gravar e editar o vídeo com equipamento próprio, se você quiser o pacote completo de produção.",
  },
];

const processo = [
  {
    icon: FileText,
    num: "01",
    titulo: "Briefing e identidade",
    desc: "Reunião para entender seu negócio, público e tom de voz. Definimos o que comunicar, como comunicar e o calendário do mês.",
  },
  {
    icon: Layers,
    num: "02",
    titulo: "Planejamento editorial",
    desc: "Calendário mensal com temas, formatos e datas. Você aprova o mês inteiro antes de qualquer peça ser produzida.",
  },
  {
    icon: Camera,
    num: "03",
    titulo: "Produção e aprovação",
    desc: "Sessão de fotos no seu negócio, criação das artes, redação de copy e roteiros. Tudo vai para aprovação antes de publicar.",
  },
  {
    icon: Repeat,
    num: "04",
    titulo: "Entrega e análise",
    desc: "Conteúdo entregue na frequência combinada. Revisamos métricas mensalmente para ajustar o que gera mais resultado.",
  },
];

const diferenciais = [
  {
    icon: Users,
    titulo: "Conhecemos o público local",
    desc: "Sabemos como o público de São Mateus consome conteúdo. A linguagem, a referência e o ritmo são locais — não de agência grande de capital.",
  },
  {
    icon: Camera,
    titulo: "Produção própria, sem terceirizar",
    desc: "Câmera, iluminação e edição da nossa equipe. Uma visita já rende material para semanas. Sem custo extra de fotógrafo avulso.",
  },
  {
    icon: PenTool,
    titulo: "Copy que comunica e vende",
    desc: "Texto escrito para o seu público. Não é legenda genérica — é copy com intenção: posicionar, atrair e converter.",
  },
  {
    icon: Star,
    titulo: "Zero surpresa, tudo aprovado",
    desc: "Nenhuma imagem, texto ou post vai ao ar sem o seu ok. Você controla a imagem do seu negócio em cada publicação.",
  },
];

export default function CriacaoConteudo() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Criação de Conteúdo para Empresas em São Mateus",
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
          { "@type": "ListItem", position: 2, name: "Criação de Conteúdo São Mateus", item: `${SITE_URL}${PATH}` },
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
            { "@type": "ListItem", position: 2, name: "Criação de Conteúdo", item: `${SITE_URL}${PATH}` },
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
                <BreadcrumbPage>Criação de Conteúdo São Mateus</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section
        aria-labelledby="cc-hero-heading"
        className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-medium">
            <PenTool className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
            Criação de Conteúdo · São Mateus, ES
          </Badge>
          <h1
            id="cc-hero-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Criação de Conteúdo que{" "}
            <span className="text-primary">Comunica e Vende em São Mateus</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
            Fotos, posts, copy e roteiros feitos para o seu público local. O Estúdio 2 Marketing produz
            conteúdo que posiciona sua empresa, gera conexão e transforma seguidores em clientes — com
            equipamento profissional próprio.
          </p>
          <ul className="space-y-2.5 mb-8" aria-label="Diferenciais da criação de conteúdo">
            {[
              "Fotos e artes produzidas pela nossa equipe no seu negócio",
              "Copy (texto) escrito com o tom de voz da sua marca",
              "Você aprova tudo antes de ir ao ar",
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
                href={waLink("criacao-conteudo", "saber mais sobre criação de conteúdo")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero conteúdo que gera resultado{" "}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dor */}
      <section aria-labelledby="cc-dor-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            O problema
          </Badge>
          <h2
            id="cc-dor-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight"
          >
            Você sabe que precisa de conteúdo —{" "}
            <span className="text-primary">mas nunca sobra tempo para produzir</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                titulo: "Conteúdo inconsistente",
                desc: "Semanas sem postar, dias em que a inspiração aparece. O feed reflete instabilidade — e o algoritmo pune.",
              },
              {
                titulo: "Imagens amadoras afastam clientes",
                desc: "Foto tirada com pressa, legenda genérica, sem identidade. O concorrente que investe em conteúdo parece maior mesmo sendo menor.",
              },
              {
                titulo: "Não sabe o que postar",
                desc: "O negócio é bom. O serviço é ótimo. Mas na hora de traduzir isso em post, trava. Conteúdo sem estratégia não converte.",
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
      <section aria-labelledby="cc-solucao-heading" className="section-padding bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            A solução
          </Badge>
          <h2
            id="cc-solucao-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight"
          >
            Conteúdo planejado, produzido e{" "}
            <span className="text-primary">entregue pronto para publicar</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
            O Estúdio 2 Marketing tira o peso da produção de conteúdo do seu dia. A gente planeja,
            fotografia, escreve e entrega tudo aprovado por você — para você focar no que realmente faz:
            tocar o negócio.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                titulo: "Fotos profissionais no seu negócio",
                desc: "Equipe vai até você com equipamento próprio. Uma visita gera material para semanas de conteúdo.",
              },
              {
                titulo: "Artes e posts para feed e stories",
                desc: "Design alinhado à identidade visual da sua marca — não é template genérico, é conteúdo da sua empresa.",
              },
              {
                titulo: "Copy com tom de voz da sua marca",
                desc: "Legenda, CTA e texto pensados para o seu público local — diretos, humanos e com intenção de vender.",
              },
              {
                titulo: "Roteiros para reels e vídeos",
                desc: "Não é só apertar o botão de gravar. Roteiro com gancho nos 3 primeiros segundos e CTA no final que converte.",
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
      <section aria-labelledby="cc-processo-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            Como funciona
          </Badge>
          <h2
            id="cc-processo-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight"
          >
            Do briefing ao conteúdo pronto em{" "}
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
      <section aria-labelledby="cc-dif-heading" className="section-padding bg-foreground text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Por que o Estúdio 2 Marketing
          </Badge>
          <h2
            id="cc-dif-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight"
          >
            Conteúdo feito por quem{" "}
            <span className="text-primary">conhece São Mateus</span>
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
      <section aria-labelledby="cc-faq-heading" className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Perguntas frequentes
            </Badge>
            <h2
              id="cc-faq-heading"
              className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
            >
              Dúvidas sobre{" "}
              <span className="text-primary">criação de conteúdo</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Respondemos as dúvidas mais comuns de donos de negócios antes de contratar produção de conteúdo.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`cc-faq-${i}`}>
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
                href={waLink("criacao-conteudo-faq", "tirar uma dúvida sobre criação de conteúdo")}
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
        aria-labelledby="cc-cta-heading"
        className="section-padding bg-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2
            id="cc-cta-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight"
          >
            Seu negócio merece conteúdo que{" "}
            <span className="text-primary">conta a sua história</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Fale com o Estúdio 2 Marketing. Em 30 minutos entendemos o seu negócio e mostramos como
            criar conteúdo que posiciona, atrai e converte em São Mateus.
          </p>
          <Button size="xl" asChild className="text-base font-semibold">
            <a
              href={waLink("criacao-conteudo-cta", "conversar sobre criação de conteúdo")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero criar conteúdo que vende{" "}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-4 text-white/40 text-xs">
            Sem compromisso. Conversa de 30 min gratuita por WhatsApp ou presencial.
          </p>
        </div>
      </section>

      <LocationSection />
      <WhatsAppFloat />
    </main>
  );
}
