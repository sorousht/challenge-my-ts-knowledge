### Conditional Types

TypeScript v2.1 came with conditional types.
Conditional types use the familiar `... ? ... : ...` syntax that JavaScript uses for conditional expressions.
A conditional type describes a type relationship test and selects one of two possible types, depending on the outcome of that test. It always has the following form:

```ts
T extends U ? X : Y
```

TypeScript does have a built-in type utility for the same purpose, named `NonNullable<T>`.

*References:*
- https://github.com/Microsoft/TypeScript/pull/21316
- https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
- https://mariusschulz.com/blog/conditional-types-in-typescript