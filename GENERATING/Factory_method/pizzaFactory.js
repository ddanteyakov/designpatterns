const pizzaTypes = require('./pizzaTypes');
const PeperoniPizza = require('./pizzas/peperoniPizza');
const MargaritaPizza = require('./pizzas/margaritaPizza');
const FrenchPizza = require('./pizzas/frenchPizza');
const VezuviyPizza = require('./pizzas/vezuviyPizza');
const Pizza = require('./pizzas/pizza');

module.exports = class PizzaFactory {
    constructor(pizzaTypes) {
        this.pizzaTypesMap = new Map();
        if(Array.isArray(pizzaTypes)) {
            pizzaTypes.forEach(pezzaType => this.pizzaTypesMap.set(pizzaType.name, class))
        }
    }

    addPizzaType(type) {
        this.pizzaTypes.push(type);
    }
    create(pizzaType, ...args) {
        // switch (pizzaType) {
        //     case pizzaTypes.peperoni: {
        //         return new PeperoniPizza(...args);
        //     }
        //     case pizzaTypes.margarite: {
        //         return new MargaritaPizza(...args);
        //     }
        //     case pizzaTypes.french: {
        //         return new FrenchPizza(...args);
        //     }
        //     case pizzaTypes.vezuviy: {
        //         return new VezuviyPizza(...args);
        //     }
        //     default: {
        //         return new Pizza(...args);
        //     }
        // }
        return new this.pizzaTypesMap.get(pizzaType)(...args)
    }
}