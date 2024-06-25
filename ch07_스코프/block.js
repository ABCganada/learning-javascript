console.log(`before block`);
{
  console.log(`inside block`);
  const x = 3;
}
// console.log(`after block; x=${x}`); //x is not defined

{
  let x = { color: "blue" };
  let y = x;
  let z = 3;
  {
    let x = 5;
    console.log(x);
    console.log(x.color); //undefined
  }
}
