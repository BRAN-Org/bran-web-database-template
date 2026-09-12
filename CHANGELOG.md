# 📋 Descrição Detalhada das Mudanças — BRAN Web Database Template

Este documento detalha a arquitetura, arquivos criados e funcionalidades implementadas no **`bran-web-database-template`**, alinhada aos padrões da **BRAN Org** e inspirada no projeto **EBBC-OpenData**.

---

## [1.3.0] - 2026-09-11 (Redesign Fiel Focado no EBBC OpenData - Branch `feat/redesign-ui`)

### 🎨 Painel de Estatísticas & Explorador em Cartões
- **Painel de Estatísticas Redesenhado**:
  - 4 Cards Principais de Estatísticas (`Total de Artigos`, `Adoção de Ferramentas`, `Fontes Mapeadas`, `Pesquisadores`).
  - **Barra de Personalização de Gráficos (Toolbar)**: Seleção em tempo real da Paleta de Cores (*Apple Minimalist*, *Monocromático Sleek*, *Neon Cyberpunk*, *Pastel Suave*) e Tipo de Gráfico (*Barras/Colunas*, *Linhas/Conexões*, *Radar/Teia*).
  - Grid 2x2 de gráficos em Canvas nativos (Edições, Top Softwares, Fontes, Etapas).
- **Explorador de Dados em Formato de Cartões (Card List)**:
  - Artigos exibidos em cartões pretos elegantes com badge do ano, DOI, título em destaque e badges coloridos para fontes (`SciELO` verde) e etapas (`Análise` laranja).
  - **Modal de Detalhes do Artigo**: Abertura dinâmica ao clicar em qualquer cartão para exibir o resumo completo (*Abstract*), ferramentas, fontes e link DOI.
  - Sidebar com busca textual, checkboxes de edições (`2012` a `2024`), dropdowns de ferramentas/fontes e botão de limpar filtros.

---

## [1.2.0] - 2026-09-11 (Redesign Visual Minimalista & Corporativo - Branch `feat/redesign-ui`)

### 🎨 Design & Interface de Usuário (UI/UX)
- Identidade visual minimalista com paleta Slate Navy e Plus Jakarta Sans.

---

## [1.1.0] - 2026-09-11 (Módulo de Correlações Cientométricas & Skill de Automação)

### 🚀 Novas Funcionalidades (Feat)
- Skill customizada `changelog-generator`.
- Análises de coocorrência 2D, dispersão e novos endpoints REST.

---

## [1.0.0] - 2026-09-11 (Lançamento Inicial do Template)

### 🚀 Novas Funcionalidades (Feat)
- Estrutura de configuração agnóstica, busca em memória, REST API e deploy Vercel.
