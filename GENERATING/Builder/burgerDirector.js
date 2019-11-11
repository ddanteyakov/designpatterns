export class BurgerDirector {
    selectBurgerBuilder(builder) {
        this.builder = builder;
    }

    prepareBigMak() {
        this.builder.addTopBread();
        this.builder.addBottomBred();
        this.builder.addMiddleBread();
        this.builder.addCheese();
        this.builder.addCheese();
        this.builder.addTomato();
        this.builder.addCutlet();
        this.builder.addCutlet();
        this.builder.addSalad();
    }

    prepareCheeseBurger() {
        this.builder.addTopBread();
        this.builder.addBottomBred();
        this.builder.addCheese();
        this.builder.addTomato();
        this.builder.addCutlet();
    }

    makeBigMak() {
        this.builder.reset();
        this.prepareBigMak();
        return this.builder.getBurger();
    }

    makeCheeseBurger() {
        this.builder.reset();
        this.prepareCheeseBurger();
        return this.builder.getBurger();
    }

    editBigMack() {
        this.builder.reset();
        this.prepareBigMak();
        return this.builder;
    }

    editCheeseBurger() {
        this.builder.reset();
        this.prepareCheeseBurger();
        return this.builder;
    }

    buildYourOwnBurger() {
        this.builder.reset();
        return this.builder;
    }
}