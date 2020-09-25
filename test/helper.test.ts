import { expect } from 'chai';

import * as sut from '../src/helper';

describe('helper', () => {
  describe('.formatTemperature()', () => {
    context('with metric system', () => {
      it('should return in celsius', () => {
        expect(sut.formatTemperature(25, true)).to.eq('25°C');
      });
    });

    context('with imperial system', () => {
      it('should return in fahrenheit', () => {
        expect(sut.formatTemperature(25, false)).to.eq('25°F');
      });
    });
  });

  describe('.formatPressure()', () => {
    context('with metric system', () => {
      it('should return in pascal', () => {
        expect(sut.formatPressure(25, true)).to.eq('25 hPa');
      });
    });

    context('with imperial system', () => {
      it('should return in inches', () => {
        expect(sut.formatPressure(25, false)).to.eq('25 inches');
      });
    });
  });

  describe('.formatSpeed()', () => {
    context('with metric system', () => {
      it('should return in kph', () => {
        expect(sut.formatSpeed(25, true)).to.eq('25 kph');
      });
    });

    context('with imperial system', () => {
      it('should return in mph', () => {
        expect(sut.formatSpeed(25, false)).to.eq('25 mph');
      });
    });
  });
});
