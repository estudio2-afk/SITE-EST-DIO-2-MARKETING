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

const SLUG = "trafego-pago-sao-mateus-vendas";
const TITLE = "Como escalar as vendas com Tráfego Pago em São Mateus | Estúdio 2 Marketing";
const DESCRIPTION =
  "Aprenda como usar Meta Ads e Google Ads para gerar clientes de forma previsível em São Mateus. Guia prático do Estúdio 2 Marketing para empresas locais que querem sair da dependência de indicação.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Quanto preciso investir por mês em tráfego pago para ter resultado em São Mateus?",
    a: "Não existe um valor mínimo universal, mas o Estúdio 2 Marketing recomenda começar com pelo menos R$ 600–900/mês em verba de anúncio (além da gestão) para obter volume de dados suficiente para otimização. Com menos de R$ 400/mês fica difícil testar criativos e públicos de forma significativa. O valor ideal varia de acordo com o seu ticket médio e o custo por lead do seu segmento em São Mateus.",
  },
  {
    q: "Tráfego pago funciona para qualquer tipo de negócio em São Mateus?",
    a: "A grande maioria dos negócios locais se beneficia de tráfego pago, especialmente serviços (clínicas, academias, escritórios, oficinas) e varejo com entrega ou atendimento presencial. O que muda é a plataforma ideal: Google Ads funciona melhor para intenção de compra ativa (quem pesquisa 'dentista em São Mateus'); Meta Ads funciona melhor para descoberta e desejo (moda, estética, gastronomia). O Estúdio 2 Marketing faz o diagnóstico para indicar o caminho certo para o seu negócio.",
  },
  {
    q: "Em quanto tempo vejo resultado com tráfego pago?",
    a: "Os primeiros leads costumam aparecer nas primeiras 48–72 horas após o lançamento. Mas o período de aprendizado das campanhas (especialmente no Meta Ads) é de 7 a 14 dias — é nesse período que o algoritmo encontra as pessoas certas para o seu anúncio. Resultados estáveis e consistentes geralmente aparecem a partir do 2° mês, quando há dados suficientes para otimização. Por isso o Estúdio 2 Marketing não promete resultado no primeiro mês — promete processo e melhoria contínua.",
  },
];

