describe('when something is not initialized', () => {
  test('an uninitialized variable', () => {
    let something;
    expect(something).toBe(/* FIXME */);
  });

  test('a function without return', () => {
    function foo(): void { };

    expect(foo()).toBe(/* FIXME */);
  });

  test('an optional (not given) argument', () => {
    function bar(arg?: number): number | /* FIXME */ {
      return arg;
    }

    expect(bar()).toBe(undefined);
  });

  test('an optional property', () => {
    type Person = {/* FIXME */}

    const person: Person = { name: 'John' };

    expect(person.age).toBe(undefined);
  });
});