import { Players } from './ex2';
export interface IBowler{
    wicketsTaken: number;
    bowlingAverage: number;
}
export class Bowler extends Players implements IBowler{
    wicketsTaken: number;
    bowlingAverage: number;
    constructor(name: string, age: number, isCaptain: boolean, wicketsTaken: number, bowlingAverage: number){
        super(name, age, isCaptain);
        this.wicketsTaken = wicketsTaken;
        this.bowlingAverage = bowlingAverage;
    }
    getPlayerInfo(): string{
        const baseInfo = super.getPlayerInfo();
        return `${baseInfo}, Wickets Taken: ${this.wicketsTaken}, Bowling Average: ${this.bowlingAverage}`;
    }
}
const bowler1 = new Bowler("Bhuvaneshwar Kumar", 34, false, 294, 26.09)
console.log(bowler1.getPlayerInfo())
const bowler2 = new Bowler("Mohammed Shami", 34, false, 448, 26.06)
console.log(bowler2.getPlayerInfo())
const bowler3 = new Bowler("Jasprit Bumrah", 30, false, 411, 21.03)
console.log(bowler3.getPlayerInfo())