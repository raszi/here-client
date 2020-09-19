import ObservationType from './ObservationType';
import WeatherReportType from './WeatherReportType';

export default interface Observations extends WeatherReportType {
  /**
   * One or more reports on current weather conditions.
   */
  observations: ObservationType;
}
