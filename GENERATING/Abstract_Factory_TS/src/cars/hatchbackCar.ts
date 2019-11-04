import { Car } from "./car";


export class HatchbackCar extends Car {
    constructor(trunkInsides?: any[]) {
        super(trunkInsides);
    }
    drive() {
        console.log('drive max speed = 200km/h');
    }
}