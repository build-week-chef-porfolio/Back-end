const request = require('supertest');
const server = require('../server/server');
const db = require('../data/dbConfig');

beforeEach(async () => {
  await db('users').truncate();
});

describe('server', () => {
  it('[POST /api/users/login] - should return 201 because request was successful', async () => {
    const expectedStatusCode = 201;

    let response = await request(server)
      .post('/api/users/register')
      .send({ username: 'test', password: '123', email: 'mail@com' });
    expect(response.status).toEqual(expectedStatusCode);
    expect(response.body.message).toEqual('User created successfully');

    response = await request(server)
      .post('/api/users/login')
      .send({ username: 'test', password: '123', email: 'mail@com' });
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Welcome test');
  });

  it('[POST /api/users/register] - should return 201 because request was successful', async () => {
    const expectedStatusCode = 201;

    const response = await request(server)
      .post('/api/users/register')
      .send({ username: 'test', password: '123', email: 'mail@com' });
    expect(response.status).toEqual(expectedStatusCode);
    expect(response.body.message).toEqual('User created successfully');
  });
});
