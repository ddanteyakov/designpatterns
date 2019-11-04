import { FordFactory } from './src/factories/fordFactory';
import { carTypes } from './src/types/carTypes';

const fordFactory = new FordFactory();

const myOwnCar = fordFactory.createCar(carTypes.coup, []);
console.log(myOwnCar);