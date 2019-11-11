import { BurgerBuilder } from './burgerBuilder';

export class ChickenBurgerBuilder extends BurgerBuilder {
    constructor() {
        super();
    }

    addCutlet() {
        this._increaseIngredient('chickenCutlet');
        this._increaseIngredient('mayonnaise');
    }

    removeCutlet() {
        this._decreaseIngredient('chickenCutlet');
        this._decreaseIngredient('mayonnaise');
    }
}