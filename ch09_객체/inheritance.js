class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created");
  }

  addPassenger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super(); //슈퍼 클래스의 생성자를 호출
    console.log("Car created");
  }

  deployAirbags() {
    console.log("BWOOSH");
  }
}

class Motocycle extends Vehicle {}

const v = new Vehicle();
v.addPassenger("Frank");
console.log(v.passengers);

const c = new Car();
c.addPassenger("Alice");
console.log(c.passengers);

const m = new Motocycle();

console.log(c instanceof Car);
console.log(m instanceof Vehicle);
