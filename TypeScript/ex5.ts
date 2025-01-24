import { Players } from './ex2'
import { Batsman } from './ex2'
import { Bowler } from './ex4'

const player4_1 = new Players("Ravi Bishnoi", 24, false)
console.log(player4_1.getPlayerInfo())
const batsman4_1 = new Batsman("Rohit Sharma", 37, true, 19367, 42.65)
console.log(batsman4_1.getPlayerInfo())
const bowler4_1 = new Bowler("Mohammed Siraj", 30, false, 165, 27.93)
console.log(bowler4_1.getPlayerInfo())
