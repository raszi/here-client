import chai, { expect } from 'chai';

chai.use(require('chai-datetime'));

import { readFixture } from '../helper';

import validate from '../../src/types/Observations.validator';

describe('Observations.validator', () => {
  context('with a valid input', () => {
    let data: unknown;

    before(async () => {
      data = await readFixture('observation.json');
    });

    it('should parse it correctly', () => {
      const { observations, metric, feedCreation } = validate(data);

      expect(metric).to.be.eq(true);
      expect(feedCreation).to.eq('2020-09-17T08:07:10.030Z');

      const [location] = observations.location;

      expect(location.city).to.eq('Unter den Linden');
      expect(location.state).to.eq('Berlin');
      expect(location.country).to.eq('Germany');

      const [actual] = location.observation;

      const utcTime = new Date(2020, 8, 17, 9, 20);
      expect(actual.utcTime).to.equalDate(utcTime);

      expect(actual).to.include({
        activeAlerts: 0,
        ageMinutes: 47,
        airDescription: '',
        airInfo: '*',
        barometerPressure: 1027.1,
        barometerTrend: '',
        city: 'Unter den Linden',
        comfort: 13.94,
        country: 'Germany',
        daylight: 'D',
        description: 'Passing clouds. Cool.',
        dewPoint: 8,
        distance: 7.65,
        elevation: 0,
        highTemperature: 19.1,
        humidity: 63,
        icon: 2,
        iconLink: 'https://weather.ls.hereapi.com/static/weather/icon/2.png',
        iconName: 'mostly_sunny',
        latitude: 52.5178,
        longitude: 13.3874,
        lowTemperature: 10.9,
        precipitation12H: '*',
        precipitation1H: '*',
        precipitation24H: '*',
        precipitation3H: '*',
        precipitation6H: '*',
        precipitationDesc: '',
        skyDescription: 'Passing clouds',
        skyInfo: 7,
        snowCover: '*',
        state: 'Berlin',
        temperature: 15,
        temperatureDesc: 'Cool',
        visibility: '*',
        windDesc: 'North',
        windDescShort: 'N',
        windDirection: 20,
        windSpeed: 16.68
      });
    });
  });

  context('with an valid input', () => {
    const data = {};

    it('should raise an error on invalid input', () => {
      expect(() => validate(data)).to.throw(Error, 'should have required property');
    });
  });
});
