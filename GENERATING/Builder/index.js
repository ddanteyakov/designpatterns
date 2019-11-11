import { BurgerDirector } from './burgerDirector';
import { BeefBurgerBuilder } from './builders/beefBurgerBuilder';

const burgerDirector = new BurgerDirector();
const beefBurgerBuilder = new BeefBurgerBuilder();
burgerDirector.selectBurgerBuilder(beefBurgerBuilder);
const order = burgerDirector.makeBigMak();
console.log(order);
