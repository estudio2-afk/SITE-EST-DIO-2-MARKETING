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

const SLUG = "vendas-follow-up-negocios-locais";
const TITLE = "Por que sua empresa em São Mateus perde vendas e como o follow-up resolve | Estúdio 2 Marketing";
const DESCRIPTION =
  "Mais de 80% das vendas acontecem após o 5º contato, mas a maioria das empresas desiste no 1º. Veja como estruturar um processo de follow-up para negócios de São Mateus que fecha mais vendas com os mesmos leads.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Fazer follow-up não incomoda o cliente?",
    a: "Depende de como é feito. Follow-up que parece insistência é aquele que repete 'você decidiu?' sem agregar valor. Follow-up estratégico adiciona uma informação nova a cada contato: um depoimento de cliente, a resposta a uma objeção comum, um benefício que não foi mencionado antes. Quando você entrega valor em cada mensagem, o cliente não sente como pressão — sente como cuidado. O Estúdio 2 Marketing ajuda a criar sequências de follow-up que soam naturais e respeitam o ritmo de decisão do cliente.",
  },
  {
    q: "Com quantas tentativas de follow-up devo desistir de um lead?",
    a: "A referência mais citada é 5 a 8 tentativas, dependendo do ciclo de venda e do ticket do produto. Para negócios locais em São Mateus com ciclo de venda curto (serviços do dia a dia), 4 a 5 contatos ao longo de 2 semanas costumam ser suficientes. Para vendas de maior complexidade, o follow-up pode se estender por 30 a 60 dias. O importante é ter um critério claro para quando arquivar o lead — e uma mensagem final honesta, que não feche portas para o futuro.",
  },
  {
    q: "Preciso de um CRM pago para fazer follow-up?",
    a: "Não. Para empresas de São Mateus que estão começando a estruturar o processo comercial, uma planilha com colunas (nome, contato, etapa, próximo passo, data) ou as etiquetas do WhatsApp Business já resolvem. O Estúdio 2 Marketing ajuda a criar essa estrutura simples antes de recomendar qualquer ferramenta paga. O processo importa mais do que a ferramenta: um bom processo em planilha bate um CRM caro mal usado.",
  },
];

