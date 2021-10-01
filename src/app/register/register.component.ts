import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
   employee: Employee = new  Employee();

  ngOnInit(): void {
  }

  public onRegister(){



  }

}
