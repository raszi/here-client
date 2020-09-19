import DailyForecastType from './DailyForecastType';
import WeatherReportType from './WeatherReportType';

export default interface DailyForecasts extends WeatherReportType {
  /**
   * Daily weather forecasts for the next seven days.
   */
  dailyForecasts: DailyForecastType;
}
