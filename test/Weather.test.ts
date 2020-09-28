import { expect, initMockServer, MockServer } from './helper';

import HereClient, { Weather } from '../src';

describe('Weather', () => {
  let mockServer: MockServer;
  let weather: Weather;

  before(() => {
    mockServer = initMockServer();
    const client = new HereClient({ baseURL: mockServer.baseURL, apiKey: 'foobar' });
    weather = client.weather;
  });

  after(() => mockServer.stop());

  describe('#observation()', () => {
    it('should return with the observation', async () => {
      const response = await weather.observation({ name: 'Budapest' });

      expect(response).to.have.property('observations');
    });
  });

  describe('#hourlyForecast()', () => {
    it('should return with the hourlyForecast', async () => {
      const response = await weather.hourlyForecast({ name: 'Budapest' });

      expect(response).to.have.property('hourlyForecasts');
    });
  });

  describe('#sevenDayForecast()', () => {
    it('should return with the sevenDayForecast', async () => {
      const response = await weather.sevenDayForecast({ name: 'Budapest' });

      expect(response).to.have.property('forecasts');
    });
  });

  describe('#sevenDayForecastSimple()', () => {
    it('should return with the sevenDayForecastSimple', async () => {
      const response = await weather.sevenDayForecastSimple({ name: 'Budapest' });

      expect(response).to.have.property('dailyForecasts');
    });
  });
});
