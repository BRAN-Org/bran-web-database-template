import { SimpleChart } from './charts.js';

let appConfig = null;
let currentOffset = 0;
const currentLimit = 10;

document.addEventListener('DOMContentLoaded', async () => {
  initThemeSelector();
  initTabs();

  try {
    const res = await fetch('/api/v1/config');
    appConfig = await res.json();

    applyConfigToUI(appConfig);
    await loadStats();
    await loadCorrelations();
    await loadExplorerData();
    initSandbox();
  } catch (err) {
    console.error('⚠️ Falha ao inicializar portal:', err);
  }
});

function applyConfigToUI(config) {
  if (!config) return;

  const datasetTitle = config.dataset?.title || 'BRAN Open Data';
  document.title = `${datasetTitle} · BRAN Org`;

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) heroTitle.innerHTML = `${datasetTitle}`;

  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle) heroSubtitle.textContent = config.dataset?.description || '';

  const doiBadge = document.getElementById('doi-badge');
  if (doiBadge && config.dataset?.doi) {
    doiBadge.textContent = `DOI: ${config.dataset.doi}`;
  }

  const licenseBadge = document.getElementById('license-badge');
  if (licenseBadge && config.dataset?.license) {
    licenseBadge.textContent = `Licença: ${config.dataset.license}`;
  }

  renderSidebarFilters(config);
}

function renderSidebarFilters(config) {
  const container = document.getElementById('dynamic-filters');
  if (!container) return;

  container.innerHTML = '';
  const facets = config.schema?.facets || [];

  facets.forEach(facet => {
    const group = document.createElement('div');
    group.className = 'filter-group';

    const label = document.createElement('label');
    label.className = 'filter-label';
    label.textContent = facet.label;

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'filter-input';
    input.id = `filter-${facet.key}`;
    input.placeholder = `Filtrar por ${facet.label.toLowerCase()}...`;
    input.addEventListener('input', debounce(() => {
      currentOffset = 0;
      loadExplorerData();
      updateSandboxCode();
    }, 300));

    group.appendChild(label);
    group.appendChild(input);
    container.appendChild(group);
  });
}

async function loadStats() {
  if (!appConfig) return;
  const entity = appConfig.dataset?.entityName || 'articles';

  try {
    const res = await fetch(`/api/v1/${entity}/stats`);
    const stats = await res.json();

    const totalEl = document.getElementById('stat-total-records');
    if (totalEl) totalEl.textContent = stats.totalRecords || 0;

    const rateEl = document.getElementById('stat-adoption-rate');
    if (rateEl) rateEl.textContent = `${stats.metrics?.toolAdoptionRate || 0}%`;

    const topToolsEl = document.getElementById('stat-top-tool');
    if (topToolsEl && stats.topLists?.topTools?.data?.length > 0) {
      topToolsEl.textContent = stats.topLists.topTools.data[0].name;
    }

    if (stats.topLists?.topTools?.data) {
      const toolChart = new SimpleChart('chart-top-tools');
      toolChart.renderBarChart(stats.topLists.topTools.data);
    }

    if (stats.breakdowns?.yearDistribution?.data) {
      const yearChart = new SimpleChart('chart-year-distribution');
      yearChart.renderLineChart(stats.breakdowns.yearDistribution.data);
    }
  } catch (err) {
    console.error('⚠️ Erro ao carregar estatísticas:', err);
  }
}

/**
 * Carrega análises de correlação interna (Heatmap e Dispersão)
 */
async function loadCorrelations() {
  if (!appConfig) return;
  const entity = appConfig.dataset?.entityName || 'articles';

  try {
    // 1. Carregar Matriz de Coocorrência (Heatmap)
    const resMatrix = await fetch(`/api/v1/${entity}/stats/correlations?fieldA=tools&fieldB=data_sources&limit=5`);
    const matrixData = await resMatrix.json();
    const heatmapChart = new SimpleChart('chart-heatmap-matrix');
    heatmapChart.renderHeatmapMatrix(matrixData);

    // 2. Carregar Análise de Dispersão (Scatter Plot)
    const resScatter = await fetch(`/api/v1/${entity}/stats/scatter`);
    const scatterData = await resScatter.json();
    const scatterChart = new SimpleChart('chart-scatter-plot');
    scatterChart.renderScatterPlot(scatterData);
  } catch (err) {
    console.error('⚠️ Erro ao carregar correlações:', err);
  }
}

async function loadExplorerData() {
  if (!appConfig) return;
  const entity = appConfig.dataset?.entityName || 'articles';

  const params = new URLSearchParams();
  params.set('limit', currentLimit);
  params.set('offset', currentOffset);

  const searchInput = document.getElementById('search-input');
  if (searchInput && searchInput.value) {
    params.set('search', searchInput.value);
  }

  const facets = appConfig.schema?.facets || [];
  facets.forEach(facet => {
    const el = document.getElementById(`filter-${facet.key}`);
    if (el && el.value) {
      params.set(facet.key, el.value);
    }
  });

  try {
    const res = await fetch(`/api/v1/${entity}?${params.toString()}`);
    const data = await res.json();

    renderExplorerTable(data.results);
    renderPagination(data);
    updateExportLinks(params);
  } catch (err) {
    console.error('⚠️ Erro ao carregar tabela:', err);
  }
}

