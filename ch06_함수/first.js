function getGreeting() {
  return "Hello World";
}

// console.log(getGreeting());

//함수도 객체다?
getGreeting();
getGreeting; // 단지 함수를 참조하는 것

const f = getGreeting; //f는 function getGreting 함수를 참조. 괄호가 없음
console.log(f);
console.log(f());

const o = {};
o.f = getGreeting;
console.log(o.f);//참조하는 데에 괄호가 없다.
console.log(o.f()); //참조하는 데에 괄호가 있다. 호출한다.