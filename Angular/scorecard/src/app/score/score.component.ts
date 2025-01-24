import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreCardComponent {
  teamName: string = '';
  teamScore: number | null = null
  updateScore(event: any): void {
    const value = Number(event.target.value);
    this.teamScore = isNaN(value) ? null : value;
  }
}
