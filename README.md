# Sanatech Web

Site institucional da SANETECH CONTROLE E AUTOMAÇÃO LTDA.

- **Stack:** Next.js 15 + React 19 + TypeScript 5 + Tailwind v4 + Vercel
- **Single source of truth:** `../docs/PRD.md` + `../docs/DESIGN.md`
- **Roadmap de execução:** `../docs/IMPLEMENTATION-PLAN-FASE-1.md`

## Setup local

```bash
pnpm install
pnpm dev
```

## Comandos

- `pnpm dev` — servidor de desenvolvimento (http://localhost:3000)
- `pnpm build` — build de produção
- `pnpm start` — servir build de produção
- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript strict
- `pnpm favicons` — regerar favicon set a partir do logo
- `pnpm audit:strings` — auditoria de strings proibidas (anti-claims PRD §2.2)

## Deploy

Push para `main` -> Vercel build & deploy automático em produção (`sanetech.com.br`).
PRs -> preview deploy automático.
