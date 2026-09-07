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

const SLUG = "google-ads-sao-mateus";
const TITLE = "Guia de Google Ads para Empresas em São Mateus - ES | Estúdio 2 Marketing";
const DESCRIPTION = "Como usar o Google Ads para aparecer no topo das buscas em São Mateus e gerar clientes com intenção de compra. Guia prático do Estúdio 2 Marketing para negócios locais.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "O Google Ads funciona para qualquer tipo de negócio em São Mateus?",
    a: "Funciona melhor para negócios onde o cliente pesquisa ativamente antes de comprar — clínicas, escritórios de serviços, lojas especializadas, oficinas, restaurantes. Para segmentos onde o cliente precisa ser apresentado ao produto (moda, decoração, eventos), o Meta Ads costuma ser mais eficiente como canal principal. O Estúdio 2 Marketing faz um diagnóstico para indicar qual plataforma faz mais sentido para o seu segmento em São Mateus antes de investir.",
  },
  {
    q: "Qual é a diferença entre aparecer no Google de graça (SEO) e pagar pelo Google Ads?",
    a: "O SEO (aparecer organicamente) leva 3 a 12 meses para gerar resultados consistentes em São Mateus e exige produção de conteúdo contínua, como a estratégia de blog do Estúdio 2 Marketing. O Google Ads aparece imediatamente — você paga por cada clique e seu anúncio entra no topo assim que a campanha vai ao ar. A estratégia ideal usa as duas abordagens: Ads para resultados imediatos, SEO para construir presença orgânica de longo prazo.",
  },
  {
    q: "Quanto custa um clique no Google Ads para empresas de São Mateus?",
    a: "O custo por clique varia muito por segmento. Em nichos de baixa concorrência local (ex: serviços técnicos específicos), pode ser R$ 0,80–2,00 por clique. Em nichos mais competitivos (clínicas, advocacia, imóveis), pode chegar a R$ 5–15 por clique. O Estúdio 2 Marketing acompanha os lances e otimiza continuamente para reduzir o custo por lead — que é o que importa, não o custo por clique isolado.",
  },
];

