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

const SLUG = "social-media-crescimento";
const TITLE = "Por que seu Instagram não cresce: erros e soluções para empresas de São Mateus | Estúdio 2 Marketing";
const DESCRIPTION = "Identifique os erros que travam o crescimento do Instagram da sua empresa em São Mateus e aprenda as soluções práticas. Do algoritmo à conversão em clientes reais.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Quantos seguidores preciso ter para o Instagram gerar clientes em São Mateus?",
    a: "Não existe um número mínimo de seguidores para gerar clientes — o que importa é a qualidade da audiência e a consistência. O Estúdio 2 Marketing já viu empresas de São Mateus com 500 seguidores fechando clientes todos os meses porque o conteúdo era relevante e direcionado para o público certo. O número de seguidores é uma métrica de vaidade quando desconectada de engajamento real e conversão. Foque em engajamento (comentários, DMs, salvamentos) e em direcionar quem se interessa para o WhatsApp.",
  },
  {
    q: "Vale a pena comprar seguidores para dar impulso inicial ao Instagram?",
    a: "Não. Seguidores comprados são contas falsas ou de pessoas sem interesse no seu negócio. O efeito imediato é um número maior no perfil, mas o efeito real é o oposto: a taxa de engajamento cai (porque seguidores falsos não interagem), o algoritmo interpreta como conteúdo ruim e distribui ainda menos para seguidores reais. O Estúdio 2 Marketing nunca usa essa prática — o crescimento orgânico é lento no início, mas cada seguidor real é um potencial cliente.",
  },
  {
    q: "Com que frequência devo postar no Instagram para crescer em São Mateus?",
    a: "O Estúdio 2 Marketing recomenda uma frequência de 3 a 5 posts por semana no feed (reels e carrosséis), mais stories diários. A frequência sem qualidade não gera crescimento — um reel bom por semana costuma performar melhor do que cinco posts genéricos. Consistência é mais importante do que frequência máxima: é melhor postar 3 vezes por semana todos os meses do que postar 7 vezes numa semana e sumir na próxima.",
  },
];

