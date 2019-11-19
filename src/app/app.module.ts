import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthenticationService } from './Services/authentication.service';
import { EmployeeService } from './Services/employee.service';
import { LogoutComponent } from './logout/logout.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeInformationComponent,
    SearchEmployeeComponent,
    EmployeeListComponent,
    LogoutComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'employeeInfomation', component: EmployeeInformationComponent },
      { path: 'employeeList', component: EmployeeListComponent },
      { path: 'searchEmployee', component: SearchEmployeeComponent },
      { path: 'updateEmployee', component: UpdateEmployeeComponent },
      { path: 'logout', component: LogoutComponent },
    ]),
  ],
  providers: [EmployeeService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
