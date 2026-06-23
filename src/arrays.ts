const nameOne: Array<string> = ["Avi", "Navi", "Zabi"];
console.log(nameOne);
nameOne.push("Rabi");
console.log(nameOne);
// nameOne.push(3) throw a new error

const nameTwo: readonly string[] = ["a", "b", "c"];
// nameTwo.push("c"); throw a new error
console.log(nameTwo);
