import { BurgerBuilder } from './burgerBuilder';

export class BeefBurgerBuilder extends BurgerBuilder {
    constructor() {
        super();
    }

    addCutlet() {
        this._increaseIngredient('beefCutlet');
    }

    removeCutlet() {
        this._decreaseIngredient('beefCutlet');
    }

    addTomato() {
        super.addTomato();
        this._increaseIngredient('basil_condiment');
    }

    removeTomato() {
        super.removeTomato();
        this._decreaseIngredient('basil_condiment');
    }
}