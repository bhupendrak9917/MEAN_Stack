import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(quantity: number): string {
    return quantity < 5 ? 'red' : 'green'
  }
}
