import { ICar } from '../types/ICar';

export class Car implements ICar {
    maxTrunkCapacity: number;
    trunk: any[];

    constructor(trunkInsides?: any[]) {
        this.maxTrunkCapacity = 50;
        if (Array.isArray(trunkInsides)) {
            this.trunk = [].concat(trunkInsides.slice(0, this.maxTrunkCapacity));
        } else {
            this.trunk = [];
        }
    }
    drive() {
        console.log('drive, max speed = 100km/h');
    }
    putIntoTrunk(obj) {
        if (this.trunk.length < this.maxTrunkCapacity) {
            this.trunk.push(obj);
            return true;
        }
        return false;
    }
}