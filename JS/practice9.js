function calc(num1, num2){
    let add = num1 + num2
    let sub = num1 - num2
    let avg = (num1 + num2)/2
    return [add, sub, avg]
}
let [add, sub, avg] = calc(23,34)
console.log(add)
console.log(sub)
console.log(avg)