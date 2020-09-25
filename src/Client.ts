export type RequestParams = {
  [key: string]: undefined | boolean | string | number;
};

interface Client {
  fetch: (path: string, params: RequestParams) => Promise<unknown>;
  addCredentials: (url: string) => string;
}

export default Client;
