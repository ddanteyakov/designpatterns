import { Pizza } from './pizza';

export class MargaritaPizza extends Pizza {
    name: string;
    price: number;

    constructor() {
        super();
        this.price = 8;
        this.name = 'Margarita';
    }
}