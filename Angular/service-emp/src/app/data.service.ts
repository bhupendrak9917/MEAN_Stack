import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getEmployees() {
    return [
      { empId: 101, empName: 'Rohit', empSalary: 50000, empLocation: 'Mumbai' },
      { empId: 102, empName: 'Virat', empSalary: 60000, empLocation: 'Bangalore' },
      { empId: 103, empName: 'Dhoni', empSalary: 70000, empLocation: 'Chennai' },
    ]
  }

  getCompanies() {
    return [
      { compId: 201, compName: 'BCCI', compProfit: 500000, compLocation: 'India' },
      { compId: 202, compName: 'ECB', compProfit: 250000, compLocation: 'England' },
      { compId: 203, compName: 'ACB', compProfit: 300000, compLocation: 'Australia' },
    ]
  }
}
