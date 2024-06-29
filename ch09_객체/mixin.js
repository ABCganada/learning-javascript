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

class Insurance {}
function makeInsurable(o) {
  o.addInsurance = function (p) {
    this.insurance = p;
  };
  o.getInsurance = function () {
    return this.insurance;
  };
  o.isInsured = function () {
    return !!this.insurance;
  };
}

const car = new Car();
makeInsurable(car);
car.addInsurance(new Insurance());


