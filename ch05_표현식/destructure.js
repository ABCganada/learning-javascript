const obj = { b: 2, c: 3, d: 4 };

//해체 할당
//반드시 변수명과 객체의 프로퍼티명이 일치해야 함
const { a, b, c } = obj;
console.log(a, b, c);

const obj2 = { aa: 3 };
const aa = obj2; //이렇게 하면 객체가 할당됨
console.log(aa);

const arr = [1, 2, 3, 4, 5];
let [x, y, z] = arr;
console.log(x, y, z);
