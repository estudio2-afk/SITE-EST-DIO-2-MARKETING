import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Gauge,
  MessageCircle,
  Search,
  SearchCheck,
  Smartphone,
  Sparkles,
  Tag,
  Clock,
  Megaphone,
  ZoomIn,
} from "lucide-react";
import { LogoMark } from "@/components/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { setSEO, SITE_URL, injectSchema } from "@/lib/seo";
import { WHATSAPP } from "@/lib/contact";
import "./portfolio.css";

const PATH = "/portfolio";
const TITLE = "Landing Page com SEO em 48h para Agências | Estúdio 2";
const DESCRIPTION =
  "Portfólio de landing pages com SEO e dados estruturados, entregues em 48h para agências. Veja projetos na primeira página do Google em São Mateus.";
const OG_PORTFOLIO = `${SITE_URL}/portfolio/og-portfolio.jpg`;

const waPortfolio = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`[Portfólio] ${msg}`)}`;
const WA_TESTAR = waPortfolio(
  "Olá, Raniel! Vi seu portfólio e quero testar a landing page com um cliente meu."
);
const WA_DUVIDA = waPortfolio("Olá, Raniel! Vi seu portfólio e tenho uma dúvida.");

type Prova = { src: string; busca: string };
type Case = {
  slug: string;
  segmento: string;
  nome: string;
  url: string;
  dominio: string;
  descricao: string;
  selo?: string;
  buscas?: string[];
  provas?: Prova[];
};

const CASES: Case[] = [
  {
    slug: "enzo",
    segmento: "Consultoria · Consórcios",
    nome: "Enzo Thomazini",
    url: "https://thomaziniconsorcios.com.br",
    dominio: "thomaziniconsorcios.com.br",
    descricao:
      "Landing page de consultor de consórcios credenciado Embracon, com atendimento em São Mateus e online.",
    selo: "1ª página do Google e citado na resposta da IA do Google",
    buscas: [
      "consultor consórcios são mateus",
      "especialista em consórcios são mateus",
      "especialista em consórcios perto de mim",
    ],
    provas: [
      { src: "/portfolio/serp/enzo-1.webp", busca: "consultor consórcios são mateus" },
      { src: "/portfolio/serp/enzo-3.webp", busca: "especialista em consórcios são mateus" },
      { src: "/portfolio/serp/enzo-2.webp", busca: "especialista em consórcios perto de mim" },
    ],
  },
  {
    slug: "flordcanela",
    segmento: "Moda feminina · Loja",
    nome: "Flor D'Canela",
    url: "https://flordcanela.com.br",
    dominio: "flordcanela.com.br",
    descricao:
      "Landing page de loja de moda feminina no Centro de São Mateus, com a coleção e o caminho até a loja.",
    selo: "1ª página do Google",
    buscas: ["moda feminina são mateus", "loja de roupa feminina são mateus"],
    provas: [{ src: "/portfolio/serp/flordcanela.webp", busca: "moda feminina são mateus" }],
  },
  {
    slug: "estudio2",
    segmento: "Agência de marketing",
    nome: "Estúdio 2 Marketing",
    url: "https://estudio2marketing.com.br",
    dominio: "estudio2marketing.com.br",
    descricao: "Nossa própria agência, construída com o mesmo padrão que eu entrego.",
    selo: "1ª página do Google e primeira agência citada na resposta da IA do Google",
    buscas: ["agência de marketing são mateus"],
    provas: [{ src: "/portfolio/serp/estudio2.webp", busca: "agência de marketing são mateus" }],
  },
  {
    slug: "joici",
    segmento: "Saúde e estética",
    nome: "Dra. Joici Escarabelle",
    url: "https://drajoiciescarabelle.com.br",
    dominio: "drajoiciescarabelle.com.br",
    descricao:
      "Landing page de biomédica esteta, com foco em autoridade e no agendamento da avaliação.",
  },
  {
    slug: "raquel",
    segmento: "Fotografia",
    nome: "Raquel Cravo Fotografia",
    url: "https://raquelcravofotografia.com.br",
    dominio: "raquelcravofotografia.com.br",
    descricao:
      "Landing page de fotógrafa de casal, gestante e família, com os ensaios e o agendamento pelo WhatsApp.",
  },
];

const PROVA = [
  { titulo: "1ª página do Google", texto: "Projetos na primeira página pelo termo do nicho na cidade" },
  { titulo: "Citada pela IA do Google", texto: "Projetos que aparecem na resposta da IA, acima dos resultados" },
  { titulo: "48h", texto: "De prazo, a partir do material completo" },
];

const FEATURES = [
  { icon: Search, titulo: "SEO on-page", texto: "Título, descrição, títulos internos e URL pensados para o termo que o cliente pesquisa." },
  { icon: Code2, titulo: "Dados estruturados", texto: "Schema do negócio e das perguntas frequentes, para o Google entender quem é e onde atende." },
  { icon: Smartphone, titulo: "Mobile-first", texto: "Desenhada primeiro para o celular, onde está quase todo o público local." },
  { icon: MessageCircle, titulo: "Botão de WhatsApp", texto: "Todos os botões levam ao WhatsApp do cliente com a mensagem pronta." },
  { icon: Gauge, titulo: "Velocidade", texto: "Página leve, imagens otimizadas e publicada com HTTPS." },
  { icon: SearchCheck, titulo: "Search Console", texto: "Site cadastrado no Google e sitemap enviado na entrega." },
];

const PASSOS = [
  { titulo: "Você fecha com o cliente", texto: "A venda é sua. Você define o preço e a relação com o cliente." },
  { titulo: "Envia o briefing", texto: "Pelo link do briefing: dados do negócio, serviços, logo e fotos. Leva cerca de 10 minutos." },
  { titulo: "Em 48h a página está no ar", texto: "Contadas a partir do material completo. Você recebe a prévia e pede os ajustes em uma rodada." },
  { titulo: "Você entrega com a sua marca", texto: "A página vai sem crédito nosso. Para o cliente, quem entregou foi você." },
];

const VANTAGENS = [
  { icon: Tag, titulo: "Sua marca, não a minha", texto: "Nenhuma menção ao Estúdio 2 no site, no código ou no rodapé." },
  { icon: Clock, titulo: "Prazo que você pode prometer", texto: "48h a partir do material completo. Dá para colocar na sua proposta." },
  { icon: Megaphone, titulo: "Você foca em vender e no tráfego", texto: "A produção da página sai da sua operação, e o seu time segue no que dá resultado." },
];

const FAQS = [
  {
    q: "Quando começa a contar o prazo de 48h?",
    a: "Quando o material estiver completo: briefing preenchido, logo e pelo menos 5 fotos reais. Se faltar algo, eu aviso o que é e o prazo começa quando chegar.",
  },
  {
    q: "O que eu preciso enviar?",
    a: "Tudo pelo link do briefing: dados do negócio, contato, serviços, diferenciais, logo e fotos. Dá para preencher pelo celular em cerca de 10 minutos.",
  },
  {
    q: "E o domínio do site?",
    a: "Se o cliente já tem domínio, eu conecto. Se não tem, conduzo o registro junto com você, em nome do cliente. A anuidade do domínio é paga à parte.",
  },
  {
    q: "Quantos ajustes estão incluídos?",
    a: "Uma rodada de ajustes, enviada em um único pedido depois da prévia. Ajustes além disso são combinados à parte.",
  },
  {
    q: "Aparece o nome do Estúdio 2 no site?",
    a: "Não. A página vai sem crédito nosso no rodapé, no código ou nos metadados.",
  },
];

/* ---------- utilidades de animação ---------- */

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useInView<T extends Element>(once = true, rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        // Também revela o que já passou acima da tela (rolagem rápida ou âncora).
        if (entry.isIntersecting || (once && entry.boundingClientRect.top < 0)) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin]);
  return [ref, inView] as const;
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`pf-reveal ${inView ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function ScrollingScreen({
  src,
  alt,
  width,
  height,
  className,
  duration = 22,
  eager = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  duration?: number;
  eager?: boolean;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(false, "200px 0px");
  const [full, setFull] = useState(false);
  const poster = src.replace(/\.webp$/, "-poster.webp");

  // Mostra primeiro o pôster leve (só o topo). O print completo, que rola, só
  // é baixado quando o mockup chega perto da tela e depois do carregamento da página.
  useEffect(() => {
    if (!inView || full || prefersReducedMotion()) return;
    let cancelled = false;
    const start = () => {
      const img = new Image();
      img.src = src;
      img
        .decode()
        .then(() => !cancelled && setFull(true))
        .catch(() => {});
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("load", start);
    };
  }, [inView, full, src]);

  return (
    <div
      ref={ref}
      className={`pf-screen ${inView && full ? "is-playing" : ""} ${className}`}
      style={{ ["--pf-duration" as string]: `${duration}s` }}
    >
      <img
        src={full ? src : poster}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : undefined}
      />
    </div>
  );
}

function BrowserMockup({ src, dominio, alt, eager }: { src: string; dominio: string; alt: string; eager?: boolean }) {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1b2234] ring-1 ring-white/10 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-3 py-2 bg-[#141a29] border-b border-white/5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="flex-1 truncate text-center text-[11px] text-white/50 bg-white/5 rounded-md py-1 px-2">
          {dominio}
        </span>
      </div>
      <ScrollingScreen src={src} alt={alt} width={1200} height={6000} className="aspect-[16/10]" eager={eager} />
    </div>
  );
}

