import { PizzaFactory } from "./pizzaFactory";
import { PizzaStore } from "./pizzaStore";
import { pizzaTypes } from "./pizzaTypes";

const pizzaFactory = new PizzaFactory();
const pizzaStore = new PizzaStore(pizzaFactory);

const myOrder = pizzaStore.order(pizzaTypes.french, 2);
console.log('Pizza: ', myOrder[0].name, '\nQuantity: ', myOrder.length, '\nResult price: ', myOrder.length * myOrder[0].price);