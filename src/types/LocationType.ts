import WeatherItemsType from './WeatherItemsType';
import LocationMetadata from './LocationMetadata';

export default interface LocationType extends Partial<LocationMetadata> {
  /**
   * Weather conditions.
   */
  observation: Partial<WeatherItemsType>[];
}
