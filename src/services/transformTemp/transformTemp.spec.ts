import { transformTemp } from './transformTemp';

describe('transformTemp', () => {
  it('should transform "10" to "+10"', () => {
    expect(transformTemp(10)).toBe('+10');
  });
  it('should transform "0" to "0"', () => {
    expect(transformTemp(0)).toBe('0');
  });
  it('should transform "-10" to "-10"', () => {
    expect(transformTemp(-10)).toBe('-10');
  });
});
