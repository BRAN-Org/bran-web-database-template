import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONFIG_PATH = join(__dirname, '../config/dataset.config.json');

let cachedConfig = null;

export function getDatasetConfig() {
  if (cachedConfig) return cachedConfig;

  try {
    if (existsSync(CONFIG_PATH)) {
      const rawData = readFileSync(CONFIG_PATH, 'utf-8');
      cachedConfig = JSON.parse(rawData);
      return cachedConfig;
    }
  } catch (err) {
    console.error('⚠️ [BRAN Template] Falha ao carregar dataset.config.json:', err.message);
  }

  // Fallback padrão se arquivo não for encontrado
  return {
    organization: { name: 'BRAN Org', url: 'https://github.com/BRAN-Org' },
    dataset: {
      title: 'BRAN Academic Database Template',
      description: 'API e Dashboard de Dados Acadêmicos',
      entityName: 'articles',
      singularName: 'Artigo',
      pluralName: 'Artigos',
      primaryKey: 'doi'
    },
    schema: { searchFields: ['title', 'abstract'], facets: [] },
    stats: { topLists: [], breakdowns: [] }
  };
}
