export class Players{
    name: string
    age: number
    isCaptain: boolean
    constructor(name: string, age: number, isCaptain: boolean){
        this.name = name
        this.age = age
        this.isCaptain = isCaptain
    }
    getPlayerInfo(): string{
        const captainStatus = this.isCaptain ? "Captain" : "Player"
        return `Name: ${this.name}, Age: ${this.age}, Role: ${captainStatus}`
    }
}
export class Batsman extends Players{
    runsScored: number
    battingAverage: number
    constructor(name: string, age: number, isCaptain: boolean, runsScored: number, battingAverage: number) {
        super(name, age, isCaptain)
        this.runsScored = runsScored
        this.battingAverage = battingAverage
    }
    getPlayerInfo(): string {
        const baseInfo = super.getPlayerInfo()
        return `${baseInfo}, Runs Scored: ${this.runsScored}, Batting Average: ${this.battingAverage}`
    }
}
const players1 = new Players("Tilak Verma", 22, true)
console.log(players1.getPlayerInfo())
const players2 = new Players("Abhishek Sharma", 24, false)
console.log(players2.getPlayerInfo())
const batsman1 = new Batsman("Sanju Samson", 30, false, 510, 56.6)
console.log(batsman1.getPlayerInfo())