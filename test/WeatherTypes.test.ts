import chai, { expect } from 'chai';

import { readFixture } from './helper';

chai.use(require('chai-datetime'));

import * as sut from '../src/types/WeatherTypes';

describe('WeatherTypes', () => {
  describe('.parseObservationResponse()', () => {
    let data: unknown;

    before(async () => {
      data = await readFixture('observation.json');
    });

    it('should parse the example correctly', () => {
      const { observations, metric, feedCreation } = sut.parseObservationResponse(data);

      const date = new Date(2020, 8, 17, 8, 7, 10);

      expect(metric).to.be.eq(true);
      expect(feedCreation).to.equalDate(date);

      const [location] = observations.location;
      expect(location.city).to.eq('Unter den Linden');

      const [observation] = location.observation;

      expect(observation).to.include({
        temperature: 15,
        temperatureDesc: 'Cool',

        icon: 2,
        iconName: 'mostly_sunny',
        iconLink: 'https://weather.ls.hereapi.com/static/weather/icon/2.png'
      });
    });
  });

  describe('.parseForecastResponse()', () => {
    context('hourly forecast', () => {
      let data: unknown;

      before(async () => {
        data = await readFixture('forecast_hourly.json');
      });

      it('should parse the example correctly', async () => {
        const { locations, metric, feedCreation } = sut.parseForecastResponse(data);

        const date = new Date(2020, 8, 17, 8, 4, 27);

        expect(metric).to.be.eq(true);
        expect(feedCreation).to.equalDate(date);

        const [location] = locations.location;
        expect(location.city).to.eq('Unter den Linden');

        const [observation] = location.observation;

        expect(observation).to.include({
          temperature: 19.8,
          temperatureDesc: 'Cool',

          icon: 2,
          iconName: 'mostly_sunny',
          iconLink: 'https://weather.ls.hereapi.com/static/weather/icon/2.png'
        });
      });
    });
  });
});
