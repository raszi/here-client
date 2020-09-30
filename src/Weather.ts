import Client, { RequestParams } from './Client';
import { deepMapStrings, DeepMapTypes } from './utils';

import validateDailyForecasts, { DailyForecasts } from './types/DailyForecasts.validator';
import validateForecasts, { Forecasts } from './types/Forecasts.validator';
import validateHourlyForecasts, { HourlyForecasts } from './types/HourlyForecasts.validator';
import validateObservations, { Observations } from './types/Observations.validator';

type ValidatorFunction<T> = (data: unknown) => T;

type ForecastType = 'observation' | 'forecast_hourly' | 'forecast_7days_simple' | 'forecast_7days';

type GCSParams = {
  latitude: number;
  longitude: number;
};

type CityParams = {
  name: string;
};

type LocationParams = RequestParams & (GCSParams | CityParams);

export type ForecastParams = LocationParams & {
  language?: string;
  metric?: boolean;
};

export type ObservationParams = ForecastParams & {
  oneobservation?: boolean;
};

class Weather {
  readonly path = '/weather/1.0/report.json';
  readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  private fetch = <P extends ForecastParams, T extends Record<string, unknown>>(
    product: ForecastType,
    validator: ValidatorFunction<T>
  ) => {
    return async (params: P): Promise<T> => {
      const apiParams = {
        ...params,
        product
      };

      const response = await this.client.fetch(this.path, apiParams);
      const validated = validator(response);

      return this.addCredentialsToLinks(validated);
    };
  };

  observation = this.fetch<ObservationParams, Observations>('observation', validateObservations);
  hourlyForecast = this.fetch<ForecastParams, HourlyForecasts>('forecast_hourly', validateHourlyForecasts);
  sevenDayForecast = this.fetch<ForecastParams, Forecasts>('forecast_7days', validateForecasts);
  sevenDayForecastSimple = this.fetch<ForecastParams, DailyForecasts>('forecast_7days_simple', validateDailyForecasts);

  private addCredentialsToLinks = <T extends DeepMapTypes>(obj: T): T =>
    deepMapStrings(obj, {
      predicate: (k) => k.endsWith('Link'),
      transform: this.client.addCredentials
    });
}

export default Weather;
