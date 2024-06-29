const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
console.log(arr);

console.log(arr.join());    //null, undefined, 삭제된 거 무시
console.log(arr.join(""));

