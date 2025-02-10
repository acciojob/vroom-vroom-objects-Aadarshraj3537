function Car(make, model) {
  this.make = make;
  this.model = model;
}

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Call the Car constructor
  this.topSpeed = topSpeed;
}

// Setting up prototype inheritance
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

