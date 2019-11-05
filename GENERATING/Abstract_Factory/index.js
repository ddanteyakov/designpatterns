const FordFactory = require('./factories/fordFactory');
const carTypes = require('./types/carTypes');

const fordFactory = new FordFactory();

const myOwnCar = fordFactory.createCar(carTypes.trunk);
console.log(myOwnCar);

class Store{
    constructor(brand){
        this.factory = getFactoryByBrand(factory)
    }

    


}