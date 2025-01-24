import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.css']
})
export class BmiCalcComponent{
  name: string = ''
  height: number | null = null
  weight: number | null = null
  bmi: number | null = null
  bmiCategory: string = ''
  calculateBMI(): void{
    if (this.height && this.weight) {
      this.bmi = this.weight/(this.height * this.height)
      if (this.bmi < 18.5){
        this.bmiCategory = 'Underweight'
      } else if (this.bmi >= 18.5 && this.bmi < 25){
        this.bmiCategory = 'Normal'
      } else if (this.bmi >= 25 && this.bmi < 35){
        this.bmiCategory = 'Overweight'
      } else {
        this.bmiCategory = 'Obesity'
      }
    } else{
      this.bmi = null;
      this.bmiCategory = ''
    }
  }
}