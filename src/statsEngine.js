import { getAllItems } from './dataManager.js';
import { getDatasetConfig } from './config.js';

/**
 * Calcula estatísticas consolidadas com base no dataset e nas definições do dataset.config.json
 */
export function calculateStats() {
  const items = getAllItems();
  const config = getDatasetConfig();

  const total = items.length;
  const stats = {
    totalRecords: total,
    entityName: config.dataset?.pluralName || 'Registros',
    topLists: {},
    breakdowns: {},
    metrics: {}
  };

  if (total === 0) return stats;

  // 1. Processar listas dos mais frequentes (Top Lists)
  const topListSpecs = config.stats?.topLists || [];
  for (const spec of topListSpecs) {
    const counts = {};
    items.forEach(item => {
      const val = item[spec.sourceField];
      if (Array.isArray(val)) {
        val.forEach(v => {
          if (v) {
            const clean = String(v).trim();
            counts[clean] = (counts[clean] || 0) + 1;
          }
        });
      } else if (val) {
        const clean = String(val).trim();
        counts[clean] = (counts[clean] || 0) + 1;
      }
    });

    const sortedArray = Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, spec.limit || 10);

    stats.topLists[spec.key] = {
      label: spec.label,
      data: sortedArray
    };
  }

  // 2. Processar distribuições (Breakdowns)
  const breakdownSpecs = config.stats?.breakdowns || [];
  for (const spec of breakdownSpecs) {
    const counts = {};
    items.forEach(item => {
      const val = item[spec.sourceField];
      if (Array.isArray(val)) {
        val.forEach(v => {
          if (v) {
            const clean = String(v).trim();
            counts[clean] = (counts[clean] || 0) + 1;
          }
        });
      } else if (val !== undefined && val !== null) {
        const clean = String(val).trim();
        counts[clean] = (counts[clean] || 0) + 1;
      }
    });

    stats.breakdowns[spec.key] = {
      label: spec.label,
      data: counts
    };
  }

  // 3. Métricas adicionais (ex: % de uso de ferramentas se existir)
  const recordsWithTools = items.filter(i => Array.isArray(i.tools) && i.tools.length > 0).length;
  stats.metrics.recordsWithTools = recordsWithTools;
  stats.metrics.toolAdoptionRate = parseFloat(((recordsWithTools / total) * 100).toFixed(2));

  return stats;
}
