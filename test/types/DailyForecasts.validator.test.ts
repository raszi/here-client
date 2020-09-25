import { expect, readFixture } from '../helper';

import validate from '../../src/types/DailyForecasts.validator';

describe('DailyForecasts.validator', () => {
  context('with a valid input', () => {
    let data: unknown;

    before(async () => {
      data = await readFixture('forecast_7days_simple.json');
    });

    it('should parse it correctly', () => {
      const { dailyForecasts, metric, feedCreation } = validate(data);

      expect(metric).to.be.eq(true);
      expect(feedCreation).to.eq('2020-09-17T08:09:14.256Z');

      const location = dailyForecasts.forecastLocation;

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
        barometerPressure: 1020.74,
        beaufortDescription: 'Moderate breeze',
        beaufortScale: 4,
        comfort: 18.41,
        dayOfWeek: 5,
        daylight: 'D',
        description: 'Morning clouds. Cool.',
        dewPoint: 8.31,
        highTemperature: 19.8,
        humidity: 52,
        icon: 4,
        iconLink: 'https://weather.ls.hereapi.com/static/weather/icon/3.png',
        iconName: 'partly_cloudy',
        lowTemperature: 15.3,
        precipitationDesc: '',
        precipitationProbability: 2,
        rainFall: '*',
        skyDescription: 'Morning clouds',
        skyInfo: 32,
        snowFall: '*',
        temperatureDesc: 'Cool',
        uvDesc: 'Low',
        uvIndex: 3,
        weekday: 'Thursday',
        windDesc: 'Northeast',
        windDescShort: 'NE',
        windDirection: 34,
        windSpeed: 21.09
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
