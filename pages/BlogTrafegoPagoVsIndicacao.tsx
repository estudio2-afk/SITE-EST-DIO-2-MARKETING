import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { setSEO, SITE_URL, OG_IMAGE, injectSchema } from "@/lib/seo";
import { waLink } from "@/lib/contact";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const SLUG = "trafego-pago-vs-indicacao";
const TITLE = "Tráfego Pago vs Indicação: como ter previsibilidade de vendas | Estúdio 2 Marketing";
const DESCRIPTION = "Indicação é boa mas imprevisível. Tráfego pago é controlável mas exige investimento. Entenda como combinar os dois para vender com previsibilidade em São Mateus - ES.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Vale a pena investir em tráfego pago se eu já tenho muitas indicações?",
    a: "Sim — especialmente porque a indicação tem um teto. Você depende de quantos clientes satisfeitos tem, com que frequência eles se lembram de indicar e se o perfil de quem indicam bate com o seu cliente ideal. O tráfego pago permite escalar independentemente desse teto: você aumenta o orçamento e aumenta o volume de leads. O Estúdio 2 Marketing recomenda começar o tráfego pago enquanto ainda tem boa indicação — assim você tem base para testar, otimizar e crescer sem pressão.",
  },
  {
    q: "Minha empresa nunca investiu em anúncios. Por onde começar?",
    a: "Comece com um objetivo claro (gerar leads pelo WhatsApp é o mais comum para negócios de São Mateus), defina um orçamento inicial de teste (R$ 600–900/mês em verba) e escolha apenas uma plataforma. O Estúdio 2 Marketing recomenda começar pelo Meta Ads (Instagram/Facebook) para a maioria dos negócios locais por causa da segmentação geográfica precisa e do volume de público em São Mateus. Depois de 2–3 meses com resultados consistentes, considere adicionar Google Ads.",
  },
  {
    q: "A indicação vai diminuir se eu começar a anunciar?",
    a: "Não. Indicação e tráfego pago são canais independentes — um não canibaliza o outro. Na prática, muitas empresas de São Mateus percebem o efeito oposto: clientes que vieram pelo anúncio ficam satisfeitos e passam a indicar. A base de clientes cresce, o volume de indicação também cresce. O tráfego pago acelera o ciclo que a indicação iniciou.",
  },
];

