'use strict';

const Car = require('./car');

module.exports = class TrunkCar extends Car {
    constructor(trunkInsides) {
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