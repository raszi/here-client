import { expect } from 'chai';

import { readFixture } from '../helper';

import validate from '../../src/types/HourlyForecasts.validator';

describe('HourlyForecasts.validator', () => {
  context('with a valid input', () => {
    let data: unknown;

    before(async () => {
      data = await readFixture('forecast_hourly.json');
    });

    it('should parse it correctly', () => {
      const { hourlyForecasts, metric, feedCreation } = validate(data);

      expect(metric).to.be.eq(true);
      expect(feedCreation).to.eq('2020-09-17T08:04:27.244Z');

      const location = hourlyForecasts.forecastLocation;

      expect(location.city).to.eq('Chicago');
      expect(location.state).to.eq('Illinois');
      expect(location.country).to.eq('United States');

      const { forecast } = location;

      const [actual] = forecast;

      const utcTime = new Date(2020, 8, 17, 6, 0);
      expect(actual.utcTime).to.equalDate(utcTime);

      const localTime = new Date(2020, 8, 17, 1, 0);
      expect(actual.localTime).to.equalDate(localTime);

      expect(actual).to.include({
        airDescription: '',
        airInfo: '*',
        comfort: 19.8,
        dayOfWeek: 5,
        daylight: 'N',
        description: 'Overcast. Cool.',
        dewPoint: 15.9,
        humidity: 78,
        icon: 17,
        iconLink: 'https://weather.ls.hereapi.com/static/weather/icon/24.png',
        iconName: 'cloudy',
        localTimeFormat: 'HHMMddyyyy',
        precipitationDesc: '',
        precipitationProbability: 4,
        rainFall: '*',
        skyDescription: 'Overcast',
        skyInfo: 18,
        snowFall: '*',
        temperature: 19.8,
        temperatureDesc: 'Cool',
        visibility: 12.45,
        weekday: 'Thursday',
        windDesc: 'Northeast',
        windDescShort: 'NE',
        windDirection: 25,
        windSpeed: 18
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
