"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub = sub;
exports.divide = divide;
function sub(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0)
        throw new Error("Cannot divide by zero");
    return a / b;
}
