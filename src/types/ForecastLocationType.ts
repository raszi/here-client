import WeatherItemsType from './WeatherItemsType';
import LocationMetadata from './LocationMetadata';

export default interface ForecastLocationType extends Partial<LocationMetadata> {
  /**
   * Weather forecast information.
   */
  forecast: Partial<WeatherItemsType>[];
}
