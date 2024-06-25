const x = 3;

function f() {
  console.log(x);
  //   console.log(y);  //스코프가 다름
}

{
  const y = 2;
  f();
}

let user = {
  name: "Irena",
  age: 25,
};

function greet(user) {
  console.log(`Hello, ${user.name}`); //잘못되긴 함
}
function getBirthYear(user) {
  return new Date().getFullYear() - user.age;
}

greet(user);
console.log(getBirthYear(user));
