import { ICoupCar, IHatchBackCar, ITrunkCar } from './Cars';

export interface ICarStore {
    buyHatchBackCar(): IHatchBackCar;
    buyCoupCar(): ICoupCar;
    buyTrunkCar(): ITrunkCar;
}