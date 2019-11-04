'use strict';

const AutoFactory = require('./autoFactory');
const carTypes = require('../types/carTypes');
const Car = require('../cars/car');
const CoupCar = require('../cars/coupCar');
const HatchbackCar = require('../cars/hatchbackCar');

module.exports = class FordFactory extends AutoFactory {
    createCar(type, trunkInsides) {
        switch (type) {
            case carTypes.coup: {
                return new CoupCar(trunkInsides);
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