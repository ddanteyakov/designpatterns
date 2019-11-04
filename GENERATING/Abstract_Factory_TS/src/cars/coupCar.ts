import { Car } from "./car";


export class CoupCar extends Car {

    constructor() {
        super();
        this.maxTrunkCapacity = 0;
        this.trunk = [];
    }
    drive() {
        console.log('drive max speed = 230km/h');
    }
    putIntoTrunk() {
        return false;
    }
}