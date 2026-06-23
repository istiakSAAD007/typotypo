function greeting(name: string): string {
  return `Your name is: ${name}`;
}

const message: string = greeting("Mitu");
console.log(message);

const uniqueKey: symbol = Symbol("description");
const obj = {
  [uniqueKey]: "This is something",
};
console.log(obj);



// const graph: readonly [x: number, y: number, z: number] = [1, 2, 3];
