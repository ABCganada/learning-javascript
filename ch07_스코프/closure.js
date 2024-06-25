let globalFunc;
{
  let blockVar = "a";
  globalFunc = function () {
    //정의되지 않은 전역변수가 블록스코프에서 할당을 받음
    console.log(blockVar);
  };
}
globalFunc(); //블록스코프 빠져나왔는데 blockVar에 접근됨

//일반적으로 자신의 스코프에 없는 것들에 접근 못함.
//근데 블록스코프에 함수 정의해 클로저를 만들어 놓으면 접근 방법 생김.
