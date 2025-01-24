function multiplyBy(num1){
    return function(num2){
        return num1 * num2
    }
}
const multiplyBy5 = multiplyBy(5)
console.log(multiplyBy5(3))
console.log(multiplyBy5(7))
const multiplyBy10 = multiplyBy(10)
console.log(multiplyBy10(3))
  