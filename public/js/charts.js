/**
 * Componente de Gráficos Leves em Canvas HTML5 (Zero-Dependency)
 * Suporta Barras, Linhas, Heatmap Matrix, 100% Stacked Bar e Scatter Plot.
 */
export class SimpleChart {
  constructor(canvasId) {
    this.canvas = typeof canvasId === 'string' ? document.getElementById(canvasId) : canvasId;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * Reseta e aplica escala Retina (High-DPI)
   */
  setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    return { width: rect.width, height: rect.height };
  }

  /**
   * Renderiza Gráfico de Barras Horizontais
   */
  renderBarChart(data) {
    if (!this.ctx || !data || data.length === 0) return;
    const { ctx } = this;
    const { width, height } = this.setupCanvas();

    ctx.clearRect(0, 0, width, height);

    const maxVal = Math.max(...data.map(d => d.count), 1);
    const barHeight = Math.min(28, (height - 20) / data.length - 8);
    const startX = 140;
    const chartWidth = width - startX - 50;

    data.forEach((item, index) => {
      const y = 15 + index * (barHeight + 10);
      const barW = (item.count / maxVal) * chartWidth;

      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-secondary').trim() || '#94a3b8';
      ctx.font = '500 12px Outfit, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      const truncatedLabel = item.name.length > 18 ? item.name.substring(0, 16) + '...' : item.name;
      ctx.fillText(truncatedLabel, startX - 10, y + barHeight / 2);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      this.drawRoundedRect(startX, y, chartWidth, barHeight, 6);
      ctx.fill();

      const gradient = ctx.createLinearGradient(startX, 0, startX + barW, 0);
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#8b5cf6');

      ctx.fillStyle = gradient;
      this.drawRoundedRect(startX, y, Math.max(barW, 8), barHeight, 6);
      ctx.fill();

      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-primary').trim() || '#ffffff';
      ctx.font = '600 12px Outfit, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(String(item.count), startX + barW + 10, y + barHeight / 2);
    });
  }

  /**
   * Renderiza Gráfico de Linhas/Evolução
   */
  renderLineChart(dataObj) {
    if (!this.ctx || !dataObj) return;
    const { ctx } = this;

    const entries = Object.entries(dataObj).sort((a, b) => a[0] - b[0]);
    if (entries.length === 0) return;

    const { width, height } = this.setupCanvas();
    ctx.clearRect(0, 0, width, height);

    const padding = 40;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;
    const maxVal = Math.max(...entries.map(e => e[1]), 1);

    ctx.beginPath();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;

    const points = [];
    entries.forEach(([label, val], idx) => {
      const x = padding + (idx / (entries.length - 1 || 1)) * chartW;
      const y = height - padding - (val / maxVal) * chartH;
      points.push({ x, y, label, val });
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    points.forEach(p => {
      ctx.fillStyle = '#8b5cf6';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-secondary').trim() || '#94a3b8';
      ctx.font = '500 11px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(p.label), p.x, height - 15);
      ctx.fillText(String(p.val), p.x, p.y - 12);
    });
  }

  /**
   * Renderiza Matriz de Coocorrência (Heatmap Matrix)
   */
  renderHeatmapMatrix(data) {
    if (!this.ctx || !data || !data.rows || !data.cols) return;
    const { ctx } = this;
    const { width, height } = this.setupCanvas();
    ctx.clearRect(0, 0, width, height);

    const { rows, cols, matrix } = data;
    if (rows.length === 0 || cols.length === 0) return;

    const startX = 120;
    const startY = 50;
    const cellW = (width - startX - 20) / cols.length;
    const cellH = (height - startY - 20) / rows.length;

    // Achar valor máximo na matriz
    let maxVal = 1;
    rows.forEach(r => {
      cols.forEach(c => {
        if (matrix[r][c] > maxVal) maxVal = matrix[r][c];
      });
    });

    // Desenhar rótulos das colunas
    cols.forEach((col, j) => {
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-secondary').trim() || '#94a3b8';
      ctx.font = '600 11px Outfit, sans-serif';
      ctx.textAlign = 'center';
      const truncated = col.length > 12 ? col.substring(0, 10) + '..' : col;
      ctx.fillText(truncated, startX + j * cellW + cellW / 2, startY - 15);
    });

    // Desenhar linhas e células do Heatmap
    rows.forEach((row, i) => {
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-secondary').trim() || '#94a3b8';
      ctx.font = '600 11px Outfit, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      const truncated = row.length > 15 ? row.substring(0, 13) + '..' : row;
      ctx.fillText(truncated, startX - 10, startY + i * cellH + cellH / 2);

      cols.forEach((col, j) => {
        const count = matrix[row][col] || 0;
        const alpha = Math.max(0.08, count / maxVal);
        
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        this.drawRoundedRect(startX + j * cellW + 2, startY + i * cellH + 2, cellW - 4, cellH - 4, 4);
        ctx.fill();

        if (count > 0) {
          ctx.fillStyle = count / maxVal > 0.5 ? '#ffffff' : '#94a3b8';
          ctx.font = '700 12px Outfit, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(String(count), startX + j * cellW + cellW / 2, startY + i * cellH + cellH / 2);
        }
      });
    });
  }

  /**
   * Renderiza Dispersão (Scatter Plot com Linha de Tendência)
   */
  renderScatterPlot(data) {
    if (!this.ctx || !data || !data.points) return;
    const { ctx } = this;
    const { width, height } = this.setupCanvas();
    ctx.clearRect(0, 0, width, height);

    const padding = 50;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    const points = data.points;
    if (points.length === 0) return;

    const maxX = Math.max(...points.map(p => p.x), 5);
    const maxY = Math.max(...points.map(p => p.y), 5);

    // Eixos
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Rótulos dos eixos
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-muted').trim() || '#64748b';
    ctx.font = '500 11px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Nº de Autores por Artigo', width / 2, height - 10);

    // Plotar pontos
    points.forEach(p => {
      const cx = padding + (p.x / maxX) * chartW;
      const cy = height - padding - (p.y / maxY) * chartH;

      ctx.fillStyle = 'rgba(139, 92, 246, 0.6)';
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#3b82f6';
      ctx.stroke();
    });

    // Plotar Linha de Tendência
    if (data.trendline) {
      const { slope, intercept } = data.trendline;
      const x1 = 0;
      const y1 = intercept;
      const x2 = maxX;
      const y2 = slope * maxX + intercept;

      const px1 = padding + (x1 / maxX) * chartW;
      const py1 = height - padding - (Math.min(y1, maxY) / maxY) * chartH;
      const px2 = padding + (x2 / maxX) * chartW;
      const py2 = height - padding - (Math.min(y2, maxY) / maxY) * chartH;

      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(px1, py1);
      ctx.lineTo(px2, py2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
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
