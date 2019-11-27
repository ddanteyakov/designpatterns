let instance: TelephoneDirectory;
export class TelephoneDirectory {
    private phoneNumbersMap: Map<string, number>;

    constructor() {
        if (instance) {
            return instance;
        }
        this.phoneNumbersMap = new Map();
        instance = this;
    }

    setNumber(name: string, number: number) {
        this.phoneNumbersMap.set(name, number);
    }

    getNumberByName(name: string) {
        return this.phoneNumbersMap.get(name);
    }
}