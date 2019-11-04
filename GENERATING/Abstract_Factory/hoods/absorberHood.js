const Hood = require('./hood');

module.exports = class AbsorberHood extends Hood {
    constructor(color) {
        super(color);
    }
    open() {
        console.log('safely opened');
    }
}