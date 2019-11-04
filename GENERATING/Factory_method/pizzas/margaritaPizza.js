'use strict';
const Pizza = require('./pizza');

module.exports = class MargaritaPizza extends Pizza {
    constructor() {
        super();
        this.price = 8;
        this.name = 'Margarita';
    }
}