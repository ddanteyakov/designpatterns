import { carTypes } from "./carTypes";
import { ICar } from "./ICar";

export interface IAutoFactory {
    createCar(): ICar;
    createHatchbackCar(): ICar;
    createCoupCar(): ICar;
}