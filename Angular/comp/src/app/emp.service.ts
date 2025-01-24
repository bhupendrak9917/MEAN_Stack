import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private employees = [
    { eid: 101, ename: 'Rohit', esalary: 50000 },
    { eid: 102, ename: 'Kohli', esalary: 60000 },
    { eid: 103, ename: 'Dhoni', esalary: 70000 },
    { eid: 104, ename: 'Shikhar', esalary: 55000 },
    { eid: 105, ename: 'Shreyas', esalary: 45000 },
  ]
  getEmployees() {
    return this.employees
  }
}