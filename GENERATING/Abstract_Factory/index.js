const FordFactory = require('./factories/fordFactory');
const carTypes = require('./types/carTypes');

const fordFactory = new FordFactory();

const myOwnCar = fordFactory.createCar(carTypes.coup);
console.log(myOwnCar);