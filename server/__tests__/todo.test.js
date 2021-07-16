const request = require('supertest');
const resetDb = require('../utils/resetDb');
const app = require('../app');

describe('/todo path', () => {
  beforeEach(() => {
    resetDb();
  });

  test('it create a new todo', async () => {
    const res = await request(app).post('/todo').send({
      userId: 1,
      username: 'Pally',
      todoName: 'Cleaning up closet',
      isDone: false,
    });

    expect(res.statusCode).toBe(201);
  });

  test('it edit the todo', async () => {
    const res = await request(app).put('/todo').send({
      id: 1,
      todoName: 'Cleaning up bathroom',
      isDone: true,
    });

    expect(res.statusCode).toBe(201);
  });
});
