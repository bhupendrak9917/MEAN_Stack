import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  parentMessage: string = ''
  childMessage: string = ''
  receiveFromChild(message: string): void{
    this.childMessage = message
  }
}