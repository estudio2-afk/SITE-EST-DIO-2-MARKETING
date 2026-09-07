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

const SLUG = "autoridade-digital-es";
const TITLE = "Como construir autoridade digital no Espírito Santo | Estúdio 2 Marketing";
const DESCRIPTION = "Aprenda como negócios do Espírito Santo constroem autoridade digital e se tornam referência no seu segmento. Estratégias práticas do Estúdio 2 Marketing para São Mateus e região.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Quanto tempo leva para construir autoridade digital em São Mateus?",
    a: "Resultados iniciais de posicionamento digital aparecem entre 3 e 6 meses com consistência. Autoridade real — ser reconhecido como referência na sua área em São Mateus — costuma levar de 12 a 24 meses de trabalho contínuo. Não existe atalho sustentável: o que acelera é consistência na produção de conteúdo, qualidade do que é publicado e integração com outros canais (tráfego pago, Google Meu Negócio, depoimentos reais).",
  },
  {
    q: "Preciso estar presente em todas as redes sociais para construir autoridade no ES?",
    a: "Não. O Estúdio 2 Marketing recomenda dominar um canal antes de expandir para outros. Para a maioria dos negócios locais do Espírito Santo, o Instagram é o canal principal — tem o maior volume de usuários na faixa etária de decisão de compra e permite combinar conteúdo, stories, reels e mensagens diretas em um só lugar. Depois de ter uma presença consistente no Instagram, considera-se expandir para YouTube (para negócios que se beneficiam de conteúdo mais longo) ou LinkedIn (para B2B).",
  },
  {
    q: "Devo contratar uma agência ou tentar construir autoridade digital por conta própria?",
    a: "Depende da sua disponibilidade e do seu objetivo de prazo. Construir por conta própria é possível mas exige tempo real: criação de conteúdo, edição, publicação, resposta de comentários e análise de dados. Para donos de negócio com agenda cheia, terceirizar o social media para o Estúdio 2 Marketing garante consistência sem sobrecarregar a rotina. Uma opção intermediária: o empresário aparece nos vídeos e define a linha editorial, enquanto a agência cuida de produção, edição e publicação.",
  },
];

