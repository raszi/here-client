import chai, { expect } from 'chai';
import { promises as fsPromises } from 'fs';
import { join } from 'path';

chai.use(require('chai-datetime'));

const { readFile } = fsPromises;

export { expect };

export const readFixture = async (file: string): Promise<unknown> => {
  const data = await readFile(join(__dirname, '..', 'fixtures', file));
  return JSON.parse(data.toString('utf8'));
};
