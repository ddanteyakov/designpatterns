import { Reseller } from './src/reseller';
import { FordCarStore } from './src/carStores/fordCarStore';
import { carTypes } from './src/types/carTypes';

const reseller = new Reseller();
const fordCarStore = new FordCarStore();
const cars = [reseller.orderCar(carTypes.COUP), reseller.orderCar(carTypes.COUP), reseller.orderCar(carTypes.HATCHBACK)];
cars.forEach(car => car.drive())