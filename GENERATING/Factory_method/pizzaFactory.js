const pizzaTypes = require('./pizzaTypes');
const PeperoniPizza = require('./pizzas/peperoniPizza');
const MargaritaPizza = require('./pizzas/margaritaPizza');
const FrenchPizza = require('./pizzas/frenchPizza');
const VezuviyPizza = require('./pizzas/vezuviyPizza');

module.exports = class PizzaFactory {
    create(pizzaType, ...args) {
        switch (pizzaType) {
            case pizzaTypes.peperoni: {
                return new PeperoniPizza(...args);
            }
            case pizzaTypes.margarite: {
                return new MargaritaPizza(...args);
            }
            case pizzaTypes.french: {
                return new FrenchPizza(...args);
            }
            case pizzaTypes.vezuviy: {
                return new VezuviyPizza(...args);
            }
            default: {
                return undefined;
            }
        }
    }
}