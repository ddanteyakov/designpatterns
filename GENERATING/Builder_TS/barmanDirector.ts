import { IDrinkBuilder } from "./types/IDrinkBuilder";
import { ICocktail } from "./types/ICocktail";

export class BarmenDirector {
    constructor(public drinkBuilder: IDrinkBuilder<ICocktail>) {
    }

    makePinakolada() {
        this.drinkBuilder.reset();
        this.drinkBuilder.putIce();
        this.drinkBuilder.putIce();
        this.drinkBuilder.putRom();
        this.drinkBuilder.putCola();
        this.drinkBuilder.putPineApple();
    }

    makeLongIsland() {
        this.drinkBuilder.reset();
        this.drinkBuilder.putIce();
        this.drinkBuilder.putIce();
        this.drinkBuilder.putRom();
        this.drinkBuilder.putWhiskey();
        this.drinkBuilder.putVodka();
        this.drinkBuilder.putCola();
        this.drinkBuilder.putOrange();
    }

    makeMohita() {
        this.drinkBuilder.reset();
        this.drinkBuilder.putIce();
        this.drinkBuilder.putIce();
        this.drinkBuilder.putMint();
        this.drinkBuilder.putMineralWater();
        this.drinkBuilder.putRom();
    }
}