export default function BlogGoogleAds() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "Article", headline: "Guia de Google Ads para Empresas em São Mateus", description: DESCRIPTION, url: `${SITE_URL}${PATH}`, datePublished: DATA, dateModified: DATA, image: OG_IMAGE, author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL }, publisher: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` } }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: "Google Ads São Mateus", item: `${SITE_URL}${PATH}` }] }));
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
              <BreadcrumbItem><BreadcrumbPage>Google Ads São Mateus</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Tráfego Pago e Vendas</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">Guia de Google Ads para Empresas em São Mateus</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />7 de setembro de 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />7 min de leitura</span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">
            <p>Quando alguém em São Mateus digita "clínica odontológica perto de mim" ou "oficina mecânica Guriri" no Google, está enviando um sinal claro: está pronto para comprar. O Google Ads coloca a sua empresa exatamente na frente dessa pessoa, no momento certo, antes que ela encontre o concorrente.</p>

            <p>Este guia do <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> explica como o Google Ads funciona para negócios locais em São Mateus e como estruturar campanhas que geram clientes reais — não apenas cliques.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Por que o Google Ads é diferente para negócios locais</h2>
            <p>A diferença fundamental entre Google Ads e Meta Ads está na intenção. No Instagram, o usuário está navegando e o seu anúncio o interrompe. No Google, o usuário pesquisou algo — e o anúncio aparece como resposta direta à busca dele. Isso significa que quem clica no Google Ads já tem interesse declarado, o que gera taxas de conversão significativamente maiores para a maioria dos serviços.</p>
            <p>Para empresas em São Mateus, isso é ainda mais poderoso porque a concorrência local no Google ainda é baixa em muitos nichos — o que significa que é possível aparecer no topo das buscas por um custo muito menor do que em mercados maiores como Vitória ou São Paulo.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Os principais tipos de campanha para negócios de São Mateus</h2>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Campanhas de Pesquisa (Search)</h3>
            <p>São os anúncios de texto que aparecem no topo dos resultados do Google quando alguém pesquisa. É o formato mais direto para capturar intenção de compra. Para uma empresa de São Mateus, os anúncios de pesquisa aparecem quando alguém busca termos como "empresa de marketing São Mateus", "dentista Guriri" ou "mecânico Jaguaré ES". O anúncio direciona para uma página do seu site ou direto para o WhatsApp.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Campanhas de Performance Max e Google Maps</h3>
            <p>As campanhas de Performance Max incluem exibição no Google Maps — essencial para negócios com endereço físico em São Mateus. Quando alguém pesquisa "restaurante perto de mim" ou "salão de beleza São Mateus", sua empresa aparece no mapa com avaliações, endereço e botão para ligar. Para negócios locais com loja física, esse formato costuma ter um dos melhores custos por cliente novo.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Campanhas de Display e Remarketing</h3>
            <p>O Display aparece em sites parceiros do Google (portais de notícia, YouTube, blogs). Para negócios de São Mateus, o uso mais inteligente é o remarketing: mostrar anúncios para quem já visitou seu site mas não converteu. É uma forma barata de manter a sua marca na memória do cliente que estava quase comprando.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Estratégia de palavras-chave para o mercado de São Mateus</h2>
            <p>A escolha das palavras-chave define para quem o seu anúncio aparece. Para negócios locais, existem três categorias principais:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Palavras com localização explícita:</strong> "advogado em São Mateus", "academia Guriri ES", "clínica São Mateus Espírito Santo". Alta intenção, menor volume, alta conversão.</li>
              <li><strong>Palavras de problema:</strong> "onde fazer exame em São Mateus", "como resolver [problema] São Mateus". Capturam o cliente no início da jornada de busca.</li>
              <li><strong>Palavras de concorrente e alternativa:</strong> aparecer quando alguém pesquisa pelo nome de um concorrente ou por uma alternativa ao seu serviço.</li>
            </ul>
            <p>Igualmente importante: as <strong>palavras-chave negativas</strong>. Configurar o que NÃO deve acionar o seu anúncio evita cliques de pessoas fora do perfil — como alguém buscando "curso de marketing em São Mateus" clicar no anúncio de uma agência de gestão.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Configurações essenciais para campanhas locais em São Mateus</h2>
            <p>Segmentação geográfica: configure o anúncio para aparecer apenas em São Mateus e região. Isso impede que você pague por cliques de pessoas que não podem ser atendidas. No Google Ads, você pode definir por cidade, bairro ou raio de quilômetros a partir de um ponto.</p>
            <p>Programação de horários: exiba o anúncio apenas nos horários em que sua equipe pode atender. Um lead que clica às 23h e manda mensagem no WhatsApp mas não recebe resposta até o dia seguinte tem taxa de conversão muito menor. Concentrar o orçamento nos horários de pico do seu negócio melhora o custo por conversão.</p>
            <p>Extensões de anúncio: adicione extensão de local (endereço), de chamada (número de telefone), de sitelinks (links para páginas específicas do site) e de snippets estruturados. Anúncios com extensões ocupam mais espaço na página e têm taxas de clique maiores.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que completar o ciclo: da busca ao fechamento</h2>
            <p>O Google Ads entrega o clique — o que acontece depois é o que determina se aquele investimento vira cliente. A página ou perfil para o qual o anúncio direciona precisa ter clareza (o que você faz, para quem, como contratar), prova social (depoimentos, resultados) e uma chamada para ação direta.</p>
            <p>Depois que o lead entra em contato, entra em campo o processo de <Link to="/vendas-e-follow-up" className="text-primary hover:underline">vendas e follow-up</Link>. Sem acompanhamento, o investimento em Google Ads gera leads que somem. Com processo comercial estruturado, cada lead é trabalhado até o fechamento ou descarte consciente.</p>
            <p>Para entender o ciclo completo de tráfego pago para empresas de São Mateus — incluindo o que o <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">Estúdio 2 Marketing faz com Meta Ads</Link> e como isso se integra ao processo comercial — leia o artigo sobre <Link to="/blog/trafego-pago-sao-mateus-vendas" className="text-primary hover:underline">como escalar vendas com tráfego pago</Link>.</p>
          </div>

          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer aparecer no Google quando seu cliente pesquisa em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">Fale com o Estúdio 2 Marketing para entender qual plataforma de anúncios faz mais sentido para o seu negócio em São Mateus.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-google-ads", "falar sobre Google Ads para meu negócio")} target="_blank" rel="noopener noreferrer">
                Falar sobre tráfego pago <ArrowRight className="ml-2 h-4 w-4" />
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
