# 📋 Descrição Detalhada das Mudanças — BRAN Web Database Template

Este documento detalha a arquitetura, arquivos criados e funcionalidades implementadas no **`bran-web-database-template`**, alinhada aos padrões da **BRAN Org** e inspirada no projeto **EBBC-OpenData**.

---

## [1.1.0] - 2026-09-11 (Módulo de Correlações Cientométricas & Skill de Automação)

### 🚀 Novas Funcionalidades (Feat)
* **Skill Customizada `changelog-generator`**:
  - Criada a Skill em `.agents/skills/changelog-generator/SKILL.md` (e no caminho global `~/.gemini/config/skills/changelog-generator/SKILL.md`) que instrui o agente a inspecionar histórico de commits, diffs e preencher/atualizar o `CHANGELOG.md` automaticamente.
* **Análises Cientométricas e Correlações 100% Internas (`src/statsEngine.js`)**:
  - `calculateCooccurrenceMatrix()`: Matriz 2D de coocorrência de atributos internos (ex: Softwares $\times$ Fontes de Dados).
  - `calculateTemporalStacked()`: Evolução percentual empilhada por ano de edição.
  - `calculateScatterData()`: Análise de dispersão (Nº de Autores $\times$ Diversidade Metodológica) com linha de tendência de regressão linear.
  - `calculateParetoData()`: Curva de Pareto / Distribuição de Bradford acumulada.
* **Novos Endpoints REST (`src/routes.js`)**:
  - `GET /api/v1/:entity/stats/correlations`
  - `GET /api/v1/:entity/stats/temporal`
  - `GET /api/v1/:entity/stats/scatter`
  - `GET /api/v1/:entity/stats/pareto`
* **Visualizações Avançadas em Canvas (`public/js/charts.js` & `public/index.html`)**:
  - Adicionada a aba **"📈 Análises & Correlações"** no Portal Web.
  - Renderizador de **Heatmap Matrix Chart** com gradiente de densidade.
  - Renderizador de **Scatter Plot** com pontos de dispersão e linha de tendência.

### ⚙️ Testes Automatizados (Test)
- Adicionados 6 novos testes em `tests/unit.test.js` e `tests/api.test.js` cobrindo o cálculo de matrizes de coocorrência, dispersão e novos endpoints REST (**17/17 testes aprovados com 100% de sucesso**).

---

## [1.0.0] - 2026-09-11 (Lançamento Inicial do Template)

### 🚀 Novas Funcionalidades (Feat)
- Estrutura de configuração agnóstica em `config/dataset.config.json`.
- Motores de busca em memória, estatísticas e exportação streaming JSON e CSV (BOM UTF-8) em `src/`.
- Portal Web estático com Dashboard, Explorador de Tabela com filtros dinâmicos e API Sandbox com gerador de código.
- CLI scripts para conversão de CSV e validação de datasets em `scripts/`.
- Deploy instantâneo para Vercel via `vercel.json`.
