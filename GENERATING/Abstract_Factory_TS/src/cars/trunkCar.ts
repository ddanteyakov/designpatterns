import { Car } from "./car";

export class TrunkCar extends Car {
    constructor(trunkInsides?: any[]) {
        super(trunkInsides);
        this.maxTrunkCapacity = 100;
        if (Array.isArray(trunkInsides)) {
            this.trunk = [].concat(trunkInsides.slice(0, this.maxTrunkCapacity));
        } else {
            this.trunk = [];
        }
    }
    drive() {
        console.log('drive max speed = 130km/h');
    }
}