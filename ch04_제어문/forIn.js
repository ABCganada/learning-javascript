const player = {
  name: "Thomas",
  rank: "Midshipman",
  age: 25,
};

//객체의 property 루프
for (let prop in player) {
  if (!player.hasOwnProperty(prop)) continue;
  console.log(prop + `: ` + player[prop]);
}