function PhoneMockup({ src, alt, eager }: { src: string; alt: string; eager?: boolean }) {
  return (
    <div className="rounded-[1.6rem] p-1.5 bg-[#0b0f1a] ring-1 ring-white/15 shadow-2xl shadow-black/50">
      <ScrollingScreen src={src} alt={alt} width={600} height={6000} className="aspect-[9/19] rounded-[1.25rem]" duration={18} eager={eager} />
    </div>
  );
}

function SerpDialog({ prova, onClose }: { prova: Prova | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (prova && !d.open) d.showModal();
    if (!prova && d.open) d.close();
  }, [prova]);
  return (
    <dialog
      ref={ref}
      className="pf-dialog"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-label={prova ? `Print da busca no Google: ${prova.busca}` : undefined}
    >
      {prova && (
        <figure className="bg-[#0f1629] rounded-2xl overflow-hidden ring-1 ring-white/10">
          <img src={prova.src} alt={`Resultado do Google para "${prova.busca}"`} className="w-full h-auto max-h-[78vh] object-contain" />
          <figcaption className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-white/70">
            <span>
              Busca: “{prova.busca}” · São Mateus, out/2026
            </span>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 font-medium"
            >
              Fechar
            </button>
          </figcaption>
        </figure>
      )}
    </dialog>
  );
}

