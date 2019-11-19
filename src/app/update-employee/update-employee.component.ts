import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import {EmployeeService} from '../Services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee
  alert: Boolean = false;
  constructor(private employeeService: EmployeeService) {
    this.employee = new Employee(); 
   }
   onSubmit() {
    this.employeeService.updateEmployee(this.employee).subscribe(result =>  this.alert = true);
  }
  ngOnInit() {
  }

}
