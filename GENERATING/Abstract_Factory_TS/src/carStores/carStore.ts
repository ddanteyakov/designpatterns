import { ICarStore } from '../types/CarStore';
import { IAutoFactory } from '../types/AutoFactorys';
import { ICoupCar, IHatchBackCar, ITrunkCar } from '../types/Cars';
import { CoupCar } from '../cars/coupCar';
import { HatchbackCar } from '../cars/hatchbackCar';
import { TrunkCar } from '../cars/trunkCar';

export abstract class CarStore implements ICarStore {
    constructor(public factory: IAutoFactory) {
    }

    buyCoupCar(): ICoupCar {
        return new CoupCar();
    }

    buyHatchBackCar(): IHatchBackCar {
        return new HatchbackCar()
    }

    buyTrunkCar(): ITrunkCar {
        return new TrunkCar();
    }
}