function CaseBlock({ c, index, onProva }: { c: Case; index: number; onProva: (p: Prova) => void }) {
  const reverse = index % 2 === 1;
  return (
    <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <Reveal className={`lg:col-span-7 relative ${reverse ? "lg:order-2" : ""}`}>
        {/* Celular: só o mockup de celular, legível. A partir de sm: navegador + celular. */}
        <div className="sm:hidden mx-auto w-[62%] max-w-[240px]">
          <PhoneMockup src={`/portfolio/${c.slug}-mobile.webp`} alt={`Site ${c.nome} no celular`} />
        </div>
        <div className="hidden sm:block">
          <BrowserMockup src={`/portfolio/${c.slug}-desktop.webp`} dominio={c.dominio} alt={`Página do site ${c.nome}`} />
          <div className="absolute -bottom-6 w-[23%] max-w-[150px] right-[-2%]">
            <PhoneMockup src={`/portfolio/${c.slug}-mobile.webp`} alt={`Versão para celular do site ${c.nome}`} />
          </div>
        </div>
      </Reveal>

      <Reveal className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`} delay={120}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">{c.segmento}</p>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">{c.nome}</h3>
        <p className="text-white/70 leading-relaxed mb-6">{c.descricao}</p>

        {c.selo && c.provas && (
          <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4 mb-6">
            <p className="flex items-start gap-2 font-display font-semibold text-white">
              <Sparkles className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden="true" />
              {c.selo}
            </p>
            <p className="text-xs text-white/50 mt-2 leading-relaxed">
              {c.buscas?.map((b) => `“${b}”`).join(" · ")} · busca em São Mateus, out/2026
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {c.provas.map((p) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => onProva(p)}
                  className="group relative w-28 h-16 rounded-lg overflow-hidden ring-1 ring-white/15 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Ver print da busca “${p.busca}”`}
                >
                  <img src={p.src} alt="" loading="lazy" width={1590} height={1078} className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10">
                    <ZoomIn className="h-4 w-4 text-white" aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <a
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/25 hover:ring-primary hover:text-primary text-white px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          Ver site no ar <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Reveal>
    </article>
  );
}

function Timeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setActive(PASSOS.length);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            const i = Number((e.target as HTMLElement).dataset.step);
            setActive((a) => Math.max(a, i + 1));
          }
        });
      },
      { rootMargin: "0px 0px -35% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const pct = Math.max(0, ((active - 1) / (PASSOS.length - 1)) * 100);
  return (
    <ol className="relative max-w-2xl mx-auto">
      <span className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-border" aria-hidden="true">
        <span className="pf-timeline-fill absolute left-0 top-0 w-full bg-primary" style={{ height: `${pct}%` }} />
      </span>
      {PASSOS.map((p, i) => {
        const on = i < active;
        return (
          <li
            key={p.titulo}
            ref={(el) => (refs.current[i] = el)}
            data-step={i}
            className="relative flex gap-5 pb-10 last:pb-0"
          >
            <span
              className={`pf-step-dot relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display font-bold ${
                on ? "bg-primary text-white shadow-[0_0_0_6px_hsl(var(--primary)/0.15)]" : "bg-muted text-muted-foreground"
              }`}
            >
              {i + 1}
            </span>
            <div className="pt-1.5">
              <h3 className="font-display font-bold text-lg text-foreground">{p.titulo}</h3>
              <p className="text-slate-600 leading-relaxed mt-1">{p.texto}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- página ---------- */

export default function Portfolio() {
  const [prova, setProva] = useState<Prova | null>(null);

  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH, image: OG_PORTFOLIO });
    const scripts = [
      injectSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Landing page com SEO em 48h para agências",
        serviceType: "Criação de landing page com SEO",
        description: DESCRIPTION,
        provider: { "@type": "Organization", name: "Estúdio 2 Marketing", url: SITE_URL },
        areaServed: { "@type": "Country", name: "Brasil" },
        url: `${SITE_URL}${PATH}`,
      }),
      injectSchema({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Portfólio", item: `${SITE_URL}${PATH}` },
        ],
      }),
      injectSchema({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    ];
    return () => scripts.forEach((s) => s.remove());
  }, []);

  return (
    <div className="bg-[#0b1020] text-white min-h-screen">
      {/* Topo enxuto */}
      <header className="sticky top-0 z-40 bg-[#0b1020]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 shrink-0" aria-label="Estúdio 2 Marketing — site principal">
            <LogoMark size={30} variant="white" />
            <span className="font-display font-bold text-base whitespace-nowrap">
              Estúdio <span className="text-primary">2</span>
            </span>
          </a>
          <a
            href={WA_DUVIDA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-[#ff7a1f] text-[#0b1020] px-4 py-2 text-sm font-semibold transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section aria-labelledby="pf-hero" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="pf-glow absolute -top-40 right-[-10%] w-[620px] h-[620px] rounded-full bg-primary/25 blur-[130px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[420px] h-[420px] rounded-full bg-primary/10 blur-[110px]" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/15 ring-1 ring-primary/30 text-[#ff9a52] px-3 py-1 text-xs font-semibold mb-6">
                Landing page com SEO · entrega em 48h
              </p>
              <h1 id="pf-hero" className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl leading-[1.05] mb-6">
                Landing page que trabalha:{" "}
                <span className="text-primary">aparece, ranqueia e converte.</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                Você fecha com o cliente, eu entrego a página pronta para ranquear no Google em 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_TESTAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-[#ff7a1f] text-[#0b1020] px-6 py-3.5 font-semibold transition-colors"
                >
                  Vamos testar com um cliente seu? <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-full ring-1 ring-white/25 hover:bg-white/5 text-white px-6 py-3.5 font-semibold"
                >
                  Ver projetos
                </a>
              </div>
            </div>

            <div className="relative pr-6 sm:pr-10 pb-6">
              <BrowserMockup src="/portfolio/enzo-desktop.webp" dominio="thomaziniconsorcios.com.br" alt="Site do Enzo Thomazini rolando dentro de um navegador" eager />
              <div className="absolute right-0 bottom-0 w-[30%] max-w-[170px]">
                <PhoneMockup src="/portfolio/flordcanela-mobile.webp" alt="Site da Flor D'Canela no celular" eager />
              </div>
            </div>
          </div>
        </section>

        {/* Faixa de prova */}
        <section aria-label="Resultados" className="border-y border-white/10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8 text-center">
            {PROVA.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 100}>
                <p className="font-display font-bold text-2xl lg:text-3xl text-primary">{p.titulo}</p>
                <p className="text-white/70 mt-2 text-sm">{p.texto}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" aria-labelledby="pf-projetos" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Projetos</p>
            <h2 id="pf-projetos" className="font-display font-bold text-3xl md:text-4xl leading-tight">
              Páginas no ar, de negócios reais
            </h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              Toque nos prints para ver a busca no Google de cada projeto.
            </p>
          </Reveal>
          <div className="space-y-24 md:space-y-32">
            {CASES.map((c, i) => (
              <CaseBlock key={c.slug} c={c} index={i} onProva={setProva} />
            ))}
          </div>
        </section>

        {/* O que vem em toda página */}
        <section aria-labelledby="pf-features" className="bg-white text-foreground">
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
            <Reveal className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Em toda página</p>
              <h2 id="pf-features" className="font-display font-bold text-3xl md:text-4xl leading-tight">
                Feita para aparecer no Google e gerar contato
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <Reveal key={f.titulo} delay={i * 70}>
                  <div className="pf-feature h-full rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
                    <span className="pf-feature-icon inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <f.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display font-bold text-lg mb-1">{f.titulo}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.texto}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section aria-labelledby="pf-como" className="bg-muted text-foreground">
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Como funciona a parceria</p>
              <h2 id="pf-como" className="font-display font-bold text-3xl md:text-4xl leading-tight">
                Você vende. Eu entrego no prazo.
              </h2>
            </Reveal>
            <Timeline />
          </div>
        </section>

        {/* Para agências */}
        <section aria-labelledby="pf-agencias" className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Para agências</p>
            <h2 id="pf-agencias" className="font-display font-bold text-3xl md:text-4xl leading-tight">
              Mais um serviço para vender, sem crescer o time
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {VANTAGENS.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 90}>
                <div className="h-full rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6">
                  <v.icon className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-display font-bold text-lg mb-2">{v.titulo}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{v.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="pf-faq" className="bg-white text-foreground">
          <div className="max-w-3xl mx-auto px-4 py-20 md:py-24">
            <Reveal className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Perguntas frequentes</p>
              <h2 id="pf-faq" className="font-display font-bold text-3xl md:text-4xl leading-tight">Antes de testar</h2>
            </Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`pf-faq-${i}`}>
                  <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA final */}
        <section aria-labelledby="pf-cta" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="pf-glow absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-primary/20 blur-[120px]" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 py-20 md:py-28 text-center">
            <Reveal>
              <img
                src="/raniel.jpg"
                alt="Raniel Benigno, fundador do Estúdio 2 Marketing"
                width={96}
                height={96}
                loading="lazy"
                className="w-24 h-24 rounded-full object-cover object-top mx-auto ring-2 ring-primary/60 mb-4"
              />
              <p className="text-sm text-white/60 mb-8">Raniel Benigno · Estúdio 2 Marketing</p>
              <h2 id="pf-cta" className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6">
                Vamos testar com um <span className="text-primary">cliente seu?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Me chame no WhatsApp, me conte do cliente e eu explico como começamos.
              </p>
              <a
                href={WA_TESTAR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-[#ff7a1f] text-[#0b1020] px-8 py-4 text-lg font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 text-center text-xs text-white/60 px-4 py-6 pb-24 md:pb-6">
        © {new Date().getFullYear()} Estúdio 2 Marketing · CNPJ 62.583.360/0001-10 ·{" "}
        <a href="/" className="underline hover:text-white">estudio2marketing.com.br</a>
      </footer>

      {/* WhatsApp flutuante no celular */}
      <a
        href={WA_TESTAR}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="md:hidden fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-[#0b1020] shadow-lg shadow-black/40"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>

      <SerpDialog prova={prova} onClose={() => setProva(null)} />
    </div>
  );
}
