import { IDrinkBuilder } from "./types/IDrinkBuilder";
import { ICocktail } from "./types/ICocktail";


export class DrinkBuilder implements IDrinkBuilder<ICocktail> {
    cocktail: ICocktail;
    constructor() {
        this.cocktail = '';
    }
    getResult() {
        return this.cocktail;
    }
    putCherry() {
        this.cocktail += 'Cherry';
    }
    putCola() {
        this.cocktail += 'Cola';
    }
    putIce() {
        this.cocktail += 'Ice';
    }
    putMartini() {
        this.cocktail += 'Martini';
    }
    putMineralWater() {
        this.cocktail += 'MineralWater';
    }
    putMint() {
        this.cocktail += 'Mint';
    }
    putOrange() {
        this.cocktail += 'Orange';
    }
    putOrangeJus() {
        this.cocktail += 'OrangeJus';
    }
    putPineApple() {
        this.cocktail += 'PineApple';
    }
    putRom() {
        this.cocktail += 'Rom';
    }
    putSprite() {
        this.cocktail += 'Sprite';
    }
    putStrawberry() {
        this.cocktail += 'Strawberry';
    }
    putTomatoJus() {
        this.cocktail += 'TomatoJus'
    }
    putVodka() {
        this.cocktail += 'Vodka';
    }
    putWhiskey() {
        this.cocktail += 'Whiskey';
    }
    reset() {
        this.cocktail = '';
    }
}