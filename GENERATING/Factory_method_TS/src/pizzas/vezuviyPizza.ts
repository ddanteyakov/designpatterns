import { Pizza } from './pizza';

export class VezuviyPizza extends Pizza {
    name: string;
    price: number;

    constructor() {
        super();
        this.price = 10;
        this.name = 'Vezuviy';
    }
}