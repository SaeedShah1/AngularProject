import {Component, Injectable, OnInit} from '@angular/core';
import {LoginServiceService} from "./login-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../models/Employee";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isValid: Boolean = false;
  
  constructor(private service: LoginServiceService) {}

   employee: Employee = new Employee();


  ngOnInit(): void {}

  onClickSubmit() {

    console.log(this.employee.name + '..' + this.employee.password);
    if(this.employee!=null) {
      this.service.login(this.employee).subscribe(result=>{
       if(result.success){
         console.log(result);
         alert(result.message);
       }else{
         alert(result.message);
       }
        }


      );
    }
  }



}
