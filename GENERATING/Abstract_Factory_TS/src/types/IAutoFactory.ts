import { carTypes } from "./carTypes";
import { ICar } from "./ICar";
import { IHood } from "./IHood";

export interface IAutoFactory {
    createCar(type: carTypes, trunkInsides?: any[]): ICar;
    createHood(color: string): IHood;
}