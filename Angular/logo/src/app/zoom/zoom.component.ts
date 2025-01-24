import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent{
  logoSize: number = 200
  zoomIn(): void {
    if (this.logoSize < 300){
      this.logoSize += 10
    }
  }
  zoomOut(): void{
    if (this.logoSize > 50){
      this.logoSize -= 10
    }
  }
}
