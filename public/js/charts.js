/**
 * Componente de Gráficos Leves em Canvas HTML5 (Zero-Dependency)
 * Suporta alternância de paletas (Apple, Monocromático, Neon, Pastel) e tipos de gráfico (Barras, Linhas, Radar).
 */
export class SimpleChart {
  constructor(canvasId) {
    this.canvas = typeof canvasId === 'string' ? document.getElementById(canvasId) : canvasId;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.palette = 'apple';
    this.chartType = 'bar';
  }

  setPalette(paletteName) {
    this.palette = paletteName || 'apple';
  }

  setChartType(type) {
    this.chartType = type || 'bar';
  }

  getPaletteColors() {
    switch (this.palette) {
      case 'neon':
        return ['#00f0ff', '#ff007f', '#00ff66', '#ff00ff', '#ffff00'];
      case 'pastel':
        return ['#a7f3d0', '#fef08a', '#fbcfe8', '#bae6fd', '#c084fc'];
      case 'monochrome':
        return ['#ffffff', '#d4d4d4', '#a3a3a3', '#737373', '#525252'];
      case 'apple':
      default:
        return ['#ffffff', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
    }
  }

  setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    return { width: rect.width, height: rect.height };
  }

  render(data, labelKey = 'name', valueKey = 'count') {
    if (!this.ctx || !data) return;

    if (this.chartType === 'radar') {
      this.renderRadarChart(data, labelKey, valueKey);
    } else if (this.chartType === 'line') {
      this.renderLineChart(data, labelKey, valueKey);
    } else {
      this.renderBarChart(data, labelKey, valueKey);
    }
  }

  renderBarChart(data, labelKey = 'name', valueKey = 'count') {
    const { ctx } = this;
    const { width, height } = this.setupCanvas();
    ctx.clearRect(0, 0, width, height);

    const items = Array.isArray(data) ? data : Object.entries(data).map(([name, count]) => ({ name, count }));
    if (items.length === 0) return;

    const colors = this.getPaletteColors();
    const maxVal = Math.max(...items.map(d => d[valueKey] || d.count || 0), 1);
    const barHeight = Math.min(26, (height - 20) / items.length - 6);
    const startX = 140;
    const chartWidth = width - startX - 40;

    items.forEach((item, index) => {
      const label = item[labelKey] || item.name || '';
      const val = item[valueKey] ?? item.count ?? 0;
      const y = 10 + index * (barHeight + 8);
      const barW = (val / maxVal) * chartWidth;

      // Label
      ctx.fillStyle = '#8e8e93';
      ctx.font = '500 12px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      const truncatedLabel = label.length > 18 ? label.substring(0, 16) + '..' : label;
      ctx.fillText(truncatedLabel, startX - 10, y + barHeight / 2);

      // Track
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      this.drawRoundedRect(startX, y, chartWidth, barHeight, 4);
      ctx.fill();

      // Bar Fill
      ctx.fillStyle = colors[index % colors.length];
      this.drawRoundedRect(startX, y, Math.max(barW, 6), barHeight, 4);
      ctx.fill();

      // Value text
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 11px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(String(val), startX + barW + 8, y + barHeight / 2);
    });
  }

