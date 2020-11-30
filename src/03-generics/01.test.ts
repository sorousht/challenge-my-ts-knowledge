const getPropertyValue = (obj, prop) => {
  return obj[prop];
};

describe('getPropertyValue', () => {
  test('return the given property value', () => {
    const obj = {
      foo: 1
    };
    const property = 'foo';
    const expected = 1;

    expect(getPropertyValue(obj, property)).toBe(expected);
  });
  test('return undefined if the given property name does not exist in the object', () => {
    const obj = {
      foo: 1
    };
    const property = 'bar';
    const expected = undefined;

    expect(getPropertyValue(obj, property)).toBe(expected);
  });
});