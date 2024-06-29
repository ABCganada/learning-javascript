let arr = ["b", "c", "d"];
//push, pop -> stack
arr.push("e");
console.log(arr.pop());
//unshift, shift -> queue
arr.unshift("a");
console.log(arr);

//slice, parsing. arr 자체가 바뀌진 않음
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));
console.log(arr.slice(1, 2));
console.log(arr.slice(-4));

//splice. arr 변함. 1변수: 수정 시작할 idx, 2변수: 제거할 요소 숫자, 3~: 배열에 추가될 요소
arr = [1, 5, 7];
arr.splice(2, 0, 6);
console.log(arr);

//copyWithin. 배열 요소를 복사해서 다른 위치에 붙이고 기존의 요소를 덮어씀
arr = [1, 2, 3, 4];
arr.copyWithin(1, 2);
console.log(arr);

//fill.
arr = new Array(5).fill(1);
console.log(arr);

//reverse.
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

//sort
arr.sort();
console.log(arr);

arr = [
  { name: "Suzan" },
  { name: "Jim" },
  { name: "Trevor" },
  { name: "Amanda" },
];

arr.sort(); //안 바뀜
console.log(arr);
arr.sort((a, b) => (a.name > b.name ? 1 : -1)); //기준 명시
console.log(arr);