  renderLineChart(data, labelKey = 'name', valueKey = 'count') {
    const { ctx } = this;
    const { width, height } = this.setupCanvas();
    ctx.clearRect(0, 0, width, height);

    const items = Array.isArray(data) ? data : Object.entries(data).map(([name, count]) => ({ name, count }));
    if (items.length === 0) return;

    const colors = this.getPaletteColors();
    const padding = 40;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;
    const maxVal = Math.max(...items.map(d => d[valueKey] || d.count || 0), 1);

    ctx.beginPath();
    ctx.strokeStyle = colors[0];
    ctx.lineWidth = 3;

    const points = [];
    items.forEach((item, idx) => {
      const label = item[labelKey] || item.name || '';
      const val = item[valueKey] ?? item.count ?? 0;
      const x = padding + (idx / (items.length - 1 || 1)) * chartW;
      const y = height - padding - (val / maxVal) * chartH;
      points.push({ x, y, label, val });
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    points.forEach(p => {
      ctx.fillStyle = colors[1] || colors[0];
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#8e8e93';
      ctx.font = '500 11px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(p.label), p.x, height - 15);
      ctx.fillText(String(p.val), p.x, p.y - 10);
    });
  }

  renderRadarChart(data, labelKey = 'name', valueKey = 'count') {
    const { ctx } = this;
    const { width, height } = this.setupCanvas();
    ctx.clearRect(0, 0, width, height);

    const items = Array.isArray(data) ? data : Object.entries(data).map(([name, count]) => ({ name, count }));
    if (items.length === 0) return;

    const colors = this.getPaletteColors();
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 35;
    const total = items.length;
    const maxVal = Math.max(...items.map(d => d[valueKey] || d.count || 0), 1);

    // Grid circles
    for (let r = 1; r <= 3; r++) {
      const rad = (radius / 3) * r;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.arc(centerX, centerY, rad, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Points
    const points = [];
    items.forEach((item, i) => {
      const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
      const val = item[valueKey] ?? item.count ?? 0;
      const dist = (val / maxVal) * radius;
      const x = centerX + Math.cos(angle) * dist;
      const y = centerY + Math.sin(angle) * dist;
      points.push({ x, y, label: item[labelKey] || item.name, angle, dist });
    });

    // Polygon
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.strokeStyle = colors[0];
    ctx.lineWidth = 2;

    points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Labels
    points.forEach(p => {
      const lx = centerX + Math.cos(p.angle) * (radius + 18);
      const ly = centerY + Math.sin(p.angle) * (radius + 18);
      ctx.fillStyle = '#8e8e93';
      ctx.font = '500 11px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(p.label).substring(0, 10), lx, ly);
    });
  }

  renderHeatmapMatrix(data) {
    if (!this.ctx || !data || !data.rows || !data.cols) return;
    const { ctx } = this;
    const { width, height } = this.setupCanvas();
    ctx.clearRect(0, 0, width, height);

    const { rows, cols, matrix } = data;
    if (rows.length === 0 || cols.length === 0) return;

    const startX = 120;
    const startY = 40;
    const cellW = (width - startX - 20) / cols.length;
    const cellH = (height - startY - 20) / rows.length;

    let maxVal = 1;
    rows.forEach(r => cols.forEach(c => { if (matrix[r][c] > maxVal) maxVal = matrix[r][c]; }));

    cols.forEach((col, j) => {
      ctx.fillStyle = '#8e8e93';
      ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(col.substring(0, 10), startX + j * cellW + cellW / 2, startY - 12);
    });

    rows.forEach((row, i) => {
      ctx.fillStyle = '#8e8e93';
      ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(row.substring(0, 14), startX - 10, startY + i * cellH + cellH / 2);

      cols.forEach((col, j) => {
        const count = matrix[row][col] || 0;
        const alpha = Math.max(0.06, count / maxVal);
        
        ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
        this.drawRoundedRect(startX + j * cellW + 2, startY + i * cellH + 2, cellW - 4, cellH - 4, 4);
        ctx.fill();

        if (count > 0) {
          ctx.fillStyle = count / maxVal > 0.5 ? '#ffffff' : '#8e8e93';
          ctx.font = '700 12px "Plus Jakarta Sans", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(String(count), startX + j * cellW + cellW / 2, startY + i * cellH + cellH / 2);
        }
      });
    });
  }

  renderScatterPlot(data) {
    if (!this.ctx || !data || !data.points) return;
    const { ctx } = this;
    const { width, height } = this.setupCanvas();
    ctx.clearRect(0, 0, width, height);

    const padding = 45;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;
    const points = data.points;
    if (points.length === 0) return;

    const maxX = Math.max(...points.map(p => p.x), 5);
    const maxY = Math.max(...points.map(p => p.y), 5);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    points.forEach(p => {
      const cx = padding + (p.x / maxX) * chartW;
      const cy = height - padding - (p.y / maxY) * chartH;

      ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
    });
  }

  drawRoundedRect(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    const { ctx } = this;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
}
