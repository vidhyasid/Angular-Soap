import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import {Loginmodel} from '../models/loginmodel';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private searchEmployeeUrl: string;
  private loginUrl: string;
  private updateEmployeeUrl: string;
  constructor(private http: HttpClient) { 
    this.searchEmployeeUrl = 'http://localhost:8080/getEmployee';
    this.loginUrl = 'http://localhost:8080/login';
    this.updateEmployeeUrl = 'http://localhost:8080/updateEmployee';
  }

  public findEmployee(employee: Employee) : Observable<Employee>  {
    const options = { params: new HttpParams().set("employeeId",employee.employeeId) };
    return this.http.get<Employee>(this.searchEmployeeUrl, options);
  }

  public validateLogin(loginmodel: Loginmodel) : Observable<Boolean>{
    const options = { params: new HttpParams().set("username",loginmodel.username).set("password",loginmodel.password) };
    return this.http.get<Boolean>(this.loginUrl, options);
  }

  public updateEmployee(employee: Employee) {
    return this.http.post<Employee>(this.updateEmployeeUrl, employee);
  }

}
