export default interface LocationMetadata {
  /**
   * Location ID.
   */
  id: string;

  /**
   * Location country name.
   */
  country: string;

  /**
   * Location state name.
   */
  state: string;

  /**
   * Location city name.
   */
  city: string;

  /**
   * Latitude in degrees in WGS 84 format.
   */
  latitude: number;

  /**
   * Longitude in degrees in WGS 84 format.
   */
  longitude: number;

  /**
   * Elevation in meters.
   */
  elevation: number;

  /**
   * Air distance between the location in the response and the specified location in km.
   */
  distance: number;

  /**
   * Weekday number 1 through 7, where 1 indicates Sunday.
   *
   * @type integer
   * @minimum 1
   * @maximum 7
   */
  dayOfWeek: number;

  /**
   * Name of day.
   */
  weekDay: string;

  /**
   * Date and time the forecast was issued!!!
   *
   * @parser parseDate
   */
  utcTime: Date;

  /**
   * Local time.
   *
   * @parser parseTime
   */
  localTime: string;

  /**
   * Local time format.
   *
   * @pattern ^(HH|MM|dd|yyyy)+$
   */
  localTimeFormat: string;

  /**
   * Location timezone as an offset from Greenwich Mean Time (GMT/UTC).
   */
  timezone: number;
}
