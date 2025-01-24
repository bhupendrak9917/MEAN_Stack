import { Component } from '@angular/core';
import { McuService } from '../mcu.service';
@Component({
  selector: 'app-upcomingfilms',
  templateUrl: './upcomingfilms.component.html',
  styleUrls: ['./upcomingfilms.component.css']
})
export class UpcomingfilmsComponent {
  upcomingFilms: string[] = []
  constructor(private mcuService: McuService) {}
  ngOnInit(): void {
    this.upcomingFilms = this.mcuService.getUpcomingFilms();
  }
}
