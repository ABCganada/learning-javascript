const f = function () {
  return "Hello";
};

console.log(f());

const g = function f(shop) {
  if (shop) {
    console.log("f stopped");
  }
  f(true);
};

g(false);

//함수 선언과 함수 표현식 구별: 컨텍스트
//함수 선언이 표현식으로 사용됐다면 함수 표현식, 그게 아니면 함수 선언.
//나중에 호출할 거임 -> 함수 선언. 할당하거나 다른 함수에 넘길 거임 -> 함수 표현식

//화살표 표기법. 충분히 연습해서 익숙해져야함.
