import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import {EmployeeService} from'../Services/employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  employee: Employee
  employeelist: Employee
  display : Boolean = false;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private employeeService: EmployeeService,) {
      this.employee = new Employee();    
   }

   onSubmit() {
    this.employeeService.findEmployee(this.employee).subscribe(data => {
    console.log(data);
    this.employeelist = data; 
    });
    this.display = true;
  }
 
  ngOnInit() {
  }
}
