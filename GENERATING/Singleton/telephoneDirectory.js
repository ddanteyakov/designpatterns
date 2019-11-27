let instance;
module.exports = class TelephoneDirectory {
    constructor() {
        if (instance) {
            return instance;
        }
        this.phoneNumbersMap = new Map();
        instance = this;
    }

    setNumber(name, number) {
        this.phoneNumbersMap.set(name, number);
    }

    getNumberByName(name) {
        return this.phoneNumbersMap.get(name);
    }
}