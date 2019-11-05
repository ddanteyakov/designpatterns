import { FordFactory } from './src/factories/fordFactory';
import { carTypes } from './src/types/carTypes';
import { AutoFactory } from './src/factories/autoFactory';

const fordFactory : AutoFactory = new FordFactory();

const myOwnCar = fordFactory.createCar(carTypes.coup, []);
console.log(myOwnCar);