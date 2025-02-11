class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getMakeModel() {
    return ${this.make} ${this.model};
  }
}


class SportsCar extends Car {
  constructor(make, model, topSpeed) {
    super(make, model);
    this.topSpeed = topSpeed;
  }


  getTopSpeed() {
    return this.topSpeed;
  }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
