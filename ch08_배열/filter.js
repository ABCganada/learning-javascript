const cards = [];
for (let suit of ["H", "C", "D", "S"]) {
  for (let value = 1; value <= 13; value++) {
    cards.push({ suit, value });
  }
}

console.log(cards.filter((x) => x.value === 2));
console.log(cards.filter((x) => x.value > 10));

function cardToString(c) {
  const suits = { H: `\u2665`, C: `\u2663`, D: `\u2666`, S: `\u2660` };
  const values = { 1: "A", 11: "J", 12: "Q", 13: "K" };

  for (let i = 2; i <= 10; i++) {
    values[i] = i;
  }
  return values[c.value] + suits[c.suit];
}
console.log(cards.filter((c) => c.value === 2).map(cardToString));
