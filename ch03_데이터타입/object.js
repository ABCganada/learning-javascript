const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;

console.log(obj.color);
console.log(obj["not an identifier"]);
console.log(obj[SIZE]);

console.log(obj);

const s = "hello";
// console.log(s.toUpperCase());
s.toUpperCase();        //임시 객체 즉시 파괴
console.log(s);