export default function BlogVendasFollowUp() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Por que sua empresa em São Mateus perde vendas (e como o follow-up resolve)",
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
          { "@type": "ListItem", position: 3, name: "Vendas e Follow-Up em São Mateus", item: `${SITE_URL}${PATH}` },
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
              <BreadcrumbItem><BreadcrumbPage>Vendas e Follow-Up</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">

          {/* Header */}
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Processos de Vendas/CRM</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">
              Por que sua empresa em São Mateus perde vendas (e como o follow-up resolve)
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                7 de setembro de 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                8 min de leitura
              </span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          {/* Corpo */}
          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">

            <p>
              O lead chega pelo Instagram, manda mensagem no WhatsApp, pede informações sobre o serviço. Você responde, explica tudo, envia o preço. A pessoa diz "vou pensar" e some. Você espera um dia, dois, uma semana. Nada. E o lead vai para a pilha dos esquecidos.
            </p>

            <p>
              Esse ciclo acontece todos os dias em empresas de São Mateus de todos os segmentos. E a maioria dos donos atribui ao "mercado difícil" ou ao "cliente que não valoriza". A realidade, na maior parte dos casos, é mais simples: <strong>o lead não foi acompanhado</strong>.
            </p>

            <p>
              Este artigo do <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> explica por que o follow-up é a ferramenta de vendas mais subutilizada pelas empresas locais — e como estruturar um processo que fecha mais negócios com os mesmos leads que você já gera.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">O que acontece com os leads que não fecham na hora</h2>

            <p>
              Dados amplamente citados no mercado de vendas mostram que <strong>mais de 80% das vendas acontecem a partir do 5º contato</strong> com o prospect. Ao mesmo tempo, a maioria dos vendedores e empresários desiste após o 1º ou 2º contato sem resposta.
            </p>

            <p>
              Isso cria um cenário específico para empresas de São Mateus: você investe em marketing — seja <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">tráfego pago</Link>, seja social media — gera leads, faz o primeiro contato e abandona a maioria deles antes que eles estejam prontos para comprar.
            </p>

            <p>
              Esses leads não estão perdidos — <strong>estão abandonados</strong>. A diferença é importante: um lead perdido tomou a decisão de não comprar. Um lead abandonado apenas não recebeu atenção suficiente para tomar uma decisão. Recuperar esses leads com um processo de follow-up estruturado é, na prática, recuperar dinheiro que você já pagou para gerar.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Por que empresas de São Mateus não fazem follow-up</h2>

            <p>
              Não é por falta de vontade. Na maioria dos casos, é por falta de processo. Os motivos mais comuns que o Estúdio 2 Marketing encontra ao trabalhar com empresas locais:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Sem registro dos leads:</strong> as conversas ficam misturadas no WhatsApp sem organização. Não tem como acompanhar quem está em qual etapa.</li>
              <li><strong>"Não quero parecer insistente":</strong> o empresário sente desconforto em voltar a contatar o cliente, sem perceber que uma mensagem estratégica não é incômodo — é serviço.</li>
              <li><strong>Esquecimento puro:</strong> a rotina do dia a dia absorve a atenção, e os leads de 3 dias atrás são esquecidos enquanto os de hoje chegam.</li>
              <li><strong>Falta de script:</strong> não sabe o que falar na segunda, terceira ou quarta mensagem — então não envia nenhuma.</li>
            </ul>

            <p>
              O resultado é sempre o mesmo: o cliente que "ia pensar" comprou do concorrente que fez follow-up.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Como montar uma sequência de follow-up que funciona</h2>

            <p>
              Follow-up eficiente não é pressão — é cadência estratégica. Cada contato tem um objetivo diferente e precisa agregar valor, não apenas perguntar "você decidiu?". Veja a estrutura que o Estúdio 2 Marketing utiliza como base para empresas de São Mateus:
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Contato 1 — Em até 5 minutos após o lead entrar</h3>

            <p>
              A velocidade do primeiro contato é o fator que mais impacta a taxa de conversão. Leads respondidos em até 5 minutos têm chances de fechamento muito maiores do que leads respondidos em 1 hora. Configure uma mensagem automática de boas-vindas no WhatsApp Business para cobrir os momentos em que você não pode responder imediatamente — e priorize a resposta personalizada assim que possível.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Contato 2 — No dia seguinte, com valor adicional</h3>

            <p>
              Se o lead não respondeu ao primeiro contato, o segundo deve agregar algo novo. Um depoimento de cliente, um resultado recente, uma informação sobre o serviço que resolve uma dúvida comum. Não repita a primeira mensagem — acrescente algo que justifique o novo contato.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Contato 3 — Após 3 dias, quebrando uma objeção</h3>

            <p>
              O terceiro contato é o momento de antecipar e responder objeções. Se o cliente não fechou, geralmente é por preço, timing, dúvida sobre o resultado ou confiança no fornecedor. Crie uma mensagem para cada objeção principal do seu negócio e use este contato para abordá-la diretamente, sem esperar que o cliente levante.
            </p>

            <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">Contatos 4 e 5 — Espaçamento maior, reativação</h3>

            <p>
              Após o 3º contato sem resposta, aumente o espaçamento para 5–7 dias. O lead pode estar em um momento de vida que não favorece a decisão agora — mas daqui a 2 semanas, a situação pode ter mudado. Uma mensagem de reativação simples ("Ei, ainda penso que posso ajudar o seu negócio — quando for a hora certa, estarei aqui") mantém a porta aberta sem pressionar.
            </p>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Ferramentas que qualquer empresa de São Mateus pode usar</h2>

            <p>
              Você não precisa de software caro para fazer follow-up. O que você precisa é de um sistema — qualquer sistema que garanta que nenhum lead caia no esquecimento:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Etiquetas do WhatsApp Business:</strong> crie etiquetas para cada etapa (novo lead, proposta enviada, aguardando resposta, follow-up pendente, fechado, arquivado). Isso organiza o funil dentro do próprio WhatsApp.</li>
              <li><strong>Planilha simples:</strong> nome, contato, data do primeiro contato, etapa atual, próxima ação e data. Revisar essa planilha todo dia de manhã por 15 minutos é suficiente para não deixar nenhum lead esfriar.</li>
              <li><strong>CRM gratuito:</strong> HubSpot CRM, Trello ou Notion podem ser configurados como funil de vendas sem custo. O Estúdio 2 Marketing orienta a configuração para clientes que querem dar esse passo.</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Marketing que gera leads + processo comercial = previsibilidade de vendas</h2>

            <p>
              O marketing digital — seja <Link to="/trafego-pago-sao-mateus" className="text-primary hover:underline">tráfego pago</Link>, seja <Link to="/social-media-sao-mateus" className="text-primary hover:underline">social media</Link> — é a entrada do funil. Ele gera oportunidades. Mas oportunidade sem processo de vendas é como encher um balde furado: você coloca mais água, mas o nível não sobe.
            </p>

            <p>
              Empresas de São Mateus que querem <strong>previsibilidade de vendas</strong> — não mês bom e mês ruim dependendo de indicação — precisam das duas coisas: geração constante de leads pelo marketing e acompanhamento estruturado pelo processo comercial.
            </p>

            <p>
              É exatamente nesse ponto que o <Link to="/vendas-e-follow-up" className="text-primary hover:underline">serviço de vendas e follow-up do Estúdio 2 Marketing</Link> atua: estruturando o processo que transforma os leads gerados pelo marketing em clientes reais — sem deixar nenhum escapar por falta de acompanhamento.
            </p>

          </div>

          {/* CTA */}
          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer estruturar o follow-up do seu negócio em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing ajuda a montar o processo, o script e o controle para que você venda com previsibilidade.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-vendas-followup", "estruturar meu processo de follow-up")} target="_blank" rel="noopener noreferrer">
                Quero estruturar meu processo de vendas <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* FAQ */}
          <section aria-labelledby="vf-faq-heading">
            <h2 id="vf-faq-heading" className="font-display font-bold text-2xl text-foreground mb-6">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`vf-faq-${i}`}>
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
