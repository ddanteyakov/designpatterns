'use strict';

const carTypes = require('../types/carTypes');
const Car = require('../cars/car');
const CoupCar = require('../cars/coupCar');
const HatchbackCar = require('../cars/hatchbackCar');
const TrunkCar = require('../cars/trunkCar');
const Hood = require('../hoods/hood');

module.exports = class AutoFactory {
    createCar(type, trunkInsides) {
        switch (type) {
            case carTypes.coup: {
                return new CoupCar(trunkInsides);
            }
            case carTypes.hatchback: {
                return new HatchbackCar(trunkInsides);
            }
            case carTypes.trunk: {
                return new TrunkCar(trunkInsides);
            }
            default: {
                return new Car(trunkInsides);
            }
        }
    }
    createHood(color) {
        return new Hood(color);
    }
}