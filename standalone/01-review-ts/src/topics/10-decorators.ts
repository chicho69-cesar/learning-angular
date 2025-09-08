function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
export class Greeter {
  public myProperty: string = "my property";

  public print() {
    console.log("Hello, world");
  }
}

console.log(Greeter);

const greeter = new Greeter();
greeter.print();
console.log(greeter);
