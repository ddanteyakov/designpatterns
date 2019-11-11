import { BurgerBuilder } from './burgerBuilder';

export class FiishBurgerBuilder extends BurgerBuilder {
    constructor() {
        super();
    }

    addCutlet() {
        this._increaseIngredient('fishCutlet');
        this._increaseIngredient('mayonnaise');
    }

    removeCutlet() {
        this._decreaseIngredient('fishCutlet');
        this._decreaseIngredient('mayonnaise');
    }
}