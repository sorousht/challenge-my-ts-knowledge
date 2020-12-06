You have not been asked to check the content of this file,
but you are curious and you will be rewarded with a valuable tip!

To check against either `null` or `undefined`, double equal `==` can be used.
As an example, the below condition is met, when the value of `foo` is either `null` nor `undefined`.

```ts
if (foo == undefined) {
  console.log('worked!');
}
```

There is an interesting utility type, NonNullable<T>, which constructs a type by excluding `null` and `undefined` from the given T. 

```ts
type SocialSecurityNumber = string | number | null | undefined;

type RequiredSocialSecurityNumber = NonNullable<SocialSecurityNumber>;

// The above type accepts neither null nor undefined!
```

Check it out here: https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype

