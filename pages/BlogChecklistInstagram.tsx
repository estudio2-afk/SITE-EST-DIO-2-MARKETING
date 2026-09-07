import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { setSEO, SITE_URL, OG_IMAGE, injectSchema } from "@/lib/seo";
import { waLink } from "@/lib/contact";
import { ArrowRight, Calendar, Clock, CheckCircle2 } from "lucide-react";

const SLUG = "checklist-instagram-local";
const TITLE = "Checklist de Instagram para Empresas de São Mateus | Estúdio 2 Marketing";
const DESCRIPTION = "Checklist completo para avaliar e otimizar o Instagram da sua empresa em São Mateus. Bio, conteúdo, engajamento e integração com vendas — criado pelo Estúdio 2 Marketing.";
const PATH = `/blog/${SLUG}`;
const DATA = "2026-09-07";

const faqs = [
  {
    q: "Com que frequência devo revisar o checklist do meu Instagram?",
    a: "O Estúdio 2 Marketing recomenda uma revisão completa a cada 3 meses. A bio e as informações de contato devem ser conferidas mensalmente — especialmente se houver mudança de horário, endereço ou serviço. O desempenho dos conteúdos (o que funciona e o que não funciona) deve ser avaliado semanalmente nos relatórios de Instagram Insights.",
  },
  {
    q: "Quantos posts preciso ter no feed para meu perfil parecer profissional?",
    a: "Não existe um número mínimo fixo, mas ter pelo menos 9 a 12 publicações no feed antes de promover o perfil é importante para que o visitante tenha uma amostra de conteúdo para avaliar. Um feed vazio ou com 2 ou 3 publicações passa a impressão de que a empresa está inativa. O Estúdio 2 Marketing costuma preparar um lote de conteúdo inicial antes de lançar o perfil de um novo cliente.",
  },
  {
    q: "O nome de usuário do Instagram precisa ser idêntico ao nome da empresa?",
    a: "Não precisa ser idêntico, mas precisa ser reconhecível e fácil de lembrar. O ideal é que contenha o nome da marca ou um termo relacionado ao seu segmento — evite números aleatórios, pontos excessivos ou caracteres especiais. Um username limpo como @estudio2marketing é mais fácil de indicar verbalmente do que @estudio.2.mkt.oficial.oficial.",
  },
];

const checklist = [
  {
    categoria: "Bio e configuração do perfil",
    itens: [
      "Conta configurada como Perfil Profissional ou Conta Comercial",
      "Foto de perfil com logo ou rosto reconhecível — sem cortes ou baixa resolução",
      "Nome de usuário limpo, sem pontos ou underlines desnecessários",
      "Nome de exibição inclui nome da empresa E palavra-chave do segmento",
      "Bio explica claramente o que a empresa faz e para quem",
      "Bio tem chamada para ação explícita (ex: 'Agende pelo link abaixo')",
      "Link na bio funciona e leva para WhatsApp, site ou página de serviço",
      "Botão de contato (WhatsApp, e-mail ou telefone) configurado",
    ],
  },
  {
    categoria: "Conteúdo e estratégia editorial",
    itens: [
      "Existe uma linha editorial definida — não publica o que aparecer na hora",
      "Mix de formatos: reels + carrossel + stories semanalmente",
      "Pelo menos 1 conteúdo por semana é de autoridade (educa ou informa o cliente)",
      "Pelo menos 1 conteúdo por semana é de prova social (depoimento, resultado, bastidor)",
      "Legenda tem mais de 3 linhas — posts com texto curto engajam menos",
      "Primeiro comentário ou legenda tem 3 a 5 hashtags relevantes",
      "Reels têm legenda nas primeiras telas (muitas pessoas assistem sem áudio)",
      "Stories são publicados pelo menos 3 vezes por semana",
    ],
  },
  {
    categoria: "Engajamento e relacionamento",
    itens: [
      "Respostas a comentários são feitas em até 24 horas",
      "Mensagens diretas (DMs) são respondidas em até 1 hora no horário comercial",
      "O perfil interage com posts de clientes que marcam a empresa",
      "Stories incluem recursos interativos pelo menos 1 vez por semana (enquete, caixa de perguntas)",
    ],
  },
  {
    categoria: "Integração com processo de vendas",
    itens: [
      "Existe um processo definido para quando um lead chega pela DM",
      "O link na bio leva para o WhatsApp com mensagem pré-preenchida (não número vazio)",
      "Stories de conversão (com swipe up ou link) aparecem pelo menos 2 vezes por mês",
    ],
  },
  {
    categoria: "Análise de dados",
    itens: [
      "Instagram Insights é consultado semanalmente",
      "Os posts de melhor desempenho são analisados para entender o padrão",
      "A taxa de alcance de seguidores é monitorada (sinal de saúde do algoritmo)",
    ],
  },
];

