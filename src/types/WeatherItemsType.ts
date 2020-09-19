type DayLight = 'D' | 'N';

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

export default interface WeatherItemsType {
  /**
   * Number of active alerts.
   * @pattern ^\d+$
   */
  activeAlerts: string;

  /**
   * Data age in minutes.
   * @pattern ^\d+$
   */
  ageMinutes: string;

  /**
   * Air description.
   */
  airDescription: string;

  /**
   * Air description value
   * @pattern ^(\*|\d+)$
   */
  airInfo: string;

  /**
   * Barometric pressure in mbar/in.
   * @pattern ^(\*|\d+\.\d+)$
   */
  barometerPressure: string;

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
   * @pattern ^(\*|\d+)$
   */
  beaufortScale: string;

  /**
   * Comfort level in degrees.
   * @pattern ^(\*|\d+\.\d+)$
   */
  comfort: string;

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
   * @pattern ^(\*|\d+\.\d+)$
   */
  dewPoint: string;

  /**
   * The Highest temperature for the day in Celsius/Fahrenheit.
   * @pattern ^(\*|\d+\.\d+)$
   */
  highTemperature: string;

  /**
   * Humidity as a percentage (%)
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  humidity: string;

  /**
   * Icon number.
   * @deprecated
   */
  icon: string;

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
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  lowTemperature: string;

  /**
   * Precipitation over 1 hour in cm/in.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  precipitation1H: string;

  /**
   * Precipitation over 3 hours in cm/in.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  precipitation3H: string;

  /**
   * Precipitation over 6 hours in cm/in.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  precipitation6H: string;

  /**
   * Precipitation over 12 hours in cm/in.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  precipitation12H: string;

  /**
   * Precipitation over 24 hours in cm/in.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  precipitation24H: string;

  /**
   * Precipitation description.
   */
  precipitationDesc: string;

  /**
   * Precipitation probability percentage (%).
   * @pattern ^(\*|\d+)$
   */
  precipitationProbability: string;

  /**
   * Amount of rain in cm/in.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  rainFall: string;

  /**
   * Description of sky conditions.
   */
  skyDescription: string;

  /**
   * Sky descriptor value.
   * @pattern ^(\*|\d+)$
   */
  skyInfo: string;

  /**
   * Amount of snow on the ground in cm/in.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  snowCover: string;

  /**
   * Amount of snow in cm/in.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  snowFall: string;

  /**
   * Temperature in Celsius/Fahrenheit.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  temperature: string;

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
   * @pattern ^(\*|\d+)$
   */
  uvIndex: string;

  /**
   * Visibility in km/mi.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  visibility: string;

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
   * @pattern ^(\*|\d+)$
   */
  windDirection: string;

  /**
   * Wind speed in km/h or mph.
   * @pattern ^(\*|\d+(\.\d+)?)$
   */
  windSpeed: string;
}
