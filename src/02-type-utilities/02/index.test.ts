import supertest from 'supertest';
import { createServer } from './index';

describe('/contract', () => {
  it('should map contract to contract view model', async () => {
    const expected = {
      _id: '1',
      actionId: 123,
      createdAt: "2020-11-18T10:59:15.461Z",
      insurance: {
        key: 'foo',
        name: 'Foo',
      },
      modifiedAt: "2020-11-18T10:59:15.461Z",
      product: {
        key: 'bar',
      },
    };
    const request = supertest(createServer());
    const { body } = await request.get('/contract');

    expect(body).toEqual(expected);
    expect(body).not.toHaveProperty('syncAt');
    expect(body).not.toHaveProperty('version');
  });
})