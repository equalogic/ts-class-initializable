import {
  Initializable,
  OptionallyInitializable,
  OptionallyPartiallyInitializable,
  PartiallyInitializable,
} from './Initializable';

class InitializableExampleClass extends Initializable<
  InitializableExampleClass
> {
  public foo: string;
  public bar: number;
  public optional?: boolean;
}

class OptionallyInitializableExampleClass extends OptionallyInitializable<
  OptionallyInitializableExampleClass
> {
  public foo: string;
  public bar: number;
  public optional?: boolean;
}

class PartiallyInitializableExampleClass extends PartiallyInitializable<
  PartiallyInitializableExampleClass
> {
  public foo: string;
  public bar: number;
  public optional?: boolean;
}

class OptionallyPartiallyInitializableExampleClass extends OptionallyPartiallyInitializable<
  OptionallyPartiallyInitializableExampleClass
> {
  public foo: string;
  public bar: number;
  public optional?: boolean;
}

test('can fully initialize class from constructor', () => {
  const example = new InitializableExampleClass({
    foo: 'foo',
    bar: 1,
  });

  expect(example).toBeInstanceOf(InitializableExampleClass);
  expect(example.foo).toBe('foo');
  expect(example.bar).toBe(1);
  expect(example.optional).toBeUndefined();
});

test('can instantiate optionally initializable class without args', () => {
  const example = new OptionallyInitializableExampleClass();

  expect(example).toBeInstanceOf(OptionallyInitializableExampleClass);
  expect(example.foo).toBeUndefined();
  expect(example.bar).toBeUndefined();
  expect(example.optional).toBeUndefined();
});

test('can partially initialize class from constructor', () => {
  const example = new PartiallyInitializableExampleClass({
    foo: 'foo',
  });

  expect(example).toBeInstanceOf(PartiallyInitializableExampleClass);
  expect(example.foo).toBe('foo');
  expect(example.bar).toBeUndefined();
  expect(example.optional).toBeUndefined();
});

test('can instantiate optionally partially initializable class without args', () => {
  const example = new OptionallyPartiallyInitializableExampleClass();

  expect(example).toBeInstanceOf(OptionallyPartiallyInitializableExampleClass);
  expect(example.foo).toBeUndefined();
  expect(example.bar).toBeUndefined();
  expect(example.optional).toBeUndefined();
});
