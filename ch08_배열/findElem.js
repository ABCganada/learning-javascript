let arr = [1, 4, 5, 2, 5, [1, 2]];
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf(6)); // -1: 없음
console.log(arr.indexOf([1, 2]));
console.log(arr.indexOf("1"));

arr = [{ id: 5 }, { id: 7 }];
console.log(arr.findIndex((o) => o.id === 7));
console.log(arr.find((o) => o.id === 5));

class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}
Person.nextId = 0;

const jamie = new Person("Jamie"),
  juliet = new Person("Juliet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");
arr = [jamie, juliet, peter, jay];

console.log(arr.find((p) => p.id === juliet.id));
console.log(
  arr.find(function (p) {
    return p.id === this.id;
  }, peter)
);

//some
arr = [5, 7, 12, 15, 17];
console.log(arr.some((x) => x % 2 === 0));

//every
arr = [4, 6, 16, 36];
console.log(arr.every((x) => x % 2 === 0));
console.log(arr.every((x) => x % 4 === 0));
