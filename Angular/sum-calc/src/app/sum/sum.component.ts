import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
  num1: number = 0
  num2: number = 0
  result: number = 0
  calculateSum(): void {
    this.result = this.num1 + this.num2
  }
}
