const request = require('supertest');
const app = require('../server');

describe('Basic API test', () => {
  test('GET / should return ok', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('ok');
  });
});