export default function BlogTrafegoPagoVsIndicacao() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "Article", headline: "Tráfego Pago vs Indicação: como ter previsibilidade de vendas", description: DESCRIPTION, url: `${SITE_URL}${PATH}`, datePublished: DATA, dateModified: DATA, image: OG_IMAGE, author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL }, publisher: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` } }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: "Tráfego Pago vs Indicação", item: `${SITE_URL}${PATH}` }] }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }));
    return () => { scripts.forEach(s => s.remove()); };
  }, []);

  return (
    <main>
      <div className="bg-muted border-b border-border py-2 px-4">
        <div className="container max-w-6xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Início</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/blog">Blog</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Tráfego Pago vs Indicação</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Tráfego Pago e Vendas</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">Tráfego Pago vs Indicação: como ter previsibilidade de vendas</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />7 de setembro de 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />6 min de leitura</span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">
            <p>Indicação é a forma mais natural de crescimento para negócios em São Mateus. Cliente satisfeito fala para o amigo, o amigo vira cliente, vira outro satisfeito, e assim por diante. O problema é que esse ciclo é completamente fora do seu controle — você não sabe quantas indicações vão chegar este mês, qual vai ser o perfil delas ou quando vão aparecer.</p>
            <p>Tráfego pago não substitui indicação. Ele resolve o que a indicação não consegue: <strong>previsibilidade</strong>. Este artigo do <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> compara os dois canais honestamente e mostra como usá-los juntos para vender sem depender da sorte ou da sazonalidade.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que a indicação oferece — e o que ela não garante</h2>
            <p>A indicação tem vantagens reais que o tráfego pago não tem. O lead que chega por indicação já vem com uma camada de confiança: alguém que ele conhece e respeita falou bem de você. A taxa de conversão de indicações costuma ser significativamente maior do que a de leads frios. O custo de aquisição é zero — você não pagou para gerar esse contato.</p>
            <p>Mas os limites são estruturais. O volume de indicações depende do tamanho da sua base de clientes atual, da satisfação deles e de quando eles encontram alguém que precisa do que você faz. Você não controla esses fatores. Resultado: mês bom e mês ruim sem correlação com o esforço que você colocou no negócio.</p>
            <p>Outro problema: o perfil do lead indicado nem sempre é o ideal. Indicação tende a trazer clientes com perfil parecido com o de quem indicou — o que pode ser ótimo ou pode perpetuar um mix de clientes que você quer ajustar.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que o tráfego pago adiciona ao seu negócio em São Mateus</h2>
            <p>O tráfego pago é controlável. Você define o orçamento, define o público, define a mensagem e define em qual canal aparecer. Quando uma campanha funciona, você escala o orçamento e o volume de leads escala junto. Quando não funciona, você ajusta as variáveis até funcionar — com dados, não com intuição.</p>
            <p>Para negócios de São Mateus, isso significa algo específico: você pode decidir que vai gerar X novos clientes este mês e traçar um plano de investimento para atingir esse número. Isso é o oposto da passividade da indicação.</p>
            <p>O tráfego pago também permite alcançar pessoas que nunca ouviram falar de você — expandindo o mercado além da rede de conhecidos dos seus clientes atuais. Em São Mateus, onde muitos negócios ainda dependem quase exclusivamente de relacionamento, isso representa uma vantagem competitiva real.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que cada canal exige — e por que um sem o outro cria problemas</h2>
            <p>Indicação sem nenhum canal ativo de aquisição cria uma empresa que cresce devagar e de forma imprevisível. A falta de fluxo constante de novos leads força o empresário a aceitar qualquer cliente — inclusive os que não são ideais — para não ficar sem receita.</p>
            <p>Tráfego pago sem processo comercial cria um sumidouro de dinheiro. O lead chega pelo anúncio, entra em contato, recebe uma resposta lenta ou sem acompanhamento, e vai embora. O empresário conclui que "tráfego pago não funciona para meu negócio" quando o problema era o <Link to="/vendas-e-follow-up" className="text-primary hover:underline">processo de follow-up</Link>.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">A combinação que gera previsibilidade de verdade</h2>
            <p>A empresa de São Mateus que cresce de forma consistente combina os dois canais com um processo comercial estruturado:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Tráfego pago</strong> (Meta Ads + Google Ads) gera fluxo constante de novos leads.</li>
              <li><strong>Social media estratégico</strong> aquece esses leads antes de comprarem — quando chegam, já confiam mais.</li>
              <li><strong>Indicação</strong> traz leads de alta conversão e custo zero — tratados com a mesma velocidade e processo dos leads pagos.</li>
              <li><strong>Follow-up estruturado</strong> garante que nenhum lead — pago ou indicado — seja abandonado sem uma decisão clara.</li>
            </ul>
            <p>Com essa combinação, o empresário de São Mateus para de depender de sorte e começa a ter uma previsão realista de receita. Para entender como isso funciona na prática, leia o artigo <Link to="/blog/trafego-pago-sao-mateus-vendas" className="text-primary hover:underline">como escalar vendas com tráfego pago em São Mateus</Link> ou acesse a <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">página de gestão de tráfego pago</Link> do Estúdio 2 Marketing.</p>
          </div>

          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer parar de depender de indicação em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing cria um fluxo previsível de clientes para o seu negócio. Fale com a gente.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-trafego-vs-indicacao", "criar previsibilidade de vendas no meu negócio")} target="_blank" rel="noopener noreferrer">
                Quero previsibilidade de vendas <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <section>
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          <div className="mt-10 pt-6 border-t border-border">
            <Link to="/blog" className="text-sm text-primary hover:underline">← Voltar para o Blog</Link>
          </div>
        </div>
      </article>
      <WhatsAppFloat />
    </main>
  );
}
