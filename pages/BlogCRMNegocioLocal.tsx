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

const SLUG = "crm-negocio-local";
const TITLE = "CRM para Pequenos Negócios: como organizar leads sem gastar nada | Estúdio 2 Marketing";
const DESCRIPTION = "Como pequenos negócios em São Mateus podem organizar leads e follow-up sem pagar por CRM. Ferramentas gratuitas e método prático para parar de perder vendas por desorganização.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Planilha do Google é um CRM?",
    a: "Tecnicamente, não — CRM (Customer Relationship Management) é um software com funcionalidades específicas de automação, histórico de interações e integração com outros canais. Mas para negócios em fase inicial, uma planilha bem estruturada cumpre a função essencial de um CRM básico: registrar leads, status, próximas ações e histórico de contato. O Estúdio 2 Marketing usa e ensina planilhas simples antes de recomendar CRMs pagos — porque a ferramenta certa é a que você realmente usa, não a mais sofisticada.",
  },
  {
    q: "Quando devo migrar de planilha para um CRM de verdade?",
    a: "Quando o volume de leads por mês torna a planilha difícil de gerenciar (geralmente acima de 50–80 leads/mês), quando você tem uma equipe de vendas com mais de 2 pessoas dividindo os contatos, ou quando perde vendas porque não consegue visualizar todos os leads em andamento ao mesmo tempo. Enquanto isso não acontece, uma planilha simples e bem mantida é mais eficiente do que um CRM que fica pela metade porque é complicado de usar.",
  },
  {
    q: "Como o processo de vendas e follow-up ajuda quem ainda não tem CRM?",
    a: "O processo de vendas começa antes da ferramenta. Ter claro: quem é o cliente ideal, qual é o script de abordagem, quantas vezes o lead é contatado antes de ser descartado, o que acontece depois do não — isso já reduz drasticamente a perda de leads, mesmo sem nenhum software. O Estúdio 2 Marketing trabalha a estruturação desse processo como parte do serviço de vendas e follow-up. A ferramenta (planilha ou CRM) é o suporte para o processo — não o substituto.",
  },
];

export default function BlogCRMNegocioLocal() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "Article", headline: "CRM para Pequenos Negócios: como organizar leads sem gastar nada", description: DESCRIPTION, url: `${SITE_URL}${PATH}`, datePublished: DATA, dateModified: DATA, image: OG_IMAGE, author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL }, publisher: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` } }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: "CRM para negócios locais", item: `${SITE_URL}${PATH}` }] }));
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
              <BreadcrumbItem><BreadcrumbPage>CRM para negócios locais</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Processos de Vendas/CRM</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">CRM para pequenos negócios: como organizar leads sem gastar nada</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />7 de setembro de 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />6 min de leitura</span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">
            <p>Você anunciou, o lead chegou pelo WhatsApp, você respondeu — e duas semanas depois percebe que nunca mais entrou em contato. Não foi falta de interesse do lead. Foi falta de processo. É o que acontece quando não existe nenhum sistema para controlar quem está sendo acompanhado e quem foi esquecido.</p>
            <p>CRM (Customer Relationship Management) é o nome técnico para o conjunto de ferramentas e práticas que resolvem esse problema. Este artigo do <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> explica o conceito e mostra ferramentas gratuitas que qualquer negócio de São Mateus pode começar a usar hoje — sem curva de aprendizado nem mensalidade.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que é CRM e por que negócios locais precisam disso</h2>
            <p>CRM não é necessariamente um software caro. É a prática de registrar, organizar e acompanhar o relacionamento com cada lead e cliente de forma sistemática. O objetivo é simples: nenhum lead cai no esquecimento, cada contato tem um histórico, cada próxima ação está definida.</p>
            <p>Para negócios em São Mateus que dependem de WhatsApp como canal principal de vendas, a ausência de CRM cria um problema específico: o histórico fica misturado nas conversas do WhatsApp, sem nenhuma visão consolidada de quantos leads estão em andamento, em que etapa cada um está e o que falta para fechar.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Opção 1: Planilha do Google (gratuita, funciona para até ~50 leads/mês)</h2>
            <p>A ferramenta mais simples e mais subestimada. Uma planilha bem estruturada resolve o problema de rastreamento de leads para a maioria dos negócios pequenos sem custo nenhum.</p>
            <p>Colunas básicas que o Estúdio 2 Marketing recomenda:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nome do lead</strong> e canal de origem (Instagram, indicação, tráfego pago)</li>
              <li><strong>Status</strong>: Novo, Em negociação, Proposta enviada, Fechado, Perdido</li>
              <li><strong>Próxima ação</strong>: o que fazer e quando (ex: "Ligar na quarta-feira")</li>
              <li><strong>Valor potencial</strong> do negócio</li>
              <li><strong>Observações</strong>: o que o lead disse, objeções, contexto</li>
            </ul>
            <p>Com filtros por status, você vê instantaneamente todos os leads em negociação, quantos têm proposta pendente e quais precisam de follow-up hoje. É simples, mas funciona — desde que seja atualizado consistentemente.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Opção 2: Trello ou Notion (gratuito, visual, fácil de adaptar)</h2>
            <p>Para quem prefere uma visualização em quadro (estilo kanban), o Trello e o Notion têm planos gratuitos robustos. Você cria colunas para cada etapa do funil — Novo Lead, Contato Feito, Proposta Enviada, Fechado, Perdido — e move cada lead entre as colunas conforme avança.</p>
            <p>O Trello é mais simples e rápido de configurar. O Notion permite mais customização mas tem uma curva de aprendizado maior. Para equipes pequenas (1–3 pessoas), o Trello gratuito é suficiente. Para quem já usa Notion para outras coisas no negócio, faz sentido centralizar ali também.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Opção 3: WhatsApp Business com etiquetas (para quem ainda não quer sair do WhatsApp)</h2>
            <p>O WhatsApp Business — versão gratuita para empresas — tem um recurso de etiquetas que permite marcar conversas com status customizados: "Novo lead", "Em proposta", "Fechado", "Seguir". Não é um CRM real, mas é um primeiro passo para quem tem resistência a sair do WhatsApp.</p>
            <p>Limitações claras: não tem visão de pipeline, não tem histórico estruturado, e as etiquetas ficam dentro do app sem possibilidade de exportar. Use como paliativo enquanto implementa uma solução mais robusta, não como solução definitiva.</p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">A ferramenta não resolve o problema — o processo resolve</h2>
            <p>Um CRM sofisticado nas mãos de um time sem processo de follow-up definido é uma planilha cara. O que gera resultado é ter claro: quem contata o lead e quando, qual é o script de abordagem, quantas tentativas se faz antes de marcar como perdido, o que acontece com o lead que disse "vou pensar".</p>
            <p>Esse processo — antes e independente de qualquer ferramenta — é o que o Estúdio 2 Marketing trabalha no serviço de <Link to="/vendas-e-follow-up" className="text-primary hover:underline">vendas e follow-up para pequenas empresas</Link>. A ferramenta vem depois, como suporte ao processo já estruturado.</p>
          </div>

          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer estruturar seu processo de vendas em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing ajuda a organizar o processo comercial para parar de perder leads por desorganização.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-crm-negocio-local", "estruturar o processo de vendas da minha empresa")} target="_blank" rel="noopener noreferrer">
                Quero organizar meu processo de vendas <ArrowRight className="ml-2 h-4 w-4" />
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
