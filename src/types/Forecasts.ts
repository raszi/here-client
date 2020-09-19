import ForecastType from './ForecastType';
import WeatherReportType from './WeatherReportType';

export default interface Forecasts extends WeatherReportType {
  /**
   * Morning, afternoon, evening and night weather forecasts for the next seven days.
   */
  forecasts: ForecastType;
}
