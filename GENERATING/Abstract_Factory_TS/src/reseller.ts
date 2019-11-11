import { carTypes } from './types/carTypes';
import { ICarStore } from './types/CarStore';

export class Reseller {
    carStore: ICarStore;

    setCarStore(carStore: ICarStore) {
        this.carStore = carStore;
    }

    orderCar(type: carTypes) {
        switch (type) {
            case carTypes.COUP: return this.carStore.buyCoupCar();
            case carTypes.HATCHBACK: return this.carStore.buyHatchBackCar();
            case carTypes.TRUNK: return this.carStore.buyTrunkCar();
            default: return;
        }
    }
}