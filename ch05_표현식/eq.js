const n = 5;
const s = "5";

console.log(n === 5);
console.log(n === Number(s));
console.log(n == 5);

let a = { name: "an obj" };
const b = { name: "an obj" };

console.log(a === b);
console.log(a == b);

a = b;
console.log(a === b);
