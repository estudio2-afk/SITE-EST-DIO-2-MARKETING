import { useEffect } from "react";
import { setSEO, SITE_URL, injectSchema } from "@/lib/seo";

const TITLE = "Política de Privacidade | Estúdio 2 Marketing";
const DESCRIPTION =
  "Política de Privacidade do Estúdio 2 Marketing. Saiba como tratamos seus dados pessoais de acordo com a LGPD (Lei Geral de Proteção de Dados).";
const PATH = "/politica-de-privacidade";

export default function PoliticaPrivacidade() {
  useEffect(() => {
    setSEO({ title: TITLE, description: DESCRIPTION, path: PATH });
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: TITLE,
      url: `${SITE_URL}${PATH}`,
      description: DESCRIPTION,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  return (
    <main className="section-padding bg-white">
      <div className="container max-w-3xl mx-auto px-4">
        <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground mb-10">Última atualização: janeiro de 2025</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-foreground">
          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">1. Quem somos</h2>
            <p>O <strong>Estúdio 2 Marketing</strong> é uma agência de marketing digital localizada em Guriri, São Mateus — ES. Prestamos serviços de gestão de tráfego pago, social media, produção de vídeo, criação de sites e consultoria comercial para pequenas e médias empresas.</p>
            <p className="mt-2">Para fins desta política, o Estúdio 2 Marketing é o <strong>controlador</strong> dos dados pessoais coletados neste site.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">2. Dados coletados</h2>
            <p>Coletamos os seguintes dados quando você interage com nosso site ou entra em contato conosco:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nome e sobrenome</li>
              <li>Número de telefone / WhatsApp</li>
              <li>E-mail (quando fornecido voluntariamente)</li>
              <li>Nome e segmento do negócio</li>
              <li>Dados de navegação (páginas acessadas, tempo de visita) via Microsoft Clarity</li>
              <li>Dados de comportamento em anúncios via Meta Pixel (quando ativo)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">3. Finalidade do tratamento</h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Responder às suas mensagens e solicitações de contato</li>
              <li>Apresentar propostas comerciais alinhadas ao seu negócio</li>
              <li>Enviar conteúdos relevantes (somente com seu consentimento)</li>
              <li>Melhorar a experiência de navegação no site</li>
              <li>Segmentar anúncios para públicos com perfil semelhante ao seu (lookalike)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">4. Base legal (LGPD)</h2>
            <p>O tratamento dos seus dados é fundamentado nas seguintes bases legais previstas na Lei nº 13.709/2018 (LGPD):</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Consentimento</strong>: quando você preenche um formulário ou inicia contato pelo WhatsApp</li>
              <li><strong>Legítimo interesse</strong>: para análise de navegação e melhoria do site</li>
              <li><strong>Execução de contrato</strong>: quando há prestação de serviços entre as partes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">5. Compartilhamento de dados</h2>
            <p>Não vendemos seus dados pessoais. Compartilhamos informações apenas quando necessário com:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Plataformas de análise (Microsoft Clarity, Google Analytics) — para métricas de desempenho</li>
              <li>Meta (Facebook/Instagram) — para veiculação de anúncios segmentados</li>
              <li>Ferramentas internas de gestão de clientes</li>
            </ul>
            <p className="mt-2">Todos os parceiros operam com políticas próprias de privacidade em conformidade com a legislação aplicável.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">6. Retenção dos dados</h2>
            <p>Mantemos seus dados pelo tempo necessário para as finalidades descritas acima, ou conforme exigido por obrigações legais. Leads e contatos comerciais são retidos por até 2 anos após o último contato. Clientes ativos têm seus dados mantidos durante a vigência do contrato e pelo prazo legal posterior.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">7. Seus direitos</h2>
            <p>Nos termos da LGPD, você tem direito a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que possuímos sobre você</li>
              <li>Corrigir dados incompletos ou incorretos</li>
              <li>Solicitar a eliminação dos dados (quando possível)</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar portabilidade dos dados</li>
            </ul>
            <p className="mt-2">Para exercer qualquer um desses direitos, entre em contato pelo e-mail <strong>contato@estudio2marketing.com.br</strong> ou pelo WhatsApp.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">8. Segurança</h2>
            <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida. O acesso interno aos dados é restrito às pessoas que precisam deles para desempenhar suas funções.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">9. Cookies e rastreadores</h2>
            <p>Este site pode utilizar cookies de sessão e de análise de comportamento. Você pode desativar cookies nas configurações do seu navegador, embora isso possa afetar a experiência de navegação.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">10. Atualizações desta política</h2>
            <p>Esta Política de Privacidade pode ser atualizada periodicamente. Quando houver alterações relevantes, publicaremos a versão atualizada nesta página com a data de revisão.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">11. Contato</h2>
            <p>Dúvidas sobre privacidade ou proteção de dados? Entre em contato:</p>
            <ul className="list-none mt-2 space-y-1">
              <li><strong>E-mail:</strong> contato@estudio2marketing.com.br</li>
              <li><strong>WhatsApp:</strong> (27) 99714-3078</li>
              <li><strong>Endereço:</strong> Guriri, São Mateus — ES</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
