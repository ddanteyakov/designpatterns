class Prototype {
    clone() {
        return Object.assign(this);
    }
}

module.exports = class Chess extends Prototype {
    constructor() {
        super();
        this.field = [];
        for (let i = 0; i < 10; i++) {
            this.field.push(new Array(10));
        }
    }

    addFigure(vertical, horizontal, figure) {
        if (vertical >= 10 || horizontal >= 10 || vertical < 0 || horizontal < 0) return;
        this.field[vertical][horizontal] = figure;
    }

    getFigure(vertical, horizontal) {
        if (vertical >= 10 || horizontal >= 10 || vertical < 0 || horizontal < 0) return false;
        const figure = this.field[vertical][horizontal];
        this.field[vertical][horizontal] = undefined;
        return figure;
    }

    clone() {
        const newChess = new Chess();
        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
                newChess.field[i][j] = this.field[i][j];
            }
        }
        return newChess;
    }
}