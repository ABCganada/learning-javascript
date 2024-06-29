class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ["P", "N", "R", "D"];
    this._userGear = this._userGears[0];
  }

  get userGear() {
    return this._userGear;
  }

  set userGear(value) {
    if (this._userGears.indexOf(value) < 0) {
      //-1이면
      throw new Error(`Invalid gear: ${value}`);
    }
    this._userGear = value;
  }

  shift(gear) {
    this._userGear = gear;
  }

  static getNextVin() {
    return Car.nextVin++;
  }
}

// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// car1.shift("D");
// car2.shift("R");

// console.log(car1.userGear);
// console.log(car2.userGear);

//프로퍼티 보호
const Carr = function () {
  const carProps = new WeakMap(); //weakMap을, 클로저로 감싸고, 바깥에서 접근할 수 없게

  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ["P", "N", "R", "D"];
      carProps.set(this, { userGear: this._userGears[0] });
    }

    get userGear() {
      return carProps.get(this).userGear;
    }
    set userGear(value) {
      if (this._userGears.indexOf(value) < 0) {
        throw new Error(`Invalid gear: ${value}`);
      }
      carProps.get(this).userGear = value;
    }
    shift(gear) {
      this.userGear = gear;
    }
  }
  return Car;
};

const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift);
car1.shift("D");
car1.shift === car2.shift;

car1.shift = function (gear) {
  this.userGear = gear.toUpperCase();
};
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
car1.shift("r");
console.log(car1.userGear);
