const item1 = 50
const item2 = 60

let totalPrice = item1 + item2

const discount = 0.10

totalPrice = totalPrice - (totalPrice * discount)

let qualifiesForFreeShipping = false

let finalBillingAmont

if(qualifiesForFreeShipping)
    finalBillingAmont = totalPrice
else
    finalBillingAmont = totalPrice + 10

console.log(finalBillingAmont)