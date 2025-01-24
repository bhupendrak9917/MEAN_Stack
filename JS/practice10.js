let sum = (...numbers)=>{
    let total = 0
    for(var num of numbers){
        total += num
    }
    return total
}

console.log(sum(5, 10, 15))
console.log(sum())
  