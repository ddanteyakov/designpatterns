export interface IDrinkBuilder<T> {
    reset(): void;
    putIce(): void;
    putMint(): void;
    putRom(): void;
    putVodka(): void;
    putWhiskey(): void;
    putMartini(): void;
    putOrangeJus(): void;
    putTomatoJus(): void;
    putMineralWater(): void;
    putSprite(): void;
    putCola(): void;
    putCherry(): void;
    putStrawberry(): void;
    putOrange(): void;
    putPineApple(): void;
    getResult(): T;
}