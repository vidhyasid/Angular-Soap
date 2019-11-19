import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../models/employee';
import{EmployeeService} from '../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[]
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute, 
    private router: Router) { 
  }

  ngOnInit() {
  }

}
