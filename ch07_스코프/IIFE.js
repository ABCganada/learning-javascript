//내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있다.
const message = (function () {
  //함수 표현식으로 익명 함수 만들고 그 즉시 호출
  const secret = "secret!!";
  return `${secret}`;
})();
console.log(message); //secret은 외부에서 접근할 수 없다.
