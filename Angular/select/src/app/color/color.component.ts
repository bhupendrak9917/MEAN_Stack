import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent{
  colors: string[] = ['Red', 'Green', 'Blue']
  selectedColor: string = ''
  onColorChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement
    this.selectedColor = selectElement.value
  }
}
