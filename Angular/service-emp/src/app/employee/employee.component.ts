import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: any[] = []
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.employees = this.dataService.getEmployees()
  }
}
