// normal function
function greeting(name: string): string {
  return `Your name is: ${name}`;
}

// rest parameter
function sum(...value: Array<number>): number {
  return value.reduce((acc, curr) => acc + curr, 0);
}

const totalSum: number = sum(10, 20);
console.log(`Total sum is ${totalSum}`);

const message: string = greeting("Mitu");
console.log(message);

// ================== callback function ==================
// parameter type arrow
type SumOne = (
  a: number,
  b: number,
  callback: (result: number) => void,
) => void;

const sumOne: SumOne = (a, b, callback) => {
  const result = a + b;
  return callback(result);
};
sumOne(55, 55, (value) =>
  console.log(`arrow function with callback function: ${value}`),
);

// parameter type normal fn
function sumTwo(a: number, b: number, callback: (value: number) => void): void {
  const result = a + b;
  callback(result);
}

sumTwo(77, 88, (value) => {
  console.log(`normal function with normal type declare: ${value}`);
});

// object type
type PerformanceOperation = {
  a: number;
  b: number;
  callback: (result: number) => void;
};

function performanceOperation({ a, b, callback }: PerformanceOperation): void {
  const result = a + b;
  callback(result);
}

performanceOperation({
  a: 5,
  b: 10,
  callback: (result) => {
    console.log(`callback function results: ${result}`);
  },
});
// =======================================================

const uniqueKey: symbol = Symbol("description");
const obj = {
  [uniqueKey]: "This is something",
};
console.log(obj);
