import LocationMetadata from './LocationMetadata';

type DayLight = 'D' | 'N';

type NumberOrStar = number | '*';

type IconName =
  | 'sunny'
  | 'clear'
  | 'mostly_sunny'
  | 'mostly_clear'
  | 'passing_clounds'
  | 'more_sun_than_clouds'
  | 'scattered_clouds'
  | 'partly_cloudy'
  | 'a_mixture_of_sun_and_clouds'
  | 'increasing_cloudiness'
  | 'breaks_of_sun_late'
  | 'afternoon_clouds'
  | 'morning_clouds'
  | 'partly_sunny'
  | 'high_level_clouds'
  | 'decreasing_cloudiness'
  | 'clearing_skies'
  | 'high_clouds'
  | 'rain_early'
  | 'heavy_rain_early'
  | 'strong_thunderstorms'
  | 'severe_thunderstorms'
  | 'thundershowers'
  | 'thunderstorms'
  | 'tstorms_early'
  | 'isolated_tstorms_late'
  | 'scattered_tstorms_late'
  | 'tstorms_late'
  | 'tstorms'
  | 'ice_fog'
  | 'more_clouds_than_sun'
  | 'broken_clouds'
  | 'scattered_showers'
  | 'a_few_showers'
  | 'light_showers'
  | 'passing_showers'
  | 'rain_showers'
  | 'showers'
  | 'widely_scattered_tstorms'
  | 'isolated_tstorms'
  | 'a_few_tstorms'
  | 'scattered_tstorms'
  | 'hazy_sunshine'
  | 'haze'
  | 'smoke'
  | 'low_level_haze'
  | 'early_fog_followed_by_sunny_skies'
  | 'early_fog'
  | 'light_fog'
  | 'fog'
  | 'dense_fog'
  | 'night_haze'
  | 'night_smoke'
  | 'night_low_level_haze'
  | 'night_widely_scattered_tstorms'
  | 'night_isolated_tstorms'
  | 'night_a_few_tstorms'
  | 'night_scattered_tstorms'
  | 'night_tstorms'
  | 'night_clear'
  | 'mostly_cloudy'
  | 'cloudy'
  | 'overcast'
  | 'low_clouds'
  | 'hail'
  | 'sleet'
  | 'light_mixture_of_precip'
  | 'icy_mix'
  | 'mixture_of_precip'
  | 'heavy_mixture_of_precip'
  | 'snow_changing_to_rain'
  | 'snow_changing_to_an_icy_mix'
  | 'an_icy_mix_changing_to_snow'
  | 'an_icy_mix_changing_to_rain'
  | 'rain_changing_to_snow'
  | 'rain_changing_to_an_icy_mix'
  | 'light_icy_mix_early'
  | 'icy_mix_early'
  | 'light_icy_mix_late'
  | 'icy_mix_late'
  | 'snow_rain_mix'
  | 'scattered_flurries'
  | 'snow_flurries'
  | 'light_snow_showers'
  | 'snow_showers'
  | 'light_snow'
  | 'flurries_early'
  | 'snow_showers_early'
  | 'light_snow_early'
  | 'flurries_late'
  | 'snow_showers_late'
  | 'light_snow_late'
  | 'night_decreasing_cloudiness'
  | 'night_clearing_skies'
  | 'night_high_level_clouds'
  | 'night_high_clouds'
  | 'night_scattered_showers'
  | 'night_a_few_showers'
  | 'night_light_showers'
  | 'night_passing_showers'
  | 'night_rain_showers'
  | 'night_sprinkles'
  | 'night_showers'
  | 'night_mostly_clear'
  | 'night_passing_clouds'
  | 'night_scattered_clouds'
  | 'night_partly_cloudy'
  | 'increasing_cloudiness'
  | 'night_afternoon_clouds'
  | 'night_morning_clouds'
  | 'night_broken_clouds'
  | 'night_mostly_cloudy'
  | 'light_freezing_rain'
  | 'freezing_rain'
  | 'heavy_rain'
  | 'lots_of_rain'
  | 'tons_of_rain'
  | 'heavy_rain_early'
  | 'heavy_rain_late'
  | 'flash_floods'
  | 'flood'
  | 'drizzle'
  | 'sprinkles'
  | 'light_rain'
  | 'sprinkles_early'
  | 'light_rain_early'
  | 'sprinkles_late'
  | 'light_rain_late'
  | 'rain'
  | 'numerous_showers'
  | 'showery'
  | 'showers_early'
  | 'rain_early'
  | 'showers_late'
  | 'rain_late'
  | 'snow'
  | 'moderate_snow'
  | 'snow_early'
  | 'snow_late'
  | 'heavy_snow'
  | 'heavy_snow_early'
  | 'heavy_snow_late'
  | 'tornado'
  | 'tropical_storm'
  | 'hurricane'
  | 'sandstorm'
  | 'duststorm'
  | 'snowstorm'
  | 'blizzard'
  | 'cw_no_report_icon';

