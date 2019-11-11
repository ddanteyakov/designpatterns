import { carTypes } from './types/carTypes';
import { ICarStore } from './types/CarStore';
import { ICar } from './types/Cars';

export class Reseller {
    carStore: ICarStore;

    setCarStore(carStore: ICarStore) {
        this.carStore = carStore;
    }

    orderCar(type: carTypes): ICar {
        switch (type) {
            case carTypes.COUP: return this.carStore.buyCoupCar();
            case carTypes.HATCHBACK: return this.carStore.buyHatchBackCar();
            case carTypes.TRUNK: return this.carStore.buyTrunkCar();
            default: return;
        }
    }
}