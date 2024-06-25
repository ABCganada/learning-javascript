function avg(x, y) {
  return (x + y) / 2;
}

const a = 5,
  b = 10;
console.log(avg(a, b));

//call by value
function f(x) {
  console.log(`f 내부: x = ${x}`);
  x = 5;
  console.log(`f 내부: x = ${x}`);
}

let x = 3;
console.log(`f 외부: x = ${x}`);
f(x);
console.log(`f 외부: x = ${x}`);

//call by reference
function f(o) {
  o.message = `f에서 수정됨`;
}

let o = { message: "아직 수정 전" };
f(o);
console.log(o.message);

o = {
  name: "Wallace",
  bark() {
    return "WOOF!!";
  },
};

console.log(o.bark());
