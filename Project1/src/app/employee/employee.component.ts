import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp:Employee;
  emp1:Employee[];

  constructor(){
    this.emp={
      "empId":1001,
      "empName":"Ram Kumar",
      "empSalary":20000,
      "empDob":new Date('10-21-2000')
    }

    this.emp1=[
      {
        "empId":1002,
        "empName":"A Kumar",
        "empSalary":30000,
        "empDob":new Date('10-01-1990')
      },
      {
        "empId":1003,
        "empName":"B Kumar",
        "empSalary":40000,
        "empDob":new Date('8-11-2000')
      },
      {
        "empId":1004,
        "empName":"C Kumar",
        "empSalary":50000,
        "empDob":new Date('10-18-2002')
      }
    ]
  }

  ngOnInit(): void {
  }

}
