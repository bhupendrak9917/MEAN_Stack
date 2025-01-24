const mul = (value: number, factor: number = 1): number => {
    return value * factor
}
const obj1 = mul(5, 5);
console.log("Multiplication Result 1:", obj1)
 
const obj2 = mul(5);
console.log("Multiplication Result 2:", obj2)