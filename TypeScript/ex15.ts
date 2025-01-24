interface CricketInfo{
    readonly bdate: string
    readonly age: number
    avg?: number
    sr?: number
    runs: number
    wickets: number
    year: string | number
}
const playerInfo: CricketInfo ={
    bdate: "1988-06-12",
    age: 35,
    runs: 6506,
    wickets: 593,
    year: 2024
}
console.log("Player Information:")
console.log("Birthdate:", playerInfo.bdate)
console.log("Age:", playerInfo.age)
console.log("Runs:", playerInfo.runs)
console.log("Wickets:", playerInfo.wickets)
console.log("Year:", playerInfo.year)
playerInfo.avg = 32.6
playerInfo.sr = 69.08
console.log("Average:", playerInfo.avg)
console.log("Strike Rate:", playerInfo.sr)