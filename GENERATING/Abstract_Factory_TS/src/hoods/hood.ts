import { IHood } from '../types/IHood';

export class Hood implements IHood {
    color: string;

    constructor(color) {
        this.color = color;
    }
    open() {
        console.log('opened, can fall down!');
    }
}