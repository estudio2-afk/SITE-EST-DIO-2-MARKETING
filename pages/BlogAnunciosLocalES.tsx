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

const SLUG = "anuncios-publico-local-es";
const TITLE = "Como anunciar para o público local no ES: segmentação no Meta Ads | Estúdio 2 Marketing";
const DESCRIPTION = "Segmentação geográfica no Meta Ads para empresas do Espírito Santo. Como anunciar apenas para quem pode comprar de você em São Mateus e região sem desperdiçar verba.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Qual raio de segmentação usar no Meta Ads para um negócio em São Mateus?",
    a: "Depende do tipo de negócio. Para estabelecimentos físicos que atendem presencialmente (salões, clínicas, restaurantes), um raio de 10 a 15 km costuma ser suficiente para abranger São Mateus, Guriri e regiões próximas. Para serviços que atendem a distância ou em toda a cidade, o ideal é segmentar por cidade específica em vez de raio. O Estúdio 2 Marketing testa diferentes configurações nas primeiras semanas de campanha para identificar de qual área vêm os leads com maior conversão.",
  },
  {
    q: "Posso anunciar no Meta Ads só para moradores de Guriri, por exemplo?",
    a: "Sim. No Meta Ads você pode definir cidades específicas, e para áreas menores como Guriri (que é um bairro de São Mateus), usa-se a segmentação por raio a partir de um ponto geográfico. Você pode adicionar múltiplas localizações — por exemplo, São Mateus + Jaguaré + Conceição da Barra — para cobrir toda a área de atendimento sem exibir para quem está fora dela.",
  },
  {
    q: "Vale a pena anunciar no Meta Ads para cidades vizinhas de São Mateus como Linhares ou Colatina?",
    a: "Depende do seu produto ou serviço. Se você atende presencialmente e a distância é um obstáculo, provavelmente não vale. Se você oferece algo que o cliente aceita se deslocar por (especialidade médica, serviço muito específico, produto exclusivo) ou que você entrega remotamente, pode valer. O Estúdio 2 Marketing analisa o histórico de clientes de cada empresa antes de definir quais cidades incluir na segmentação.",
  },
];

