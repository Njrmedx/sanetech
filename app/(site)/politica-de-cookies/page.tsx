/**
 * /politica-de-cookies — Política de Cookies BR (cookieless declarado).
 *
 * 9 seções declarando postura cookieless integral auditável via DevTools.
 * Vercel Analytics cookieless explicado, lista vinculativa 12 práticas
 * que NÃO adotamos, verificável publicamente.
 *
 * Spec: 2026-05-14-legal-pages-br-lgpd-design.md §4 (95f4e45).
 * Phase B5-Legal (2026-05-14).
 */

import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { LegalDocument, type LegalSection } from "@/components/blocks/legal-document";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import { Abbr } from "@/components/ui/abbr";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Postura cookieless integral declarada. Zero cookies próprios, zero sessionStorage/localStorage, zero tracking comportamental. Vercel Analytics cookieless. Auditável via DevTools.",
  openGraph: {
    title: "Política de Cookies — Sanetech",
    description: "Cookieless declarado e auditável. O que NÃO fazemos (lista vinculativa). Como verificar e controlar.",
    url: `${BUSINESS_INFO.url}/politica-de-cookies`,
    type: "article",
    locale: "pt_BR",
  },
  alternates: { canonical: "/politica-de-cookies" },
};

const sections: LegalSection[] = [
  { id: "o-que-sao", title: "O que são cookies e tecnologias similares" },
  { id: "posicionamento", title: "Posicionamento Sanetech: cookieless" },
  { id: "cookies-proprios", title: "Cookies próprios (ausência)" },
  { id: "analytics-cookieless", title: "Mensuração agregada cookieless (Vercel Analytics)" },
  { id: "storage-browser", title: "sessionStorage e localStorage (ausência)" },
  { id: "terceiros-redirecionamento", title: "Recursos e redirecionamentos a terceiros" },
  { id: "o-que-nao-fazemos", title: "Práticas que não adotamos (lista vinculativa)" },
  { id: "verificar-controlar", title: "Como verificar e controlar" },
  { id: "alteracoes-contato", title: "Alterações, vigência e contato" },
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

export default function PoliticaCookiesPage() {
  return (
    <LegalDocument
      eyebrow="Legal · Cookies"
      title="Política de Cookies"
      subtitle="Postura cookieless integral declarada e auditável. Como medimos uso de forma agregada e anônima, sem cookies."
      lastUpdated="14 de maio de 2026"
      version="1.0"
      sections={sections}
    >
      {/* §1 O que são cookies e tecnologias similares */}
      <section id="o-que-sao" className="scroll-mt-24">
        <h2 className={H2}>1. O que são cookies e tecnologias similares</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>Cookies</strong> são pequenos arquivos de texto que websites podem instalar no dispositivo do usuário (navegador) com diversas finalidades &mdash; preservar preferências, manter sessão de login, contar visitantes, medir desempenho, exibir publicidade dirigida, rastrear comportamento entre sites, dentre outras.
          </p>
          <p>
            <strong className={STRONG}>Tecnologias similares</strong> compreendem <code>localStorage</code> e <code>sessionStorage</code> (espaços de armazenamento no navegador acessíveis ao JavaScript de uma origem), pixels de rastreio (imagens minúsculas embutidas em páginas e e-mails), fingerprinting (técnicas de identificação baseadas em assinatura técnica do navegador), e identificadores agrupados (group identifiers de SDK móveis).
          </p>
          <p>
            Todas essas tecnologias compartilham o potencial de coletar e processar dados pessoais do usuário, ainda que em diferentes graus de intrusão. Por isso, sua utilização sujeita-se à <Abbr term="LGPD" /> e ao Marco Civil da Internet.
          </p>
        </div>
      </section>

      {/* §2 Posicionamento Sanetech: cookieless */}
      <section id="posicionamento" className="mt-12 scroll-mt-24">
        <h2 className={H2}>2. Posicionamento Sanetech: cookieless</h2>
        <div className={PROSE}>
          <p>
            O website da Sanetech adota, por decisão arquitetural deliberada, uma <strong className={STRONG}>postura cookieless integral</strong>. Isso significa que:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>O Site não instala cookies próprios</strong> de nenhuma categoria &mdash; nem estritamente necessários, nem de preferências, nem de mensuração, nem de marketing.
            </li>
            <li>
              <strong className={STRONG}>O Site não utiliza <code>localStorage</code> nem <code>sessionStorage</code></strong> para armazenamento de identificadores, preferências do usuário ou estados persistentes entre páginas ou sessões.
            </li>
            <li>
              <strong className={STRONG}>O Site não embute pixels de rastreio, scripts de remarketing nem SDKs de plataformas publicitárias</strong> (Meta Pixel, Google Ads, TikTok, LinkedIn, Pinterest, etc.).
            </li>
            <li>
              <strong className={STRONG}>O Site não embute scripts de tracking comportamental</strong> (Hotjar, FullStory, Microsoft Clarity, Mixpanel, Amplitude, Heap, etc.).
            </li>
            <li>
              <strong className={STRONG}>A medição de uso</strong> é estritamente agregada, anônima e cookieless, conforme detalhado na seção 4.
            </li>
          </ul>
          <p>
            Esta postura é <strong className={STRONG}>auditável por inspeção do código fonte</strong> (HTML + JavaScript entregue ao navegador) ou pelas ferramentas de desenvolvimento do próprio navegador (painéis Network, Storage e Application).
          </p>
        </div>
      </section>

      {/* §3 Cookies próprios (ausência) */}
      <section id="cookies-proprios" className="mt-12 scroll-mt-24">
        <h2 className={H2}>3. Cookies próprios (ausência)</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>A Sanetech não instala cookies próprios no Site.</strong>
          </p>
          <p>
            Esta ausência é deliberada e tem origem em duas decisões arquiteturais convergentes:
          </p>
          <ol className={OL}>
            <li>
              <strong className={STRONG}>Site estático pré-renderizado.</strong> O website é construído como conjunto de páginas estáticas geradas em momento de build (Static Site Generation), entregues pela borda da rede Vercel diretamente ao navegador. Não há lógica de autenticação, sessão de usuário, carrinho de compras, gestão de estado entre páginas ou qualquer funcionalidade que tradicionalmente requereria cookies próprios.
            </li>
            <li>
              <strong className={STRONG}>Formulários WhatsApp-pivô.</strong> Os formulários de diagnóstico/contato/orçamento, ao serem submetidos, redirecionam o usuário diretamente para o aplicativo WhatsApp com mensagem pré-preenchida. Não há servidor de backend próprio que receba a submissão, processe os dados ou estabeleça sessão &mdash; eliminando o caso de uso comum de cookie de sessão.
            </li>
          </ol>
          <p>
            Em consequência, o Site não emite nenhum <code>Set-Cookie</code> header em suas respostas HTTP. O usuário pode verificar este fato a qualquer momento por meio das ferramentas de desenvolvimento do navegador (<code>F12</code> &rarr; aba Network &rarr; cabeçalhos de resposta).
          </p>
        </div>
      </section>

      {/* §4 Mensuração agregada cookieless (Vercel Analytics) */}
      <section id="analytics-cookieless" className="mt-12 scroll-mt-24">
        <h2 className={H2}>4. Mensuração agregada cookieless (Vercel Analytics)</h2>
        <div className={PROSE}>
          <p>
            Para entender o uso do Site e melhorá-lo de forma contínua, a Sanetech utiliza a ferramenta <strong className={STRONG}>Vercel Analytics</strong>, oferecida pelo seu provedor de hospedagem Vercel Inc., operando em <strong className={STRONG}>modo cookieless integral</strong>.
          </p>
          <p>
            <strong className={STRONG}>Como funciona:</strong>
          </p>
          <ul className={UL}>
            <li>Não há instalação de cookies próprios ou de terceiros pela ferramenta;</li>
            <li>Não há acesso a <code>localStorage</code> nem a <code>sessionStorage</code>;</li>
            <li>Não há geração de identificadores únicos estáveis associados ao usuário;</li>
            <li>Cada visita gera um hash one-way derivado de IP + user-agent + sal rotativo do dia, descartado após a contagem agregada. Esse hash não permite reidentificação do indivíduo, conforme arquitetura documentada pela Vercel.</li>
          </ul>
          <p>
            <strong className={STRONG}>O que é medido (agregado e anônimo):</strong>
          </p>
          <ul className={UL}>
            <li>Quantidade de visitas por página, por dia;</li>
            <li>Origem aproximada do tráfego (motor de busca, link direto, redes sociais, e-mail) quando o navegador disponibiliza o cabeçalho <code>Referer</code>;</li>
            <li>País e região aproximada (a partir do IP, sem precisão de bairro ou endereço);</li>
            <li>Tipo de dispositivo (desktop / mobile / tablet) e navegador (Chrome / Safari / Firefox / Edge), agregados;</li>
            <li>Métricas técnicas de desempenho (tempo de carregamento, métricas Web Vitals);</li>
            <li>Sequência aproximada de páginas dentro de uma sessão (sem identificação cross-sessão).</li>
          </ul>
          <p>
            <strong className={STRONG}>O que não é medido:</strong>
          </p>
          <ul className={UL}>
            <li>Identidade individual do usuário;</li>
            <li>Comportamento cross-site (entre o nosso site e outros);</li>
            <li>Histórico de longo prazo associado ao usuário;</li>
            <li>Perfis comportamentais ou de consumo;</li>
            <li>Movimento de mouse, gravação de tela, mapas de calor, formulários parcialmente preenchidos.</li>
          </ul>
          <p>
            <strong className={STRONG}>Base legal:</strong> LGPD Art. 7º, IX (legítimo interesse) com balanceamento expresso conforme seção 2.4 da Política de Privacidade. <strong className={STRONG}>Não se aplica o Art. 7º, I (consentimento)</strong> porque a ferramenta não opera identificação individual nem profiling, dispensando consentimento prévio na acepção da regulamentação aplicável.
          </p>
          <p>
            <strong className={STRONG}>Política da Vercel:</strong> Detalhes técnicos completos sobre o funcionamento cookieless do Vercel Analytics:{" "}
            <a
              href="https://vercel.com/docs/analytics"
              className={LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com/docs/analytics
            </a>
            . Política de privacidade da Vercel:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className={LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </div>
      </section>

      {/* §5 sessionStorage e localStorage (ausência) */}
      <section id="storage-browser" className="mt-12 scroll-mt-24">
        <h2 className={H2}>5. sessionStorage e localStorage (ausência)</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>Verificação técnica:</strong> Realizamos auditoria do código entregue ao navegador (verificável por inspeção do código fonte) e confirmamos:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Nenhuma utilização de <code>localStorage</code></strong> pelo código do Site. <code>localStorage</code> é um espaço de armazenamento persistente do navegador (sobrevive ao fechamento do navegador) que poderia, se utilizado, armazenar identificadores, preferências ou estados associados ao usuário. Não é utilizado pelo Site.
            </li>
            <li>
              <strong className={STRONG}>Nenhuma utilização de <code>sessionStorage</code></strong> pelo código do Site. <code>sessionStorage</code> é um espaço de armazenamento transitório (apagado ao fechar a aba/navegador) que poderia, se utilizado, persistir estado entre páginas dentro da mesma sessão. Não é utilizado pelo Site.
            </li>
          </ul>
          <p>
            Esta declaração é <strong className={STRONG}>vinculativa e auditável</strong>. O usuário pode confirmá-la abrindo as ferramentas de desenvolvimento do navegador (<code>F12</code>), navegando até a aba <code>Application</code> (Chrome/Edge) ou <code>Storage</code> (Firefox), e verificando as seções <code>Local Storage</code> e <code>Session Storage</code> do domínio sanetech.com.br &mdash; devem estar vazias durante toda a navegação no Site.
          </p>
        </div>
      </section>

      {/* §6 Recursos e redirecionamentos a terceiros */}
      <section id="terceiros-redirecionamento" className="mt-12 scroll-mt-24">
        <h2 className={H2}>6. Recursos e redirecionamentos a terceiros</h2>
        <div className={PROSE}>
          <p>
            O Site contém alguns elementos servidos por ou redirecionados para terceiros. Detalhamos cada um:
          </p>
          <p>
            <strong className={STRONG}>1. Fontes tipográficas (Switzer e Arimo):</strong>
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Switzer</strong>: fonte autohospedada pela própria Sanetech a partir do Fontshare (Fontshare é serviço de fontes gratuitas do estúdio Indian Type Foundry). Os arquivos da fonte são servidos pelo nosso próprio domínio sanetech.com.br &mdash; não há requisição cross-origin a servidor de terceiros para carregar Switzer.
            </li>
            <li>
              <strong className={STRONG}>Arimo</strong>: fonte do Google Fonts, configurada com <code>preload: false</code> e servida via Next.js com self-hosting automático. Não há requisição direta ao Google Fonts em tempo de execução pelo navegador do usuário &mdash; a fonte é embarcada estaticamente nas páginas do Site.
            </li>
          </ul>
          <p>
            <strong className={STRONG}>2. Link para WhatsApp Business (<code>wa.me/...</code>):</strong>
          </p>
          <p>
            Quando o usuário clica em um botão de WhatsApp, link de contato com WhatsApp ou submete um formulário, é <strong className={STRONG}>redirecionado</strong> para o domínio <code>wa.me</code> (operado pela Meta Platforms), que abre o aplicativo WhatsApp do dispositivo com mensagem pré-preenchida endereçada ao número comercial da Sanetech. A partir desse momento, a comunicação ocorre na infraestrutura da Meta/WhatsApp, regida pelas políticas próprias do WhatsApp e da Meta &mdash; links abaixo. <strong className={STRONG}>A Sanetech não controla</strong> as práticas de cookies, identificadores ou rastreamento adotadas pelo WhatsApp ou pela Meta nessa infraestrutura.
          </p>
          <ul className={UL}>
            <li>
              Política de Privacidade do WhatsApp:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                className={LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.whatsapp.com/legal/privacy-policy
              </a>
            </li>
            <li>
              Política de Privacidade da Meta:{" "}
              <a
                href="https://www.facebook.com/privacy/policy"
                className={LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/privacy/policy
              </a>
            </li>
          </ul>
          <p>
            <strong className={STRONG}>3. Plataforma de hospedagem (Vercel):</strong>
          </p>
          <p>
            Conforme detalhado na seção 4, a Vercel opera a infraestrutura de hospedagem e a medição cookieless. As políticas da Vercel são parte integrante da experiência do usuário pelo simples fato de o Site ser servido por suas máquinas:
          </p>
          <ul className={UL}>
            <li>
              Política de Privacidade da Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className={LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </li>
            <li>
              Termos de Serviço da Vercel:{" "}
              <a
                href="https://vercel.com/legal/terms"
                className={LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com/legal/terms
              </a>
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Nenhum outro recurso de terceiro é carregado pelo Site.</strong> Não há embed de YouTube, Vimeo, Facebook, Twitter/X, Instagram, LinkedIn, mapa interativo, chatbot externo, sistema de comentários, ou qualquer outro recurso que carregue cookies/scripts de outras origens.
          </p>
        </div>
      </section>

      {/* §7 Práticas que não adotamos (lista vinculativa) */}
      <section id="o-que-nao-fazemos" className="mt-12 scroll-mt-24">
        <h2 className={H2}>7. Práticas que não adotamos (lista vinculativa)</h2>
        <div className={PROSE}>
          <p>
            A título de transparência ampliada e prestação de contas (LGPD Art. 6º, X), a Sanetech declara expressamente, com caráter vinculativo, que <strong className={STRONG}>NÃO adota</strong> as seguintes práticas no website sanetech.com.br:
          </p>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th scope="col" className={TH}>#</th>
                  <th scope="col" className={TH}>Prática</th>
                  <th scope="col" className={TH}>Status no Site</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}>1</td>
                  <td className={TD}>Cookies de marketing, remarketing ou retargeting (Meta Pixel, Google Ads, TikTok Pixel, LinkedIn Insight Tag, Pinterest Tag)</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>2</td>
                  <td className={TD}>Tracking comportamental (Hotjar, FullStory, Microsoft Clarity, Mixpanel, Amplitude, Heap, Pendo)</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>3</td>
                  <td className={TD}>Fingerprinting (canvas fingerprinting, WebGL fingerprinting, audio fingerprinting, fontes, plugins, dispositivos conectados)</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>4</td>
                  <td className={TD}>Profiling automatizado com efeito jurídico relevante para o titular (scoring, segmentação publicitária dirigida, decisões automatizadas LGPD Art. 20)</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>5</td>
                  <td className={TD}>Venda, cessão onerosa ou compartilhamento de dados para marketing de terceiros</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>6</td>
                  <td className={TD}>Google Tag Manager, Segment, Tealium, Rudderstack ou qualquer agregador de SDK</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>7</td>
                  <td className={TD}>A/B testing com identificadores persistentes do usuário</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>8</td>
                  <td className={TD}>Embeds de vídeo (YouTube, Vimeo) que carregam cookies do provedor</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>9</td>
                  <td className={TD}>CookieBanner, banner de consentimento ou modal de gerenciamento de preferências de cookies</td>
                  <td className={TD}>Ausente (cookieless dispensa)</td>
                </tr>
                <tr>
                  <td className={TD}>10</td>
                  <td className={TD}>Plataformas de Consent Management (CookieYes, OneTrust, Cookiebot, Iubenda, Osano)</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>11</td>
                  <td className={TD}>Treinamento de modelos de inteligência artificial com dados de navegação</td>
                  <td className={TD}>Ausente</td>
                </tr>
                <tr>
                  <td className={TD}>12</td>
                  <td className={TD}>Conexões a redes sociais (Like buttons, Share buttons, login social) com cookies cross-site</td>
                  <td className={TD}>Ausente</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className={STRONG}>Esta lista é auditável.</strong> Pode ser verificada por:
          </p>
          <ul className={UL}>
            <li>Inspeção do código fonte HTML retornado pelo Site (<code>F12</code> &rarr; aba <code>Sources</code>);</li>
            <li>Inspeção das requisições de rede realizadas durante a navegação (<code>F12</code> &rarr; aba <code>Network</code>);</li>
            <li>Inspeção do armazenamento do navegador para o domínio sanetech.com.br (<code>F12</code> &rarr; aba <code>Application</code> ou <code>Storage</code> &mdash; <code>Cookies</code>, <code>Local Storage</code>, <code>Session Storage</code> devem estar vazios);</li>
            <li>Inspeção do <code>package.json</code> do código fonte (publicamente acessível mediante solicitação) que demonstra ausência das bibliotecas correlatas.</li>
          </ul>
          <p>
            <strong className={STRONG}>Compromisso de futuro:</strong> Caso, no futuro, a Sanetech venha a introduzir qualquer das práticas listadas (por exemplo, para evoluir o Site para funcionalidades de chat-bot ou autenticação), esta política será atualizada com antecedência razoável e, quando exigido pela LGPD e regulamentação da <Abbr term="ANPD" /> aplicável, será implementado banner de consentimento granular antes do carregamento dos respectivos scripts.
          </p>
        </div>
      </section>

      {/* §8 Como verificar e controlar */}
      <section id="verificar-controlar" className="mt-12 scroll-mt-24">
        <h2 className={H2}>8. Como verificar e controlar</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>Verificação pelo próprio usuário</strong> &mdash; Você pode confirmar a ausência de cookies e de armazenamento associado ao domínio sanetech.com.br a qualquer momento:
          </p>
          <ol className={OL}>
            <li>Abra as ferramentas de desenvolvimento do navegador (<code>F12</code> na maioria dos navegadores, <code>Cmd+Opt+I</code> no macOS Safari);</li>
            <li>Navegue até a aba <code>Application</code> (Chrome / Edge / Opera) ou <code>Storage</code> (Firefox);</li>
            <li>Selecione o domínio <code>sanetech.com.br</code> na barra lateral;</li>
            <li>Verifique as seções <code>Cookies</code>, <code>Local Storage</code> e <code>Session Storage</code> &mdash; devem estar vazias durante toda a sua navegação.</li>
          </ol>
          <p>
            <strong className={STRONG}>Configurações de privacidade do navegador</strong> &mdash; Mesmo sendo o Site cookieless, você pode ajustar configurações gerais de privacidade do seu navegador, que se aplicarão à navegação em qualquer site:
          </p>
          <ul className={UL}>
            <li><strong className={STRONG}>Chrome:</strong> <code>Configurações</code> &rarr; <code>Privacidade e segurança</code> &rarr; <code>Cookies de terceiros</code></li>
            <li><strong className={STRONG}>Firefox:</strong> <code>Configurações</code> &rarr; <code>Privacidade e Segurança</code> &rarr; <code>Cookies e dados de sites</code></li>
            <li><strong className={STRONG}>Safari:</strong> <code>Preferências</code> &rarr; <code>Privacidade</code> &rarr; <code>Cookies e dados de sites</code></li>
            <li><strong className={STRONG}>Edge:</strong> <code>Configurações</code> &rarr; <code>Cookies e permissões de site</code> &rarr; <code>Gerenciar e excluir cookies</code></li>
            <li><strong className={STRONG}>Opera:</strong> <code>Configurações</code> &rarr; <code>Privacidade e segurança</code> &rarr; <code>Cookies e outros dados do site</code></li>
          </ul>
          <p>
            <strong className={STRONG}>Ferramentas adicionais de proteção:</strong>
          </p>
          <ul className={UL}>
            <li>Modo de navegação anônima/privada (Ctrl+Shift+N no Chrome, Ctrl+Shift+P no Firefox);</li>
            <li>Extensões de bloqueio de rastreamento (uBlock Origin, Privacy Badger);</li>
            <li>Configurações <code>Do Not Track</code> (sinal <code>DNT</code> no navegador, respeitado por boa parte dos serviços).</li>
          </ul>
        </div>
      </section>

      {/* §9 Alterações, vigência e contato */}
      <section id="alteracoes-contato" className="mt-12 scroll-mt-24">
        <h2 className={H2}>9. Alterações, vigência e contato</h2>
        <div className={PROSE}>
          <p>
            <strong className={STRONG}>Vigência da postura cookieless.</strong> A postura cookieless declarada nesta política é estrutural ao Site na sua versão atual. Permanecerá vigente enquanto a arquitetura do Site não for materialmente alterada.
          </p>
          <p>
            <strong className={STRONG}>Alterações materiais</strong> &mdash; incluindo introdução de qualquer mecanismo de cookie/storage/identificador que reabra o consentimento prévio &mdash; serão publicadas nesta página com antecedência razoável, sinalizadas de forma destacada e, quando exigido, acompanhadas da implementação de banner de consentimento granular conforme regulamentação da ANPD aplicável.
          </p>
          <p>
            <strong className={STRONG}>Versão vigente:</strong> 1.0
            <br />
            <strong className={STRONG}>Última atualização:</strong> 14 de maio de 2026
          </p>
          <p>
            <strong className={STRONG}>Documentos relacionados:</strong>
          </p>
          <ul className={UL}>
            <li>
              <Link href={"/politica-de-privacidade" as Route} className={LINK}>
                Política de Privacidade
              </Link>
              {" "}&mdash; detalhamento integral do tratamento de dados pessoais
            </li>
            <li>
              <Link href={"/termos-de-uso" as Route} className={LINK}>
                Termos de Uso
              </Link>
              {" "}&mdash; condições de utilização do Site e identificação completa da entidade
            </li>
          </ul>
          <p>
            <strong className={STRONG}>Contato para questões sobre cookies, mensuração ou esta política:</strong>
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
          </ul>
        </div>
      </section>
    </LegalDocument>
  );
}
