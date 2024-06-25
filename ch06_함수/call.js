const bruce = { name: "Burce" };
const madeline = { name: "Madeline" };

function greet() {
  return `Hello, Im ${this.name}`;
}

//call 모든 함수에서 사용 가능.
console.log(greet.call(bruce));

function update(b, occ) {
  this.b = b;
  this.occ = occ;
}

update.call(bruce, 1949, "singer");
console.log(bruce);

//apply. 매개변수를 배열로
update.apply(madeline, [1918, "writer"]);
console.log(madeline);

//bind. this 값을 영구히 바꿈?
const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
console.log(bruce);
