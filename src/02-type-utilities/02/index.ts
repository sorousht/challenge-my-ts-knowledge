import express, { Express } from 'express';
import { Contract } from './Contract';

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

export const createServer = (): Express => {
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