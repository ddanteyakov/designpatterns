import { IPizzaFactory } from "./types/IPizzaFactory";
import { pizzaTypes } from "./pizzaTypes";
import { IPizza } from "./types/pizzas/IPizza";

export class PizzaStore {
    constructor(public pizzaFactory: IPizzaFactory) {
    }

    order(pizzaType: pizzaTypes, quantity: number) {
        const pizzas: IPizza[] = [];
        for (let i = 0; i < quantity; i++) {
            pizzas.push(this.pizzaFactory.create(pizzaType));
        }
        return pizzas;
    }
}