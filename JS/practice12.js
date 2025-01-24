const factorial = function(n){
    return (function calculateFactorial(num){
        if (num <= 1) return 1
        return num * calculateFactorial(num - 1)
    })(n)
}
console.log(factorial(5))