export default function BlogSocialMediaCrescimento() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "Article", headline: "Por que seu Instagram não cresce: erros e soluções para empresas de São Mateus", description: DESCRIPTION, url: `${SITE_URL}${PATH}`, datePublished: DATA, dateModified: DATA, image: OG_IMAGE, author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL }, publisher: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` } }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: "Por que o Instagram não cresce", item: `${SITE_URL}${PATH}` }] }));
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
              <BreadcrumbItem><BreadcrumbPage>Instagram que não cresce</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Social Media Estratégico</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">Por que seu Instagram não cresce: erros e soluções para empresas de São Mateus</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />7 de setembro de 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />7 min de leitura</span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">
            <p>A maioria dos donos de empresa em São Mateus que chega até o <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> tem o mesmo relato: "Posto toda semana mas o perfil não cresce. Ninguém se engaja. Não consigo transformar seguidores em clientes." O problema raramente é falta de esforço — é que o esforço está sendo colocado nas áreas erradas.</p>
            <p>Este artigo mapeia os erros mais comuns que travam o crescimento do Instagram de negócios locais em São Mateus — e o que fazer em vez de cada um deles.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Erro 1: Conteúdo sem linha editorial definida</h2>
            <p>O erro mais comum: postar o que vier na cabeça — hoje uma foto do produto, amanhã um meme, depois um depoimento de cliente, depois uma promoção aleatória. Para o algoritmo do Instagram e para o visitante do perfil, esse mix sem coerência não transmite especialidade em nada.</p>
            <p><strong>O que fazer:</strong> Defina 3 pilares de conteúdo que representem o posicionamento do seu negócio. Para uma clínica: "saúde preventiva", "procedimentos estéticos", "bastidores da equipe". Para uma academia: "resultados de alunos", "dicas de treino", "programas e horários". Toda publicação encaixa em um desses pilares. O perfil fica coeso e o algoritmo aprende para quem distribuir.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Erro 2: Reels sem os primeiros 3 segundos fortes</h2>
            <p>O Instagram decide se vai distribuir um reel para além dos seguidores existentes com base em quanto tempo as pessoas assistem. Se os primeiros 3 segundos não prenderam atenção, o usuário rola para o próximo — e o algoritmo interpreta que o conteúdo não é bom o suficiente para ampliar o alcance.</p>
            <p><strong>O que fazer:</strong> Comece o reel com a informação mais interessante — não com a introdução. "Você está perdendo clientes por esse erro" funciona muito melhor do que "Olá pessoal, hoje vou falar sobre…". Mostre o resultado antes de explicar o processo. Use texto na tela nos primeiros frames para capturar quem assiste sem áudio.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Erro 3: Falar só sobre o produto, nunca sobre o problema do cliente</h2>
            <p>Perfis que só publicam "nosso produto é ótimo", "confira nosso serviço", "entre em contato" não geram audiência porque não entregam valor. O usuário do Instagram não está lá para ver propaganda — está lá para se entreter ou aprender algo.</p>
            <p><strong>O que fazer:</strong> Pelo menos 60% do conteúdo deve ser educativo ou de entretenimento relacionado ao segmento — sem vender diretamente. Uma empresa de construção pode publicar "3 erros ao escolher piso para área molhada". Uma nutricionista pode publicar "O que comer antes do treino se você treina cedo". O seguidor aprende, confia, e quando precisar do serviço, pensa na empresa.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Erro 4: Ignorar stories ou usar só stickers</h2>
            <p>Stories têm uma função diferente do feed: são o canal de relacionamento diário com quem já segue. Empresas que só usam stories para colocar sticker de música e repostar posts do feed estão desperdiçando o formato mais eficaz para conversão.</p>
            <p><strong>O que fazer:</strong> Use stories para mostrar bastidores, fazer perguntas diretas, revelar novidades antes de postar no feed e criar uma conexão de "pré-venda" — o cliente que assiste os stories regularmente já está aquecido quando a oferta aparece. Inclua pelo menos 1 story por dia e 1 story interativo (enquete, caixa de perguntas) por semana.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Erro 5: Não ter CTA claro nos conteúdos de vendas</h2>
            <p>Um post que chegou à pessoa certa e não diz o que ela deve fazer a seguir perde a oportunidade. "Gostou? Deixa um like" não converte. "Quer saber como funciona para o seu negócio? Manda uma mensagem" direciona para a etapa seguinte do processo de venda.</p>
            <p><strong>O que fazer:</strong> Todo conteúdo com intenção comercial precisa de um CTA específico — enviar DM, clicar no link da bio, salvar o post para ler depois. Varie os CTAs entre os posts para não soar repetitivo, mas nunca publique conteúdo de conversão sem um próximo passo explícito.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Crescimento + conversão: o que realmente importa</h2>
            <p>Para negócios de São Mateus, crescer o número de seguidores tem valor apenas se esse crescimento gera leads e clientes. A meta não é ter 10 mil seguidores — é ter 500 seguidores que viram clientes. Isso requer uma estratégia integrada de social media com processo de atendimento e follow-up.</p>
            <p>Para entender como o Estúdio 2 Marketing trabalha social media de forma estratégica, acesse a <Link to="/social-media-sao-mateus" className="text-primary hover:underline">página de social media</Link> ou leia o artigo <Link to="/blog/social-media-estrategico-sao-mateus" className="text-primary hover:underline">como sair dos postzinhos e criar autoridade</Link>.</p>
          </div>

          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Cansado de postar sem resultado em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing transforma o seu Instagram em canal de geração de clientes. Fale com a gente.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-social-media-crescimento", "transformar meu Instagram em canal de clientes")} target="_blank" rel="noopener noreferrer">
                Quero resultado no Instagram <ArrowRight className="ml-2 h-4 w-4" />
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
