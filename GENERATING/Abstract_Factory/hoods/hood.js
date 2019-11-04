module.exports = class Hood {
    constructor(color) {
        this.color = color;
    }
    open() {
        console.log('opened, can fall down!');
    }
}