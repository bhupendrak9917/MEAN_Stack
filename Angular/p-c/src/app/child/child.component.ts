import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  @Input() messageFromParent: string = ''
  @Output() messageToParent = new EventEmitter<string>()
  childMessage: string = ''
  sendToParent(): void{
    this.messageToParent.emit(this.childMessage);
  }
}
