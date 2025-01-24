class Math1{
    static add(a, b){
        return a + b
    }
    static sub(a, b){
        return a - b
    }
    static mul(a, b){
        return a * b
    }
    static div(a, b){
        if (b == 0){
            return "Division by zero is undefined"
      }
      return a / b
    }
}
console.log(Math1.add(10, 20))
console.log(Math1.sub(30, 20))
console.log(Math1.mul(30, 40))
console.log(Math1.div(50, 40))
console.log(Math1.div(50, 0))
  