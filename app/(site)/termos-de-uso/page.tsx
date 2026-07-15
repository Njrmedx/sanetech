/**
 * /termos-de-uso — Termos de Uso BR (Aviso Legal consolidado).
 *
 * 12 seções: objeto, aceitação (LGPD Art. 14), identificação (Art. 997
 * CC + JUCERJA + RFB remissão), conteúdo informativo, PI (LDA + LPI),
 * uso permitido/proibido, responsabilidade c/ ressalva CDC inderrogável,
 * links, alterações, dados pessoais (cross-ref Privacidade+Cookies),
 * acessibilidade (Lei 13.146/2015 + WCAG 2.1 AA + eMAG), foro
 * Petrópolis-RJ c/ ressalva CDC Art. 101 inderrogável.
 *
 * Spec: 2026-05-14-legal-pages-br-lgpd-design.md §3 (commit 95f4e45).
 * Phase B5-Legal (2026-05-14).
 */

import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { LegalDocument, type LegalSection } from "@/components/blocks/legal-document";
import { BUSINESS_INFO } from "@/lib/seo/business-info";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso do website sanetech.com.br, identificação societária (CNPJ 05.950.182/0001-85), propriedade intelectual, acessibilidade WCAG 2.1 AA, foro Petrópolis-RJ com ressalva CDC.",
  openGraph: {
    title: "Termos de Uso — Sanetech",
    description: "Condições de utilização, identificação societária completa, propriedade intelectual, foro e legislação aplicável.",
    url: `${BUSINESS_INFO.url}/termos-de-uso`,
    type: "article",
    locale: "pt_BR",
  },
  alternates: { canonical: "/termos-de-uso" },
};

const sections: LegalSection[] = [
  { id: "objeto", title: "Objeto e enquadramento" },
  { id: "aceitacao", title: "Aceitação dos termos" },
  { id: "identificacao", title: "Identificação da empresa" },
  { id: "conteudo-tecnico", title: "Natureza informativa do conteúdo" },
  { id: "propriedade-intelectual", title: "Propriedade intelectual" },
  { id: "uso-permitido", title: "Uso permitido e proibido" },
  { id: "responsabilidade", title: "Limitação de responsabilidade" },
  { id: "links-externos", title: "Links para terceiros" },
  { id: "alteracoes", title: "Alterações ao website e aos termos" },
  { id: "dados-pessoais", title: "Tratamento de dados pessoais" },
  { id: "acessibilidade", title: "Acessibilidade digital" },
  { id: "legislacao-foro", title: "Legislação aplicável e foro" },
];

const H2 = "text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance";
const PROSE = "mt-6 space-y-5 text-[17px] leading-relaxed text-foreground/85";
const LINK = "text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)] transition-colors duration-[120ms]";
const TABLE = "mt-4 w-full text-[15px] border-collapse";
const TH = "text-left font-semibold text-foreground border-b border-[var(--color-border)] py-2 pr-4 align-top";
const TD = "border-b border-[var(--color-border)] py-2 pr-4 align-top text-foreground/85";
const UL = "ml-5 list-disc space-y-2";
const STRONG = "font-semibold text-foreground";

