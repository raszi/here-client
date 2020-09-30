import { expect } from './helper';

import * as Types from '../src/types';

// this is only tested by the compiler
describe('Types', () => {
  it('should export ForecastParams', () => {
    const params: Types.ForecastParams = { name: 'Budapest', metric: false };
    expect(params).to.include({ name: 'Budapest', metric: false });
  });

  it('should export ObservationParams', () => {
    const params: Types.ObservationParams = { latitude: 5, longitude: 5, oneobservation: true };
    expect(params).to.include({ latitude: 5, longitude: 5, oneobservation: true });
  });
});
