class Vehicle{
    public startEngine(): void{
        console.log("Engine started.")
    }
    private checkBattery(): void{
        console.log("Battery is in good condition.")
    }
    protected fuelStatus(): void{
        console.log("Fuel tank is full.")
    }
    public vehicleInfo(): void{
        console.log("This is a generic vehicle.")
        this.checkBattery()
        this.fuelStatus()
    }
}
class Car extends Vehicle {
    public playMusic(): void {
        console.log("Playing music.")
    }
    public vehicleInfo(): void {
        console.log("This is a car.")
        super.vehicleInfo()
    }
}
const car1 = new Car()
car1.startEngine()
car1.playMusic()
car1.vehicleInfo()