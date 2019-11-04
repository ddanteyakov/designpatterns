import { Hood } from "./hood";

export class AbsorberHood extends Hood {
    constructor(color) {
        super(color);
    }
    open() {
        console.log('safely opened');
    }
}