import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { setSEO, SITE_URL, OG_IMAGE, injectSchema } from "@/lib/seo";
import { waLink } from "@/lib/contact";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const SLUG = "social-media-estrategico-sao-mateus";
const TITLE = "Social Media para Empresas em São Mateus: como criar autoridade | Estúdio 2 Marketing";
const DESCRIPTION =
  "Postar todo dia sem estratégia não gera cliente. Veja como construir posicionamento real no Instagram para empresas de São Mateus com social media estratégico do Estúdio 2 Marketing.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Quantas vezes por semana uma empresa de São Mateus precisa postar no Instagram para ter resultado?",
    a: "Frequência importa menos do que consistência e qualidade. Um perfil que publica 3 vezes por semana com conteúdo estratégico e bem produzido costuma ter mais resultado do que um que posta todo dia sem planejamento. O Estúdio 2 Marketing monta um calendário editorial realista — geralmente 4 a 6 publicações semanais entre feed e stories — para garantir presença constante sem sacrificar a qualidade.",
  },
  {
    q: "Preciso aparecer nos vídeos da minha empresa para ter resultado no Instagram?",
    a: "Aparecer nos vídeos ajuda muito a construir conexão e confiança, mas não é obrigatório — especialmente no começo. O Estúdio 2 Marketing trabalha com conteúdo misto: vídeos do processo do serviço, bastidores do negócio, depoimentos de clientes, carrosséis educativos e reels do dia a dia. Com o tempo, conforme o cliente se sente mais confortável, introduzimos conteúdo com o rosto do dono — que tende a ter melhor performance.",
  },
  {
    q: "Como sei se o social media da minha empresa está funcionando?",
    a: "O indicador mais importante não é o número de seguidores — é o volume de clientes que chegam pelo Instagram. O Estúdio 2 Marketing rastreia: mensagens no WhatsApp com origem identificada como Instagram, cliques no link da bio, saves e compartilhamentos (que indicam conteúdo percebido como valioso). A cada mês você recebe um relatório com esses dados e uma análise do que ajustar na estratégia.",
  },
];

