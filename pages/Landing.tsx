import { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection, { services } from "@/components/ServicesSection";
import { CommercialGrowthSection } from "@/components/CommercialGrowthSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import LocationSection from "@/components/LocationSection";
import { CaseStudy } from "@/components/CaseStudy";
import Testimonials, { testimonials } from "@/components/Testimonials";
import { LeadForm } from "@/components/LeadForm";
import FAQ, { faqs } from "@/components/FAQ";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { setSEO, SITE_URL, OG_IMAGE } from "@/lib/seo";
import { processoPassos } from "@/components/ProcessSection";

const TITLE = "Estúdio 2 Marketing — Agência de Marketing Digital em São Mateus/ES";
const DESCRIPTION =
  "Ganhe mais clientes no digital em São Mateus e Guriri. Gestão de redes, reels, Meta Ads e sites com acompanhamento real, relatório mensal e resultados a partir do 3º mês.";

function injectSchema(schema: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(schema);
  document.head.appendChild(el);
  return el;
}

export default function Landing() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: "/" });

    const scripts: HTMLScriptElement[] = [];

    // a) FAQPage
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

    // b) BreadcrumbList
    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: `${SITE_URL}/`,
          },
        ],
      })
    );

    // c) WebPage
    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: TITLE,
        url: `${SITE_URL}/`,
        description: DESCRIPTION,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      })
    );

    // d) LocalBusiness (ProfessionalService)
    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Estúdio 2 Marketing",
        image: OG_IMAGE,
        description: DESCRIPTION,
        url: SITE_URL,
        telephone: "+5527997143078",
        email: "contato@estudio2marketing.com.br",
        priceRange: "R$ 1.000 - R$ 5.000",
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Mateus",
          addressRegion: "ES",
          postalCode: "29945390",
          addressCountry: "BR",
        },
        areaServed: [
          { "@type": "City", name: "São Mateus" },
          { "@type": "City", name: "Guriri" },
          { "@type": "City", name: "Jaguaré" },
          { "@type": "City", name: "Pedro Canário" },
          { "@type": "City", name: "Conceição da Barra" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Marketing Digital",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "12:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "14:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "12:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "13:00",
            closes: "14:00",
          },
        ],
        sameAs: [
          "https://instagram.com/estudio2marketing",
          "https://www.linkedin.com/company/est%C3%BAdio-2-marketing/",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: String(testimonials.length),
          bestRating: "5",
          worstRating: "1",
        },
        review: testimonials.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.nome },
          datePublished: t.data,
          reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
          reviewBody: t.texto,
        })),
      })
    );

    // e) HowTo (processo)
    scripts.push(
      injectSchema({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Como contratar o Estúdio 2 Marketing",
        description:
          "Do primeiro contato à publicação do conteúdo — processo simples e transparente.",
        step: processoPassos.map((p, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: p.titulo,
          text: p.descricao,
        })),
      })
    );

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <main>
      {/* Breadcrumb visual */}
      <div className="bg-muted border-b border-border py-2 px-4">
        <div className="container max-w-6xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Agência de Marketing Digital</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <Hero />
      <AboutSection />
      <ServicesSection />
      <CommercialGrowthSection />
      <BenefitsSection />
      <ProcessSection />
      <LocationSection />
      <CaseStudy />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <WhatsAppFloat />
    </main>
  );
}
