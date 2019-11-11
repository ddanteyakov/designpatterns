import { Reseller } from './src/reseller';
import { FordCarStore } from './src/carStores/fordCarStore';
import { carTypes } from './src/types/carTypes';

const reseller = new Reseller();
const fordCarStore = new FordCarStore();
reseller.setCarStore(fordCarStore);
const myNewCar = reseller.orderCar(carTypes.HATCHBACK);
console.log(myNewCar);