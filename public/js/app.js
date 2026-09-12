import { SimpleChart } from './charts.js';

let appConfig = null;
let currentOffset = 0;
const currentLimit = 10;
let currentPalette = 'apple';
let currentChartType = 'bar';

const chartInstances = {};

document.addEventListener('DOMContentLoaded', async () => {
  initTabs();
  initModal();

  try {
    const resConfig = await fetch('/api/v1/config');
    appConfig = await resConfig.json();

    applyConfigToHeader(appConfig);
    initToolbarControls();

    await loadStatsDashboard();
    await loadExplorerData();
    await loadCorrelations();
    initSandbox();
  } catch (err) {
    console.error('⚠️ Falha na inicialização do portal:', err);
  }
});

function applyConfigToHeader(config) {
  if (!config) return;
  const title = config.dataset?.title || 'BRAN Open Data';
  document.title = `${title} · BRAN Org`;

  const headerTitle = document.getElementById('header-title');
  if (headerTitle) headerTitle.innerHTML = `${title} <span>OpenData</span>`;

  const doiBadge = document.getElementById('badge-doi');
  if (doiBadge && config.dataset?.doi) {
    doiBadge.innerHTML = `<i class="fa-solid fa-link"></i> DOI: ${config.dataset.doi}`;
  }
}

/**
 * Toolbar de Personalização de Gráficos (Paleta + Tipo)
 */
function initToolbarControls() {
  const paletteSelect = document.getElementById('chart-theme-select');
  const typeSelect = document.getElementById('chart-type-select');

  if (paletteSelect) {
    paletteSelect.addEventListener('change', (e) => {
      currentPalette = e.target.value;
      updateAllCharts();
    });
  }

  if (typeSelect) {
    typeSelect.addEventListener('change', (e) => {
      currentChartType = e.target.value;
      updateAllCharts();
    });
  }
}

async function loadStatsDashboard() {
  if (!appConfig) return;
  const entity = appConfig.dataset?.entityName || 'articles';

  try {
    const res = await fetch(`/api/v1/${entity}/stats`);
    const stats = await res.json();

    // População dos 4 Cards de Estatísticas
    const totalEl = document.getElementById('stat-total-articles');
    if (totalEl) totalEl.textContent = stats.totalRecords || 0;

    const toolRateEl = document.getElementById('stat-tool-percentage');
    if (toolRateEl) toolRateEl.textContent = `${stats.metrics?.toolAdoptionRate || 0}%`;

    const sourcesEl = document.getElementById('stat-unique-sources');
    if (sourcesEl) sourcesEl.textContent = stats.topLists?.topSources?.data?.length || 0;

    const authorsEl = document.getElementById('stat-unique-authors');
    if (authorsEl) authorsEl.textContent = stats.topLists?.topAuthors?.data?.length || 0;

    // Inicialização dos 4 Gráficos do Dashboard
    chartInstances['years'] = new SimpleChart('chart-years');
    chartInstances['tools'] = new SimpleChart('chart-tools');
    chartInstances['sources'] = new SimpleChart('chart-sources');
    chartInstances['stages'] = new SimpleChart('chart-stages');

    chartInstances['years_data'] = stats.breakdowns?.yearDistribution?.data;
    chartInstances['tools_data'] = stats.topLists?.topTools?.data;
    chartInstances['sources_data'] = stats.topLists?.topSources?.data;
    chartInstances['stages_data'] = stats.breakdowns?.stageBreakdown?.data;

    updateAllCharts();
    populateSidebarOptions(stats);
  } catch (err) {
    console.error('⚠️ Erro ao carregar dashboard:', err);
  }
}

function updateAllCharts() {
  Object.keys(chartInstances).forEach(key => {
    if (!key.endsWith('_data') && chartInstances[key]) {
      const chart = chartInstances[key];
      chart.setPalette(currentPalette);
      chart.setChartType(currentChartType);
      
      const data = chartInstances[`${key}_data`];
      if (data) chart.render(data);
    }
  });
}

