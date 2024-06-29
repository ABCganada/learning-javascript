//map은 배열 요소 변형시킴
const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95 },
];
const names = cart.map((x) => x.name);
const prices = cart.map((x) => x.price);
const newCart = names.map((x, i) => ({ name: x, price: prices[i] }));
console.log(newCart);

