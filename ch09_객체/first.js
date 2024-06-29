const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

//객체의 프로퍼티 키를 배열로 가져와야 할 때, Object.keys가 편하다?
Object.keys(o).forEach((prop) => console.log(`${prop}: ${o[prop]}`));
