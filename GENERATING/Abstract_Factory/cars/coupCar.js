'use strict';

const Car = require('./car');

module.exports = class CoupCar extends Car {
    constructor(trunkInsides) {
        super(trunkInsides);
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