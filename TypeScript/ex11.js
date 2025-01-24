var mul = function (value, factor) {
    if (factor === void 0) { factor = 1; }
    return value * factor;
};
var obj1 = mul(5, 5);
console.log("Multiplication Result 1:", obj1);
var obj2 = mul(5);
console.log("Multiplication Result 2:", obj2);
