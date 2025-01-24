let cart = [    
    { name: "Laptop", price: 1000, quantity: 5 },    
    { name: "Smartphone", price: 600, quantity: 10 },    
    { name: "Tablet", price: 300, quantity: 15 }
]
let totalBill = 0
for(let item of cart){
    totalBill += item.price * item.quantity
}
console.log("Total Bill Amount:", totalBill)
