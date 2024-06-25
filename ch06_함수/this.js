const o = {
  name: "Wallace",
  speak() {
    return `My name is ${this.name}`;
  },
};

console.log(o.speak());

const speak = o.speak; // 객체의 프로퍼티 함수를 speak가 참조한다.
console.log(speak === o.speak);
console.log(speak()); //My name is undefined. 참조하는 함수가 어디에 묶인지 알 수 없다? this를 못 찾아서 undefined?
