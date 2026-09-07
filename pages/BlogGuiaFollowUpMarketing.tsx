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

const SLUG = "guia-follow-up-marketing";
const TITLE = "Guia de Follow-up para Empresas em São Mateus: como não perder leads | Estúdio 2 Marketing";
const DESCRIPTION = "Como fazer follow-up de vendas de forma profissional sem ser invasivo. Scripts e estratégias para empresas de São Mateus converterem mais leads sem precisar de mais anúncios.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Quantas vezes devo tentar contato antes de desistir de um lead?",
    a: "O Estúdio 2 Marketing trabalha com uma sequência de 5 a 7 tentativas distribuídas ao longo de 14 a 21 dias antes de marcar o lead como inativo. Isso inclui variação de canal (WhatsApp, ligação, e-mail quando aplicável) e variação de horário. Leads que não respondem após esse ciclo são marcados como 'inativo por agora' — não como perdido definitivamente. Uma abordagem de reativação 60 a 90 dias depois ainda converte uma parcela significativa.",
  },
  {
    q: "O follow-up por WhatsApp não parece invasivo para o cliente?",
    a: "Depende de como é feito. Mensagens genéricas e frequentes são invasivas. Follow-up contextualizado — referenciando o que o lead disse na conversa anterior, oferecendo informação nova ou respondendo a uma objeção específica — é percebido como atenção, não como spam. A regra é: toda mensagem de follow-up deve entregar algo de valor para o lead, não apenas verificar se ele vai comprar.",
  },
  {
    q: "Preciso ter um time de vendas para fazer follow-up estruturado?",
    a: "Não. A maioria das empresas de São Mateus que o Estúdio 2 Marketing atende tem uma ou duas pessoas responsáveis por vendas — às vezes o próprio dono. O follow-up estruturado funciona com qualquer tamanho de equipe, desde que o processo esteja documentado: quem contata, quando, o que diz, como registra. Um processo simples executado consistentemente supera um processo sofisticado que ninguém segue.",
  },
];

export default function BlogGuiaFollowUpMarketing() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "Article", headline: "Guia de Follow-up para Empresas em São Mateus: como não perder leads", description: DESCRIPTION, url: `${SITE_URL}${PATH}`, datePublished: DATA, dateModified: DATA, image: OG_IMAGE, author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL }, publisher: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` } }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: "Guia de follow-up para empresas", item: `${SITE_URL}${PATH}` }] }));
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
              <BreadcrumbItem><BreadcrumbPage>Guia de Follow-up</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Processos de Vendas/CRM</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">Guia de follow-up para empresas em São Mateus: como não perder leads</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />7 de setembro de 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />7 min de leitura</span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">
            <p>Estudos de vendas B2C consistentemente mostram que a maioria das vendas não acontece no primeiro contato — acontece no quinto ou sexto. A maioria das empresas em São Mateus desiste no primeiro. Resultado: leads pagos que chegaram pelo Instagram, pelo Google ou por indicação vão embora sem comprar — não porque não queriam, mas porque ninguém fez o acompanhamento.</p>
            <p>Este guia do <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> explica o que é follow-up, por que ele é o elo que falta no processo comercial da maioria dos negócios locais e como estruturá-lo de forma prática sem ser invasivo.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Por que o follow-up é o maior buraco no funil das empresas de São Mateus</h2>
            <p>O fluxo típico de um negócio sem processo de follow-up: lead chega pelo WhatsApp → empresa responde → lead diz "vou pensar" → empresa espera → lead some → empresa investiu em anúncio, não converteu, culpa o marketing.</p>
            <p>O problema não está no anúncio. Está na ausência de continuidade. "Vou pensar" não é não — é "ainda não". O lead que disse isso precisa de mais informação, mais confiança ou mais urgência. Follow-up entrega os três.</p>
            <p>Para negócios que investem em <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">tráfego pago</Link>, a ausência de follow-up é um desperdício duplo: você paga para atrair o lead e depois deixa ele escapar. Cada real investido em anúncio rende mais quando existe um processo comercial por trás.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">A sequência de follow-up para WhatsApp</h2>
            <p>Para a maioria dos negócios de São Mateus onde WhatsApp é o canal principal de vendas, o Estúdio 2 Marketing trabalha com uma sequência estruturada:</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Dia 1: Primeiro contato — entendimento e proposta</h3>
            <p>O objetivo do primeiro contato não é fechar — é entender o problema do lead e apresentar como você resolve. Faça perguntas antes de apresentar o serviço. Quem apresenta a solução antes de entender o problema parece estar empurrando produto, não resolvendo dor.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Dia 2–3: Follow-up de confirmação</h3>
            <p>Se o lead não respondeu ou disse que vai pensar, envie uma mensagem curta reforçando um benefício específico ou respondendo a uma objeção que apareceu no primeiro contato. Exemplo: "Lembrei que você mencionou a preocupação com X. Queria te mostrar como resolvemos isso para clientes em situação parecida."</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Dia 5–7: Prova social ou conteúdo de valor</h3>
            <p>Envie um depoimento de cliente, um resultado recente ou um conteúdo breve (vídeo curto, print de resultado) que seja relevante para o contexto do lead. Isso mantém a conexão sem pressionar, e reforça credibilidade.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Dia 10–14: Pergunta direta ou fechamento com urgência</h3>
            <p>Uma pergunta direta: "Você ainda tem interesse em avançar? Quero entender se posso te ajudar ou se o timing não é ideal agora." Isso convida a uma decisão sem pressão agressiva. Para leads que estão em cima do muro, um elemento de urgência real (vagas limitadas, prazo de proposta) pode ser o que falta.</p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Dia 21+: Reativação futura</h3>
            <p>Leads que não converteram no ciclo inicial não são descartados — são colocados em uma lista de reativação para 60–90 dias. Uma mensagem simples revisitando a conversa anterior converte uma parte significativa desses contatos quando o momento deles muda.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que não fazer no follow-up</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Não envie a mesma mensagem repetida:</strong> "Você viu minha mensagem?" é a pior forma de follow-up. Cada contato deve ter um ângulo novo.</li>
              <li><strong>Não pressione pela decisão antes de entregar valor:</strong> o lead precisa ver motivo para comprar, não apenas sentir pressão para decidir.</li>
              <li><strong>Não desapareça depois do primeiro não:</strong> "Vou pensar" e "não tenho dinheiro agora" raramente são nãos definitivos — são pedidos de mais informação ou pausa.</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Follow-up é parte de um processo maior</h2>
            <p>Follow-up funciona melhor quando está integrado a uma estrutura comercial completa: diagnóstico do cliente ideal, script de abordagem, proposta clara e processo de acompanhamento. O Estúdio 2 Marketing trabalha toda essa estrutura no serviço de <Link to="/vendas-e-follow-up" className="text-primary hover:underline">vendas e follow-up para pequenas empresas em São Mateus</Link>.</p>
            <p>Para entender por que negócios locais perdem vendas mesmo com leads chegando, leia o artigo <Link to="/blog/vendas-follow-up-negocios-locais" className="text-primary hover:underline">por que sua empresa perde vendas — e como o follow-up resolve</Link>.</p>
          </div>

          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer parar de perder leads em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing estrutura o processo de vendas e follow-up para você vender mais com os leads que já chegam.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-guia-follow-up", "estruturar o processo de follow-up da minha empresa")} target="_blank" rel="noopener noreferrer">
                Quero estruturar meu follow-up <ArrowRight className="ml-2 h-4 w-4" />
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
