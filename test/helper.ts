import { promises as fsPromises } from 'fs';
import { join } from 'path';

const { readFile } = fsPromises;

export const readFixture = async (file: string): Promise<unknown> => {
  const data = await readFile(join(__dirname, '..', 'fixtures', file));
  return JSON.parse(data.toString('utf8'));
};
