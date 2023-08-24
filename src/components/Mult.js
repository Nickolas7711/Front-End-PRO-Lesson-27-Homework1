import Calculator from "./Calculator.js";

class Mult extends Calculator {
    constructor(x, y) {
        super(x, y);
    }

    mult() {
        return this.x * this.y;
    }
}

export default Mult;