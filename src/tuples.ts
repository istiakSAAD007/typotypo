let myTouples: [string, number, boolean];
myTouples = ["Bob", 12, false];
console.log(myTouples);

const cat: readonly [string, number, string] = ["Meow", 2, "Woem"];
// cat.push("OoO"); throw an error

const [x, y, z] = cat;
console.log(x, y, z);