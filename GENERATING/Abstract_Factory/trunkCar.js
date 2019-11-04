'use strict';

const Car = require('./car');

module.exports = class TrunkCar extends Car {
    constructor(trunkInsides) {
        super(trunkInsides);
        this.maxTrunkCapacity = 100;
        this.trunk = [].concat(trunkInsides.slice(0, this.maxTrunkCapacity));
    }
    drive() {
        console.log('drive max speed = 130km/h');
    }
}