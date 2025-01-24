import { Component } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {
  playerScore: number = 0
  addRuns(runs: number): void {
    this.playerScore += runs
  }
  playerOut(): void {
    console.log(`Player Score: ${this.playerScore}`)
    alert(`Player Out! Final Score: ${this.playerScore}`)
    this.playerScore = 0
  }
}
