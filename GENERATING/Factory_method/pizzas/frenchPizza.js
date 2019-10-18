'use strict';
const Pizza = require('./pizza');

module.exports = class FrenchPizza extends Pizza {
    constructor() {
        super();
        this.price = 11;
        this.name = 'French';
    }

    smell() {
        return 'Sharp pizza smell';
    }
}