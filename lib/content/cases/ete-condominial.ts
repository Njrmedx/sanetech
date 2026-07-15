/**
 * Case 2 — Sanitário / ETE condominial MBBR.
 *
 * AC-05: condomínio residencial multifamiliar (não nominar empreendimento).
 * AC-06: Resultados usa fallback PRD §8.12.2 verbatim.
 *
 * Phase B7-D (2026-05-13).
 */

import type { CaseContent } from "./_types";

const content: CaseContent = {
  segmento: "Empreendimento residencial",
  porte: "Condomínio multifamiliar",
  localizacao: "Região metropolitana de São Paulo",
  titulo: "Implantação de ETE sanitária em condomínio sem rede pública",
  resumo:
    "Projeto e implantação de ETE compacta para condomínio residencial em área sem rede coletora pública, atendendo padrões CONAMA 430 e licenciamento ambiental.",
  desafio: [
    "Empreendimento residencial novo em área sem disponibilidade de rede coletora pública de esgoto. Ausência de tratamento adequado era condicionante de licenciamento ambiental e impedia obtenção de habite-se.",
    "Espaço disponível para a estação era restrito por restrições de layout do empreendimento, exigindo solução compacta com baixo impacto visual e operacional.",
  ],
  diagnostico: [
    "Estimativa de vazão baseada em perfil de uso residencial multifamiliar, com consideração de variações sazonais e picos diários típicos de uso doméstico.",
    "Análise do corpo receptor (curso d'água da bacia local) e requisitos regulatórios aplicáveis definiram o padrão de saída alvo, mais restritivo em alguns parâmetros que CONAMA 430 base.",
  ],
  solucao: {
    intro:
      "Rota biológica compacta dimensionada para o porte do empreendimento, com etapa de desinfecção final:",
    bullets: [
      "Gradeamento e caixa de areia para remoção de sólidos grosseiros",
      "Tratamento biológico MBBR (Moving Bed Biofilm Reactor) compacto, com tolerância a variações de carga",
      "Decantação secundária para separação de lodo biológico",
      "Desinfecção final por radiação ultravioleta",
      "Sistema de leitura de parâmetros operacionais para acompanhamento periódico",
    ],
  },
  resultados: [
    "Atingimento dos padrões de lançamento aplicáveis e operação estável conforme contrato.",
  ],
  aprendizados: [
    "MBBR é solução adequada a empreendimentos residenciais com restrição de área disponível e variabilidade de carga, oferecendo footprint reduzido vs lodos ativados convencionais para porte similar.",
    "Replicável a condomínios e loteamentos em áreas sem rede coletora pública, especialmente quando o licenciamento ambiental exige padrão de saída mais rigoroso que CONAMA 430 base.",
  ],
  seo: {
    title: "ETE Sanitária em Condomínio | Sanetech",
    description:
      "Implantação de Estação de Tratamento de Esgoto sanitária compacta MBBR para condomínio residencial em área sem rede pública.",
  },
};

export default content;