function populateSidebarOptions(stats) {
  // Checkbox de Anos
  const yearContainer = document.getElementById('year-checkbox-list');
  if (yearContainer && stats.breakdowns?.yearDistribution?.data) {
    const years = Object.keys(stats.breakdowns.yearDistribution.data).sort((a, b) => b - a);
    yearContainer.innerHTML = '';

    years.forEach(yr => {
      const label = document.createElement('label');
      label.className = 'checkbox-item';
      label.innerHTML = `
        <input type="checkbox" class="year-filter-cb" value="${yr}">
        <span>${yr}</span>
      `;
      label.querySelector('input').addEventListener('change', () => {
        currentOffset = 0;
        loadExplorerData();
      });
      yearContainer.appendChild(label);
    });
  }

  // Dropdown Tools
  const toolSelect = document.getElementById('filter-tool-select');
  if (toolSelect && stats.topLists?.topTools?.data) {
    stats.topLists.topTools.data.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.name;
      opt.textContent = t.name;
      toolSelect.appendChild(opt);
    });
    toolSelect.addEventListener('change', () => { currentOffset = 0; loadExplorerData(); });
  }

  // Dropdown Sources
  const sourceSelect = document.getElementById('filter-source-select');
  if (sourceSelect && stats.topLists?.topSources?.data) {
    stats.topLists.topSources.data.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.name;
      opt.textContent = s.name;
      sourceSelect.appendChild(opt);
    });
    sourceSelect.addEventListener('change', () => { currentOffset = 0; loadExplorerData(); });
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

  // Coletar anos selecionados nos checkboxes
  const selectedYears = Array.from(document.querySelectorAll('.year-filter-cb:checked')).map(cb => cb.value);
  if (selectedYears.length > 0) {
    params.set('year', selectedYears.join(','));
  }

  const toolVal = document.getElementById('filter-tool-select')?.value;
  if (toolVal) params.set('tool', toolVal);

  const sourceVal = document.getElementById('filter-source-select')?.value;
  if (sourceVal) params.set('source', sourceVal);

  const stageVal = document.getElementById('filter-stage-select')?.value;
  if (stageVal) params.set('stage', stageVal);

  const hasToolCb = document.getElementById('filter-hastool-checkbox');
  if (hasToolCb && hasToolCb.checked) {
    params.set('has_tool', 'true');
  }

  try {
    const res = await fetch(`/api/v1/${entity}?${params.toString()}`);
    const data = await res.json();

    renderArticleCards(data.results);
    renderPaginationInfo(data);
  } catch (err) {
    console.error('⚠️ Erro ao carregar explorador:', err);
  }
}

/**
 * Renderiza Lista em Cartões Fluídos de Artigos
 */
function renderArticleCards(items) {
  const container = document.getElementById('articles-list');
  if (!container) return;

  container.innerHTML = '';

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 40px; background: var(--bg-surface); border-radius: var(--border-radius-lg);">
        Nenhum registro encontrado para os filtros selecionados.
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'article-card';

    const year = item.year || item.ano || 'N/A';
    const doi = item.doi || item.id || 'N/A';
    const title = item.title || item.titulo || 'Sem título';
    const authors = Array.isArray(item.authors) ? item.authors.join(', ') : (item.authors || 'N/A');

    // Badges coloridos por categoria
    let badgesHtml = '';
    
    if (Array.isArray(item.data_sources)) {
      item.data_sources.forEach(src => {
        badgesHtml += `<span class="badge-source">${escapeHtml(src)}</span> `;
      });
    }

    if (Array.isArray(item.usage_stages)) {
      item.usage_stages.forEach(stg => {
        badgesHtml += `<span class="badge-stage">${escapeHtml(stg)}</span> `;
      });
    }

    if (Array.isArray(item.tools)) {
      item.tools.forEach(t => {
        badgesHtml += `<span class="badge-tool">${escapeHtml(t)}</span> `;
      });
    }

    card.innerHTML = `
      <div class="article-card-header">
        <span class="badge-year">${year}</span>
        <span class="doi-link-text">${escapeHtml(doi)}</span>
      </div>
      <h3 class="article-title">${escapeHtml(title)}</h3>
      <p class="article-authors">${escapeHtml(authors)}</p>
      <div class="badge-list">${badgesHtml}</div>
    `;

    card.addEventListener('click', () => openArticleModal(item));
    container.appendChild(card);
  });
}

