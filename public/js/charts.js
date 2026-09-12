/**
 * Componente de Gráficos Leves em Canvas HTML5 (Zero-Dependency)
 */
export class SimpleChart {
  constructor(canvasId) {
    this.canvas = typeof canvasId === 'string' ? document.getElementById(canvasId) : canvasId;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * Renderiza Gráfico de Barras Horizontais
   */
  renderBarChart(data, options = {}) {
    if (!this.ctx || !data || data.length === 0) return;
    const { ctx, canvas } = this;

    // Resets e escala Retina
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    const maxVal = Math.max(...data.map(d => d.count), 1);
    const barHeight = Math.min(28, (height - 20) / data.length - 8);
    const startX = 140;
    const chartWidth = width - startX - 50;

    data.forEach((item, index) => {
      const y = 15 + index * (barHeight + 10);
      const barW = (item.count / maxVal) * chartWidth;

      // Label do item
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-secondary').trim() || '#94a3b8';
      ctx.font = '500 12px Outfit, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      const truncatedLabel = item.name.length > 18 ? item.name.substring(0, 16) + '...' : item.name;
      ctx.fillText(truncatedLabel, startX - 10, y + barHeight / 2);

      // Fundo da barra
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      this.drawRoundedRect(startX, y, chartWidth, barHeight, 6);
      ctx.fill();

      // Barra de valor com Gradiente
      const gradient = ctx.createLinearGradient(startX, 0, startX + barW, 0);
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#8b5cf6');

      ctx.fillStyle = gradient;
      this.drawRoundedRect(startX, y, Math.max(barW, 8), barHeight, 6);
      ctx.fill();

      // Texto do valor
      ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-primary').trim() || '#ffffff';
      ctx.font = '600 12px Outfit, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(String(item.count), startX + barW + 10, y + barHeight / 2);
    });
  }

  /**
   * Renderiza Gráfico de Linhas/Evolução
   */
  renderLineChart(dataObj, options = {}) {
    if (!this.ctx || !dataObj) return;
    const { ctx, canvas } = this;

    const entries = Object.entries(dataObj).sort((a, b) => a[0] - b[0]);
    if (entries.length === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    const padding = 40;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    const maxVal = Math.max(...entries.map(e => e[1]), 1);

    // Desenhar pontos e linhas
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

    // Desenhar marcadores e texto
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
