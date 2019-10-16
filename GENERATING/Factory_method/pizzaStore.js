module.exports = class PizzaStore {
    constructor(pizzaFactory) {
        this.pizzaFactory = pizzaFactory;
    }

    order(pizzaType, quantity) {
        const pizzas = [];
        for (let i = 0; i < quantity; i++) {
            pizzas.push(this.pizzaFactory.create(pizzaType));
        }
        return pizzas;
    }
}