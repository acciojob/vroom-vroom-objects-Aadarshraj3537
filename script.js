// Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor using call()
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inheriting from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Testing the implementation
const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200

