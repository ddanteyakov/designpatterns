import { IPizzaFactory } from "./types/IPizzaFactory";
import { pizzaTypes } from "./pizzaTypes";
import { PeperoniPizza } from "./pizzas/peperoniPizza";
import { MargaritaPizza } from "./pizzas/margaritaPizza";
import { FrenchPizza } from "./pizzas/frenchPizza";
import { VezuviyPizza } from "./pizzas/vezuviyPizza";
import { Pizza } from "./pizzas/pizza";


export class PizzaFactory implements IPizzaFactory {
    create(pizzaType) {
        switch (pizzaType) {
            case pizzaTypes.peperoni: {
                return new PeperoniPizza();
            }
            case pizzaTypes.margarite: {
                return new MargaritaPizza();
            }
            case pizzaTypes.french: {
                return new FrenchPizza();
            }
            case pizzaTypes.vezuviy: {
                return new VezuviyPizza();
            }
            default: {
                return new Pizza();
            }
        }
    }
}