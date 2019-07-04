type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export abstract class Initializable<T> {
  public constructor(fields: NonFunctionProperties<T>) {
    Object.assign(this, fields);
  }
}

export abstract class OptionallyInitializable<T> {
  public constructor(fields?: NonFunctionProperties<T>) {
    if (fields != null) {
      Object.assign(this, fields);
    }
  }
}

export abstract class PartiallyInitializable<T> {
  public constructor(fields: Partial<NonFunctionProperties<T>>) {
    Object.assign(this, fields);
  }
}

export abstract class OptionallyPartiallyInitializable<T> {
  public constructor(fields?: Partial<NonFunctionProperties<T>>) {
    if (fields != null) {
      Object.assign(this, fields);
    }
  }
}
