let a = 10
let b = 5
let operation = '-'
let result

switch (operation) {
  case '+':
    console.log("Addition")
    result = a + b
    break
  case '-':
    console.log("Subtraction")
    result = a - b
    break
  case '*':
    console.log("Multiplication")
    result = a * b
    break
  case '/':
    console.log("Division")
    result = a / b
    break
  case '%':
    console.log("Modulus")
    result = a % b
    break
  default:
    result = "Invalid Operation"
}

console.log(result)
