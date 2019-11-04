'use strict';
const Pizza = require('./pizza');

module.exports = class VezuviyPizza extends Pizza {
    constructor() {
        super();
        this.price = 10;
        this.name = 'Vezuviy';
    }
}