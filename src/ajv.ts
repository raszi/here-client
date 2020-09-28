import { Ajv } from 'ajv';
import { isArray, isNumber, isRecord, isString } from './utils';

type ParserFunction = (
  data: unknown,
  dataPath: string,
  parentData: Record<string, unknown> | unknown[],
  parentKey: string | number
) => unknown;

const parseTime: ParserFunction = (data, _dataPath, parentData, parentKey): Date | undefined => {
  if (!isString(data) || !isRecord(parentData)) return;

  const format = parentData[`${parentKey}Format`];
  if (!isString(format)) return;

  // HHMMddyyyy
  const matches = format.match(/(H|M|d|y)\1+/g);
  if (!matches) return;

  const date = new Date();

  matches.forEach((match) => {
    const start = format.indexOf(match);
    if (isNaN(start)) return;

    const value = parseInt(data.substr(start, match.length), 10);

    switch (match[1]) {
      case 'y':
        date.setFullYear(value);
        break;
      case 'd':
        date.setDate(value);
        break;
      case 'M':
        date.setMonth(value - 1);
        break;
      case 'H':
        date.setHours(value);
        break;
      default:
        throw new Error(`Unknown format: ${match[1]}`);
    }
  });

  date.setMinutes(0);
  date.setSeconds(0);

  return date;
};

const parseDate: ParserFunction = (data) => (isString(data) ? new Date(data as string) : undefined);

const Parsers: Record<string, ParserFunction> = {
  parseDate,
  parseTime
};

export const addKeyword = (ajv: Ajv): void => {
  ajv.addKeyword('parser', {
    modifying: true,
    compile: (schema) => {
      return (data, dataPath, parentData, parentKey) => {
        if (!isString(dataPath)) {
          throw new Error('dataPath is not a string');
        }

        if (typeof parentKey === 'undefined') {
          throw new Error('parentKey is undefined');
        }

        if (!isRecord(parentData) && !isArray(parentData)) {
          throw new Error('parentData is invalid');
        }

        const value = Parsers[schema](data, dataPath, parentData, parentKey);

        if (isString(parentKey) && isRecord(parentData)) {
          parentData[parentKey] = value;
        } else if (isNumber(parentKey) && isArray(parentData)) {
          parentData[parentKey] = value;
        } else {
          throw new Error(`Could not apply parser: ${parentKey}`);
        }

        return true;
      };
    },
    metaSchema: {
      enum: Object.keys(Parsers)
    }
  });
};
