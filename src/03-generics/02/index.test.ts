import { MemoryRepository } from './MemoryRepository';

interface Person {
  id: string;
  name: string;
  age: number;
}

describe('MemoryRepository', () => {
  describe('findById', () => {
    test('return an item if it exists', () => {
      const person: Person = {
        age: 1,
        id: 'foo',
        name: 'John Doe'
      };
      const repository = new MemoryRepository<Person>([['foo', person]]);

      const result = repository.findById('foo');

      expect(result).toEqual(person);
    });
    test('return undefined if it does not exist', () => {
      const repository = new MemoryRepository<Person>();
      
      const result = repository.findById('foo');

      expect(result).toBe(undefined);
    });
  });
  describe('add', () => {
    test('add an item with a unique ID', () => {
      const person = {
        age: 1,
        name: 'John Doe'
      };
      const repository = new MemoryRepository<Person>();

      const result = repository.add(person);

      expect(result).toEqual({ ...person, id: result.id });
    });
  });
  /*
    3. FIXME
    Uncomment the below test cases to learn more about implementing "removeById" and "update".
    Find more about generics: https://www.typescriptlang.org/docs/handbook/generics.html
  */

  // describe('removeById', () => {
  //   test('remove an item if it exists', () => {
  //     const person: Person = {
  //       id: 'foo',
  //       age: 1,
  //       name: 'John Doe'
  //     };
  //     const repository = new MemoryRepository<Person>([[person.id, person]]);
  //     repository.removeById(person.id);
  //     const result = repository.findById(person.id);

  //     expect(result).toBe(undefined);
  //   });

  //   test('throw an error if the there is not any item with the given ID', () => {
  //     const repository = new MemoryRepository<Person>();

  //     expect(() => {
  //       repository.removeById('foo');
  //     }).toThrowError('');
  //   });
  // });
  // describe('update', () => {
  //   test('update an item if it exists', () => {
  //     const person: Person = {
  //       id: 'foo',
  //       age: 1,
  //       name: 'John Doe'
  //     };
  //     const updatedPerson: Person = {
  //       id: 'foo',
  //       age: 1,
  //       name: 'John Jackson'
  //     };
  //     const repository = new MemoryRepository<Person>([[person.id, person]]);
  //     const result = repository.update({id: person.id, name: 'John Jackson' });

  //     expect(result).toEqual(updatedPerson);
  //   });
  //   test('throw and error if the given item does not exist', () => {
  //     const repository = new MemoryRepository<Person>();
      
  //     expect(() => {
  //       repository.update({ id: 'foo' });
  //     }).toThrowError(`Could not find an item with ID foo`);
  //   });
  // });
});