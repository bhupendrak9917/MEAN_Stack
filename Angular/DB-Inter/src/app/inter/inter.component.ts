import { Component } from '@angular/core';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css']
})
export class InterComponent {
  title: string = "Player Information";
  name: string = "Rohit Sharma";
  role: string = "Opening Batsman";
  age: number = 37;
}
