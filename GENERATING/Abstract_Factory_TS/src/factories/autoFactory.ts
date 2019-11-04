import { carTypes } from "../types/carTypes";
import { CoupCar } from "../cars/coupCar";
import { HatchbackCar } from "../cars/hatchbackCar";
import { TrunkCar } from "../cars/trunkCar";
import { Car } from "../cars/car";
import { IAutoFactory } from "../types/IAutoFactory";
import { Hood } from "../hoods/hood";


export class AutoFactory implements IAutoFactory {
    createCar(type: carTypes, trunkInsides?: any[]) {
        switch (type) {
            case carTypes.coup: {
                return new CoupCar();
            }
            case carTypes.hatchback: {
                return new HatchbackCar(trunkInsides);
            }
            case carTypes.trunk: {
                return new TrunkCar(trunkInsides);
            }
            default: {
                return new Car(trunkInsides);
            }
        }
    }
    createHood(color) {
        return new Hood(color);
    }
}