export default interface WeatherItemsType extends Partial<LocationMetadata> {
  /**
   * Number of active alerts.
   *
   * @type integer
   * @minimum 0
   */
  activeAlerts: number;

  /**
   * Data age in minutes.
   *
   * @type integer
   * @minimum 0
   */
  ageMinutes: number;

  /**
   * Air description.
   */
  airDescription: string;

  /**
   * Air description value
   */
  airInfo: NumberOrStar;

  /**
   * Barometric pressure in mbar/in.
   */
  barometerPressure: NumberOrStar;

  /**
   * Description of the trend in the barometric pressure.
   */
  barometerTrend: string;

  /**
   * Beaufort scale conditions description.
   */
  beaufortDescription: string;

  /**
   * Wind speed on the Beaufort scale.
   */
  beaufortScale: NumberOrStar;

  /**
   * Comfort level in degrees.
   */
  comfort: NumberOrStar;

  /**
   * Segment of the day.
   */
  daySegment: string;

  /**
   * Part of the day.
   */
  daylight: DayLight;

  /**
   * Weather description.
   */
  description: string;

  /**
   * Dew point in Celsius/Fahrenheit.
   */
  dewPoint: NumberOrStar;

  /**
   * The Highest temperature for the day in Celsius/Fahrenheit.
   */
  highTemperature: NumberOrStar;

  /**
   * Humidity as a percentage (%)
   */
  humidity: NumberOrStar;

  /**
   * Icon number.
   * @deprecated
   */
  icon: number;

  /**
   * Link to icon resource file.
   * @format uri
   */
  iconLink: string;

  /**
   * Icon name.
   */
  iconName: IconName;

  /**
   * The lowest temperature for the day in Celsius/Fahrenheit.
   */
  lowTemperature: NumberOrStar;

  /**
   * Precipitation over 1 hour in cm/in.
   */
  precipitation1H: NumberOrStar;

  /**
   * Precipitation over 3 hours in cm/in.
   */
  precipitation3H: NumberOrStar;

  /**
   * Precipitation over 6 hours in cm/in.
   */
  precipitation6H: NumberOrStar;

  /**
   * Precipitation over 12 hours in cm/in.
   */
  precipitation12H: NumberOrStar;

  /**
   * Precipitation over 24 hours in cm/in.
   */
  precipitation24H: NumberOrStar;

  /**
   * Precipitation description.
   */
  precipitationDesc: string;

  /**
   * Precipitation probability percentage (%).
   */
  precipitationProbability: NumberOrStar;

  /**
   * Amount of rain in cm/in.
   */
  rainFall: NumberOrStar;

  /**
   * Description of sky conditions.
   */
  skyDescription: string;

  /**
   * Sky descriptor value.
   */
  skyInfo: NumberOrStar;

  /**
   * Amount of snow on the ground in cm/in.
   */
  snowCover: NumberOrStar;

  /**
   * Amount of snow in cm/in.
   */
  snowFall: NumberOrStar;

  /**
   * Temperature in Celsius/Fahrenheit.
   */
  temperature: NumberOrStar;

  /**
   * Temperature description.
   */
  temperatureDesc: string;

  /**
   * UV conditions description.
   */
  uvDesc: string;

  /**
   * UV Index value.
   */
  uvIndex: NumberOrStar;

  /**
   * Visibility in km/mi.
   */
  visibility: NumberOrStar;

  /**
   * Description of the direction the wind is coming from.
   */
  windDesc: string;

  /**
   * Abbreviation of the direction the wind is coming from.
   */
  windDescShort: string;

  /**
   * Wind direction in degrees.
   */
  windDirection: NumberOrStar;

  /**
   * Wind speed in km/h or mph.
   */
  windSpeed: NumberOrStar;
}
