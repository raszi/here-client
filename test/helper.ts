import chai, { expect } from 'chai';
import express from 'express';
import { promises as fsPromises } from 'fs';
import { join } from 'path';

chai.use(require('chai-datetime'));

const { readFile } = fsPromises;

export { expect };

export const readFixture = async (file: string): Promise<unknown> => {
  const data = await readFile(join(__dirname, '..', 'fixtures', file));
  return JSON.parse(data.toString('utf8'));
};

export interface MockServer {
  port: number;
  baseURL: string;

  stop(): void;
}

export const initMockServer = (): MockServer => {
  const app = express();
  const server = app.listen(0);

  app.get('/weather/1.0/report.json', async (req, res) => {
    const { product } = req.query;

    const response = await readFixture(`${product}.json`);
    res.json(response);
  });

  app.get('/ping', (_req, res) => res.json('OK'));

  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('Address is invalid');

  const port = address.port;

  return {
    port,
    baseURL: `http://localhost:${port}`,
    stop: () => server.close()
  };
};
