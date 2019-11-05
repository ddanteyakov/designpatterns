const PizzaStore = require('./pizzaStore');
const PizzaFactory = require('./pizzaFactory');
const pizzaTypes = require('./pizzaTypes');
const PeperoniPizza = require('./pizzas/peperoniPizza');
const pizzaFactory = new PizzaFactory([{ name: pizzaTypes.peperoni, class: PeperoniPizza }]);
const pizzaStore = new PizzaStore(pizzaFactory);

const myOrder = pizzaStore.order(pizzaTypes.french, 2);
console.log('Pizza: ', myOrder[0].name, '\nQuantity: ', myOrder.length, '\nResult price: ', myOrder.length * myOrder[0].price);