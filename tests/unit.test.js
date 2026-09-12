import { test, describe } from 'node:test';
import assert from 'node:assert';
import { loadData, queryItems, getItemByKey, normalizeString } from '../src/dataManager.js';
import { calculateStats } from '../src/statsEngine.js';

describe('Unit Tests - DataManager & StatsEngine', () => {
  test('normalizeString deve remover acentos e converter para caixa baixa', () => {
    assert.strictEqual(normalizeString('Ação Científica!'), 'acao cientifica!');
    assert.strictEqual(normalizeString(''), '');
  });

  test('loadData deve carregar o dataset de exemplo', () => {
    const items = loadData();
    assert.ok(Array.isArray(items));
    assert.ok(items.length > 0, 'Deve conter ao menos 1 registro');
  });

  test('queryItems deve filtrar por busca textual global', () => {
    const res = queryItems({ search: 'Bibliometria' });
    assert.ok(res.filteredCount >= 1);
    assert.strictEqual(res.results.length, res.filteredCount);
  });

  test('queryItems deve filtrar por faceta de ano', () => {
    const res = queryItems({ year: '2024' });
    res.results.forEach(item => {
      assert.strictEqual(item.year, 2024);
    });
  });

  test('getItemByKey deve buscar por DOI completo e ID', () => {
    const itemByDoi = getItemByKey('https://doi.org/10.5281/zenodo.1000001');
    assert.ok(itemByDoi);
    assert.strictEqual(itemByDoi.id, 'item-001');

    const itemById = getItemByKey('item-002');
    assert.ok(itemById);
    assert.strictEqual(itemById.year, 2024);
  });

  test('calculateStats deve agregar métricas e top listas corretamente', () => {
    const stats = calculateStats();
    assert.ok(stats.totalRecords > 0);
    assert.ok(stats.topLists.topTools);
    assert.ok(Array.isArray(stats.topLists.topTools.data));
  });
});
