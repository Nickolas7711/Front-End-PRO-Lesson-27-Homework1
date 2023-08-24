import Sum from "./components/Add.js";
import Sub from "./components/Sub.js";
import Div from "./components/Div.js";
import Mult from "./components/Mult.js";

const sumCalculator = new Sum(10, 20);
const subCalculator = new Sub(10, 20);
const divCalculator = new Div(10, 20);
const multCalculator = new Mult(10, 20);

console.log(sumCalculator.sum());
console.log(subCalculator.sub());
console.log(divCalculator.div());
console.log(multCalculator.mult());