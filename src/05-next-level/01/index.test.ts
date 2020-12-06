import { formatZipCode } from './index';
describe('formatZipCode', () => {
  describe('format zipCode', () => {
    test('given zipCode is a number', () => {
      const expected = '123';

      const result = formatZipCode(123);

      expect(result).toBe(expected);
    });
    test('given zipCode is a string', () => {
      const expected = '123';

      const result = formatZipCode('123');

      expect(result).toBe(expected);
    });
  })
});