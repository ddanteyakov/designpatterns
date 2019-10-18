'use strict';
const Pizza = require('./pizza');

module.exports = class PeperoniPizza extends Pizza {
    constructor() {
        super();
        this.price = 10;
        this.name = 'Peperoni';
    }

    smell() {
        return 'Tasty pizza smell';
    }
}