import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  companies: any[] = []
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.companies = this.dataService.getCompanies()
  }
}
