import { expect } from './helper';

import HereClient, { Weather } from '../src';

const client = new HereClient({ apiKey: '' });

describe('HereClient', () => {
  describe('#weather', () => {
    it('should return a Weather client', () => {
      expect(client.weather).to.be.an.instanceof(Weather);
    });
  });
});
