import Calculator from "./Calculator.js";

class Sub extends Calculator {
    constructor(x, y) {
        super(x, y);
    }

    sub() {
        return this.x - this.y;
    }
}

export default Sub;