import { expect, readFixture } from './helper';

import Client, { RequestParams } from '../src/Client';
import Weather from '../src/Weather';

const mockClient: Client = {
  fetch: async (_path: string, params: RequestParams) => {
    const { product } = params;
    return readFixture(`${product}.json`);
  },

  addCredentials: (url: string): string => url
};

const weather = new Weather(mockClient);

describe('Weather', () => {
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