export default function TermosDeUsoPage() {
  return (
    <LegalDocument
      eyebrow="Legal · Termos"
      title="Termos de Uso"
      subtitle="Condições de uso do website sanetech.com.br, identificação societária completa, propriedade intelectual e foro aplicável."
      lastUpdated="14 de maio de 2026"
      version="1.0"
      sections={sections}
    >
      {/* §1 Objeto e enquadramento */}
      <section id="objeto" className="scroll-mt-24">
        <h2 className={H2}>1. Objeto e enquadramento</h2>
        <div className={PROSE}>
          <p>
            Estes Termos de Uso regulam o acesso e a utilização do website <strong className={STRONG}>sanetech.com.br</strong> (doravante &ldquo;Site&rdquo;), de titularidade da <strong className={STRONG}>SANETECH CONTROLE E AUTOMAÇÃO LTDA.</strong>, pessoa jurídica de direito privado inscrita no CNPJ sob o n.º 05.950.182/0001-85 (doravante &ldquo;Sanetech&rdquo;), nos termos da legislação brasileira aplicável.
          </p>
          <p>
            <strong className={STRONG}>Natureza do Site:</strong> O Site é canal institucional e informativo de apresentação dos serviços de engenharia ambiental, controle e automação de tratamento de efluentes industriais e esgoto sanitário prestados pela Sanetech. O Site <strong className={STRONG}>não é canal de venda online</strong> de produtos ou serviços e <strong className={STRONG}>não constitui oferta vinculante</strong> em sentido contratual.
          </p>
          <p>
            <strong className={STRONG}>Formulários e canais de contato:</strong> Os formulários de diagnóstico, contato e orçamento disponíveis no Site são mecanismos de recolha de manifestação de interesse e de contexto técnico para subsequente diligência pré-contratual. A submissão de qualquer formulário <strong className={STRONG}>aciona apenas o redirecionamento para o aplicativo WhatsApp</strong> do remetente, com mensagem pré-preenchida endereçada ao número comercial da Sanetech. <strong className={STRONG}>Não há automatização contratual nem manifestação de vontade vinculante decorrente da mera submissão.</strong> A Sanetech responde subsequentemente em prazo razoável, manifestando interesse, solicitando informações complementares, declinando ou apresentando proposta &mdash; sendo a relação contratual sempre formalizada por instrumento próprio (contrato escrito de prestação de serviços).
          </p>
          <p>
            <strong className={STRONG}>Área geográfica de atuação:</strong> A Sanetech atua predominantemente no território nacional brasileiro, com sede em Petrópolis-RJ e capacidade de atendimento em todo o Brasil mediante mobilização técnica conforme o porte e a localização do projeto. Atendimentos internacionais são analisados caso a caso.
          </p>
        </div>
      </section>

      {/* §2 Aceitação dos termos */}
      <section id="aceitacao" className="mt-12 scroll-mt-24">
        <h2 className={H2}>2. Aceitação dos termos</h2>
        <div className={PROSE}>
          <p>
            O acesso e a utilização do Site implicam a aceitação integral e sem reservas destes Termos de Uso, bem como da Política de Privacidade e da Política de Cookies, considerados parte integrante destes Termos por referência cruzada.
          </p>
          <p>
            <strong className={STRONG}>Capacidade civil:</strong> A utilização do Site pressupõe que o usuário seja plenamente capaz nos termos do Art. 5º do Código Civil (maior de 18 anos) ou esteja devidamente assistido/representado por seus pais ou responsáveis legais. Adolescentes entre 13 e 17 anos, conforme tratamento previsto pela LGPD Art. 14, somente devem fornecer dados pessoais com consentimento específico e em destaque do responsável legal. <strong className={STRONG}>Crianças menores de 13 anos não devem utilizar os canais de contato do Site para fornecimento de dados pessoais.</strong>
          </p>
          <p>
            <strong className={STRONG}>Não-aceitação:</strong> Caso você não concorde, integral ou parcialmente, com estes Termos, com a Política de Privacidade ou com a Política de Cookies, deve <strong className={STRONG}>abster-se de utilizar o Site</strong> e de fornecer qualquer dado pessoal por meio dele.
          </p>
        </div>
      </section>

      {/* §3 Identificação da empresa */}
      <section id="identificacao" className="mt-12 scroll-mt-24">
        <h2 className={H2}>3. Identificação da empresa</h2>
        <div className={PROSE}>
          <p>
            Em cumprimento aos deveres de transparência e identificação previstos no Marco Civil da Internet (Lei 12.965/2014, Art. 7º) e em coerência com as boas práticas de identificação societária aplicáveis a sociedades empresárias (CC Art. 997 + arquivamento de atos constitutivos na Junta Comercial competente), declaramos:
          </p>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th scope="col" className={TH}>Campo</th>
                  <th scope="col" className={TH}>Dado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>Razão social</td>
                  <td className={TD}>SANETECH CONTROLE E AUTOMAÇÃO LTDA.</td>
                </tr>
                <tr>
                  <td className={TD}>Nome fantasia</td>
                  <td className={TD}>{BUSINESS_INFO.name}</td>
                </tr>
                <tr>
                  <td className={TD}>Forma jurídica</td>
                  <td className={TD}>Sociedade Empresária Limitada</td>
                </tr>
                <tr>
                  <td className={TD}>CNPJ</td>
                  <td className={TD}>{BUSINESS_INFO.cnpj}</td>
                </tr>
                <tr>
                  <td className={TD}>Sede</td>
                  <td className={TD}>Estrada União Indústria, 32.561 (Loja 07), bairro Posse, Petrópolis &ndash; RJ, CEP 25770-470</td>
                </tr>
                <tr>
                  <td className={TD}>Capital social</td>
                  <td className={TD}>Integralizado conforme contrato social arquivado na Junta Comercial do Estado do Rio de Janeiro (JUCERJA), consultável publicamente mediante o CNPJ informado</td>
                </tr>
                <tr>
                  <td className={TD}>Registro empresarial</td>
                  <td className={TD}>Arquivado na Junta Comercial do Estado do Rio de Janeiro (JUCERJA), com NIRE consultável mediante o CNPJ</td>
                </tr>
                <tr>
                  <td className={TD}>Atividade econômica principal</td>
                  <td className={TD}>
                    Conforme cadastro CNPJ da Receita Federal, consultável publicamente em{" "}
                    <a
                      href="https://servicos.receita.fazenda.gov.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={LINK}
                    >
                      servicos.receita.fazenda.gov.br
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={TD}>E-mail institucional</td>
                  <td className={TD}>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className={LINK}>
                      {BUSINESS_INFO.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className={TD}>Telefone/WhatsApp</td>
                  <td className={TD}>
                    <a href="tel:+5524993210383" className={LINK}>
                      {BUSINESS_INFO.telephone}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className={STRONG}>Consulta pública dos atos societários:</strong> O contrato social atualizado, alterações posteriores, capital social integralizado e demais atos societários da Sanetech estão arquivados na Junta Comercial do Estado do Rio de Janeiro (JUCERJA) e podem ser consultados publicamente mediante o CNPJ acima, em{" "}
            <a
              href="https://www.jucerja.rj.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              www.jucerja.rj.gov.br
            </a>{" "}
            ou pela plataforma da Receita Federal (
            <a
              href="https://servicos.receita.fazenda.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              servicos.receita.fazenda.gov.br
            </a>
            ). Esta forma de identificação cumpre, por remissão a fontes oficiais públicas, os requisitos de transparência aplicáveis a pessoas jurídicas brasileiras.
          </p>
          <p>
            <strong className={STRONG}>Registros profissionais (CREA/CONFEA):</strong> As atividades técnicas de engenharia exercidas pela Sanetech observam as exigências de Anotação de Responsabilidade Técnica (ART) junto ao Conselho Regional de Engenharia e Agronomia (CREA) competente, conforme a Resolução CONFEA n.º 1.025/2009 e demais normas aplicáveis. A vinculação técnica de cada projeto consta dos instrumentos contratuais e dos documentos de execução, sem necessidade de publicação no Site.
          </p>
        </div>
      </section>

      {/* §4 Natureza informativa do conteúdo */}
      <section id="conteudo-tecnico" className="mt-12 scroll-mt-24">
        <h2 className={H2}>4. Natureza informativa do conteúdo</h2>
        <div className={PROSE}>
          <p>
            O conteúdo do Site, incluindo descrições de serviços, especificações técnicas referenciais, cases técnicos, FAQs, glossário e demais materiais, tem <strong className={STRONG}>natureza estritamente informativa e referencial</strong>. Reflete o estado da prática técnica e da oferta comercial da Sanetech à data de publicação.
          </p>
          <p>
            <strong className={STRONG}>O conteúdo do Site não constitui:</strong>
          </p>
          <ul className={UL}>
            <li>Parecer técnico vinculante aplicável a qualquer caso concreto específico;</li>
            <li>Garantia de resultado, desempenho técnico ou conformidade regulatória em relação a qualquer estação de tratamento, sistema, projeto ou operação concreta;</li>
            <li>Substituto de consulta técnica direta, estudo de tratabilidade, análise de viabilidade ou contratação formal de serviços de engenharia;</li>
            <li>Documento técnico de projeto, memorial descritivo, especificação contratual ou peça profissional registrada.</li>
          </ul>
          <p>
            Decisões técnicas, regulatórias, ambientais e contratuais relativas a tratamento de efluentes, controle de processos ou automação devem ser tomadas com base em <strong className={STRONG}>análise técnica específica do caso concreto</strong>, formalizada em documentação própria, sob responsabilidade do profissional habilitado a cargo, conforme normas profissionais aplicáveis.
          </p>
        </div>
      </section>

      {/* §5 Propriedade intelectual */}
      <section id="propriedade-intelectual" className="mt-12 scroll-mt-24">
        <h2 className={H2}>5. Propriedade intelectual</h2>
        <div className={PROSE}>
          <p>
            Todo o conteúdo disponibilizado no Site &mdash; incluindo, sem limitação, textos, imagens, ilustrações, ícones, identidade visual, logotipo, marca &ldquo;Sanetech&rdquo;, layout, código-fonte (HTML, CSS, JavaScript), bases de dados estruturadas, denominações de serviços, taxonomia técnica, e demais elementos visuais e textuais &mdash; está protegido pela legislação brasileira de propriedade intelectual:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Lei de Direitos Autorais</strong> (Lei n.º 9.610/1998): protege obras intelectuais (textos, fotografias, ilustrações, código-fonte enquanto obra literária na acepção do Art. 7º, XII).
            </li>
            <li>
              <strong className={STRONG}>Lei da Propriedade Industrial</strong> (Lei n.º 9.279/1996): protege a marca &ldquo;Sanetech&rdquo; e demais sinais distintivos, registrados ou em processo de registro junto ao Instituto Nacional da Propriedade Industrial (INPI).
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Direitos exclusivos:</strong> A reprodução, distribuição, comunicação ao público, modificação, adaptação, tradução, criação de obras derivadas, sublicenciamento, exposição pública e qualquer outra forma de utilização do conteúdo do Site requerem <strong className={STRONG}>autorização prévia, expressa e escrita</strong> da Sanetech, salvo quando expressamente autorizado em lei.
          </p>
          <p>
            <strong className={STRONG}>Exceções legalmente previstas:</strong>
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Visualização em navegador</strong> para fins pessoais e não comerciais;
            </li>
            <li>
              <strong className={STRONG}>Impressão para uso pessoal</strong> não comercial, mantida integralmente a indicação de autoria e fonte;
            </li>
            <li>
              <strong className={STRONG}>Citação de pequenos trechos</strong> para fins de comentário, crítica, estudo ou pesquisa, com indicação clara da fonte (Sanetech) e do link de origem, observado o LDA Art. 46, III.
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Violações:</strong> A reprodução não autorizada do conteúdo do Site sujeita o infrator à responsabilidade civil (LDA Art. 102 a 110), administrativa e, conforme o caso, criminal (Código Penal Art. 184), bem como a medidas cautelares apropriadas (busca e apreensão, ordem de cessação).
          </p>
        </div>
      </section>

      {/* §6 Uso permitido e proibido */}
      <section id="uso-permitido" className="mt-12 scroll-mt-24">
        <h2 className={H2}>6. Uso permitido e proibido</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>Uso permitido:</strong> O usuário pode navegar pelo Site, ler seu conteúdo, submeter formulários para iniciar contato comercial, consultar cases e materiais técnicos, e demais interações regulares previstas pela funcionalidade do Site.
          </p>
          <p>
            <strong className={STRONG}>Uso proibido:</strong> Constituem usos vedados, sujeitos à interrupção imediata de acesso e às demais consequências legais aplicáveis (incluindo civis, administrativas e penais conforme o caso):
          </p>
          <ul className={UL}>
            <li>Tentar contornar, desabilitar, comprometer ou interferir em mecanismos de segurança do Site;</li>
            <li>Realizar acessos não autorizados a áreas internas, painéis administrativos, APIs internas ou bases de dados;</li>
            <li>Introduzir ou tentar introduzir vírus, malware, código malicioso, worms, trojans ou qualquer software destinado a comprometer a integridade ou o funcionamento do Site;</li>
            <li>Realizar coleta automatizada massiva (scraping, harvesting, crawlers não autorizados, bots) de conteúdo, dados ou estruturas do Site, salvo mediante autorização expressa e prévia;</li>
            <li>Sobrecarregar a infraestrutura do Site (DoS, DDoS, requisições abusivas);</li>
            <li>Utilizar o Site para qualquer finalidade ilícita, fraudulenta, difamatória, ofensiva, discriminatória ou contrária à ordem pública, à moralidade ou aos direitos de terceiros;</li>
            <li>Falsear identidade, fornecer dados pessoais alheios sem autorização, ou se apresentar como representante autorizado de qualquer pessoa física ou jurídica que não represente;</li>
            <li>Utilizar o conteúdo do Site para treinamento de modelos de inteligência artificial sem autorização expressa.</li>
          </ul>
        </div>
      </section>

      {/* §7 Limitação de responsabilidade */}
      <section id="responsabilidade" className="mt-12 scroll-mt-24">
        <h2 className={H2}>7. Limitação de responsabilidade</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>Esforço diligente de manutenção.</strong> A Sanetech envida esforços razoáveis para manter o Site disponível, atualizado, livre de erros materiais e acessível em condições normais de operação. <strong className={STRONG}>A Sanetech não garante</strong>, no entanto, que o Site estará disponível de forma ininterrupta, livre de qualquer erro, livre de qualquer vulnerabilidade técnica, compatível com qualquer dispositivo ou configuração de navegador, nem que sua utilização produzirá qualquer resultado específico.
          </p>
          <p>
            <strong className={STRONG}>Exclusões na máxima extensão legalmente permitida.</strong> Salvo nos limites inderrogáveis a seguir, a Sanetech não será responsável por:
          </p>
          <ul className={UL}>
            <li>Indisponibilidades temporárias decorrentes de manutenção programada, falhas em infraestrutura de terceiros (hospedagem Vercel, infraestrutura de internet do usuário, redes intermediárias), eventos de força maior ou caso fortuito;</li>
            <li>Danos indiretos, lucros cessantes, perda de oportunidade, dano à imagem decorrentes do uso ou da impossibilidade de uso do Site;</li>
            <li>Decisões técnicas ou contratuais tomadas pelo usuário com base exclusiva no conteúdo informativo do Site, sem consulta técnica formal subsequente conforme alertado na seção 4;</li>
            <li>Conteúdo, disponibilidade, privacidade ou segurança de websites externos linkados a partir do Site (ver seção 8).</li>
          </ul>
          <p>
            <strong className={STRONG}>Ressalva absoluta de direitos inderrogáveis (CRÍTICO).</strong> Nada nestes Termos exclui ou limita responsabilidades que, por imperativo legal brasileiro, não possam ser excluídas &mdash; em particular:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Direitos básicos do consumidor</strong> previstos no Código de Defesa do Consumidor (Lei 8.078/1990), quando aplicável à relação concreta (B2C);
            </li>
            <li>
              <strong className={STRONG}>Responsabilidade por dolo ou culpa grave</strong> (Código Civil Art. 392 + 422 + 932);
            </li>
            <li>
              <strong className={STRONG}>Responsabilidade por danos à vida, à integridade física, à saúde ou à dignidade</strong> das pessoas;
            </li>
            <li>
              <strong className={STRONG}>Vedação de cláusulas abusivas</strong> previstas no CDC Art. 51, quando aplicável.
            </li>
          </ul>
          <p>
            A relação entre Sanetech e pessoa jurídica contratante (B2B) é regida primariamente pelo Código Civil e pelo contrato específico de prestação de serviços, com aplicação subsidiária do CDC quando reconhecida a hipossuficiência do contratante (jurisprudência consolidada do STJ).
          </p>
        </div>
      </section>

      {/* §8 Links para terceiros */}
      <section id="links-externos" className="mt-12 scroll-mt-24">
        <h2 className={H2}>8. Links para terceiros</h2>
        <div className={PROSE}>
          <p>
            O Site pode conter links, redirecionamentos ou referências a websites, aplicativos ou serviços de terceiros, especialmente para:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>WhatsApp</strong> (<code>wa.me/...</code> &mdash; operado por Meta Platforms);
            </li>
            <li>Páginas de regulamentos, normas técnicas, autoridades regulatórias (CONAMA, IBAMA, INEA, CETESB, CFC, ANPD, INPI, JUCERJA);</li>
            <li>Eventuais referências bibliográficas, padrões técnicos (ABNT, ASTM, USP, CLSI) ou organizações setoriais.</li>
          </ul>
          <p>
            <strong className={STRONG}>A Sanetech não é responsável pelo conteúdo, pela política de privacidade, pelas práticas de segurança nem pela disponibilidade de websites externos.</strong> O acesso a esses recursos ocorre por iniciativa exclusiva do usuário e sob risco e responsabilidade do próprio usuário.
          </p>
          <p>
            Sugerimos sempre revisar a política de privacidade e os termos de uso dos websites externos antes de fornecer dados pessoais ou de tomar decisões com base em seu conteúdo.
          </p>
        </div>
      </section>

      {/* §9 Alterações ao website e aos termos */}
      <section id="alteracoes" className="mt-12 scroll-mt-24">
        <h2 className={H2}>9. Alterações ao website e aos termos</h2>
        <div className={PROSE}>
          <p>
            A Sanetech reserva-se o direito de modificar, suspender, descontinuar ou alterar, total ou parcialmente, qualquer aspecto do Site &mdash; incluindo seu conteúdo, sua estrutura, suas funcionalidades, sua disponibilidade e estes próprios Termos de Uso &mdash; a qualquer momento e a seu exclusivo critério, sem necessidade de aviso prévio individualizado.
          </p>
          <p>
            A <strong className={STRONG}>versão vigente</strong> destes Termos é sempre a publicada nesta página, identificada por número de versão e data de atualização. O acesso continuado ao Site após a publicação de versão revista implica aceitação das novas condições. Alterações materiais &mdash; que afetem substancialmente direitos do usuário &mdash; serão sinalizadas de forma destacada por prazo razoável.
          </p>
          <p>
            <strong className={STRONG}>Versão vigente:</strong> 1.0
            <br />
            <strong className={STRONG}>Última atualização:</strong> 14 de maio de 2026
          </p>
        </div>
      </section>

      {/* §10 Tratamento de dados pessoais */}
      <section id="dados-pessoais" className="mt-12 scroll-mt-24">
        <h2 className={H2}>10. Tratamento de dados pessoais</h2>
        <div className={PROSE}>
          <p>
            O tratamento de dados pessoais pelo Site e pela Sanetech é regido pela{" "}
            <Link href={"/politica-de-privacidade" as Route} className={LINK}>
              Política de Privacidade
            </Link>
            , parte integrante destes Termos por referência cruzada. A Política de Privacidade detalha:
          </p>
          <ul className={UL}>
            <li>Quem é o controlador dos dados;</li>
            <li>Quais dados são coletados;</li>
            <li>Para que são tratados;</li>
            <li>Bases legais aplicáveis (LGPD Art. 7º);</li>
            <li>Compartilhamento com operadores e terceiros;</li>
            <li>Prazos de retenção;</li>
            <li>Direitos do titular (LGPD Art. 18) e canais de exercício;</li>
            <li>Reclamação à Autoridade Nacional de Proteção de Dados (ANPD);</li>
            <li>Transferência internacional;</li>
            <li>Medidas de segurança e procedimentos de incidente.</li>
          </ul>
          <p>
            A{" "}
            <Link href={"/politica-de-cookies" as Route} className={LINK}>
              Política de Cookies
            </Link>
            , também parte integrante, detalha a postura cookieless do Site, o modo de medição agregada e anônima utilizado (Vercel Analytics cookieless), e a lista vinculativa de práticas que <strong className={STRONG}>não são adotadas</strong> (ausência de cookies de marketing, ausência de tracking comportamental, ausência de fingerprinting, ausência de profiling automatizado).
          </p>
        </div>
      </section>

      {/* §11 Acessibilidade digital */}
      <section id="acessibilidade" className="mt-12 scroll-mt-24">
        <h2 className={H2}>11. Acessibilidade digital</h2>
        <div className={PROSE}>
          <p>
            A Sanetech reconhece o direito de acesso à informação e à comunicação digital de pessoas com deficiência, conforme garantido pela <strong className={STRONG}>Lei Brasileira de Inclusão da Pessoa com Deficiência</strong> (Lei n.º 13.146/2015, especialmente seu Art. 63 &mdash; acessibilidade na Internet) e pela Constituição Federal.
          </p>
          <p>
            <strong className={STRONG}>Compromisso técnico.</strong> O Site é concebido e mantido em conformidade com:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Web Content Accessibility Guidelines (WCAG) 2.1</strong>, do W3C, nível de conformidade <strong className={STRONG}>AA</strong>, referencial técnico internacionalmente adotado para acessibilidade digital;
            </li>
            <li>
              <strong className={STRONG}>eMAG</strong> (Modelo de Acessibilidade em Governo Eletrônico) &mdash; diretrizes brasileiras paralelas ao WCAG, no que aplicável a sites do setor privado;
            </li>
            <li>
              <strong className={STRONG}>Princípios da Lei 13.146/2015</strong> &mdash; acessibilidade na Internet, com observância da acessibilidade nos sítios.
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Medidas técnicas implementadas:</strong>
          </p>
          <ul className={UL}>
            <li>Estrutura semântica HTML5 com hierarquia correta de cabeçalhos (h1 &rarr; h2 &rarr; h3);</li>
            <li>Contraste de cores conforme WCAG 2.1 AA (mínimo 4,5:1 para texto regular, 3:1 para texto grande);</li>
            <li>Respeito à preferência do usuário por movimento reduzido (<code>prefers-reduced-motion</code>) &mdash; todas as animações e transições são desativadas ou simplificadas quando o sistema operacional do usuário sinaliza essa preferência;</li>
            <li>Navegação completa por teclado, incluindo focus visíveis em todos os elementos interativos;</li>
            <li>Formulários com <code>label</code> associados, mensagens de erro acessíveis e validação por leitor de tela;</li>
            <li>Imagens funcionais com texto alternativo (<code>alt</code>) descritivo; imagens decorativas marcadas como <code>aria-hidden</code>;</li>
            <li>Skip link no topo de cada página para acesso direto ao conteúdo principal;</li>
            <li>Botões e links com texto descritivo do destino ou da ação, evitando &ldquo;clique aqui&rdquo; ou rótulos ambíguos.</li>
          </ul>
          <p>
            <strong className={STRONG}>Canal de reporte de barreiras.</strong> Caso você encontre alguma barreira de acessibilidade no Site, ou necessite obter informação publicada em formato alternativo, envie e-mail para{" "}
            <a href={`mailto:${BUSINESS_INFO.email}`} className={LINK}>
              <strong className={STRONG}>{BUSINESS_INFO.email}</strong>
            </a>{" "}
            &mdash; comprometemo-nos a responder no prazo razoável de 10 (dez) dias úteis e a empenhar esforço diligente em remover a barreira ou disponibilizar o conteúdo em formato adequado.
          </p>
        </div>
      </section>

      {/* §12 Legislação aplicável e foro */}
      <section id="legislacao-foro" className="mt-12 scroll-mt-24">
        <h2 className={H2}>12. Legislação aplicável e foro</h2>
        <div className={PROSE}>
          <p>
            Estes Termos são regidos pela <strong className={STRONG}>legislação da República Federativa do Brasil</strong>, com aplicação especial dos seguintes diplomas no que pertinente:
          </p>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th scope="col" className={TH}>Domínio</th>
                  <th scope="col" className={TH}>Diploma</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>Civil geral</td>
                  <td className={TD}>Código Civil (Lei 10.406/2002)</td>
                </tr>
                <tr>
                  <td className={TD}>Empresarial</td>
                  <td className={TD}>Código Civil (Livro II) + legislação societária</td>
                </tr>
                <tr>
                  <td className={TD}>Defesa do consumidor (quando aplicável)</td>
                  <td className={TD}>Código de Defesa do Consumidor (Lei 8.078/1990)</td>
                </tr>
                <tr>
                  <td className={TD}>Internet e direitos digitais</td>
                  <td className={TD}>Marco Civil da Internet (Lei 12.965/2014)</td>
                </tr>
                <tr>
                  <td className={TD}>Proteção de dados pessoais</td>
                  <td className={TD}>Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018)</td>
                </tr>
                <tr>
                  <td className={TD}>Direito autoral</td>
                  <td className={TD}>Lei de Direitos Autorais (Lei 9.610/1998)</td>
                </tr>
                <tr>
                  <td className={TD}>Propriedade industrial</td>
                  <td className={TD}>Lei da Propriedade Industrial (Lei 9.279/1996)</td>
                </tr>
                <tr>
                  <td className={TD}>Acessibilidade</td>
                  <td className={TD}>Lei Brasileira de Inclusão (Lei 13.146/2015)</td>
                </tr>
                <tr>
                  <td className={TD}>Tributário</td>
                  <td className={TD}>Código Tributário Nacional (Lei 5.172/1966)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className={STRONG}>Foro de eleição:</strong> Para dirimir quaisquer controvérsias decorrentes destes Termos ou da utilização do Site, fica eleito o <strong className={STRONG}>foro da Comarca de Petrópolis, Estado do Rio de Janeiro</strong>, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
          </p>
          <p>
            <strong className={STRONG}>Ressalva absoluta &mdash; direito do consumidor:</strong> Caso a relação concreta entre o usuário e a Sanetech caracterize relação de consumo na acepção do CDC Art. 2º (destinação final dos serviços, vulnerabilidade ou hipossuficiência reconhecida), prevalece o foro do domicílio do consumidor, nos termos do CDC Art. 101, I, podendo este, à sua opção, demandar a Sanetech no foro de seu próprio domicílio. <strong className={STRONG}>Esta ressalva é inderrogável.</strong>
          </p>
          <p>
            <strong className={STRONG}>Autocomposição e mediação:</strong> Antes de submeter qualquer controvérsia ao Poder Judiciário, as partes envidarão esforços razoáveis para resolução consensual, podendo recorrer aos canais de mediação e conciliação previstos pela Lei 13.140/2015 (Lei de Mediação) e, no caso de relações de consumo, à plataforma{" "}
            <a
              href="https://www.consumidor.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              consumidor.gov.br
            </a>{" "}
            mantida pelo Ministério da Justiça, à disposição do consumidor.
          </p>
          <p>
            <strong className={STRONG}>Entidades de supervisão setoriais aplicáveis:</strong>
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>ANPD</strong> &mdash; Autoridade Nacional de Proteção de Dados Pessoais (proteção de dados pessoais);
            </li>
            <li>
              <strong className={STRONG}>CONFEA/CREA</strong> &mdash; Conselho Federal e Conselhos Regionais de Engenharia e Agronomia (atividade técnica de engenharia);
            </li>
            <li>
              <strong className={STRONG}>PROCON</strong> estaduais e municipais (defesa do consumidor, quando aplicável);
            </li>
            <li>
              <strong className={STRONG}>CONAR</strong> &mdash; Conselho Nacional de Autorregulamentação Publicitária (publicidade, quando aplicável);
            </li>
            <li>
              <strong className={STRONG}>INPI</strong> &mdash; Instituto Nacional da Propriedade Industrial (marcas e patentes).
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Para questões sobre estes Termos:</strong>
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>E-mail:</strong>{" "}
              <a href={`mailto:${BUSINESS_INFO.email}`} className={LINK}>
                {BUSINESS_INFO.email}
              </a>
            </li>
            <li>
              <strong className={STRONG}>Telefone/WhatsApp:</strong>{" "}
              <a href="tel:+5524993210383" className={LINK}>
                {BUSINESS_INFO.telephone}
              </a>
            </li>
            <li>
              <strong className={STRONG}>Endereço:</strong> Estrada União Indústria, 32.561 (Loja 07), Posse, Petrópolis &ndash; RJ, CEP 25770-470
            </li>
          </ul>
        </div>
      </section>
    </LegalDocument>
  );
}
