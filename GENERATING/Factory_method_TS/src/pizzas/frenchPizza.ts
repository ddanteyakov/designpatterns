import { Pizza } from './pizza';

export class FrenchPizza extends Pizza {
    name: string;
    price: number;

    constructor() {
        super();
        this.price = 11;
        this.name = 'French';
    }

    smell() {
        return 'Sharp pizza smell';
    }
}