'use strict';

const Car = require('./car');

module.exports = class HatchbackCar extends Car {
    constructor(trunkInsides) {
        super();
    }
    drive() {
        console.log('drive max speed = 200km/h');
    }
}