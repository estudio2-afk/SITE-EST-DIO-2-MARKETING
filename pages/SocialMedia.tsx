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
  Share2,
  Calendar,
  Camera,
  BarChart2,
  ArrowRight,
  CheckCircle2,
  PenTool,
  Repeat,
  Star,
  Users,
} from "lucide-react";

const TITLE = "Social Media Estratégico em São Mateus - ES | Posicionamento";
const DESCRIPTION =
  "Transforme o Instagram da sua empresa em uma máquina de vendas. Social media estratégico em São Mateus para negócios que querem autoridade e previsibilidade — sem postar aleatoriamente.";
const PATH = "/social-media-sao-mateus";

const faqs = [
  {
    q: "O que está incluso na gestão de social media do Estúdio 2 Marketing?",
    a: "A gestão de social media do Estúdio 2 Marketing inclui: estratégia editorial mensal, produção de posts (artes e copy), criação e edição de reels, organização de stories, resposta a comentários e DMs relevantes, e relatório mensal de resultados. Tudo alinhado com a identidade visual e o posicionamento do seu negócio.",
  },
  {
    q: "Com que frequência publicam no meu perfil?",
    a: "A frequência é definida na proposta com base no seu segmento e objetivo. Em geral, trabalhamos com 4 a 5 posts por semana no feed mais stories diários. O Estúdio 2 Marketing cria um calendário editorial aprovado por você antes de qualquer publicação.",
  },
  {
    q: "Quem aprova o conteúdo antes de publicar?",
    a: "Você aprova tudo. O Estúdio 2 Marketing envia os conteúdos com antecedência para você revisar e dar ok. Nada vai ao ar sem a sua aprovação — você mantém total controle sobre o que sua marca publica.",
  },
  {
    q: "O Estúdio 2 Marketing gerencia Instagram e Facebook?",
    a: "Sim. Gerenciamos Instagram e Facebook como pacote integrado. Adaptamos o conteúdo para o formato e comportamento de cada rede, garantindo presença consistente onde o seu público está.",
  },
  {
    q: "Preciso aparecer nos vídeos e reels?",
    a: "Para stories de bastidores e humanização da marca, sim — mas o Estúdio 2 Marketing orienta você sobre o que dizer e como aparecer de forma natural. Para reels de produto, local e serviço, nossa equipe vai presencialmente e produz com equipamento próprio.",
  },
  {
    q: "Vocês criam a identidade visual do meu negócio?",
    a: "Se o seu negócio ainda não tem uma identidade visual definida, o Estúdio 2 Marketing pode desenvolvê-la como parte do plano de social media, garantindo que posts, stories e reels tenham um visual profissional e consistente que posiciona a marca.",
  },
  {
    q: "Como diferenciam o conteúdo da concorrência local?",
    a: "O Estúdio 2 Marketing faz um mapeamento da concorrência em São Mateus antes de criar a linha editorial. Identificamos o que os concorrentes comunicam e como posicionamos a sua marca de forma distinta — com ângulo único, linguagem própria e diferenciais reais do seu negócio.",
  },
  {
    q: "Quanto tempo para ver crescimento no Instagram?",
    a: "Os primeiros sinais de engajamento (mais comentários, saves, DMs) costumam aparecer em 30 a 45 dias com estratégia consistente. Crescimento de seguidores qualificados e clientes vindos das redes se consolida entre 90 e 180 dias — por isso o contrato mínimo do Estúdio 2 Marketing é de 6 meses.",
  },
  {
    q: "Posso contratar só social media sem tráfego pago?",
    a: "Sim. O Estúdio 2 Marketing oferece gestão de social media de forma independente. O crescimento orgânico é mais lento, mas sólido. Para resultados mais rápidos, recomendamos combinar social media com tráfego pago — mas a decisão é sempre sua.",
  },
  {
    q: "Como o Estúdio 2 Marketing mede o resultado do social media?",
    a: "Acompanhamos métricas que importam: alcance real, engajamento, crescimento de seguidores qualificados, cliques no link da bio, mensagens vindas de posts e conversões em clientes. Mensalmente você recebe um relatório com esses dados e uma análise sobre o que ajustar na estratégia.",
  },
];

const processo = [
  { icon: PenTool, num: "01", titulo: "Diagnóstico do perfil atual", desc: "Analisamos o Instagram atual, o posicionamento da marca e a concorrência local em São Mateus para identificar oportunidades." },
  { icon: Calendar, num: "02", titulo: "Estratégia e calendário editorial", desc: "Definimos a linha de conteúdo, frequência de publicação e calendário mensal — tudo aprovado por você antes de começar." },
  { icon: Camera, num: "03", titulo: "Produção de conteúdo", desc: "Nossa equipe vai ao seu negócio para capturar fotos e vídeos. Criamos posts, reels e artes com identidade visual consistente." },
  { icon: BarChart2, num: "04", titulo: "Publicação, análise e ajuste", desc: "Publicamos no horário certo, monitoramos engajamento e ajustamos a estratégia mensalmente com base nos dados reais." },
];

