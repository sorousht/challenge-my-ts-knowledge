export interface Triangle {
  kind: 'triangle';
  b: number;
  h: number;
}

export interface Rectangle {
  kind: 'rectangle';
  l: number;
  w: number;
}

export interface Circle {
  kind: 'circle';
  r: number;
}

type Shape = Triangle | Rectangle | Circle;

export const area = (shape: Shape): number => {
  /*
    FIXME
    Implement a function receives a shape and calculates its area
  */
 throw Error('Not implemented yet');
}

