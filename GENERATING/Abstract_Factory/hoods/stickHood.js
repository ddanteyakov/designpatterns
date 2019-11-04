const Hood = require('./hood');

module.exports = class StickHood extends Hood {
    constructor(color) {
        super(color);
    }
    open() {
        console.log('opened, put a stick to hold the hood');
    }
}