function openArticleModal(item) {
  const modal = document.getElementById('article-modal');
  if (!modal) return;

  document.getElementById('modal-year').textContent = item.year || 'N/A';
  document.getElementById('modal-title').textContent = item.title || 'Sem título';
  document.getElementById('modal-authors').textContent = Array.isArray(item.authors) ? item.authors.join(', ') : (item.authors || 'N/A');
  document.getElementById('modal-abstract').textContent = item.abstract || 'Resumo não disponível para este registro.';

  const toolsEl = document.getElementById('modal-tools');
  if (toolsEl) {
    toolsEl.innerHTML = Array.isArray(item.tools) && item.tools.length > 0
      ? item.tools.map(t => `<span class="badge-tool">${escapeHtml(t)}</span>`).join(' ')
      : 'Nenhuma ferramenta identificada';
  }

  const sourcesEl = document.getElementById('modal-sources');
  if (sourcesEl) {
    sourcesEl.innerHTML = Array.isArray(item.data_sources) && item.data_sources.length > 0
      ? item.data_sources.map(s => `<span class="badge-source">${escapeHtml(s)}</span>`).join(' ')
      : 'N/A';
  }

  const doiLink = document.getElementById('modal-doi-link');
  if (doiLink && item.doi) {
    doiLink.href = item.doi.startsWith('http') ? item.doi : `https://doi.org/${item.doi}`;
  }

  modal.classList.add('active');
}

function initModal() {
  const modal = document.getElementById('article-modal');
  const closeBtn = document.getElementById('btn-close-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

function renderPaginationInfo(data) {
  const infoText = document.getElementById('results-count-text');
  const pageInfo = document.getElementById('pagination-page-info');
  const prevBtn = document.getElementById('btn-prev-page');
  const nextBtn = document.getElementById('btn-next-page');

  const start = data.offset + 1;
  const end = Math.min(data.offset + data.limit, data.filteredCount);
  const totalPages = Math.ceil(data.filteredCount / currentLimit) || 1;
  const currentPage = Math.floor(data.offset / currentLimit) + 1;

  if (infoText) {
    infoText.textContent = `Mostrando ${start}-${end} de ${data.filteredCount} artigos filtrados`;
  }

  if (pageInfo) {
    pageInfo.textContent = `Pág. ${currentPage} de ${totalPages}`;
  }

  if (prevBtn) {
    prevBtn.disabled = data.offset <= 0;
    prevBtn.onclick = () => {
      if (currentOffset > 0) {
        currentOffset -= currentLimit;
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

async function loadCorrelations() {
  if (!appConfig) return;
  const entity = appConfig.dataset?.entityName || 'articles';

  try {
    const resMatrix = await fetch(`/api/v1/${entity}/stats/correlations`);
    const matrixData = await resMatrix.json();
    const heatmapChart = new SimpleChart('chart-heatmap-matrix');
    heatmapChart.renderHeatmapMatrix(matrixData);

    const resScatter = await fetch(`/api/v1/${entity}/stats/scatter`);
    const scatterData = await resScatter.json();
    const scatterChart = new SimpleChart('chart-scatter-plot');
    scatterChart.renderScatterPlot(scatterData);
  } catch (err) {
    console.error('⚠️ Erro ao carregar correlações:', err);
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

function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      currentOffset = 0;
      loadExplorerData();
    }, 300));
  }

  const clearBtn = document.getElementById('btn-clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      document.querySelectorAll('.year-filter-cb').forEach(cb => cb.checked = false);
      const toolSelect = document.getElementById('filter-tool-select');
      if (toolSelect) toolSelect.value = '';
      const sourceSelect = document.getElementById('filter-source-select');
      if (sourceSelect) sourceSelect.value = '';
      const hasToolCb = document.getElementById('filter-hastool-checkbox');
      if (hasToolCb) hasToolCb.checked = false;

      currentOffset = 0;
      loadExplorerData();
    });
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
