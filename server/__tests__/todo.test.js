const request = require('supertest');
const resetDb = require('../utils/resetDb');
const app = require('../app');

describe('/api/todo path', () => {
  beforeEach(() => {
    resetDb();
  });

  test('it retrieve the to do based on user', async () => {
    const res = await request(app).get('/api/todo').send({
      userId: 1,
      username: 'Pally',
    });
    expect(res.body).toMatchInlineSnapshot(`
Array [
  Object {
    "id": 1,
    "is_done": false,
    "name": "Cleaning bathroom",
  },
]
`);
  });

  test('it create a new todo', async () => {
    const res = await request(app).post('/api/todo').send({
      userId: 1,
      username: 'Pally',
      todoName: 'Cleaning up closet',
      isDone: false,
    });

    expect(res.statusCode).toBe(201);
  });

  test('it edit the todo', async () => {
    const res = await request(app).put('/api/todo').send({
      id: 1,
      todoName: 'Cleaning up bathroom',
      isDone: true,
    });

    expect(res.statusCode).toBe(201);
  });

  test('it should delete the todo', async () => {
    const res = await request(app).delete('/api/todo').send({
      id: 1,
    });

    expect(res.statusCode).toBe(204);
  });
});
