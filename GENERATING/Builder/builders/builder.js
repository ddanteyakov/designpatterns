module.exports = class BurgerBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.burger = {};
    }
    _increaseIngredient(key) {
        this.burger[key] = this.burger[key] ? this.burger[key] + 1 : 1;
    }
    addCheese() {
        this._increaseIngredient('cheese');
    }
    addBottomBred() {
        this._increaseIngredient('bottomBread');
    }
    addMiddleBread() {
        this._increaseIngredient('middleBread');
    }
    addTopBread() {
        this._increaseIngredient('topBread');
    }
    addCutlet() {
        this._increaseIngredient('beefCutlet');
    }
    addTomato() {
        this._increaseIngredient('tomato');
    }
    add
}