function renderExplorerTable(items) {
  const tbody = document.getElementById('table-body');
  if (!tbody) return;

  tbody.innerHTML = '';

  if (!items || items.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 40px;">Nenhum registro encontrado para os filtros selecionados.</td></tr>`;
    return;
  }

  items.forEach(item => {
    const tr = document.createElement('tr');

    const doi = item.doi || item.id || 'N/A';
    const doiDisplay = doi.startsWith('http') ? `<a href="${doi}" target="_blank" style="color: var(--accent-primary); text-decoration: none;">${doi.replace('https://doi.org/', '')}</a>` : doi;

    const title = item.title || item.titulo || 'Sem título';
    const year = item.year || item.ano || 'N/A';
    const authors = Array.isArray(item.authors) ? item.authors.join(', ') : (item.authors || 'N/A');
    const tools = Array.isArray(item.tools) ? item.tools.map(t => `<span class="badge">${t}</span>`).join(' ') : '—';

    tr.innerHTML = `
      <td>${doiDisplay}</td>
      <td><strong>${escapeHtml(title)}</strong></td>
      <td>${year}</td>
      <td>${escapeHtml(authors)}</td>
      <td>${tools}</td>
    `;

    tbody.appendChild(tr);
  });
}

function updateExportLinks(params) {
  if (!appConfig) return;
  const entity = appConfig.dataset?.entityName || 'articles';

  const exportParams = new URLSearchParams(params);
  exportParams.delete('limit');
  exportParams.delete('offset');

  const jsonBtn = document.getElementById('export-json-btn');
  if (jsonBtn) {
    exportParams.set('format', 'json');
    jsonBtn.href = `/api/v1/${entity}/export?${exportParams.toString()}`;
  }

  const csvBtn = document.getElementById('export-csv-btn');
  if (csvBtn) {
    exportParams.set('format', 'csv');
    csvBtn.href = `/api/v1/${entity}/export?${exportParams.toString()}`;
  }
}

function renderPagination(data) {
  const infoEl = document.getElementById('pagination-info');
  const prevBtn = document.getElementById('prev-page-btn');
  const nextBtn = document.getElementById('next-page-btn');

  const start = data.offset + 1;
  const end = Math.min(data.offset + data.limit, data.filteredCount);

  if (infoEl) {
    infoEl.textContent = data.filteredCount > 0 
      ? `Exibindo ${start}–${end} de ${data.filteredCount} registros`
      : '0 registros';
  }

  if (prevBtn) {
    prevBtn.disabled = data.offset <= 0;
    prevBtn.onclick = () => {
      if (currentOffset > 0) {
        currentOffset = Math.max(0, currentOffset - currentLimit);
        loadExplorerData();
      }
    };
  }

  if (nextBtn) {
    nextBtn.disabled = data.offset + data.limit >= data.filteredCount;
    nextBtn.onclick = () => {
      currentOffset += currentLimit;
      loadExplorerData();
    };
  }
}

function initSandbox() {
  const langSelect = document.getElementById('sandbox-lang');
  if (langSelect) {
    langSelect.addEventListener('change', updateSandboxCode);
  }

  const copyBtn = document.getElementById('sandbox-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeEl = document.getElementById('sandbox-code');
      if (codeEl) {
        navigator.clipboard.writeText(codeEl.textContent);
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => copyBtn.textContent = 'Copiar Código', 2000);
      }
    });
  }

  updateSandboxCode();
}

function updateSandboxCode() {
  if (!appConfig) return;
  const entity = appConfig.dataset?.entityName || 'articles';
  const baseUrl = window.location.origin;

  const lang = document.getElementById('sandbox-lang')?.value || 'curl';
  const targetUrl = `${baseUrl}/api/v1/${entity}?limit=10`;

  const codeEl = document.getElementById('sandbox-code');
  if (!codeEl) return;

  if (lang === 'curl') {
    codeEl.textContent = `curl -X GET "${targetUrl}" \\\n  -H "Accept: application/json"`;
  } else if (lang === 'javascript') {
    codeEl.textContent = `// Requisição em JavaScript (Fetch API)\nfetch("${targetUrl}")\n  .then(response => response.json())\n  .then(data => console.log(data));`;
  } else if (lang === 'python') {
    codeEl.textContent = `# Requisição em Python\nimport requests\n\nurl = "${targetUrl}"\nresponse = requests.get(url)\ndata = response.json()\nprint(data)`;
  }
}

function initThemeSelector() {
  const themeSelect = document.getElementById('theme-select');
  if (!themeSelect) return;

  const savedTheme = localStorage.getItem('bran_theme') || 'default';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeSelect.value = savedTheme;

  themeSelect.addEventListener('change', (e) => {
    const selected = e.target.value;
    document.documentElement.setAttribute('data-theme', selected);
    localStorage.setItem('bran_theme', selected);
    loadStats();
    loadCorrelations();
  });
}

function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`tab-${target}`)?.classList.add('active');

      if (target === 'correlations') {
        loadCorrelations();
      }
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      currentOffset = 0;
      loadExplorerData();
    }, 300));
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
