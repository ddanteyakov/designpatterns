import { Pizza } from './pizza';

export class PeperoniPizza extends Pizza {
    name: string;
    price: number;

    constructor() {
        super();
        this.price = 10;
        this.name = 'Peperoni';
    }

    smell() {
        return 'Tasty pizza smell';
    }
}