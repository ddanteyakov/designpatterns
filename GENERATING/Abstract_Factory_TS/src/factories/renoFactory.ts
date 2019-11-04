import { AutoFactory } from "./autoFactory";
import { Car } from '../cars/car';
import { CoupCar } from '../cars/coupCar';
import { HatchbackCar } from '../cars/hatchbackCar';
import { TrunkCar } from '../cars/trunkCar';
import { carTypes } from "../types/carTypes";
import { StickHood } from "../hoods/stickHood";


export class RenoFactory extends AutoFactory {
    createCar(type, trunkInsides) {
        switch (type) {
            case carTypes.coup: {
                return new CoupCar();
            }
            case carTypes.hatchback: {
                return new HatchbackCar(trunkInsides.slice(0, 20));
            }
            case carTypes.trunk: {
                return new TrunkCar(trunkInsides);
            }
            default: {
                return new Car(trunkInsides);
            }
        }
    }
    createHood(color: string) {
        return new StickHood(color);
    }
}