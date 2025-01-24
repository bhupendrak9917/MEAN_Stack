import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent {
  averageSalary: number = 0;
  constructor(private employeeService: EmpService) {}
  ngOnInit(): void {
    const employees = this.employeeService.getEmployees()
    const totalSalary = employees.reduce((sum, emp) => sum + emp.esalary, 0)
    this.averageSalary = totalSalary / employees.length
  }
}
