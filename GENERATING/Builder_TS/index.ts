import { BarmenDirector } from './barmanDirector';
import { DrinkBuilder } from './drinkBuilder';

const drinkBuilder = new DrinkBuilder();
const barmenDirector = new BarmenDirector(drinkBuilder);

barmenDirector.makeLongIsland();
drinkBuilder.putRom();
drinkBuilder.putRom();
console.log(drinkBuilder.getResult())