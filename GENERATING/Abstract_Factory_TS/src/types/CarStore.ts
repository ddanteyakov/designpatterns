import { ICoupCar, IHatchBackCar, ITrunkCar, ICar } from './Cars';

export interface ICarStore {
    buyHatchBackCar(): ICar;
    buyCoupCar(): ICar;
    buyTrunkCar(): ICar;
}