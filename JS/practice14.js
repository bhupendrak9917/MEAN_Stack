function fibonacci(n) {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function printFibonacci(n) {
    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i))
    }
}
printFibonacci(15)
  