import { IPizza } from "./pizzas/IPizza";
import { pizzaTypes } from "../pizzaTypes";

export interface IPizzaFactory {
    create(pizzaType: pizzaTypes, ...args: any[]): IPizza;
}