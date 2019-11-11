export class BurgerBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.burger = {};
    }
    _increaseIngredient(key) {
        this.burger[key] = this.burger[key] ? this.burger[key] + 1 : 1;
    }
    _decreaseIngredient(key) {
        this.burger[key] = this.burger[key] ? this.burger[key] - 1 : 0;
    }
    addCheese() {
        this._increaseIngredient('cheese');
    }
    removeCheese() {
        this._decreaseIngredient('cheese');
    }
    addBottomBred() {
        this._increaseIngredient('bottomBread');
    }
    removeBottomBred() {
        this._decreaseIngredient('bottomBread');
    }
    addMiddleBread() {
        this._increaseIngredient('middleBread');
    }
    removeMiddleBread() {
        this._decreaseIngredient('middleBread');
    }
    addTopBread() {
        this._increaseIngredient('topBread');
    }
    removeTopBread() {
        this._decreaseIngredient('topBread');
    }
    addCutlet() {
    }
    removeCutlet() {
    }
    addTomato() {
        this._increaseIngredient('tomato');
    }
    removeTomato() {
        this._decreaseIngredient('tomato');
    }
    addSalad() {
        this._increaseIngredient('salad');
    }
    removeSalad() {
        this._decreaseIngredient('salad');
    }
    getBurger() {
        return this.burger;
    };
}