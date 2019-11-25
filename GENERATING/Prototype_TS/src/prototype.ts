import { IPrototype } from "./types/Prototype";
import { IChess } from "./types/Chess";

export class Chess implements IPrototype<IChess>, IChess {
    field: string[][];
    constructor() {
        this.field = [];
        for (let i = 0; i < 10; i++) {
            this.field.push(new Array(10));
        }
    }

    addFigure(vertical: number, horizontal: number, figure: string) {
        if (vertical >= 10 || horizontal >= 10 || vertical < 0 || horizontal < 0) return;
        this.field[vertical][horizontal] = figure;
    }

    takeFigure(vertical: number, horizontal: number) {
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