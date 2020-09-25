export const isNumber = (x: unknown): x is number => typeof x === 'number';
export const isString = (x: unknown): x is string => typeof x === 'string';
export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';
export const isArray = (x: unknown): x is unknown[] => Array.isArray(x);

export const isRecord = (value: unknown): value is Record<string, unknown> => {
  return value !== null && typeof value === 'object' && !isArray(value);
};

export type DeepMapTypes = Record<string, unknown> | unknown[] | null;
type ObjectMapper = <T extends Record<string, unknown>>(inner: T) => T;

export const deepMapObject = <T extends DeepMapTypes>(value: T, mapper: ObjectMapper): T => {
  if (isArray(value)) {
    return value.map((v) => deepMapObject(v as DeepMapTypes, mapper)) as T;
  }

  if (isRecord(value)) {
    const entries = Object.entries(mapper(value)).map(([k, v]) => [k, deepMapObject(v as DeepMapTypes, mapper)]);

    return Object.fromEntries(entries) as T;
  }

  return value;
};

type DeepMapStringsParams = {
  predicate: (k: string) => boolean;
  transform: (v: string) => string;
};

const stringMapper = ({ predicate, transform }: DeepMapStringsParams): ObjectMapper => {
  return <T extends Record<string, unknown>>(obj: T): T => {
    const mappedObj = Object.entries(obj).map(([k, v]) => (isString(v) && predicate(k) ? [k, transform(v)] : [k, v]));

    return Object.fromEntries(mappedObj) as T;
  };
};

export const deepMapStrings = <T extends DeepMapTypes>(obj: T, params: DeepMapStringsParams): T =>
  deepMapObject(obj, stringMapper(params));