export default function BlogAutoridadeDigitalES() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "Article", headline: "Como construir autoridade digital no Espírito Santo", description: DESCRIPTION, url: `${SITE_URL}${PATH}`, datePublished: DATA, dateModified: DATA, image: OG_IMAGE, author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL }, publisher: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` } }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: "Autoridade digital no ES", item: `${SITE_URL}${PATH}` }] }));
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
              <BreadcrumbItem><BreadcrumbPage>Autoridade Digital no ES</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Social Media Estratégico</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">Como construir autoridade digital no Espírito Santo</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />7 de setembro de 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />7 min de leitura</span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">
            <p>No mercado do Espírito Santo — especialmente em cidades médias como São Mateus, onde as relações pessoais ainda têm muito peso — existe uma diferença fundamental entre ser conhecido e ser considerado referência. Ser conhecido significa que as pessoas sabem que você existe. Ser referência significa que quando surge a necessidade, o seu nome é o primeiro que vem à cabeça. A autoridade digital é o que cria esse segundo status.</p>
            <p>Este artigo do <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> explica o que é autoridade digital, por que ela importa para negócios do ES e como construí-la de forma prática — sem truques e sem atalhos que não sustentam.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Por que autoridade digital muda o jogo para negócios do interior do ES</h2>
            <p>Em São Mateus e cidades do norte do Espírito Santo, a maioria dos negócios ainda compete principalmente por preço — porque não há diferencial de posicionamento claro entre eles. Quando o cliente não consegue perceber diferença de valor, ele compara preço. Autoridade digital rompe esse ciclo: quando você é visto como o especialista confiável na sua área, o cliente vem com predisposição a pagar pelo valor que percebe — não apenas pelo menor custo.</p>
            <p>Outro efeito prático: negócios com autoridade digital recebem leads mais aquecidos. Quem chega já tendo consumido seu conteúdo, visto depoimentos e entendido sua abordagem precisa de menos explicação para fechar. O ciclo de venda fica mais curto e a taxa de conversão sobe.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Os 4 pilares de autoridade digital para negócios do Espírito Santo</h2>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">1. Conteúdo especializado com consistência</h3>
            <p>Autoridade é construída com o que você publica ao longo do tempo. Um post viral não faz referência — uma linha editorial consistente, publicada semana após semana durante meses, sim. O conteúdo precisa demonstrar conhecimento real: responder dúvidas que o seu cliente tem antes de contratar, mostrar como você pensa, explicar o que diferencia a sua abordagem.</p>
            <p>Para negócios de São Mateus, conteúdo com contexto local — mencionando a realidade da sua cidade, as especificidades do mercado regional, casos de clientes locais — tem impacto maior do que conteúdo genérico que poderia ter sido escrito por qualquer empresa de qualquer lugar do Brasil.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">2. Prova social local</h3>
            <p>Depoimentos de clientes reais de São Mateus e região têm peso diferente para o público local do que depoimentos genéricos. Quando um possível cliente vê que uma empresa que ele conhece ou que é de um bairro próximo teve um bom resultado com você, a barreira de confiança cai. O Estúdio 2 Marketing prioriza capturar e publicar depoimentos de clientes locais como parte central da estratégia de social media.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">3. Presença consistente em múltiplos pontos de contato</h3>
            <p>Autoridade digital não vem de um único canal — vem da percepção de que você está em vários lugares ao mesmo tempo. Instagram ativo + Google Meu Negócio bem preenchido com avaliações + site com conteúdo relevante = a sensação de que a empresa é sólida e estabelecida. Para o cliente de São Mateus que pesquisa antes de comprar, essa presença consistente pesa na decisão.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">4. Velocidade e qualidade no relacionamento</h3>
            <p>Autoridade não se constrói só com conteúdo — se constrói também com como você trata quem interage com sua marca. Responder comentários com cuidado, atender DMs rapidamente, reagir às menções da sua marca: esses comportamentos somam aos conteúdos e criam a percepção de uma empresa que se importa com o cliente, não apenas com a venda.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que o Google entende por autoridade: E-E-A-T simplificado</h2>
            <p>Para o Google, autoridade digital tem um nome técnico: E-E-A-T (Experiência, Especialização, Autoridade, Confiabilidade). São os critérios que o algoritmo usa para decidir se o seu conteúdo merece aparecer nas primeiras posições de busca.</p>
            <p>Na prática, para negócios de São Mateus isso significa: escrever sobre o que você realmente sabe (especialização), mostrar resultados reais (experiência), ser citado ou linkado por outras fontes (autoridade) e ter um site seguro com informações verificáveis de contato (confiabilidade). Os posts do blog do Estúdio 2 Marketing são estruturados exatamente para esses critérios.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Plano de ação para os próximos 90 dias</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Semana 1–2:</strong> Otimize o perfil do Instagram (bio, link, foto) e o Google Meu Negócio (categoria, descrição, fotos, horário). Peça avaliações para os 5 melhores clientes atuais.</li>
              <li><strong>Mês 1:</strong> Defina 3 pilares de conteúdo para o seu negócio. Publique 3–4 vezes por semana — pelo menos 1 reel e 1 carrossel educativo.</li>
              <li><strong>Mês 2:</strong> Capture e publique 2 depoimentos de clientes reais. Comece a responder às perguntas frequentes dos clientes em formato de conteúdo.</li>
              <li><strong>Mês 3:</strong> Analise o que performou melhor e dobre a aposta nesses formatos. Considere <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">impulsionar os melhores conteúdos com Meta Ads</Link> para acelerar o alcance.</li>
            </ul>
            <p>Para entender como o Estúdio 2 Marketing trabalha social media para negócios de São Mateus, acesse a <Link to="/social-media-sao-mateus" className="text-primary hover:underline">página de social media estratégico</Link> ou leia o artigo <Link to="/blog/social-media-estrategico-sao-mateus" className="text-primary hover:underline">como sair dos postzinhos e criar autoridade</Link>.</p>
          </div>

          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer se tornar referência no seu segmento em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing constrói sua autoridade digital com consistência e estratégia. Fale com a gente.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-autoridade-digital", "construir autoridade digital para meu negócio")} target="_blank" rel="noopener noreferrer">
                Quero construir autoridade digital <ArrowRight className="ml-2 h-4 w-4" />
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
