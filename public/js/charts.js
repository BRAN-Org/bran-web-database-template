/**
 * Componente de Gráficos Vetoriais Nativos em SVG (Zero-Dependency)
 * Desenvolvido para o ecossistema BRAN Org com tecnologia pure-svg-charts.
 * Suporta Barras, Linhas Suaves (Catmull-Rom Bézier), Rosca (Donut),
 * temas visuais reativos e exportação direta em vetor SVG e imagem PNG (2x).
 */
import {
  mountChart,
  unmountChart,
  renderBarChart,
  renderLineChart,
  renderDonutChart,
  CHART_VARIANTS,
  exportChartAsImage
} from './pure-svg-charts.bundle.js';

const PALETTE_MAP = {
  tokyonight: 'tokyonight',
  cyberpunk: 'cyberpunk',
  glass: 'glass',
  default: 'default',
  paper: 'paper',
  terminal: 'terminal',
  // Mapeamentos retrocompatíveis
  simeon: 'tokyonight',
  neon: 'cyberpunk',
  pastel: 'glass',
  apple: 'default',
  monochrome: 'terminal'
};

export class SimpleChart {
  constructor(containerId) {
    this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!this.container) return;

    this.palette = 'tokyonight';
    this.chartType = 'bar';
    this.lastData = null;
    this.lastLabelKey = 'name';
    this.lastValueKey = 'count';
  }

  setPalette(paletteName) {
    this.palette = PALETTE_MAP[paletteName] || (CHART_VARIANTS[paletteName] ? paletteName : 'tokyonight');
  }

  setChartType(type) {
    if (type === 'radar') {
      this.chartType = 'donut';
    } else {
      this.chartType = type || 'bar';
    }
  }

  getContainerHeight() {
    if (!this.container) return 240;
    const h = this.container.clientHeight || this.container.offsetHeight;
    return h > 50 ? h : 240;
  }

  render(data, labelKey = 'name', valueKey = 'count') {
    if (!this.container || !data) return;
    this.lastData = data;
    this.lastLabelKey = labelKey;
    this.lastValueKey = valueKey;

    // Normalizar dados: objetos chave-valor { "2020": 5 } ou arrays [{ name: 'A', count: 10 }]
    let items = [];
    if (Array.isArray(data)) {
      items = data.map((item, idx) => {
        if (typeof item === 'number') {
          return { label: `Item ${idx + 1}`, value: item };
        }
        const label = String(item[labelKey] || item.name || item.label || `Item ${idx + 1}`);
        const val = Number(item[valueKey] ?? item.count ?? item.value ?? 0);
        return { label, value: Number.isFinite(val) ? val : 0 };
      });
    } else if (typeof data === 'object') {
      items = Object.entries(data).map(([key, val]) => ({
        label: String(key),
        value: Number.isFinite(Number(val)) ? Number(val) : 0
      }));
    }

    if (items.length === 0) {
      unmountChart(this.container);
      return;
    }

    const height = this.getContainerHeight();

    if (this.chartType === 'line') {
      renderLineChart(this.container, {
        data: items,
        variant: this.palette,
        card: false,
        responsive: true,
        height,
        smooth: true,
        curvature: 0.25,
        fillGradient: true,
        crosshair: true,
        showZeroLine: true,
        animated: true,
        valueFormatter: (v) => `${Number(v).toLocaleString()} trab.`
      });
    } else if (this.chartType === 'donut') {
      // Para rosca, agrupamos categorias além das top 7 em "Outros"
      const maxSlices = 7;
      let donutSlices = items.slice(0, maxSlices).map(it => ({
        label: it.label,
        value: it.value
      }));
      if (items.length > maxSlices) {
        const othersCount = items.slice(maxSlices).reduce((acc, curr) => acc + curr.value, 0);
        if (othersCount > 0) {
          donutSlices.push({ label: 'Outros', value: othersCount });
        }
      }
      const totalCount = donutSlices.reduce((acc, curr) => acc + curr.value, 0);

      renderDonutChart(this.container, {
        data: donutSlices,
        variant: this.palette,
        card: false,
        size: Math.min(height, 240),
        innerRadiusRatio: 0.65,
        centerLabel: 'Total',
        centerValue: String(totalCount),
        showLegend: true,
        animated: true,
        valueFormatter: (v) => `${Number(v).toLocaleString()} trab.`
      });
    } else {
      // Bar chart
      renderBarChart(this.container, {
        data: items,
        variant: this.palette,
        card: false,
        responsive: true,
        height,
        radius: 6,
        showValues: items.length <= 12,
        showZeroLine: true,
        animated: true,
        valueFormatter: (v) => `${Number(v).toLocaleString()} trab.`
      });
    }
  }

  async exportSVG(filename = 'grafico.svg') {
    if (!this.container) return;
    const baseName = filename.replace(/\.svg$/i, '');
    await exportChartAsImage(this.container, 'svg', baseName);
  }

  async exportPNG(chartTitle = 'Gráfico Estatístico', filename = 'grafico.png') {
    if (!this.container) return;
    const baseName = filename.replace(/\.png$/i, '');
    const isLight = this.palette === 'paper';
    const bg = isLight ? '#f8fafc' : '#0b0f17';
    await exportChartAsImage(this.container, 'png', baseName, {
      scale: 2,
      background: bg
    });
  }

  destroy() {
    if (this.container) {
      unmountChart(this.container);
    }
  }
}

export const PureSvgChart = SimpleChart;
export { CHART_VARIANTS, exportChartAsImage };