export default function BlogChecklistInstagram() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "Article", headline: "Checklist de Instagram para Empresas de São Mateus", description: DESCRIPTION, url: `${SITE_URL}${PATH}`, datePublished: DATA, dateModified: DATA, image: OG_IMAGE, author: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL }, publisher: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` } }));
    scripts.push(injectSchema({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: "Checklist Instagram local", item: `${SITE_URL}${PATH}` }] }));
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
              <BreadcrumbItem><BreadcrumbPage>Checklist de Instagram</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <article className="section-padding bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <Badge variant="secondary" className="mb-4">Social Media Estratégico</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">Checklist de Instagram para Empresas de São Mateus</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />7 de setembro de 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />5 min de leitura</span>
              <span>Por <strong className="text-foreground">Estúdio 2 Marketing</strong></span>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed space-y-6">
            <p>Antes de avaliar se o Instagram da sua empresa está funcionando, é preciso saber se ele está configurado corretamente. Muitos perfis de negócios de São Mateus perdem clientes não porque o conteúdo é ruim, mas porque a bio não tem CTA, o link leva a lugar nenhum ou as DMs ficam horas sem resposta.</p>
            <p>O <strong><Link to="/" className="text-primary hover:underline">Estúdio 2 Marketing</Link></strong> preparou este checklist prático para você auditar o perfil da sua empresa agora. Marque o que está ok e corrija o que estiver faltando — são ajustes rápidos que fazem diferença real no resultado.</p>

            {checklist.map((bloco) => (
              <div key={bloco.categoria}>
                <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">{bloco.categoria}</h2>
                <ul className="space-y-2.5">
                  {bloco.itens.map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h2 className="font-display font-bold text-2xl text-foreground mt-10 mb-4">Como usar este checklist</h2>
            <p>Abra o perfil da sua empresa agora e vá item por item. Para cada ponto que você não cumpre, anote como tarefa para resolver esta semana. Não precisa resolver tudo de uma vez — priorize bio e link (impacto imediato em conversão) e frequência de conteúdo (impacto em alcance).</p>
            <p>Se você quiser ajuda para implementar uma estratégia completa de social media para sua empresa em São Mateus — além de simplesmente "otimizar o perfil" — o Estúdio 2 Marketing trabalha com produção de conteúdo, calendário editorial e gestão do perfil. Acesse a <Link to="/social-media-sao-mateus" className="text-primary hover:underline">página de social media estratégico</Link> para saber como funcionamos, ou leia o artigo <Link to="/blog/social-media-estrategico-sao-mateus" className="text-primary hover:underline">como sair dos postzinhos e criar autoridade</Link>.</p>
          </div>

          <div className="my-10 p-6 bg-foreground rounded-2xl text-center">
            <p className="font-display font-bold text-white text-xl mb-2">Quer um social media profissional para sua empresa em São Mateus?</p>
            <p className="text-white/70 text-sm mb-5">O Estúdio 2 Marketing cuida de todo o conteúdo — você aprova e foca no seu negócio.</p>
            <Button size="lg" asChild className="font-semibold">
              <a href={waLink("blog-checklist-instagram", "falar sobre social media para meu negócio")} target="_blank" rel="noopener noreferrer">
                Quero um perfil profissional <ArrowRight className="ml-2 h-4 w-4" />
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
