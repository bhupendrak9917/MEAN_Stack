import { Component, OnInit } from '@angular/core';
import { McuService } from '../mcu.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit{
  castData: any[] = []
  selectedCast: any = null
  constructor(
    private mcuService: McuService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.castData = this.mcuService.getCastData()
    this.route.params.subscribe((params) => {
      const sno = params['sno'];
      if (sno) {
        this.selectedCast = this.castData.find((cast) => cast.sno == sno)
      }
    });
  }
}