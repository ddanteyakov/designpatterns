'use strict';

const AutoFactory = require('./autoFactory');
const carTypes = require('../types/carTypes');
const Car = require('../cars/car');
const CoupCar = require('../cars/coupCar');
const HatchbackCar = require('../cars/hatchbackCar');
const TrunkCar = require('../cars/trunkCar');
const StickHood = require('../hoods/stickHood');

module.exports = class RenoFactory extends AutoFactory {
    createCar(type, trunkInsides) {
        switch (type) {
            case carTypes.coup: {
                return new CoupCar(trunkInsides);
            }
            case carTypes.hatchback: {
                return new HatchbackCar(trunkInsides.slice(0, 20));
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
        return new StickHood(color);
    }
}