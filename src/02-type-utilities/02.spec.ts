import express, { Express } from 'express';
import supertest from 'supertest';

type Contract = {
  _id: string;
  actionId: number;
  product: {
    key: string;
  };
  insurance: {
    key: string;
    name: string;
  };
  version: string;
  syncAt: Date;
  createdAt: Date;
  modifiedAt: Date;
};

const contract: Contract = {
  _id: '1',
  actionId: 123,
  createdAt: new Date("2020-11-18T10:59:15.461Z"),
  insurance: {
    key: 'foo',
    name: 'Foo',
  },
  modifiedAt: new Date("2020-11-18T10:59:15.461Z"),
  product: {
    key: 'bar',
  },
  syncAt: new Date("2020-11-18T10:59:15.461Z"),
  version: '1.0.0',
};

const createServer = (): Express => {
  const app = express();
  
  app.get('/contract', (req, res) => {
    /*  FIXME
        The below function is missing. It should not be challenging
        to implement the logic, but you gotta think about the return type carefully!
    */
    res.json(mapToContractView(contract));
  });

  return app;
};


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