import { area, Triangle, Circle, Rectangle } from './index';
describe('area', () => {
  test('calculate a triangle area', () => {
    const triangle: Triangle = {
      b: 10,
      h: 5,
      kind: 'triangle',
    };

    const expected = 25;

    expect(area(triangle)).toBe(expected);
  });

  test('calculate a rectangle area', () => {
    const rectangle: Rectangle = {
      l: 3,
      w: 1.5,
      kind: 'rectangle',
    };

    const expected = 4.5;

    expect(area(rectangle)).toBe(expected);
  });

  test('calculate a circle area', () => {
    const circle: Circle = {
      r: 5,
      kind: 'circle',
    };

    const expected = Math.pow(5, 2) * Math.PI;

    expect(area(circle)).toBe(expected);
  });
});