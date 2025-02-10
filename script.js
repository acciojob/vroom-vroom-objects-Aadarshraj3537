function Car(make, model) {
    this.make = make;
    this.model = model;
}

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); 
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

window.Car = Car;
window.SportsCar = SportsCar;

