function counterfn() {
    let count = 0
    return {
        increment: () => {
            count++
            console.log('Count after increment: ' + count)
        },
        decrement: () => {
            count--
            console.log('Count afer decrement: ' + count)
        },
        getCount: () => {
            console.log('Total Count: '+count)
            return count
        }
    }
}
  
let counter = counterfn()
  
counter.increment()
counter.increment()
counter.decrement()
counter.getCount()
  