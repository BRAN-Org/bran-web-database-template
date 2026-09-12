# 📋 Descrição Detalhada das Mudanças — BRAN Web Database Template

Este documento detalha a arquitetura, arquivos criados e funcionalidades implementadas na versão inicial do **`bran-web-database-template`**, alinhada aos padrões da **BRAN Org** e inspirada no projeto **EBBC-OpenData**.

---

## 📌 Resumo Executivo

O **`bran-web-database-template`** foi construído do zero como uma solução leve, reproduzível e com zero dependências pesadas de build. Ele permite que qualquer pesquisador ou colaborador da BRAN Org disponibilize um acervo acadêmico público em minutos, gerando automaticamente uma **API REST com busca, filtros por facetas, estatísticas e exportações (JSON/CSV)** e um **Portal Web (Dashboard + Explorador + API Sandbox)**.

---

## 📂 Detalhamento por Componentes e Arquivos

### 1. Configuração Agnóstica do Dataset
* **`config/dataset.config.json`**:
  - Centraliza todas as definições do projeto sem necessidade de alterar o código-fonte em JavaScript.
  - Define metadados gerais (Título, Descrição, DOI do Zenodo, Licença configurável, Organização).
  - Define a entidade principal (ex: `articles`, `publications`, `theses`, `patents`).
  - Configura o esquema de campos pesquisáveis (`searchFields`), filtros dinâmicos laterais (`facets`), critérios de ordenação (`sortFields`) e agregação de estatísticas (`stats`).

### 2. Motor de Dados e Lógica de Negócio (`src/`)
* **`src/config.js`**:
  - Módulo utilitário para carregamento e cache do arquivo `dataset.config.json` com tratamentos de fallback seguros.
* **`src/dataManager.js`**:
  - Lê automaticamente todos os arquivos de dados em formato JSON localizados no diretório `data/`.
  - Realiza indexação em memória para alto desempenho.
  - Implementa busca textual global case-insensitive e insensível a acentuação.
  - Aplica filtros dinâmicos baseados no esquema configurado (suporta filtros numéricos, buscas parciais em arrays de autores/ferramentas e flags booleanas).
  - Implementa busca flexível de registros por chave primária (DOI, ID ou Título), com tratamento de URLs e percent-encoding.
* **`src/statsEngine.js`**:
  - Calcula estatísticas agregadas em tempo real com base no dataset carregado.
  - Gera rankings dinâmicos (Top Ferramentas/Softwares, Top Fontes de Dados, Top Autores).
  - Gera agrupamentos por ano de edição e etapas metodológicas.
* **`src/exportEngine.js`**:
  - Motor de exportação que permite download dos resultados filtrados nos formatos **JSON** e **CSV**.
  - No formato CSV, insere o **BOM UTF-8** (`\uFEFF`) no início do streaming para garantir a exibição nativa correta de acentos e caracteres especiais no Microsoft Excel em sistemas em Português.
* **`src/routes.js`**:
  - Construtor do roteador Express que expõe dinamicamente os endpoints da API REST:
    - `GET /api/v1/config` (Configurações públicas)
    - `GET /api/v1/:entity/stats` (Estatísticas consolidadas)
    - `GET /api/v1/:entity/export` (Exportação JSON/CSV)
    - `GET /api/v1/:entity/:key` e `/api/v1/:entity/by-key/*` (Busca exata por DOI/ID)
    - `GET /api/v1/:entity` (Lista filtrada com paginação)

### 3. Servidor e Deploy (`server.js` & `vercel.json`)
* **`server.js`**:
  - Ponto de entrada do servidor Node.js (ES Modules).
  - Utiliza dependências mínimas (`express` e `cors`).
  - Serve estaticamente o portal web localizado na pasta `public/`.
  - Suporta rotas `/api/v1` e aliasing para `/api`.
* **`vercel.json`**:
  - Configuração para deploy serverless em 1 clique na plataforma Vercel (`@vercel/node`), incluindo includeFiles para `config/`, `data/` e `public/`.

### 4. Portal Web e Interface de Usuário (`public/`)
* **`public/index.html`**:
  - Estrutura semântica HTML5 acessível.
  - Banner principal (Hero) com badges de DOI e Licença.
  - Navegação por abas: **Painel Estatístico**, **Explorador de Registros** e **API Sandbox & Docs**.
* **`public/css/style.css`**:
  - Sistema de design moderno em Vanilla CSS.
  - Temas visuais selecionáveis: *Glass Dark (Padrão)*, *Neon Cyberpunk* e *Apple Minimalist*.
  - Micro-animações, layout responsivo e visualização em estilo Glassmorphism.
* **`public/js/charts.js`**:
  - Gerador de gráficos em HTML5 Canvas leve (Zero-Dependency) para exibição de barras e linhas de evolução temporal.
* **`public/js/app.js`**:
  - Controladora do frontend que consome a API REST, renderiza filtros dinâmicos conforme a configuração do dataset, gerencia paginação da tabela, executa a mudança de temas e fornece o gerador de código interativo do Sandbox.

### 5. Ferramentas CLI e Validação (`scripts/`)
* **`scripts/convert_csv_to_json.js`**:
  - Script utilitário para converter arquivos CSV brutos em JSON formatado (`npm run data:convert`).
* **`scripts/validate_dataset.js`**:
  - Script de validação de esquemas para verificar erros de integridade antes do deploy (`npm run data:validate`).

### 6. Testes Automatizados e CI/CD (`tests/` & `.github/`)
* **`tests/unit.test.js`**: Testes unitários utilizando o executor nativo do Node.js (`node --test`).
* **`tests/api.test.js`**: Testes de integração de endpoints HTTP REST.
* **`.github/workflows/test.yml`**: Esteira de Integração Contínua (CI) que executa a suíte de testes automatizados nas versões Node.js 18.x, 20.x e 22.x.

---

## 🛠️ Verificação Realizada
- **Validação de Dados**: `npm run data:validate` ➔ 0 erros, 0 avisos.
- **Suíte de Testes**: `npm test` ➔ 11 testes executados e aprovados com 100% de sucesso.
