import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Landing from "@/pages/Landing";
import TrafegoPago from "@/pages/TrafegoPago";
import SocialMedia from "@/pages/SocialMedia";
import Videomaker from "@/pages/Videomaker";
import VendasFollowUp from "@/pages/VendasFollowUp";
import PoliticaPrivacidade from "@/pages/PoliticaPrivacidade";
import PoliticaSeguranca from "@/pages/PoliticaSeguranca";
import Blog from "@/pages/Blog";
import BlogTrafegoPago from "@/pages/BlogTrafegoPago";
import BlogSocialMedia from "@/pages/BlogSocialMedia";
import BlogVendasFollowUp from "@/pages/BlogVendasFollowUp";
import BlogGoogleAds from "@/pages/BlogGoogleAds";
import BlogTrafegoPagoVsIndicacao from "@/pages/BlogTrafegoPagoVsIndicacao";
import BlogAnunciosLocalES from "@/pages/BlogAnunciosLocalES";
import BlogChecklistInstagram from "@/pages/BlogChecklistInstagram";
import BlogAutoridadeDigitalES from "@/pages/BlogAutoridadeDigitalES";
import BlogSocialMediaCrescimento from "@/pages/BlogSocialMediaCrescimento";
import BlogCRMNegocioLocal from "@/pages/BlogCRMNegocioLocal";
import BlogGuiaFollowUpMarketing from "@/pages/BlogGuiaFollowUpMarketing";
import CriacaoConteudo from "@/pages/CriacaoConteudo";
import TrafegoOrganico from "@/pages/TrafegoOrganico";
import CriacaoSites from "@/pages/CriacaoSites";

export default function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/trafego-pago-sao-mateus" element={<TrafegoPago />} />
          <Route path="/social-media-sao-mateus" element={<SocialMedia />} />
          <Route path="/videomaker-sao-mateus" element={<Videomaker />} />
          <Route path="/vendas-e-follow-up" element={<VendasFollowUp />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/politica-de-seguranca" element={<PoliticaSeguranca />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/trafego-pago-sao-mateus-vendas" element={<BlogTrafegoPago />} />
          <Route path="/blog/social-media-estrategico-sao-mateus" element={<BlogSocialMedia />} />
          <Route path="/blog/vendas-follow-up-negocios-locais" element={<BlogVendasFollowUp />} />
          <Route path="/blog/google-ads-sao-mateus" element={<BlogGoogleAds />} />
          <Route path="/blog/trafego-pago-vs-indicacao" element={<BlogTrafegoPagoVsIndicacao />} />
          <Route path="/blog/anuncios-publico-local-es" element={<BlogAnunciosLocalES />} />
          <Route path="/blog/checklist-instagram-local" element={<BlogChecklistInstagram />} />
          <Route path="/blog/autoridade-digital-es" element={<BlogAutoridadeDigitalES />} />
          <Route path="/blog/social-media-crescimento" element={<BlogSocialMediaCrescimento />} />
          <Route path="/blog/crm-negocio-local" element={<BlogCRMNegocioLocal />} />
          <Route path="/blog/guia-follow-up-marketing" element={<BlogGuiaFollowUpMarketing />} />
          <Route path="/criacao-de-conteudo-sao-mateus" element={<CriacaoConteudo />} />
          <Route path="/trafego-organico-sao-mateus" element={<TrafegoOrganico />} />
          <Route path="/criacao-de-sites-sao-mateus" element={<CriacaoSites />} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
