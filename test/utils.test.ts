import { expect } from './helper';

import * as sut from '../src/utils';

describe('utils', () => {
  describe('.isNumber()', () => {
    it('should return true when it is a number', () => {
      expect(sut.isNumber(NaN)).to.be.true;
      expect(sut.isNumber(1)).to.be.true;
      expect(sut.isNumber(1.1)).to.be.true;
    });

    it('should return false when it is not a number', () => {
      expect(sut.isNumber(null)).to.be.false;
      expect(sut.isNumber(undefined)).to.be.false;

      expect(sut.isNumber({})).to.be.false;
      expect(sut.isNumber('1')).to.be.false;
      expect(sut.isNumber('')).to.be.false;
    });
  });

  describe('.isString()', () => {
    it('should return true when it is a string', () => {
      expect(sut.isString('')).to.be.true;
      expect(sut.isString('foobar')).to.be.true;
    });

    it('should return false when it is not a string', () => {
      expect(sut.isString(null)).to.be.false;
      expect(sut.isString(undefined)).to.be.false;

      expect(sut.isString(1)).to.be.false;
    });
  });

  describe('.isBoolean()', () => {
    it('should return true when it is a boolean', () => {
      expect(sut.isBoolean(true)).to.be.true;
      expect(sut.isBoolean(false)).to.be.true;
    });

    it('should return false when it is not a boolean', () => {
      expect(sut.isBoolean(null)).to.be.false;
      expect(sut.isBoolean(undefined)).to.be.false;

      expect(sut.isBoolean('true')).to.be.false;
      expect(sut.isBoolean('false')).to.be.false;
    });
  });

  describe('.isArray()', () => {
    it('should return true when it is a array', () => {
      expect(sut.isArray([])).to.be.true;
      expect(sut.isArray([1, 2])).to.be.true;
      expect(sut.isArray(['1', '2'])).to.be.true;
    });

    it('should return false when it is not a array', () => {
      expect(sut.isArray(null)).to.be.false;
      expect(sut.isArray(undefined)).to.be.false;

      expect(sut.isArray({})).to.be.false;
      expect(sut.isArray('[1]')).to.be.false;
    });
  });

  describe('.isRecord()', () => {
    it('should return true when it is a record', () => {
      expect(sut.isRecord({})).to.be.true;
      expect(sut.isRecord({ foo: 'foo' })).to.be.true;
      expect(sut.isRecord({ foo: [1, 2] })).to.be.true;
    });

    it('should return false when it is not a record', () => {
      expect(sut.isRecord(null)).to.be.false;
      expect(sut.isRecord(undefined)).to.be.false;

      expect(sut.isRecord([])).to.be.false;
      expect(sut.isRecord('{}')).to.be.false;
    });
  });
});