export default function BlogSocialMedia() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Social Media para empresas em São Mateus: como sair dos 'postzinhos' e criar autoridade",
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        datePublished: DATA,
        dateModified: DATA,
        image: OG_IMAGE,
        author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Estúdio 2 Marketing",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` },
      })
    );

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: "Social Media para Empresas em São Mateus", item: `${SITE_URL}${PATH}` },
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
              <BreadcrumbItem><BreadcrumbLink href="/blog">Blog</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Social Media Estratégico</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">

          {/* Header */}
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Social Media Estratégico</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">
              Social Media para empresas em São Mateus: como sair dos "postzinhos" e criar autoridade
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                7 de setembro de 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                6 min de leitura
              </span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          {/* Corpo */}
          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">

            <p>
              Existe uma crença muito comum entre empresários de São Mateus: "se eu postar todo dia, vou crescer no Instagram". A realidade é mais complexa — e mais frustrante para quem já tentou. Muitas empresas locais postam com regularidade durante meses sem ver nenhum cliente chegar pelo Instagram. O problema não é a frequência. É a falta de estratégia.
            </p>

            <p>
              Este artigo do <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> — agência de marketing digital em São Mateus — explica a diferença entre postar por postar e construir um perfil que gera autoridade, confiança e, no final das contas, clientes reais para o seu negócio.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Por que postar todo dia não basta para empresas de São Mateus</h2>

            <p>
              O algoritmo do Instagram não recompensa quem posta mais — recompensa quem gera mais engajamento qualificado. Um post que salva, um reel que compartilham, um carrossel que alguém para para ler até o final: esses sinais dizem ao algoritmo que o conteúdo é valioso e distribuem para mais pessoas.
            </p>

            <p>
              "Postzinhos" sem estratégia — foto de produto com legenda genérica, chamada para ação sem contexto, frase motivacional sem relação com o negócio — geram impressões mas não geram engajamento real. E sem engajamento real, o alcance cai. A empresa posta todo dia, ninguém vê, e o empresário conclui que "Instagram não funciona para o meu negócio".
            </p>

            <p>
              O que funciona é diferente: <strong>conteúdo que resolve uma dúvida, quebra uma objeção ou gera identificação no público-alvo</strong>. Isso é o que cria seguidores que compram — não seguidores que apenas existem na lista.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que é autoridade digital e como se constrói no mercado de São Mateus</h2>

            <p>
              Autoridade digital é a percepção que o seu público tem de que você é especialista confiável no que faz. Quando alguém precisa de um serviço e pensa no seu nome antes de ir ao Google, você conquistou autoridade.
            </p>

            <p>
              No contexto de São Mateus, onde o mercado é local e as relações pessoais ainda importam muito, autoridade digital soma à reputação tradicional. O cliente que já ouviu falar bem de você e ainda te vê produzindo conteúdo relevante no Instagram chega muito mais fácil ao "quero contratar".
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Conteúdo de posicionamento</h3>

            <p>
              É o conteúdo que mostra como você pensa, o que você defende, o que diferencia o seu trabalho do concorrente. Não é sobre o produto — é sobre o ponto de vista. Uma clínica que explica por que não usa determinado procedimento sem indicação; uma oficina que mostra o processo de inspeção antes do orçamento; um consultor que desmonta mitos do setor. Esse tipo de conteúdo cria diferenciação real.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Prova social</h3>

            <p>
              Depoimentos de clientes, cases de resultado, bastidores do atendimento, antes e depois. A prova social quebra a desconfiança de quem ainda não te conhece. Para empresas em São Mateus, onde muitas compras ainda são decididas por recomendação, mostrar que outros clientes reais tiveram boas experiências é um dos conteúdos mais poderosos que você pode publicar.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Conteúdo de valor</h3>

            <p>
              É o conteúdo que educa o cliente antes de vender. Respostas para as dúvidas mais comuns, dicas do setor, o que observar antes de contratar, como preparar o cliente para o atendimento. Quando você educa, você constrói confiança — e confiança vende mais do que qualquer desconto.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Como estruturar um calendário editorial para o seu negócio em São Mateus</h2>

            <p>
              Um calendário editorial é o planejamento de que tipo de conteúdo você vai publicar em cada dia da semana, com antecedência. Ele garante que o perfil tenha variedade, cadência e propósito — ao contrário de publicar o que aparecer na hora.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Divida por pilar de conteúdo</h3>

            <p>
              O Estúdio 2 Marketing trabalha com 4 pilares para empresas de São Mateus: <strong>educar</strong> (resolve dúvidas do cliente), <strong>posicionar</strong> (mostra seu diferencial), <strong>converter</strong> (faz uma oferta direta) e <strong>relacionar</strong> (cria proximidade com o público). Um calendário equilibrado usa os 4 pilares ao longo da semana — sem ficar só vendendo nem só educando.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Frequência sustentável bate frequência impossível</h3>

            <p>
              Não adianta planejar postar duas vezes por dia se isso não é sustentável para o seu negócio. É melhor um calendário com 4 publicações semanais que você consegue manter por 6 meses do que um de 14 publicações semanais que você abandona em 3 semanas. O Estúdio 2 Marketing ajusta a frequência à realidade de cada cliente.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Reels + carrossel + stories: os 3 formatos que trabalham juntos</h3>

            <p>
              Reels alcançam pessoas que ainda não te seguem (descoberta). Carrosséis prendem quem já te segue e querem aprofundar (engajamento). Stories mantêm quem já é fã aquecido (relacionamento). Usar os três formatos de forma integrada maximiza a cobertura em cada etapa do funil — e é exatamente assim que o Estúdio 2 Marketing estrutura o conteúdo para clientes em São Mateus.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que diferencia um Instagram que vende de um que só ganha seguidores</h2>

            <p>
              Seguidores são uma métrica de vaidade se não se convertem em conversa. O que diferencia um perfil que vende de um que só acumula números:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Bio otimizada com CTA claro:</strong> o visitante precisa saber em 3 segundos o que você faz, para quem e como entrar em contato.</li>
              <li><strong>Link na bio funcionando:</strong> WhatsApp direto ou landing page — qualquer coisa que reduza o atrito entre o interesse e o contato.</li>
              <li><strong>Resposta rápida às mensagens:</strong> um lead que espera mais de 1 hora por resposta tem probabilidade de contato significativamente menor. O processo comercial começa aqui.</li>
              <li><strong>Stories com CTA frequente:</strong> não precisa ser todo dia — mas regularmente, um stories precisa ter uma chamada para ação direta ("me chama no WhatsApp", "link na bio").</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Como o Estúdio 2 Marketing trabalha social media em São Mateus</h2>

            <p>
              O Estúdio 2 Marketing vai presencialmente ao seu negócio para capturar conteúdo real — ambiente, processo, equipe, produto. Desenvolvemos a linha editorial, o calendário mensal e produzimos o conteúdo. Você aprova antes de publicar e não precisa se preocupar com o dia a dia das redes.
            </p>

            <p>
              O diferencial é a integração com o processo comercial: o conteúdo é planejado para aquecer leads que depois chegam pelo <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">tráfego pago</Link>, e cada publicação considera o posicionamento construído na <Link to="/social-media-sao-mateus" className="text-primary hover:underline">página de social media estratégico</Link> da agência.
            </p>

          </div>

          {/* CTA */}
          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer um Instagram que vende de verdade em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing cria a estratégia, produz o conteúdo e gerencia seu perfil. Fale com a gente.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-social-media", "falar sobre social media estratégico")} target="_blank" rel="noopener noreferrer">
                Quero um perfil que vende <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* FAQ */}
          <section aria-labelledby="sm-faq-heading">
            <h2 id="sm-faq-heading" className="font-display font-bold text-2xl text-foreground mb-6">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`sm-faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <div className="mt-10 pt-6 border-t border-border">
            <Link to="/blog" className="text-sm text-primary hover:underline">
              ← Voltar para o Blog
            </Link>
          </div>

        </div>
      </article>

      <WhatsAppFloat />
    </main>
  );
}
