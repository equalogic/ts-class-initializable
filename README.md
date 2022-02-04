# ts-class-initializable

A small helper to enable class instance property initialization from a plain object.

Extend one of the `Initializable` classes and your class constructor will accept a
plain object literal as its first argument, and assign the values to instance properties.

#### Example

```ts
class Foo extends Initializable<Foo> {
  public bar: string;
  public baz: number;
  public optional?: boolean;
}

const instance: Foo = new Foo({
  bar: 'foobar',
  baz: 2,
});

console.log(instance.bar); // 'foobar'
```

#### Classes

There are a few flavours:

- `Initializable`: the constructor requires a plain object to initialize the instance
- `PartiallyInitializable`: the constructor requires a plain object to initialize the instance,
  but all properties are treated as optional
- `OptionallyInitializable`: the constructor may accept a plain object to initialize the instance,
  or you can do `new Foo()` without initialization
- `OptionallyPartiallyInitializable`: the constructor may accept a plain object to initialize the instance,
  and all properties are treated as optional
