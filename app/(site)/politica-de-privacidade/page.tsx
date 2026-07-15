/**
 * /politica-de-privacidade — Política de Privacidade BR-LGPD.
 *
 * 13 seções LGPD-compliant: controlador, dados coletados, finalidades,
 * bases legais Art. 7º, compartilhamento, retenção, direitos Art. 18,
 * exercer direitos, ANPD, transferência internacional, segurança Art. 46,
 * incidentes Art. 48, alterações.
 *
 * Spec: 2026-05-14-legal-pages-br-lgpd-design.md §2 (commit 95f4e45).
 * Phase B5-Legal (2026-05-14).
 */

import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { LegalDocument, type LegalSection } from "@/components/blocks/legal-document";
import { Abbr } from "@/components/ui/abbr";
import { BUSINESS_INFO } from "@/lib/seo/business-info";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como tratamos seus dados pessoais conforme a LGPD (Lei 13.709/2018). Controlador, finalidades, bases legais, direitos do titular, ANPD, retenção e segurança.",
  openGraph: {
    title: "Política de Privacidade — Sanetech",
    description:
      "Tratamento de dados pessoais em conformidade com a LGPD. Direitos do titular, bases legais Art. 7º, segurança Art. 46, comunicação de incidentes Art. 48.",
    url: `${BUSINESS_INFO.url}/politica-de-privacidade`,
    type: "article",
    locale: "pt_BR",
  },
  alternates: { canonical: "/politica-de-privacidade" },
};

const sections: LegalSection[] = [
  { id: "controlador", title: "Quem somos (controlador)" },
  { id: "dados-coletados", title: "Quais dados coletamos" },
  { id: "finalidades", title: "Para que tratamos seus dados" },
  { id: "bases-legais", title: "Bases legais do tratamento (LGPD Art. 7º)" },
  { id: "compartilhamento", title: "Compartilhamento com terceiros" },
  { id: "retencao", title: "Quanto tempo guardamos" },
  { id: "direitos-titular", title: "Direitos do titular (LGPD Art. 18)" },
  { id: "exercer-direitos", title: "Como exercer seus direitos" },
  { id: "anpd", title: "Reclamação à ANPD" },
  { id: "transferencia-internacional", title: "Transferência internacional" },
  { id: "seguranca", title: "Medidas de segurança (LGPD Art. 46)" },
  { id: "incidente-seguranca", title: "Comunicação de incidentes (LGPD Art. 48)" },
  { id: "alteracoes", title: "Alterações e contato" },
];

const H2 = "text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance";
const PROSE = "mt-6 space-y-5 text-[17px] leading-relaxed text-foreground/85";
const LINK = "text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)] transition-colors duration-[120ms]";
const TABLE = "mt-4 w-full text-[15px] border-collapse";
const TH = "text-left font-semibold text-foreground border-b border-[var(--color-border)] py-2 pr-4 align-top";
const TD = "border-b border-[var(--color-border)] py-2 pr-4 align-top text-foreground/85";
const UL = "ml-5 list-disc space-y-2";
const OL = "ml-5 list-decimal space-y-2";
const STRONG = "font-semibold text-foreground";

export default function PoliticaPrivacidadePage() {
  return (
    <LegalDocument
      eyebrow="Legal · Privacidade"
      title="Política de Privacidade"
      subtitle="Como tratamos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
      lastUpdated="14 de maio de 2026"
      version="1.0"
      sections={sections}
    >
      {/* §1 Controlador */}
      <section id="controlador" className="scroll-mt-24">
        <h2 className={H2}>1. Quem somos (controlador)</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>Controlador dos dados pessoais:</strong> SANETECH CONTROLE E AUTOMAÇÃO LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o n.º 05.950.182/0001-85, com sede na Estrada União Indústria, 32.561 (Loja 07), bairro Posse, Petrópolis – RJ, CEP 25770-470 (doravante &ldquo;Sanetech&rdquo;, &ldquo;nós&rdquo; ou &ldquo;nosso&rdquo;).
          </p>
          <p>
            <strong className={STRONG}>Canal de comunicação para questões de proteção de dados:</strong>
          </p>
          <ul className={UL}>
            <li>
              E-mail:{" "}
              <a href="mailto:contato@sanetech.com.br" className={LINK}>
                contato@sanetech.com.br
              </a>
            </li>
            <li>
              Telefone:{" "}
              <a href="tel:+5524993210383" className={LINK}>
                +55 24 99321-0383
              </a>
            </li>
            <li>Endereço para correspondência: o mesmo da sede social.</li>
          </ul>
          <p>
            <strong className={STRONG}>Encarregado pelo Tratamento de Dados Pessoais (<Abbr term="LGPD" /> Art. 41):</strong> A Sanetech adota canal único de comunicação para tratamento de questões relativas à proteção de dados pessoais, em conformidade com o regime simplificado aplicável a microempresas e empresas de pequeno porte previsto na Resolução CD/<Abbr term="ANPD" /> n.º 2, de 27 de janeiro de 2022. Todos os pedidos relacionados aos direitos do titular (LGPD Art. 18) e demais comunicações sobre o tratamento de dados devem ser dirigidos ao e-mail acima, sendo respondidos no prazo legal de 15 (quinze) dias úteis previsto no Art. 19, §1º da LGPD.
          </p>
        </div>
      </section>

      {/* §2 Dados coletados */}
      <section id="dados-coletados" className="mt-12 scroll-mt-24">
        <h2 className={H2}>2. Quais dados coletamos</h2>
        <div className={PROSE}>
          <p>Coletamos os seguintes dados pessoais, organizados por contexto de coleta:</p>
          <p>
            <strong className={STRONG}>a) Dados fornecidos voluntariamente via formulários</strong> (formulários de diagnóstico, contato e orçamento disponíveis em /contato e em CTAs ao longo do site):
          </p>
          <ul className={UL}>
            <li>Nome completo</li>
            <li>Telefone (incluindo DDD)</li>
            <li>Empresa/organização</li>
            <li>Mensagem livre (descrição do contexto técnico, perfil do efluente, restrições do local, padrão de saída alvo)</li>
          </ul>
          <p>
            Estes dados são coletados no momento da submissão do formulário e, em seguida, encaminhados via redirecionamento ao aplicativo WhatsApp do remetente, que abre uma conversa pré-preenchida com a mensagem formatada para o número comercial da Sanetech. <strong className={STRONG}>Os dados não trafegam por servidor próprio da Sanetech para esta finalidade</strong> — vão diretamente do navegador do titular para o aplicativo WhatsApp, conforme arquitetura descrita na seção 5 (compartilhamento).
          </p>
          <p>
            <strong className={STRONG}>b) Dados técnicos coletados automaticamente durante a navegação</strong>:
          </p>
          <ul className={UL}>
            <li>Endereço IP (em forma hasheada e anonimizada pela ferramenta Vercel Analytics, conforme detalhado na seção 5)</li>
            <li>Tipo de dispositivo, sistema operacional e navegador (informações agregadas)</li>
            <li>Páginas visitadas, ordem de navegação, duração aproximada da sessão</li>
            <li>País e região aproximada (a partir do IP, sem precisão de bairro/endereço)</li>
            <li>Origem do tráfego (motor de busca, link direto, redes sociais, e-mail) quando disponível</li>
          </ul>
          <p>
            Estes dados são coletados de forma agregada e anonimizada pela plataforma Vercel Analytics, operando em modo cookieless, sem instalação de cookies próprios ou de terceiros, sem uso de <code>localStorage</code> ou <code>sessionStorage</code> para identificação persistente do usuário, e sem geração de identificadores únicos estáveis. Detalhes técnicos completos estão na nossa Política de Cookies.
          </p>
          <p>
            <strong className={STRONG}>Declaração negativa explícita</strong> — A Sanetech não coleta, em nenhum momento, por nenhum canal do website:
          </p>
          <ul className={UL}>
            <li>Dados pessoais sensíveis conforme definidos no LGPD Art. 5º, II (origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso/filosófico/político, dados referentes à saúde ou à vida sexual, dados genéticos ou biométricos)</li>
            <li>Dados pessoais de crianças menores de 13 anos (LGPD Art. 14, §1º). O site se destina a usuários adultos com capacidade civil; menores de 13 anos não devem fornecer dados pessoais. Adolescentes entre 13 e 17 anos devem fornecer dados apenas com consentimento específico e em destaque de pelo menos um dos pais ou responsável legal.</li>
            <li>Dados financeiros (cartão de crédito, conta bancária, CPF) — o site não realiza venda online nem processa pagamentos</li>
            <li>Dados de geolocalização precisa (GPS, coordenadas exatas)</li>
          </ul>
        </div>
      </section>

      {/* §3 Finalidades */}
      <section id="finalidades" className="mt-12 scroll-mt-24">
        <h2 className={H2}>3. Para que tratamos seus dados</h2>
        <div className={PROSE}>
          <p>
            Tratamos seus dados pessoais para as seguintes finalidades, todas declaradas de forma específica, explícita e legítima conforme exige o princípio da finalidade (LGPD Art. 6º, I):
          </p>
          <p>
            <strong className={STRONG}>1. Responder a pedidos de contato e diagnóstico técnico.</strong> Quando você preenche e envia o formulário de diagnóstico ou contato, utilizamos seus dados (nome, telefone, empresa, mensagem) para retornar com avaliação técnica, esclarecimentos, propostas e demais comunicações relacionadas à sua solicitação.
          </p>
          <p>
            <strong className={STRONG}>2. Elaborar propostas técnico-comerciais.</strong> A partir do contexto descrito no formulário ou em comunicações subsequentes via WhatsApp/e-mail, elaboramos propostas de prestação de serviços de engenharia ambiental, controle e automação de tratamento de efluentes industriais e esgoto sanitário.
          </p>
          <p>
            <strong className={STRONG}>3. Executar contratos de prestação de serviços.</strong> Quando há contratação efetiva, tratamos os dados necessários para executar o objeto contratado (projeto, implantação, operação, manutenção de estações de tratamento), comunicar progresso, faturar, cobrar e cumprir obrigações pós-contratuais.
          </p>
          <p>
            <strong className={STRONG}>4. Cumprir obrigações legais e regulatórias.</strong> Mantemos registros fiscais, contábeis e contratuais conforme prazos legais brasileiros (CTN, CC, normas técnicas aplicáveis a serviços de engenharia ambiental), e respondemos a requisições legítimas de autoridades.
          </p>
          <p>
            <strong className={STRONG}>5. Mensurar uso agregado e anônimo do site.</strong> Utilizamos a ferramenta Vercel Analytics em modo cookieless para entender quais páginas têm maior visitação, quais conteúdos respondem melhor ao interesse do público técnico, e como melhorar o site continuamente. A medição é estritamente agregada — não rastreia indivíduos, não constrói perfis, não gera identificadores estáveis.
          </p>
          <p>
            <strong className={STRONG}>6. Garantir a segurança técnica do website.</strong> Logs operacionais do servidor de hospedagem (Vercel) são usados para detectar e mitigar abusos (tentativas de invasão, ataques automatizados, comportamento anômalo), conforme exigência de segurança técnica do LGPD Art. 46.
          </p>
        </div>
      </section>

      {/* §4 Bases legais */}
      <section id="bases-legais" className="mt-12 scroll-mt-24">
        <h2 className={H2}>4. Bases legais do tratamento (LGPD Art. 7º)</h2>
        <div className={PROSE}>
          <p>
            Cada finalidade declarada acima é tratada com base em uma das hipóteses legais previstas no Art. 7º da LGPD. O quadro abaixo mapeia cada finalidade à sua base legal e justifica a escolha:
          </p>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th scope="col" className={TH}>Finalidade</th>
                  <th scope="col" className={TH}>Base legal LGPD</th>
                  <th scope="col" className={TH}>Justificativa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>(1) Resposta a contato e diagnóstico</td>
                  <td className={TD}>Art. 7º, V (execução de procedimentos preliminares relativos a contrato do qual seja parte o titular) + Art. 7º, IX (interesse legítimo)</td>
                  <td className={TD}>Quando você preenche o formulário, está iniciando diligência pré-contratual. Tratamos o mínimo necessário para responder.</td>
                </tr>
                <tr>
                  <td className={TD}>(2) Propostas técnico-comerciais</td>
                  <td className={TD}>Art. 7º, V</td>
                  <td className={TD}>Continuação direta da diligência pré-contratual.</td>
                </tr>
                <tr>
                  <td className={TD}>(3) Execução contratual</td>
                  <td className={TD}>Art. 7º, V</td>
                  <td className={TD}>Execução do contrato de prestação de serviços firmado.</td>
                </tr>
                <tr>
                  <td className={TD}>(4) Obrigações legais</td>
                  <td className={TD}>Art. 7º, II (cumprimento de obrigação legal ou regulatória pelo controlador)</td>
                  <td className={TD}>CTN, CC, normas profissionais de engenharia, requisições de autoridades.</td>
                </tr>
                <tr>
                  <td className={TD}>(5) Mensuração agregada Vercel Analytics</td>
                  <td className={TD}>Art. 7º, IX (interesse legítimo) com balanceamento Art. 10</td>
                  <td className={TD}>Medição agregada e anônima cookieless, sem profiling, sem identificação.</td>
                </tr>
                <tr>
                  <td className={TD}>(6) Segurança técnica</td>
                  <td className={TD}>Art. 7º, IX (interesse legítimo)</td>
                  <td className={TD}>Detecção de abusos. Limitado a logs operacionais do hosting.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className={STRONG}>Balanceamento de interesse legítimo (LGPD Art. 10):</strong> O tratamento das finalidades (5) e (6) com fundamento no interesse legítimo foi precedido de balanceamento expresso entre os interesses comerciais da Sanetech e os direitos fundamentais e liberdades dos titulares. Foram adotadas as seguintes garantias mitigadoras:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Coleta minimizada</strong> ao estritamente necessário para a finalidade declarada (princípio da necessidade, LGPD Art. 6º, III);
            </li>
            <li>
              <strong className={STRONG}>Anonimização preservada</strong> — os dados de mensuração não permitem reidentificação individual;
            </li>
            <li>
              <strong className={STRONG}>Transparência total</strong> via esta Política de Privacidade, redigida em linguagem clara e disponibilizada de forma ostensiva (LGPD Art. 9º);
            </li>
            <li>
              <strong className={STRONG}>Canal de oposição aberto</strong> — titular pode solicitar a exclusão da mensuração agregada conforme seção 7 (direitos do titular);
            </li>
            <li>
              <strong className={STRONG}>Eliminação programada</strong> — dados de mensuração agregada são retidos por no máximo 24 (vinte e quatro) meses, conforme seção 6;
            </li>
            <li>
              <strong className={STRONG}>Ausência de decisões automatizadas</strong> com efeito jurídico relevante para o titular — não há profiling, scoring, ranking, segmentação publicitária ou qualquer decisão automatizada baseada nos dados coletados.
            </li>
          </ul>
          <p>
            Conclui-se que os interesses comerciais legítimos da Sanetech, no contexto e na extensão descritos, <strong className={STRONG}>não prevalecem em prejuízo desproporcionado</strong> dos direitos e liberdades fundamentais dos titulares dos dados.
          </p>
        </div>
      </section>

      {/* §5 Compartilhamento */}
      <section id="compartilhamento" className="mt-12 scroll-mt-24">
        <h2 className={H2}>5. Compartilhamento com terceiros</h2>
        <div className={PROSE}>
          <p>
            O compartilhamento de dados pessoais com terceiros ocorre apenas na medida estritamente necessária para a execução das finalidades declaradas e sempre sob garantias contratuais adequadas (LGPD Art. 33 + Resolução CD/ANPD pertinentes). Listamos abaixo os operadores e demais terceiros envolvidos, organizados em duas categorias.
          </p>
          <p>
            <strong className={STRONG}>(a) Operadores e terceiros identificados nominalmente:</strong>
          </p>
          <p>
            <strong className={STRONG}>Vercel Inc.</strong> — pessoa jurídica de direito privado constituída no Estado de Delaware, Estados Unidos da América (sede principal em San Francisco-CA). Atua como operador (LGPD Art. 5º, VII) para serviço de hospedagem do website (entrega de páginas estáticas pré-renderizadas e Vercel Analytics em modo cookieless). Trata: dados técnicos de navegação (IP hasheado, user-agent, dispositivos, sessões agregadas). Documentação contratual aplicável:
          </p>
          <ul className={UL}>
            <li>
              Termos de Serviço Vercel:{" "}
              <a
                href="https://vercel.com/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                https://vercel.com/legal/terms
              </a>
            </li>
            <li>
              Política de Privacidade Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </li>
            <li>
              Data Processing Addendum (DPA) Vercel:{" "}
              <a
                href="https://vercel.com/legal/dpa"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                https://vercel.com/legal/dpa
              </a>
            </li>
          </ul>
          <p>
            A relação entre Sanetech (controladora) e Vercel (operadora) é regida pelo DPA da Vercel, que prevê Cláusulas Contratuais Padrão (Standard Contractual Clauses) e demais garantias compatíveis com o regime de transferência internacional do LGPD Art. 33, II.
          </p>
          <p>
            <strong className={STRONG}>Meta Platforms Ireland Limited</strong> (sede em Dublin, Irlanda — União Europeia) e, no Brasil, <strong className={STRONG}>Facebook Serviços Online do Brasil Ltda.</strong> — operam o aplicativo WhatsApp Business utilizado como canal de comunicação após o envio dos formulários. Quando você clica em um link <code>wa.me/...</code> ou submete um formulário de diagnóstico/contato/orçamento, é redirecionado para o aplicativo WhatsApp do seu dispositivo, com mensagem pré-preenchida endereçada ao número comercial da Sanetech. A partir desse momento, a comunicação ocorre na infraestrutura da Meta, que se torna controlador adicional dos dados de comunicação (metadados, conteúdo da mensagem, identificadores do dispositivo). Documentação Meta/WhatsApp aplicável:
          </p>
          <ul className={UL}>
            <li>
              Política de Privacidade do WhatsApp:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                https://www.whatsapp.com/legal/privacy-policy
              </a>
            </li>
            <li>
              Termos de Serviço do WhatsApp:{" "}
              <a
                href="https://www.whatsapp.com/legal/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                https://www.whatsapp.com/legal/terms-of-service
              </a>
            </li>
            <li>
              Política de Privacidade Meta:{" "}
              <a
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                https://www.facebook.com/privacy/policy
              </a>
            </li>
          </ul>
          <p>
            <strong className={STRONG}>(b) Categorias adicionais (sem fornecedor específico no momento, comunicado a titulares mediante pedido conforme LGPD Art. 9º, IV):</strong>
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Profissionais contábeis e auditores externos</strong> vinculados à Sanetech para cumprimento de obrigações fiscais, contábeis e regulatórias. Submetem-se a dever de sigilo profissional (Código Civil + normas do CFC) e a contrato de prestação de serviços com cláusula de confidencialidade. Identidade exata comunicada mediante solicitação.
            </li>
            <li>
              <strong className={STRONG}>Eventuais fornecedores de software de gestão (CRM, ERP) ou de comunicação interna</strong> que venham a ser contratados. Submetidos a contrato de operador com cláusulas de proteção de dados conforme LGPD. Identidade exata comunicada mediante solicitação.
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Declaração negativa explícita:</strong> A Sanetech <strong className={STRONG}>não vende, não cede onerosamente, não aluga, não transfere para fins comerciais, não disponibiliza para marketing de terceiros, não usa para retargeting, não usa para treinamento de modelos de inteligência artificial nem usa para qualquer finalidade não declarada nesta política</strong> os dados pessoais coletados. A coleta é estritamente vinculada às finalidades declaradas na seção 3.
          </p>
        </div>
      </section>

      {/* §6 Retenção */}
      <section id="retencao" className="mt-12 scroll-mt-24">
        <h2 className={H2}>6. Quanto tempo guardamos</h2>
        <div className={PROSE}>
          <p>
            Os dados pessoais são conservados pelo tempo estritamente necessário ao cumprimento das finalidades declaradas e das obrigações legais aplicáveis (princípio da necessidade e da limitação temporal — LGPD Art. 6º, III + V + LGPD Art. 15). Vencidos os prazos, os dados são eliminados de forma segura ou anonimizados de modo irreversível, salvo quando exista fundamento legal específico para conservação adicional.
          </p>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th scope="col" className={TH}>Categoria de dado</th>
                  <th scope="col" className={TH}>Prazo de conservação</th>
                  <th scope="col" className={TH}>Fundamento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>
                    Contatos comerciais via formulário <strong className={STRONG}>sem evolução para contrato</strong>
                  </td>
                  <td className={TD}>24 (vinte e quatro) meses contados do último contato registrado</td>
                  <td className={TD}>Padrão da indústria; balanceamento de interesse legítimo (LGPD Art. 7º, IX + Art. 10) para preservação da relação comercial potencial</td>
                </tr>
                <tr>
                  <td className={TD}>Clientes contratuais (dados de cadastro e execução)</td>
                  <td className={TD}>Vigência do contrato + 5 (cinco) anos após o término</td>
                  <td className={TD}>Prazo prescricional tributário (CTN Art. 174) + obrigações contratuais pós-execução</td>
                </tr>
                <tr>
                  <td className={TD}>Dados fiscais e contábeis (notas fiscais, livros, comprovantes)</td>
                  <td className={TD}>5 (cinco) anos contados do encerramento do exercício fiscal</td>
                  <td className={TD}>CTN Art. 173 (decadência tributária) + Art. 174 (prescrição) + obrigação legal (LGPD Art. 7º, II)</td>
                </tr>
                <tr>
                  <td className={TD}>Registros de governança LGPD (RIPDs, registros de tratamento, registros de incidentes, registros de consentimento quando aplicável)</td>
                  <td className={TD}>5 (cinco) anos após cessação do tratamento</td>
                  <td className={TD}>Princípio da responsabilização e prestação de contas (LGPD Art. 6º, X)</td>
                </tr>
                <tr>
                  <td className={TD}>Comunicações via WhatsApp Business</td>
                  <td className={TD}>Conforme política do WhatsApp (Meta). Cópias internas pela Sanetech: vinculadas à categoria contratual ou comercial aplicável</td>
                  <td className={TD}>Política de retenção do operador Meta + retenção da Sanetech enquanto controlador da própria cópia</td>
                </tr>
                <tr>
                  <td className={TD}>Logs operacionais do servidor (Vercel)</td>
                  <td className={TD}>Conforme política de retenção da Vercel (tipicamente 30 dias a 12 meses)</td>
                  <td className={TD}>Interesse legítimo da Sanetech em segurança (LGPD Art. 7º, IX + Art. 46) + política do operador</td>
                </tr>
                <tr>
                  <td className={TD}>Métricas Vercel Analytics agregadas (cookieless, não-reidentificáveis)</td>
                  <td className={TD}>24 (vinte e quatro) meses</td>
                  <td className={TD}>Limitação temporal proporcional à utilidade analítica</td>
                </tr>
                <tr>
                  <td className={TD}>Pedidos de exercício de direitos do titular (LGPD Art. 18)</td>
                  <td className={TD}>5 (cinco) anos após resposta</td>
                  <td className={TD}>Princípio da responsabilização + prova de cumprimento</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className={STRONG}>Eliminação ou anonimização:</strong> Ao final dos prazos acima, os dados são eliminados por procedimento técnico que impeça sua recuperação, ou anonimizados de forma irreversível na acepção do LGPD Art. 5º, XI. <strong className={STRONG}>Backups</strong> seguem o mesmo ciclo da categoria primária, respeitada a janela técnica de rotação dos sistemas de hospedagem (Vercel).
          </p>
        </div>
      </section>

      {/* §7 Direitos do titular */}
      <section id="direitos-titular" className="mt-12 scroll-mt-24">
        <h2 className={H2}>7. Direitos do titular (LGPD Art. 18)</h2>
        <div className={PROSE}>
          <p>
            Como titular de dados pessoais, você tem os seguintes direitos garantidos pela LGPD (Art. 18 e correlatos), exercíveis gratuitamente, mediante requisição expressa à Sanetech:
          </p>
          <p>
            <strong className={STRONG}>I — Confirmação da existência de tratamento</strong> (Art. 18, I). Você pode obter confirmação clara e específica se a Sanetech trata seus dados pessoais. Resposta em formato simplificado imediatamente ou em formato completo no prazo de 15 (quinze) dias úteis.
          </p>
          <p>
            <strong className={STRONG}>II — Acesso aos dados</strong> (Art. 18, II). Você pode obter cópia dos dados pessoais que mantemos a seu respeito, em formato legível e estruturado, com indicação das finalidades, prazos de retenção, identificação dos operadores e demais informações relevantes.
          </p>
          <p>
            <strong className={STRONG}>III — Correção de dados</strong> incompletos, inexatos ou desatualizados (Art. 18, III). Você pode solicitar a atualização ou retificação dos dados que mantemos. Solicitamos comprovação razoável para alterações que afetem dados estruturais (CNPJ, razão social, e-mail de contato contratual).
          </p>
          <p>
            <strong className={STRONG}>IV — Anonimização, bloqueio ou eliminação</strong> de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD (Art. 18, IV). Quando o tratamento exceder o necessário ou se afastar das finalidades declaradas, você pode solicitar uma das três medidas.
          </p>
          <p>
            <strong className={STRONG}>V — Portabilidade dos dados</strong> a outro fornecedor de serviço ou produto, mediante requisição expressa, observados os segredos comercial e industrial (Art. 18, V + regulamentação ANPD aplicável). Aplicável aos dados tratados com base em consentimento ou contrato.
          </p>
          <p>
            <strong className={STRONG}>VI — Eliminação dos dados</strong> tratados com consentimento (Art. 18, VI). Quando uma finalidade for tratada com base em consentimento (não há atualmente, mas pode haver no futuro se introduzirmos newsletter ou similar), você pode solicitar a eliminação total dos dados associados.
          </p>
          <p>
            <strong className={STRONG}>VII — Informação sobre o compartilhamento</strong> de dados com entidades públicas e privadas (Art. 18, VII). Você pode solicitar lista das entidades com as quais seus dados foram compartilhados. A lista categorizada está na seção 5 desta política, mas você pode obter detalhamento específico mediante requisição.
          </p>
          <p>
            <strong className={STRONG}>VIII — Informação sobre as consequências de não fornecer consentimento</strong> (Art. 18, VIII). Quando solicitarmos consentimento, informaremos claramente quais funcionalidades ou serviços ficam indisponíveis caso você não consinta.
          </p>
          <p>
            <strong className={STRONG}>IX — Revogação do consentimento</strong> (Art. 18, IX). Quando o tratamento for baseado em consentimento, você pode revogá-lo a qualquer momento, sem prejuízo aos tratamentos legítimos já realizados.
          </p>
          <p>
            <strong className={STRONG}>X — Oposição ao tratamento</strong> realizado com fundamento em interesse legítimo, em caso de descumprimento da LGPD (Art. 18, §2º). Aplicável especialmente aos tratamentos baseados nas finalidades (5) e (6) da seção 3.
          </p>
          <p>
            <strong className={STRONG}>XI — Direito a não ser submetido a decisões automatizadas</strong> com efeito jurídico relevante (LGPD Art. 20). <strong className={STRONG}>Sanetech declara expressamente que não toma decisões automatizadas com efeito jurídico relevante para o titular.</strong> Não há scoring, profiling automatizado, segmentação publicitária dirigida nem qualquer outro sistema de decisão automatizada baseado nos dados pessoais coletados.
          </p>
          <p>
            <strong className={STRONG}>XII — Direito de petição à ANPD</strong> (Art. 18, §1º + Art. 55-J). Caso a Sanetech não atenda satisfatoriamente sua solicitação, você pode peticionar diretamente à Autoridade Nacional de Proteção de Dados Pessoais, conforme indicado na seção 9 desta política.
          </p>
        </div>
      </section>

      {/* §8 Exercer direitos */}
      <section id="exercer-direitos" className="mt-12 scroll-mt-24">
        <h2 className={H2}>8. Como exercer seus direitos</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>Canal único de exercício de direitos:</strong> envie sua solicitação por e-mail para{" "}
            <strong className={STRONG}>
              <a href="mailto:contato@sanetech.com.br" className={LINK}>
                contato@sanetech.com.br
              </a>
            </strong>
            , indicando no assunto &ldquo;Exercício de Direitos LGPD&rdquo; e descrevendo qual direito deseja exercer (entre os listados na seção 7), com a maior clareza possível sobre a sua identidade e a natureza do pedido.
          </p>
          <p>
            <strong className={STRONG}>Prazo de resposta:</strong> 15 (quinze) dias úteis contados do recebimento da solicitação (LGPD Art. 19, §1º). Em casos de complexidade técnica justificada, podemos prorrogar este prazo, comunicando-lhe expressamente a prorrogação e os motivos.
          </p>
          <p>
            <strong className={STRONG}>Identificação do titular:</strong> Para evitar fornecimento indevido de dados a terceiros, podemos solicitar informações adicionais que confirmem a sua identidade — tipicamente um documento oficial com foto, ou correspondência por e-mail previamente utilizado em comunicações com a Sanetech. Não solicitamos mais dados do que o estritamente necessário para a confirmação.
          </p>
          <p>
            <strong className={STRONG}>Gratuidade:</strong> O exercício de qualquer direito previsto no Art. 18 da LGPD é gratuito, conforme determina o Art. 18, §5º. Em casos manifestamente infundados ou excessivos, a Sanetech reserva-se o direito de cobrar custos administrativos razoáveis, devidamente comunicados antes de qualquer ônus.
          </p>
          <p>
            <strong className={STRONG}>Forma de resposta:</strong> Respondemos pelo mesmo canal utilizado para a solicitação ou pelo canal indicado expressamente pelo titular. Quando aplicável, fornecemos os dados em formato estruturado, comumente utilizado e de leitura automática (LGPD Art. 19, §2º).
          </p>
          <p>
            <strong className={STRONG}>Negativa fundamentada:</strong> Caso a Sanetech entenda que a solicitação não preenche os requisitos legais (titular não confirmado, direito não aplicável à categoria de tratamento em questão, exceção legal incidente), responderemos com negativa fundamentada, indicando os motivos jurídicos e os canais alternativos de atuação, incluindo o direito de petição à ANPD descrito na seção 9.
          </p>
        </div>
      </section>

      {/* §9 ANPD */}
      <section id="anpd" className="mt-12 scroll-mt-24">
        <h2 className={H2}>9. Reclamação à ANPD</h2>
        <div className={PROSE}>
          <p>
            Sem prejuízo do exercício direto dos seus direitos perante a Sanetech, você tem o direito de peticionar à <strong className={STRONG}>Autoridade Nacional de Proteção de Dados Pessoais (ANPD)</strong>, autoridade independente responsável pela aplicação e fiscalização da LGPD no território nacional:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Site oficial:</strong>{" "}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                https://www.gov.br/anpd
              </a>
            </li>
            <li>
              <strong className={STRONG}>Sede:</strong> Esplanada dos Ministérios, Bloco C, 6º andar — Brasília-DF, CEP 70046-900
            </li>
            <li>
              <strong className={STRONG}>Canal de petição eletrônica:</strong>{" "}
              <a
                href="https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao
              </a>
            </li>
            <li>
              <strong className={STRONG}>E-mail institucional:</strong>{" "}
              <a href="mailto:comunicacao@anpd.gov.br" className={LINK}>
                comunicacao@anpd.gov.br
              </a>
            </li>
          </ul>
          <p>
            Recomendamos, sempre que possível, tentar resolver a questão diretamente conosco antes de peticionar à ANPD — o canal{" "}
            <a href="mailto:contato@sanetech.com.br" className={LINK}>
              contato@sanetech.com.br
            </a>{" "}
            é monitorado e respondemos no prazo legal.
          </p>
        </div>
      </section>

      {/* §10 Transferência internacional */}
      <section id="transferencia-internacional" className="mt-12 scroll-mt-24">
        <h2 className={H2}>10. Transferência internacional</h2>
        <div className={PROSE}>
          <p>
            A LGPD permite a transferência internacional de dados pessoais somente nas hipóteses previstas no seu Art. 33. Algumas das operações descritas nesta política envolvem transferência internacional de dados, conforme detalhado abaixo:
          </p>
          <p>
            <strong className={STRONG}>Vercel Inc. (Estados Unidos):</strong> Os serviços de hospedagem do website e a ferramenta Vercel Analytics são operados pela Vercel Inc., com sede nos Estados Unidos. Os dados técnicos coletados durante a navegação (descritos na seção 2.b) e os logs operacionais do servidor (descritos na seção 6) trafegam e podem ser processados em infraestrutura localizada fora do território brasileiro. A base legal aplicável a esta transferência é o LGPD Art. 33, II (transferência mediante cláusulas contratuais específicas, cláusulas-padrão contratuais e normas corporativas globais — aplicada via Data Processing Addendum da Vercel, que inclui Standard Contractual Clauses compatíveis com o regime de transferência internacional) e o LGPD Art. 33, V (execução de contrato do qual seja parte o titular, no contexto da entrega das páginas do site).
          </p>
          <p>
            <strong className={STRONG}>Meta Platforms Ireland Limited (Irlanda — União Europeia):</strong> As comunicações realizadas via WhatsApp Business podem ser processadas em infraestrutura da Meta localizada na Irlanda (sede europeia da Meta Platforms) ou em outras jurisdições da Meta. A base legal aplicável é o LGPD Art. 33, II (cláusulas contratuais via DPA da Meta) e o LGPD Art. 33, V (execução de contrato/diligência pré-contratual com o titular que voluntariamente iniciou comunicação via WhatsApp).
          </p>
          <p>
            <strong className={STRONG}>Garantias adicionais:</strong> Mantemos relação contratual com cada operador internacional incluindo cláusulas de proteção de dados conforme padrões reconhecidos. Acompanhamos as decisões e regulamentações da ANPD sobre transferência internacional e atualizamos as garantias contratuais quando necessário.
          </p>
          <p>
            <strong className={STRONG}>Direito de informação:</strong> Você pode solicitar detalhamento adicional sobre as garantias específicas aplicáveis a cada transferência mediante pedido para{" "}
            <a href="mailto:contato@sanetech.com.br" className={LINK}>
              contato@sanetech.com.br
            </a>
            , nos termos da seção 8.
          </p>
        </div>
      </section>

      {/* §11 Segurança */}
      <section id="seguranca" className="mt-12 scroll-mt-24">
        <h2 className={H2}>11. Medidas de segurança (LGPD Art. 46)</h2>
        <div className={PROSE}>
          <p>
            Em cumprimento ao dever de segurança previsto no LGPD Art. 46, a Sanetech adota medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão. As principais medidas atualmente implementadas incluem:
          </p>
          <p>
            <strong className={STRONG}>Medidas técnicas:</strong>
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Cifragem em trânsito</strong> — todo o tráfego entre o navegador do usuário e os servidores do website é protegido por TLS (Transport Layer Security) versão 1.3 ou superior, com certificados gerenciados pela Vercel e renovação automática.
            </li>
            <li>
              <strong className={STRONG}>Cabeçalhos de segurança HTTP</strong> — HSTS (HTTP Strict Transport Security), X-Frame-Options, X-Content-Type-Options, Content-Security-Policy e Referrer-Policy adequados, mitigando vetores comuns de ataque (clickjacking, MIME sniffing, injeção de scripts).
            </li>
            <li>
              <strong className={STRONG}>Infraestrutura distribuída</strong> com isolamento por região pela Vercel Edge Network, reduzindo superfície de ataque centralizada.
            </li>
            <li>
              <strong className={STRONG}>Política de menor privilégio</strong> nos acessos administrativos ao painel Vercel e demais ferramentas internas.
            </li>
            <li>
              <strong className={STRONG}>Autenticação multifator (MFA)</strong> para todos os acessos administrativos a infraestrutura crítica.
            </li>
            <li>
              <strong className={STRONG}>Backups</strong> gerenciados pela Vercel e pelo histórico de versionamento Git, permitindo restauração íntegra do site em caso de incidente.
            </li>
            <li>
              <strong className={STRONG}>Atualizações regulares</strong> de dependências de software com monitoramento de vulnerabilidades (npm audit, alertas Vercel Security).
            </li>
            <li>
              <strong className={STRONG}>Ausência de banco de dados de produção próprio</strong> — o site é gerado estaticamente (pré-renderização Next.js) e não armazena dados pessoais em banco próprio. Os formulários acionam o WhatsApp do usuário diretamente, sem persistência intermediária.
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Medidas administrativas:</strong>
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Dever de sigilo</strong> aplicável a todos os colaboradores e prestadores de serviço com acesso a dados pessoais, formalizado em contratos.
            </li>
            <li>
              <strong className={STRONG}>Princípio da necessidade</strong> na concessão de acessos — somente o pessoal estritamente necessário tem acesso a dados pessoais.
            </li>
            <li>
              <strong className={STRONG}>Registros de operações de tratamento</strong> mantidos para fins de governança e prestação de contas (LGPD Art. 6º, X + Art. 37).
            </li>
            <li>
              <strong className={STRONG}>Treinamento e conscientização</strong> periódicos da equipe sobre proteção de dados.
            </li>
            <li>
              <strong className={STRONG}>Revisão periódica</strong> desta política e das práticas internas de proteção de dados.
            </li>
          </ul>
          <p>
            Nenhum sistema é absolutamente seguro. A Sanetech compromete-se a evoluir continuamente suas práticas de segurança conforme melhores práticas da indústria e regulamentações aplicáveis.
          </p>
        </div>
      </section>

      {/* §12 Incidentes */}
      <section id="incidente-seguranca" className="mt-12 scroll-mt-24">
        <h2 className={H2}>12. Comunicação de incidentes (LGPD Art. 48)</h2>
        <div className={PROSE}>
          <p>
            Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares (LGPD Art. 48), a Sanetech adota o seguinte procedimento:
          </p>
          <ol className={OL}>
            <li>
              <strong className={STRONG}>Identificação e contenção.</strong> Ao tomar conhecimento de incidente, equipe técnica acionada imediatamente para conter o vetor de comprometimento, preservar evidências e mitigar impactos em curso.
            </li>
            <li>
              <strong className={STRONG}>Avaliação de risco.</strong> Análise da natureza dos dados afetados, do número aproximado de titulares envolvidos, das medidas técnicas e de segurança que estavam em vigor, dos riscos relacionados ao incidente, das medidas adotadas e a serem adotadas para reverter ou mitigar danos.
            </li>
            <li>
              <strong className={STRONG}>Comunicação à ANPD em prazo razoável</strong> (LGPD Art. 48 + regulamentação da ANPD sobre prazo). A comunicação inclui as informações exigidas pelo Art. 48, §1º: (i) descrição da natureza dos dados pessoais afetados; (ii) informações sobre os titulares envolvidos; (iii) indicação das medidas técnicas e de segurança utilizadas para a proteção dos dados, observados os segredos comercial e industrial; (iv) os riscos relacionados ao incidente; (v) os motivos da demora, no caso de a comunicação não ter sido imediata; e (vi) as medidas que foram ou que serão adotadas para reverter ou mitigar os efeitos do prejuízo.
            </li>
            <li>
              <strong className={STRONG}>Comunicação aos titulares afetados</strong> quando o incidente puder acarretar risco ou dano relevante, em linguagem clara e por canal apto a alcançar o titular (e-mail, telefone, WhatsApp).
            </li>
            <li>
              <strong className={STRONG}>Registro interno</strong> de todos os incidentes de segurança, mesmo os não-comunicáveis, conforme princípio de responsabilização e prestação de contas (LGPD Art. 6º, X).
            </li>
          </ol>
        </div>
      </section>

      {/* §13 Alterações */}
      <section id="alteracoes" className="mt-12 scroll-mt-24">
        <h2 className={H2}>13. Alterações e contato</h2>
        <div className={PROSE}>
          <p>
            Esta Política de Privacidade está sujeita a revisões periódicas para refletir mudanças nas práticas de tratamento de dados, nas obrigações legais aplicáveis ou nas regulamentações da ANPD.
          </p>
          <p>
            <strong className={STRONG}>Versão vigente:</strong> 1.0
            <br />
            <strong className={STRONG}>Última atualização:</strong> 14 de maio de 2026
          </p>
          <p>
            Alterações materiais — que ampliem o escopo do tratamento, modifiquem bases legais ou afetem direitos do titular — serão comunicadas aos titulares ativos (clientes e leads recentes) pelos canais de contato disponíveis, com antecedência razoável. A versão sempre vigente é a publicada nesta página.
          </p>
          <p>
            <strong className={STRONG}>Para qualquer questão sobre proteção de dados, fale conosco:</strong>
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>E-mail:</strong>{" "}
              <a href="mailto:contato@sanetech.com.br" className={LINK}>
                contato@sanetech.com.br
              </a>
            </li>
            <li>
              <strong className={STRONG}>Telefone/WhatsApp:</strong>{" "}
              <a href="tel:+5524993210383" className={LINK}>
                +55 24 99321-0383
              </a>
            </li>
            <li>
              <strong className={STRONG}>Endereço:</strong> Estrada União Indústria, 32.561 (Loja 07), Posse, Petrópolis – RJ, CEP 25770-470
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Documentos relacionados:</strong>
          </p>
          <ul className={UL}>
            <li>
              <Link href={"/termos-de-uso" as Route} className={LINK}>
                Termos de Uso
              </Link>
              {" "}— condições gerais de uso do website e identificação completa da entidade
            </li>
            <li>
              <Link href={"/politica-de-cookies" as Route} className={LINK}>
                Política de Cookies
              </Link>
              {" "}— detalhamento da postura cookieless e da medição agregada
            </li>
          </ul>
        </div>
      </section>
    </LegalDocument>
  );
}
