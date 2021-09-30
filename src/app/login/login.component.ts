import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/Employee';
import {LoginServiceService} from "./login-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee: Employee = new Employee();
  isValid: Boolean = false;
  constructor(private service: LoginServiceService) {}

  ngOnInit(): void {}

  onClickSubmit() {

    alert('Entered Email id : ' + this.employee.name + '..' + this.employee.password);
  }



}
