import { Players } from './ex2'
import { Batsman } from './ex2'
import { Bowler } from './ex4'
export default class Team {
    protected players: Players[]
    constructor() {
        this.players = []
    }
    addPlayer(player: Players): void {
        this.players.push(player)
    }
    printPlayers(): void {
        if (this.players.length === 0) {
            console.log("No players in the team.")
        } else {
            console.log("Players in the team:")
            this.players.forEach(player => {
                console.log(player.getPlayerInfo())
            })
        }
    }
}
const team = new Team()
const player6_1 = new Players("Hardik Pandya", 31, false)
const batsman6_1 = new Batsman("Surya Kumar Yadav", 34, true, 3351, 35.64)
const bowler6_1 = new Bowler("Mohit Sharma", 36, false, 31, 32.90)
team.addPlayer(player6_1)
team.addPlayer(batsman6_1)
team.addPlayer(bowler6_1)
team.printPlayers()