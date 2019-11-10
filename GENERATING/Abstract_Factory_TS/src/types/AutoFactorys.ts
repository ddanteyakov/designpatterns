import { ICar } from "./Cars";

export interface IAutoFactory {
    createCar(): ICar;
    createHatchbackCar(): ICar;
    createCoupCar(): ICar;
}