const request = require('supertest');
const app = require('../app');
const resetDb = require('../utils/resetDb');

describe('Test the login path', () => {
  beforeEach(() => {
    resetDb();
  });

  test('it should allow user with same id and username', async () => {
    const res = await request(app)
      .post('/login')
      .send({ id: 1, username: 'pally' });

    expect(res.statusCode).toBe(200);
  });

  test('it should create new user if user did not exist', async () => {
    const res = await request(app)
      .post('/login')
      .send({ id: 2, username: 'wajahat' });

    expect(res.statusCode).toBe(201);
  });
});
