import HourlyForecastType from './HourlyForecastType';
import WeatherReportType from './WeatherReportType';

export default interface HourlyForecasts extends WeatherReportType {
  /**
   * Hourly forecasts for the next seven days.
   */
  hourlyForecasts: HourlyForecastType;
}
