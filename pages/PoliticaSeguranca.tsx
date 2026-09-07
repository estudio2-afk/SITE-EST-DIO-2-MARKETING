import { useEffect } from "react";
import { setSEO, SITE_URL, injectSchema } from "@/lib/seo";

const TITLE = "Política de Segurança | Estúdio 2 Marketing";
const DESCRIPTION =
  "Política de Segurança da Informação do Estúdio 2 Marketing. Veja como protegemos os dados dos nossos clientes e parceiros.";
const PATH = "/politica-de-seguranca";

export default function PoliticaSeguranca() {
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
        <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">Política de Segurança da Informação</h1>
        <p className="text-sm text-muted-foreground mb-10">Última atualização: janeiro de 2025</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-foreground">
          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">1. Objetivo</h2>
            <p>Esta Política de Segurança da Informação estabelece as diretrizes do <strong>Estúdio 2 Marketing</strong> para proteger os dados dos clientes, parceiros e colaboradores, garantindo confidencialidade, integridade e disponibilidade das informações tratadas em nossas operações.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">2. Escopo</h2>
            <p>Esta política se aplica a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Todos os colaboradores e prestadores de serviço do Estúdio 2 Marketing</li>
              <li>Sistemas, plataformas e ferramentas utilizados em nossa operação</li>
              <li>Dados de clientes, leads e parceiros sob nossa custódia</li>
              <li>Ativos de informação do negócio (senhas, acessos, conteúdos proprietários)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">3. Princípios de segurança</h2>
            <p>Nossa atuação segue os princípios:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Confidencialidade:</strong> acesso restrito a quem necessita da informação</li>
              <li><strong>Integridade:</strong> dados mantidos precisos e completos</li>
              <li><strong>Disponibilidade:</strong> informações acessíveis sempre que necessário</li>
              <li><strong>Responsabilidade:</strong> cada pessoa responde pelos dados que acessa</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">4. Controle de acesso</h2>
            <p>O acesso a sistemas e dados sensíveis segue as seguintes práticas:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Credenciais individuais — compartilhamento de senhas não é permitido</li>
              <li>Autenticação de dois fatores (2FA) obrigatória em plataformas de anúncios e e-mail</li>
              <li>Acesso ao Gerenciador de Negócios do Meta restrito a colaboradores autorizados</li>
              <li>Senhas fortes (mínimo 12 caracteres, combinação de letras, números e símbolos)</li>
              <li>Revisão periódica dos acessos concedidos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">5. Proteção de dados dos clientes</h2>
            <p>Os dados dos clientes (listas de contatos, métricas de campanha, criativos e informações estratégicas) são tratados com as seguintes salvaguardas:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Acesso restrito à equipe responsável por cada conta</li>
              <li>Não compartilhamento de informações entre clientes concorrentes</li>
              <li>Armazenamento em plataformas com criptografia em repouso e em trânsito</li>
              <li>Contrato de prestação de serviços com cláusula de confidencialidade</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">6. Uso de dispositivos e redes</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Dispositivos com bloqueio por senha ou biometria habilitado</li>
              <li>Uso de VPN ou redes confiáveis para acesso a plataformas de clientes</li>
              <li>Evitar acesso a sistemas sensíveis em redes Wi-Fi públicas sem proteção</li>
              <li>Atualização regular de sistemas operacionais e aplicativos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">7. Incidentes de segurança</h2>
            <p>Em caso de suspeita de vazamento, acesso não autorizado ou perda de dados, o procedimento é:</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>Comunicar imediatamente ao responsável pelo negócio</li>
              <li>Identificar o escopo do incidente (quais dados e sistemas foram afetados)</li>
              <li>Revogar acessos comprometidos</li>
              <li>Notificar clientes afetados quando aplicável, conforme LGPD</li>
              <li>Documentar o incidente e as medidas tomadas</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">8. Terceiros e fornecedores</h2>
            <p>Ferramentas e plataformas de terceiros utilizadas pelo Estúdio 2 Marketing (Meta Business Suite, Google Analytics, Microsoft Clarity, entre outras) possuem suas próprias políticas de segurança. Avaliamos periodicamente se essas plataformas atendem aos padrões mínimos de segurança exigidos por nossa operação.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">9. Backup e recuperação</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Backups regulares de arquivos e materiais de clientes</li>
              <li>Armazenamento em nuvem com redundância</li>
              <li>Teste periódico de recuperação de arquivos críticos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">10. Revisão da política</h2>
            <p>Esta política é revisada anualmente ou sempre que houver mudanças relevantes nos processos, ferramentas ou legislação aplicável. A versão vigente é sempre a publicada nesta página.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-3">11. Contato</h2>
            <p>Questões relacionadas à segurança da informação:</p>
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
