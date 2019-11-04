import { AutoFactory } from "./autoFactory";
import { carTypes } from "../types/carTypes";
import { CoupCar } from "../cars/coupCar";
import { HatchbackCar } from "../cars/hatchbackCar";
import { Car } from "../cars/car";
import { AbsorberHood } from "../hoods/absorberHood";


export class FordFactory extends AutoFactory {
    createCar(type, trunkInsides) {
        switch (type) {
            case carTypes.coup: {
                return new CoupCar();
            }
            case carTypes.hatchback: {
                return new HatchbackCar(trunkInsides);
            }
            default: {
                return new Car(trunkInsides);
            }
        }
    }
    createHood(color) {
        return new AbsorberHood(color);
    }
}