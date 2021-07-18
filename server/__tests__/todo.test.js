const request = require('supertest');
const resetDb = require('../utils/resetDb');
const app = require('../app');

describe('/api/todo path', () => {
  beforeEach(() => {
    resetDb();
  });

  test('it should delete the todo', async () => {
    const res = await request(app).delete('/api/todo').send({
      id: 1,
    });

    expect(res.statusCode).toBe(204);
  });

  test('it create a new todo', async () => {
    const res = await request(app).put('/api/todo').send({
      userId: 1,
      username: 'pally',
      todoName: 'Cleaning up closet',
      isDone: false,
    });
    expect(res.body).toEqual({
      id: expect.any(Number),
    });
    expect(res.statusCode).toBe(201);
  });

  test('it retrieve the to do based on user', async () => {
    const res = await request(app).post('/api/todo').send({
      userId: 1,
      username: 'pally',
    });
    expect(res.body).toMatchInlineSnapshot(`
Object {
  "todos": Array [
    Object {
      "id": 1,
      "isDone": false,
      "todoName": "Cleaning bathroom",
      "userId": 1,
      "username": "pally",
    },
  ],
}
`);
  });

  test('it edit the todo', async () => {
    const res = await request(app).patch('/api/todo').send({
      id: 1,
      todoName: 'Cleaning up bathroom',
      isDone: true,
    });

    expect(res.statusCode).toBe(201);
  });
});
