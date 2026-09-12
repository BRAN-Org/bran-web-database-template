# 📋 Descrição Detalhada das Mudanças — BRAN Web Database Template

Este documento detalha a arquitetura, arquivos criados e funcionalidades implementadas no **`bran-web-database-template`**, alinhada aos padrões da **BRAN Org** e inspirada no projeto **EBBC-OpenData**.

---

## [1.2.0] - 2026-09-11 (Redesign Visual Minimalista & Corporativo - Branch `feat/redesign-ui`)

### 🎨 Design & Interface de Usuário (UI/UX)
- **Identidade Visual Minimalista & Corporativa**:
  - Nova paleta de cores institucional baseada em Slate Profundo, Navy Blue (`#0f172a`, `#1e293b`, `#2563eb`) e acentos executivos em verde esmeralda.
  - Tipografia de alta legibilidade utilizando **Plus Jakarta Sans** e **JetBrains Mono**.
  - Novo tema de cores **Executive Light (Claro)** e **Monochromatic Minimal**.
- **Componentes Estruturados**:
  - Hero Header limpo com metadados de DOI e Licença em badges institucionais.
  - Cards de estatísticas executivas com métricas numéricas destacadas e rótulos estruturados.
  - Tabela de dados empresarial com zebra-striping sutil, hover em linhas e badges compactos.
  - API Sandbox em estilo terminal corporativo (*Slate Theme*) com feedback tátil de cópia.

---

## [1.1.0] - 2026-09-11 (Módulo de Correlações Cientométricas & Skill de Automação)

### 🚀 Novas Funcionalidades (Feat)
* **Skill Customizada `changelog-generator`**:
  - Criada a Skill em `.agents/skills/changelog-generator/SKILL.md` (e no caminho global `~/.gemini/config/skills/changelog-generator/SKILL.md`).
* **Análises Cientométricas e Correlações 100% Internas (`src/statsEngine.js`)**:
  - Matriz de coocorrência 2D, séries temporais, dispersão com regressão linear e curva de Pareto.
* **Novos Endpoints REST (`src/routes.js`)**:
  - `GET /api/v1/:entity/stats/correlations`, `/temporal`, `/scatter`, `/pareto`.

---

## [1.0.0] - 2026-09-11 (Lançamento Inicial do Template)

### 🚀 Novas Funcionalidades (Feat)
- Estrutura de configuração agnóstica em `config/dataset.config.json`.
- Motores de busca em memória, estatísticas e exportação streaming JSON e CSV (BOM UTF-8) em `src/`.
- Portal Web estático com Dashboard, Explorador de Tabela e API Sandbox.
- CLI scripts para conversão de CSV e validação de datasets em `scripts/`.
- Deploy instantâneo para Vercel via `vercel.json`.
