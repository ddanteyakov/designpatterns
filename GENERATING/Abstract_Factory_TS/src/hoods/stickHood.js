import { Hood } from './hood';

export class StickHood extends Hood {
    constructor(color) {
        super(color);
    }
    open() {
        console.log('opened, put a stick to hold the hood');
    }
}