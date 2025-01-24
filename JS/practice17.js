class Vehicle{
    constructor(speed, color){
        this.speed = speed
        this.color = color
    }
    setSpeed(speed){
        this.speed = speed
        console.log(`Car speed set to ${this.speed} km/h`)
    }
    drive(){
        console.log(`The ${this.color} coloured Car is driving at ${this.speed} km/h`)
    }
}

class Car extends Vehicle{
    constructor(speed, color, mileage){
        super(speed, color)
        this.mileage = mileage
    }
    getMileage(){
        console.log(`Mileage: ${this.mileage} km/l`)
    }
}
const myCar = new Car(100, "Red", 20)
console.log(`Speed: ${myCar.speed} km/h`)
console.log(`Color: ${myCar.color}`)
console.log(`Mileage: ${myCar.mileage} km/l`)
  
myCar.setSpeed(220)
myCar.drive()
myCar.getMileage()