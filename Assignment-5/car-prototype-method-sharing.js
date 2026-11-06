// Q4: Share one method between Car objects through the prototype.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is stored once on Car.prototype and shared by all cars.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const firstCar = new Car("Toyota", "Fortuner");
const secondCar = new Car("Honda", "City");

firstCar.getDetails();
secondCar.getDetails();

// Both objects use the same function from Car.prototype.
console.log(
    "Shared method:",
    firstCar.getDetails === secondCar.getDetails
); // true
