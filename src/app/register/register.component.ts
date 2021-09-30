import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/Employee';
import {LoginServiceService} from '../login/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
   employee: Employee = new  Employee();
   service: LoginServiceService = new LoginServiceService();

  ngOnInit(): void {
  }

  public onRegister(){



  }

}
