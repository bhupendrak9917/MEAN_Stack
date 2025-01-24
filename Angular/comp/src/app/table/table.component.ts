import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  employees: any[] = []
  constructor(private employeeService: EmpService) {}
  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees()
  }
}
