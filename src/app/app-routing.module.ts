import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {EmployeeComponent} from './employee/employee.component';

import {RegisterComponent} from './register/register.component';
import {Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },

  {
    path : 'Login',
    component : LoginComponent
  },
  {
    path : 'Home',
    component : HomeComponent
  },
  {
    path : 'employee',
    component : EmployeeComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
