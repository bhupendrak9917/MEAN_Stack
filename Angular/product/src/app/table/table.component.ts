import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  isTableVisible: boolean = true
  products = [
    { pid: 1001, pname: 'Laptop', prating: 5.0 },
    { pid: 1004, pname: 'Laptop', prating: 4.4 },
    { pid: 1005, pname: 'Laptop', prating: 3.4 },
  ]
  @HostBinding('class.hover-active') isHovered = false
  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false
  }
  showTable() {
    this.isTableVisible = true
  }
  hideTable() {
    this.isTableVisible = false
  }
}
