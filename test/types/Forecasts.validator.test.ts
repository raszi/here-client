import { expect } from 'chai';

import { readFixture } from '../helper';

import validate from '../../src/types/Forecasts.validator';

describe('Forecasts.validator', () => {
  context('with a valid input', () => {
    let data: unknown;

    before(async () => {
      data = await readFixture('forecast_7days.json');
    });

    it('should parse it correctly', () => {
      const { forecasts, metric, feedCreation } = validate(data);

      expect(metric).to.be.eq(true);
      expect(feedCreation).to.eq('2020-09-17T08:06:00.102Z');

      const location = forecasts.forecastLocation;

      expect(location.city).to.eq('Chicago');
      expect(location.state).to.eq('Illinois');
      expect(location.country).to.eq('United States');

      const { forecast } = location;
      const [actual] = forecast;

      const utcTime = new Date(2020, 8, 17, 5, 0);
      expect(actual.utcTime).to.equalDate(utcTime);

      expect(actual).to.include({
        airDescription: '',
        airInfo: '*',
        beaufortDescription: 'Moderate breeze',
        beaufortScale: 4,
        comfort: 18.2,
        dayOfWeek: 4,
        daySegment: 'Night',
        daylight: 'N',
        description: 'Overcast. Cool.',
        dewPoint: 15.2,
        humidity: 83,
        icon: 17,
        iconLink: 'https://weather.ls.hereapi.com/static/weather/icon/24.png',
        iconName: 'cloudy',
        precipitationDesc: '',
        precipitationProbability: 4,
        rainFall: '*',
        skyDescription: 'Overcast',
        skyInfo: 18,
        snowFall: '*',
        temperature: 18.2,
        temperatureDesc: 'Cool',
        visibility: 11.53,
        weekday: 'Wednesday',
        windDesc: 'Northeast',
        windDescShort: 'NE',
        windDirection: 36,
        windSpeed: 18.72
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
