import { Router } from 'express';
import { getDatasetConfig } from './config.js';
import { queryItems, getItemByKey } from './dataManager.js';
import { calculateStats } from './statsEngine.js';
import { exportDataset } from './exportEngine.js';

export function createApiRouter() {
  const router = Router();
  const config = getDatasetConfig();
  const entityName = config.dataset?.entityName || 'articles';

  // 1. Endpoint de configuração pública do dataset
  router.get('/config', (req, res) => {
    res.json(getDatasetConfig());
  });

  // 2. Endpoint de estatísticas consolidadas
  // Ex: /api/v1/articles/stats
  router.get(`/${entityName}/stats`, (req, res) => {
    res.json(calculateStats());
  });

  // 3. Endpoint de exportação (CSV / JSON)
  // Ex: /api/v1/articles/export
  router.get(`/${entityName}/export`, (req, res) => {
    exportDataset(req, res);
  });

  // 4. Endpoint de busca flexível por DOI / ID via wildcard de rota (suporta barras brutas no DOI)
  // Ex: /api/v1/articles/by-key/https://doi.org/10.5281/zenodo.1000001
  router.use(`/${entityName}/by-key`, (req, res, next) => {
    let rawKey = req.path.replace(/^\//, '');
    if (!rawKey && req.query.value) {
      rawKey = req.query.value;
    }

    if (!rawKey) return next();

    const item = getItemByKey(rawKey);
    if (!item) {
      return res.status(404).json({ error: `Registro com a chave '${rawKey}' não encontrado.` });
    }
    return res.json(item);
  });

  // 5. Endpoint de busca individual por ID/DOI percent-encoded
  // Ex: /api/v1/articles/:key
  router.get(`/${entityName}/:key`, (req, res) => {
    const item = getItemByKey(req.params.key);
    if (!item) {
      return res.status(404).json({ error: `Registro com a chave '${req.params.key}' não encontrado.` });
    }
    return res.json(item);
  });

  // 6. Endpoint de lista geral de itens (com filtros, busca textual, ordenação e paginação)
  // Ex: /api/v1/articles
  router.get(`/${entityName}`, (req, res) => {
    const result = queryItems(req.query);
    res.json(result);
  });

  return router;
}
