import { Component } from '@angular/core';

@Component({
  selector: 'app-perform',
  templateUrl: './perform.component.html',
  styleUrls: ['./perform.component.css']
})
export class PerformComponent{
  rating: number = 0
  quantity: number = 0
  inc_rating(): void{
    if (this.rating < 5){
      this.rating++
    }
  }
  dec_rating(): void{
    if (this.rating > 0){
      this.rating--
    }
  }
  inc_quantity(): void{
    if (this.quantity < 10){
      this.quantity++
    }
  }
  dec_quantity(): void{
    if (this.quantity > 0){
      this.quantity--
    }
  }
}