const diferenciais = [
  { icon: Camera, titulo: "Produção própria no seu local", desc: "Equipe de foto e vídeo vai presencialmente ao seu negócio. Conteúdo real, sem banco de imagens genérico." },
  { icon: Users, titulo: "Conhecemos São Mateus", desc: "Entendemos a cultura, as datas locais e o comportamento do público da cidade — isso muda o conteúdo e o resultado." },
  { icon: Star, titulo: "Você aprova tudo", desc: "Zero surpresas. Cada post, reel e arte é revisado por você antes de publicar." },
  { icon: Repeat, titulo: "Estratégia, não improviso", desc: "Calendário editorial definido com antecedência. Consistência é o que gera posicionamento de marca de verdade." },
];

export default function SocialMedia() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Social Media Estratégico em São Mateus",
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
          { "@type": "ListItem", position: 2, name: "Social Media São Mateus", item: `${SITE_URL}${PATH}` },
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
              <BreadcrumbItem><BreadcrumbPage>Social Media São Mateus</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section aria-labelledby="sm-hero-heading" className="relative min-h-[80vh] flex items-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-medium">
            <Share2 className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
            Social Media · São Mateus, ES
          </Badge>
          <h1 id="sm-hero-heading" className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Social Media Estratégico para{" "}
            <span className="text-primary">Empresas em São Mateus</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
            Postar por postar não gera cliente. O Estúdio 2 Marketing cria conteúdo estratégico que posiciona sua marca, constrói autoridade e transforma o Instagram em um canal previsível de novos clientes.
          </p>
          <ul className="space-y-2.5 mb-8" aria-label="Diferenciais do social media">
            {["Calendário editorial aprovado por você todo mês", "Produção própria — nossa equipe vai ao seu negócio", "Linha editorial que diferencia da concorrência local"].map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-white/80 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <Button size="xl" asChild className="text-base font-semibold">
            <a href={waLink("social-media", "saber mais sobre gestão de redes sociais")} target="_blank" rel="noopener noreferrer">
              Quero um perfil que vende <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* Dor */}
      <section aria-labelledby="sm-dor-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">O problema</Badge>
          <h2 id="sm-dor-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Postar sem estratégia é{" "}
            <span className="text-primary">trabalho sem resultado</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { titulo: "Sem calendário editorial", desc: "Posta quando lembra, sem planejamento. O algoritmo penaliza perfis sem consistência." },
              { titulo: "Conteúdo genérico", desc: "Posts que poderiam ser de qualquer empresa. Sem personalidade, sem diferenciação, sem lembrança de marca." },
              { titulo: "Sem conversão", desc: "Seguidores que não viram clientes. Engajamento que não se transforma em vendas ou contatos." },
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
      <section aria-labelledby="sm-solucao-heading" className="section-padding bg-muted">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">A solução</Badge>
          <h2 id="sm-solucao-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Conteúdo que <span className="text-primary">posiciona e converte</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl">
            O Estúdio 2 Marketing cria uma estratégia de social media completa para o seu negócio em São Mateus: linha editorial clara, conteúdo produzido presencialmente no seu local e análise mensal de resultado.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: "Estratégia editorial personalizada", desc: "Linha de conteúdo definida com base no seu público, concorrência local e objetivos de negócio." },
              { titulo: "Produção de reels e posts", desc: "Nossa equipe vai ao seu negócio produzir fotos e vídeos com equipamento profissional." },
              { titulo: "Identidade visual consistente", desc: "Posts com design padronizado que gera reconhecimento e profissionalismo de marca." },
              { titulo: "Gestão de Instagram e Facebook", desc: "Publicação nos horários certos, resposta a comentários relevantes e monitoramento de métricas." },
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
      <section aria-labelledby="sm-processo-heading" className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">Como funciona</Badge>
          <h2 id="sm-processo-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight">
            Do diagnóstico ao <span className="text-primary">perfil que vende</span>
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
      <section aria-labelledby="sm-dif-heading" className="section-padding bg-foreground text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Por que o Estúdio 2 Marketing</Badge>
          <h2 id="sm-dif-heading" className="font-display font-bold text-3xl md:text-4xl text-white mb-12 leading-tight">
            Social media feito por quem <span className="text-primary">conhece sua cidade</span>
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
      <section aria-labelledby="sm-faq-heading" className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Perguntas frequentes</Badge>
            <h2 id="sm-faq-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              Dúvidas sobre <span className="text-primary">social media</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">Tudo que você precisa saber antes de contratar gestão de redes sociais para o seu negócio em São Mateus.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`sm-faq-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base">{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center p-6 bg-muted rounded-2xl">
            <p className="font-display font-semibold text-foreground mb-2">Ainda tem dúvida?</p>
            <p className="text-sm text-muted-foreground mb-4">Fale direto com o Estúdio 2 Marketing — respondemos rápido.</p>
            <Button size="lg" asChild>
              <a href={waLink("social-media-faq", "tirar uma dúvida sobre social media")} target="_blank" rel="noopener noreferrer">
                Tirar dúvida no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section aria-labelledby="sm-cta-heading" className="section-padding bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 id="sm-cta-heading" className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            Transforme seu Instagram em um canal <span className="text-primary">que gera cliente</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Converse com o Estúdio 2 Marketing. Em 30 minutos, analisamos seu perfil atual e mostramos como uma estratégia de social media pode trazer previsibilidade para o seu negócio em São Mateus.
          </p>
          <Button size="xl" asChild className="text-base font-semibold">
            <a href={waLink("social-media-cta", "agendar diagnóstico gratuito de social media")} target="_blank" rel="noopener noreferrer">
              Quero diagnóstico gratuito <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