export default function BlogTrafegoPago() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Como escalar as vendas da sua empresa em São Mateus com Tráfego Pago",
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
          { "@type": "ListItem", position: 3, name: "Tráfego Pago em São Mateus", item: `${SITE_URL}${PATH}` },
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
              <BreadcrumbItem><BreadcrumbPage>Tráfego Pago em São Mateus</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Artigo */}
      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">

          {/* Header */}
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Tráfego Pago e Vendas</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">
              Como escalar as vendas da sua empresa em São Mateus com Tráfego Pago
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                7 de setembro de 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                7 min de leitura
              </span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          {/* Corpo */}
          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">

            <p>
              Se você é dono de uma empresa em São Mateus e depende principalmente de indicação para conseguir clientes, sabe bem como é: um mês cheio, outro fraco — e nenhum controle sobre quando o próximo cliente vai aparecer. O <strong>tráfego pago</strong> é a ferramenta que muda esse cenário, colocando sua empresa na frente de quem já está procurando o que você vende, todo dia, de forma previsível.
            </p>

            <p>
              Neste artigo, o <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> — agência de marketing digital em São Mateus — explica como estruturar campanhas de tráfego pago que geram resultado real para negócios locais, sem jogar dinheiro fora em impulsionamento sem estratégia.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que é tráfego pago e por que ele funciona para empresas locais</h2>

            <p>
              Tráfego pago é o conjunto de anúncios online pelos quais você paga para aparecer para um público específico. Diferente da indicação — que depende de quem já te conhece ter o timing certo de indicar — o anúncio aparece para pessoas que ainda não te conhecem mas têm o perfil certo para se tornarem clientes.
            </p>

            <p>
              Para empresas de São Mateus, isso representa uma mudança de postura: sair de "espero alguém me indicar" para "estou ativo aparecendo para meu público-alvo hoje". Com orçamento bem gerenciado, é possível ter um fluxo constante e calculável de novos leads, independente de sazonalidade ou quantidade de clientes antigos que ainda indicam.
            </p>

            <p>
              A grande vantagem do tráfego pago local é a segmentação geográfica. Você pode definir que seus anúncios apareçam apenas para pessoas em São Mateus, Guriri, Jaguaré ou no raio exato de quilômetros que faz sentido para o seu negócio — sem desperdiçar verba em quem não pode comprar de você.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Meta Ads vs Google Ads — o que faz sentido para negócios de São Mateus</h2>

            <p>
              As duas plataformas principais de tráfego pago têm objetivos distintos e complementares. Entender a diferença é o primeiro passo para não desperdiçar verba.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Meta Ads (Instagram e Facebook)</h3>

            <p>
              O Meta Ads é a plataforma de anúncios do Instagram e do Facebook. Ele funciona por <strong>interrupção com intenção</strong>: o usuário está navegando e seu anúncio aparece no feed ou nos stories. Por isso, funciona melhor para negócios onde o cliente precisa ser apresentado ao produto ou serviço antes de querer comprar — estética, moda, gastronomia, academias, serviços de reforma e decoração.
            </p>

            <p>
              Para empresas de São Mateus, o Meta Ads é especialmente eficiente porque permite segmentar por cidade, bairro e até por comportamento de compra local. Um anúncio bem feito no Instagram pode gerar dezenas de mensagens no WhatsApp por mês com custo por lead muito menor do que qualquer forma de publicidade offline.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Google Ads</h3>

            <p>
              O Google Ads aparece quando alguém <strong>pesquisa ativamente</strong> por um produto ou serviço. Quem digita "dentista em São Mateus" ou "oficina mecânica Guriri" no Google já tem intenção de compra — é o momento mais quente do ciclo de decisão. Por isso, o Google Ads converte com mais facilidade, embora geralmente com custo por clique maior.
            </p>

            <p>
              Para negócios que atendem necessidades urgentes (clínicas, consertos, serviços técnicos, alimentação) ou com alto ticket médio, o Google Ads costuma trazer leads mais qualificados. A desvantagem é que ele depende de volume de busca local — se poucas pessoas pesquisam pela sua categoria em São Mateus, o tráfego será limitado.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">3 passos para estruturar uma campanha que gera resultado</h2>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">1. Defina o objetivo antes de criar o anúncio</h3>

            <p>
              O erro mais comum de quem começa com tráfego pago em São Mateus é criar o anúncio antes de definir o que quer que o cliente faça. Um anúncio sem objetivo claro gera métricas de vaidade (curtidas, alcance) mas não gera venda.
            </p>

            <p>
              Defina: você quer que o cliente mande mensagem no WhatsApp? Preencha um formulário? Vá até o estabelecimento? Cada objetivo exige uma configuração diferente na campanha e um criativo diferente. A maioria das empresas de São Mateus se beneficia de campanhas com objetivo de mensagem (WhatsApp) ou de leads (formulário), que entregam um contato direto para o time comercial trabalhar.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">2. Segmente por São Mateus e raio de atendimento</h3>

            <p>
              Configure a segmentação geográfica para incluir apenas as cidades e bairros que você atende. Para negócios físicos em São Mateus, um raio de 10–20 km da sua localização costuma ser suficiente. Inclua Guriri, Jaguaré e cidades vizinhas se você atende essas regiões. Excluir áreas que você não atende economiza verba e aumenta a taxa de conversão.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">3. Crie um funil: anúncio → página → WhatsApp → follow-up</h3>

            <p>
              Um anúncio isolado raramente fecha venda. O que funciona é um funil: o anúncio gera interesse, uma landing page ou perfil bem estruturado aprofunda a confiança, e o WhatsApp inicia a conversa de venda. Mas a etapa mais negligenciada — e mais importante — é o <strong>follow-up</strong>: o acompanhamento do lead que mandou mensagem mas não fechou na hora. Sem processo comercial, você paga para gerar leads e deixa a maioria deles esfriar.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O erro que desperdiça orçamento de anúncio em São Mateus</h2>

            <p>
              O erro mais caro que empresas locais cometem é <strong>impulsionar posts</strong> em vez de criar campanhas estruturadas. Impulsionar um post é diferente de criar uma campanha de anúncio: você não controla o objetivo, não segmenta com precisão e não tem dados de conversão. É a opção mais fácil e a menos eficiente.
            </p>

            <p>
              O segundo erro mais comum é não rastrear conversões. Se você não sabe quantos leads vieram de cada campanha, não consegue saber o que está funcionando — e continua pagando por campanhas que não dão resultado. O Estúdio 2 Marketing configura o pixel do Meta e as conversões do Google antes de rodar qualquer campanha para empresas em São Mateus.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Tráfego pago sozinho não garante resultado — o que completa o ciclo</h2>

            <p>
              O tráfego pago gera oportunidades. Quem transforma oportunidades em faturamento é o processo comercial. Se o lead chega pelo anúncio, manda mensagem no WhatsApp e não recebe resposta rápida — ou recebe resposta mas não tem acompanhamento posterior — o dinheiro investido no anúncio vai embora sem retorno.
            </p>

            <p>
              É por isso que o Estúdio 2 Marketing trabalha tráfego pago integrado com estruturação do processo de vendas. Nosso serviço de <Link to="/vendas-e-follow-up" className="text-primary hover:underline">vendas e follow-up</Link> ajuda a montar a sequência de acompanhamento que garante que cada lead gerado seja trabalhado até o fechamento ou descarte consciente.
            </p>

            <p>
              Quer entender como o tráfego pago pode funcionar especificamente para o seu negócio em São Mateus? Acesse nossa <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">página de gestão de tráfego pago</Link> e saiba como trabalhamos.
            </p>

          </div>

          {/* CTA */}
          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer começar com tráfego pago em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">Fale com o Estúdio 2 Marketing. Diagnóstico gratuito de 30 min para entender o que faz sentido para o seu negócio.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-trafego-pago", "falar sobre tráfego pago para meu negócio")} target="_blank" rel="noopener noreferrer">
                Falar sobre tráfego pago <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display font-bold text-2xl text-foreground mb-6">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Nav */}
          <div className="mt-10 pt-6 border-t border-border">
            <Link to="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
              ← Voltar para o Blog
            </Link>
          </div>

        </div>
      </article>

      <WhatsAppFloat />
    </main>
  );
}
