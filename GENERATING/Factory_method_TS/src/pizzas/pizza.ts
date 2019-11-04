import { IPizza } from "../types/pizzas/IPizza";

export class Pizza implements IPizza {
    name: string;
    price: number
    smell() {
        return 'Usual pizza smell';
    }
}