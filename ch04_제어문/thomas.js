function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50;
let round = 0;

while (funds > 1 && funds < 100) {
  round++;
  console.log(`round ${round}`);
  console.log(`\tstarting funds: ${funds}`);

  //bets 객체 선언
  let bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0,
  };

  let totalBet = rand(1, funds);
  if (totalBet === 7) {
    //7이면 하트 올뱃
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    //7 아니면 분산 투자
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
      bets.face += bet;
      remaining -= bet;
    } while (remaining > 0);
  }
  funds -= totalBet;

  //주사위 굴려서 실제 게임 시작.
  //hand 배열 선언
  const hand = [];
  for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }
  console.log(`\thands: ${hand}`);

  let winnings = 0;
  for (let die = 0; die < hand.length; die++) {
    let face = hand[die];
    if (bets[face] > 0) {
      winnings += bets[face];
    }
  }
  funds += winnings;
  console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);
