import Debug from 'debug';

import Client, { RequestParams } from './Client';
import * as Types from './types';
import Weather from './Weather';
import fetch from './fetch';

const DEFAULT_BASE = 'https://weather.ls.hereapi.com';

export type Props = {
  apiKey: string;

  baseURL?: string;
};

const debug = Debug('here-client');

class HereClient implements Client {
  readonly apiKey: string;
  readonly baseURL: string;

  constructor({ apiKey, baseURL = DEFAULT_BASE }: Props) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  get weather(): Weather {
    return new Weather(this);
  }

  fetch = async (path: string, params: RequestParams): Promise<unknown> => {
    const searchParams = this.getSearchParams(params);
    const url = `${this.baseURL}${path}?${searchParams}`;

    debug('Requesting URL: %s', url.replace(this.apiKey, '***'));

    return fetch(url).then((response) => response.json());
  };

  addCredentials = (url: string): string => {
    const parsedURL = new URL(url);

    const { searchParams } = parsedURL;
    searchParams.append('apiKey', this.apiKey);

    return parsedURL.toString();
  };

  private getSearchParams = (params: RequestParams): URLSearchParams => {
    const searchParams = new URLSearchParams({ apiKey: this.apiKey });

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) searchParams.append(key, value.toString());
    }

    return searchParams;
  };
}

export * from './helper';

export { Types, Weather };
export default HereClient;
