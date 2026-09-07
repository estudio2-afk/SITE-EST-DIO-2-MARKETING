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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { setSEO, SITE_URL, injectSchema } from "@/lib/seo";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const TITLE = "Blog | Marketing Digital para Empresas em São Mateus - ES";
const DESCRIPTION =
  "Artigos práticos sobre tráfego pago, social media e processo de vendas para empresas de São Mateus. Conteúdo do Estúdio 2 Marketing para ajudar seu negócio a crescer com previsibilidade.";
const PATH = "/blog";

export const posts = [
  // --- Tráfego Pago e Vendas ---
  {
    slug: "trafego-pago-sao-mateus-vendas",
    titulo: "Como escalar as vendas da sua empresa em São Mateus com Tráfego Pago",
    resumo: "Entenda como empresas locais estão usando Meta Ads para criar um fluxo constante de clientes — sem depender de indicação ou sazonalidade.",
    categoria: "Tráfego Pago e Vendas",
    leitura: "7 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  {
    slug: "trafego-pago-vs-indicacao",
    titulo: "Tráfego Pago vs Indicação: como ter previsibilidade de vendas",
    resumo: "Indicação é boa mas imprevisível. Tráfego pago é controlável mas exige investimento. Como combinar os dois para vender com previsibilidade em São Mateus.",
    categoria: "Tráfego Pago e Vendas",
    leitura: "6 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  {
    slug: "anuncios-publico-local-es",
    titulo: "Como anunciar para o público local no ES: segmentação no Meta Ads",
    resumo: "Segmentação geográfica no Meta Ads para empresas do Espírito Santo. Como anunciar apenas para quem pode comprar de você em São Mateus e região.",
    categoria: "Tráfego Pago e Vendas",
    leitura: "6 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  {
    slug: "google-ads-sao-mateus",
    titulo: "Guia de Google Ads para Empresas em São Mateus",
    resumo: "Como o Google Ads funciona para negócios locais em São Mateus e como estruturar campanhas que geram clientes reais — não apenas cliques.",
    categoria: "Tráfego Pago e Vendas",
    leitura: "7 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  // --- Social Media Estratégico ---
  {
    slug: "social-media-estrategico-sao-mateus",
    titulo: "Social Media para empresas em São Mateus: como sair dos 'postzinhos' e criar autoridade",
    resumo: "Postar todo dia sem estratégia é trabalho jogado fora. Veja como construir posicionamento real no Instagram que atrai clientes e gera vendas previsíveis.",
    categoria: "Social Media Estratégico",
    leitura: "6 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  {
    slug: "autoridade-digital-es",
    titulo: "Como construir autoridade digital no Espírito Santo",
    resumo: "A diferença entre ser conhecido e ser referência. Como negócios do ES constroem autoridade digital e se tornam a primeira opção no seu segmento.",
    categoria: "Social Media Estratégico",
    leitura: "7 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  {
    slug: "checklist-instagram-local",
    titulo: "Checklist de Instagram para Empresas de São Mateus",
    resumo: "Checklist completo para auditar o Instagram da sua empresa: bio, conteúdo, engajamento, integração com vendas e análise de dados.",
    categoria: "Social Media Estratégico",
    leitura: "5 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  {
    slug: "social-media-crescimento",
    titulo: "Por que seu Instagram não cresce: erros e soluções para empresas de São Mateus",
    resumo: "Os erros mais comuns que travam o crescimento do Instagram de negócios locais em São Mateus — e o que fazer em vez de cada um deles.",
    categoria: "Social Media Estratégico",
    leitura: "7 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  // --- Processos de Vendas/CRM ---
  {
    slug: "vendas-follow-up-negocios-locais",
    titulo: "Por que sua empresa em São Mateus perde vendas (e como o follow-up resolve)",
    resumo: "Mais de 80% das vendas acontecem após o 5º contato — mas a maioria das empresas abandona o lead no 1º ou 2º. Saiba como estruturar um follow-up que fecha negócios.",
    categoria: "Processos de Vendas/CRM",
    leitura: "8 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  {
    slug: "guia-follow-up-marketing",
    titulo: "Guia de follow-up para empresas em São Mateus: como não perder leads",
    resumo: "Scripts e sequências de follow-up para converter mais leads sem precisar de mais anúncios. A sequência que o Estúdio 2 Marketing usa com clientes locais.",
    categoria: "Processos de Vendas/CRM",
    leitura: "7 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
  {
    slug: "crm-negocio-local",
    titulo: "CRM para pequenos negócios: como organizar leads sem gastar nada",
    resumo: "Ferramentas gratuitas e método prático para organizar leads em São Mateus sem pagar por CRM. Planilha, Trello, WhatsApp Business — qual usar e como.",
    categoria: "Processos de Vendas/CRM",
    leitura: "6 min",
    data: "2026-09-07",
    dataFormatada: "7 de setembro de 2026",
  },
];

const categorias = [
  {
    nome: "Tráfego Pago e Vendas",
    desc: "Meta Ads, Google Ads, campanhas locais e estratégias para gerar clientes com anúncios pagos.",
  },
  {
    nome: "Social Media Estratégico",
    desc: "Instagram, conteúdo, linha editorial e posicionamento digital para empresas de São Mateus.",
  },
  {
    nome: "Processos de Vendas/CRM",
    desc: "Follow-up, funil comercial, CRM e processo de vendas para empresas que querem previsibilidade.",
  },
];

export default function Blog() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const scripts: HTMLScriptElement[] = [];

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Blog Estúdio 2 Marketing",
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        publisher: {
          "@type": "Organization",
          name: "Estúdio 2 Marketing",
          url: SITE_URL,
        },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.titulo,
          url: `${SITE_URL}/blog/${p.slug}`,
          datePublished: p.data,
        })),
      })
    );

    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}${PATH}` },
        ],
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
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-foreground py-16 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Marketing Digital · São Mateus, ES
          </Badge>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            Blog do <span className="text-primary">Estúdio 2 Marketing</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Conteúdo prático sobre tráfego pago, social media e processos de vendas para empresas que querem crescer com previsibilidade em São Mateus.
          </p>
        </div>
      </section>

      {/* Categorias */}
      <section className="bg-muted border-b border-border py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Categorias</p>
          <div className="grid md:grid-cols-3 gap-4">
            {categorias.map((c) => (
              <div key={c.nome} className="bg-white rounded-xl p-4 border border-border">
                <p className="font-display font-semibold text-foreground text-sm mb-1">{c.nome}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8">
            Posts publicados
          </h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.slug} className="border border-border hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3 items-center mb-3">
                    <Badge variant="secondary" className="text-xs">{post.categoria}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {post.dataFormatada}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.leitura} de leitura
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2 leading-snug">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.titulo}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.resumo}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Ler artigo <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Próximos posts */}
          <div className="mt-10 p-6 bg-muted rounded-2xl border border-border text-center">
            <p className="font-display font-semibold text-foreground mb-1">Mais conteúdo a caminho</p>
            <p className="text-sm text-muted-foreground">
              Publicamos 2 artigos por semana sobre marketing digital para empresas de São Mateus. Fique de olho.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  );
}
