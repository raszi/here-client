export const isNumber = (x: unknown): x is number => typeof x === 'number';
export const isString = (x: unknown): x is string => typeof x === 'string';
export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';
export const isArray = (x: unknown): x is unknown[] => Array.isArray(x);

export const isRecord = (value: unknown): value is Record<string, unknown> => {
  return value !== null && typeof value === 'object' && !isArray(value);
};
