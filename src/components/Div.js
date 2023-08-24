import Calculator from "./Calculator.js";

class Div extends Calculator {
    constructor(x, y) {
        super(x, y);
    }

    div() {
        return this.x / this.y;
    }
}

export default Div;