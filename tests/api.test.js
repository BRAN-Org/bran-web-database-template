import { test, describe, before, after } from 'node:test';
import assert from 'node:assert';
import http from 'node:http';
import app from '../server.js';

describe('Integration Tests - REST API Endpoints', () => {
  let server;
  let baseUrl;

  before(async () => {
    process.env.NODE_ENV = 'test';
    server = http.createServer(app);
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const port = server.address().port;
    baseUrl = `http://127.0.0.1:${port}`;
  });

  after(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  test('GET /api/v1/config deve retornar configuração pública', async () => {
    const res = await fetch(`${baseUrl}/api/v1/config`);
    assert.strictEqual(res.status, 200);
    const config = await res.json();
    assert.strictEqual(config.organization.name, 'BRAN Org');
  });

  test('GET /api/v1/articles deve retornar lista paginada', async () => {
    const res = await fetch(`${baseUrl}/api/v1/articles?limit=2`);
    assert.strictEqual(res.status, 200);
    const data = await res.json();
    assert.ok(data.total > 0);
    assert.strictEqual(data.results.length, 2);
  });

  test('GET /api/v1/articles/stats deve retornar estatísticas consolidadas', async () => {
    const res = await fetch(`${baseUrl}/api/v1/articles/stats`);
    assert.strictEqual(res.status, 200);
    const stats = await res.json();
    assert.ok(stats.totalRecords > 0);
  });

  test('GET /api/v1/articles/export?format=csv deve retornar streaming CSV com BOM', async () => {
    const res = await fetch(`${baseUrl}/api/v1/articles/export?format=csv`);
    assert.strictEqual(res.status, 200);
    assert.ok(res.headers.get('content-type').includes('text/csv'));
    const buf = Buffer.from(await res.arrayBuffer());
    assert.strictEqual(buf[0], 0xef); // BOM UTF-8 byte 1
    assert.strictEqual(buf[1], 0xbb); // BOM UTF-8 byte 2
    assert.strictEqual(buf[2], 0xbf); // BOM UTF-8 byte 3
  });

  test('GET /api/v1/articles/:key deve retornar item individual por ID', async () => {
    const res = await fetch(`${baseUrl}/api/v1/articles/item-001`);
    assert.strictEqual(res.status, 200);
    const item = await res.json();
    assert.strictEqual(item.id, 'item-001');
  });
});
