import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = ''
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = '#f1f1f1'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = ''
  }
}
