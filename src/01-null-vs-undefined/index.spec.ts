import fs from 'fs';
import path from 'path';

describe('null vs undefined', () => {
  it('check the types of both', () => {
    expect(typeof undefined).toBe(/* FIXME */);
    expect(typeof null).toBe(/* FIXME */);
  });

  it('compare them', () => {
    expect(undefined === null).toBe(/* FIXME */);
    expect(undefined == null).toBe(/* FIXME */);
  });

  it('check something that has not been initialized', () => {
    let something;

    function foo(): void { };

    function bar(): void {
      return;
    }

    function withArg(arg?: number): number | /* FIXME */ {
      return arg;
    }

    type Person = /* FIXME */

    const person: Person = { name: 'Nicolas' };

    expect(something).toBe(/* FIXME */);
    expect(foo()).toBe(/* FIXME */);
    expect(bar()).toBe(/* FIXME */);
    expect(withArg()).toBe(/* FIXME */);
    expect(person.age).toBe(/* FIXME */);
  });

  it('check how Node.js callback style APIs use null', (done) => {
    fs.readFile(path.resolve('src/01-null-vs-undefined/foo.txt'), (error) => {
      expect(error).toBe(/* FIXME */);
      done();
    });
  })
});