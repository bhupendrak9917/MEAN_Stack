import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  eid: string = ''
  ename: string = ''
  ecity: string = ''
  employee = {
    eid: '',
    ename: '',
    ecity: '',
  }
  sendData(){
    this.employee = {
      eid: this.eid,
      ename: this.ename,
      ecity: this.ecity,
    }
  }
}
