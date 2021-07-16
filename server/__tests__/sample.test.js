const request = require('supertest');
const app = require('../app');

describe('Test the login path', () => {
  test('it should allow user with same id and username', async () => {
    const res = await request(app)
      .post('/login')
      .send({ id: 1, username: 'pally' });

    expect(res.statusCode).toBe(200);
  });
});
