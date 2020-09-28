import { expect, initMockServer, MockServer } from './helper';

import HereClient, { Weather } from '../src';

describe('HereClient', () => {
  let mockServer: MockServer;
  let client: HereClient;

  before(() => {
    mockServer = initMockServer();
    client = new HereClient({ baseURL: mockServer.baseURL, apiKey: 'foobar' });
  });

  after(() => mockServer.stop());

  describe('#weather', () => {
    it('should return a Weather client', () => {
      expect(client.weather).to.be.an.instanceof(Weather);
    });
  });

  describe('#fetch()', () => {
    it('should fetch the URL', async () => {
      const response = await client.fetch('/ping', {});
      expect(response).to.eq('OK');
    });
  });
});