export default function BlogAnunciosLocalES() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "Article", headline: "Como anunciar para o público local no ES", description: DESCRIPTION, url: `${SITE_URL}${PATH}`, datePublished: DATA, dateModified: DATA, image: OG_IMAGE, author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL }, publisher: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` } }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: "Anúncios para público local no ES", item: `${SITE_URL}${PATH}` }] }));
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
              <BreadcrumbItem><BreadcrumbPage>Anúncios para público local no ES</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Tráfego Pago e Vendas</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">Como anunciar para o público local no ES: o guia de segmentação no Meta Ads</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />7 de setembro de 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />6 min de leitura</span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">
            <p>Um dos maiores erros de negócios no interior do Espírito Santo que começam a anunciar no Meta Ads é usar a segmentação padrão — que pode distribuir seu anúncio para o Brasil inteiro — e se perguntar por que o custo por lead é alto e os contatos vêm de lugares que você não atende. Segmentar para o público local é o passo mais básico e mais ignorado.</p>
            <p>Este guia do <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> explica como configurar a segmentação geográfica no Meta Ads especificamente para empresas de São Mateus e região do Espírito Santo — de forma que cada real investido alcance apenas pessoas que podem realmente virar seus clientes.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Por que segmentação local importa mais do que parece</h2>
            <p>Quando você cria um anúncio no Meta Ads sem definir localização, o algoritmo otimiza para a audiência que vai gerar mais cliques dentro do orçamento disponível — e essa audiência pode não ser do Espírito Santo. Para negócios com atendimento presencial em São Mateus, pagar por cliques de pessoas em Recife ou Manaus é dinheiro jogado fora.</p>
            <p>A segmentação geográfica precisa resolve isso: você define exatamente onde os anúncios aparecem e garante que o orçamento seja 100% gasto no público que pode comprar de você.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Como configurar a segmentação local no Meta Ads</h2>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Opção 1: Segmentação por cidade</h3>
            <p>Na tela de criação do conjunto de anúncios, em "Localizações", selecione "Adicionar localizações" e busque por São Mateus — ES. Você pode adicionar múltiplas cidades: São Mateus, Jaguaré, Conceição da Barra, Linhares, conforme a área que você atende. Essa configuração mostra o anúncio para pessoas que o Meta identifica como residentes ou frequentadores regulares dessas cidades.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Opção 2: Segmentação por raio de km</h3>
            <p>Para negócios com endereço físico, você pode segmentar por raio: digite o nome do seu estabelecimento ou endereço e defina um raio de 5, 10, 15 ou 20 km. Isso é especialmente útil para alcançar Guriri (bairro balneário de São Mateus) sem criar uma segmentação separada. O Estúdio 2 Marketing usa raio de 10–15 km para a maioria dos negócios de atendimento presencial na região.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Configuração de pessoas na área</h3>
            <p>No Meta Ads, você pode escolher entre "Pessoas que vivem nessa localização", "Pessoas que recentemente estiveram nessa localização" ou "Pessoas viajando para essa localização". Para negócios que dependem de residentes (clínicas, academias, serviços mensais), use "Pessoas que vivem". Para negócios que atendem turistas em Guriri (pousadas, restaurantes, passeios), adicione "Pessoas viajando para essa localização".</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Segmentação de público além da localização</h2>
            <p>Localização é o filtro geográfico. Mas dentro de São Mateus, nem todo mundo é o seu cliente ideal. Para refinar mais:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Interesses:</strong> o Meta Ads permite segmentar por interesses relacionados ao seu segmento. Uma academia pode adicionar interesses como "fitness", "musculação", "saúde e bem-estar". Uma clínica estética pode usar "beleza", "cuidados pessoais".</li>
              <li><strong>Dados demográficos:</strong> faixa etária e gênero são filtros básicos que ajudam a concentrar o orçamento no público principal.</li>
              <li><strong>Públicos personalizados:</strong> se você tem lista de clientes ou visitantes do site, pode criar públicos de remarketing — mostrar anúncios para quem já conhece a marca e está mais próximo de comprar.</li>
              <li><strong>Públicos semelhantes (Lookalike):</strong> o Meta encontra pessoas em São Mateus com perfil parecido com o dos seus melhores clientes. É uma das segmentações mais eficientes para escalar campanhas que já funcionam.</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Criativos que conectam com o público local do ES</h2>
            <p>A segmentação certa leva o anúncio para a pessoa certa — mas o criativo é o que faz ela parar de rolar o feed e prestar atenção. Para o público de São Mateus e região, o Estúdio 2 Marketing observa que criativos com referências locais (mencionar a cidade, mostrar pontos conhecidos, usar linguagem da região) tendem a ter taxas de engajamento maiores do que anúncios genéricos.</p>
            <p>Mostrar o rosto de quem está por trás do negócio, depoimentos de clientes reconhecíveis na cidade e imagens reais do estabelecimento (não banco de imagens) constroem uma conexão de proximidade que anúncios de grandes empresas nacionais não conseguem replicar — e essa é uma vantagem real do negócio local.</p>
            <p>Para entender como o Estúdio 2 Marketing estrutura campanhas completas de tráfego pago para empresas de São Mateus, acesse a <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">página de gestão de tráfego pago</Link> ou leia o artigo sobre <Link to="/blog/trafego-pago-sao-mateus-vendas" className="text-primary hover:underline">como escalar vendas com tráfego pago</Link>.</p>
          </div>

          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer anunciar para o público certo em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing configura a segmentação e gerencia suas campanhas no Meta Ads. Fale com a gente.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-anuncios-local", "anunciar para público local em São Mateus")} target="_blank" rel="noopener noreferrer">
                Quero anunciar para público local <ArrowRight className="ml-2 h-4 w-4" />
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
