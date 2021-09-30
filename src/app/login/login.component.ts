import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "./login-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid: Boolean = false;
  constructor(private service: LoginServiceService,formGroup: FormGroup) {
    this.formGroup =formGroup;
  }

  formGroup :FormGroup ;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  }
  onClickSubmit() {

    if(this.formGroup.valid) {
      this.service.login(this.formGroup.value).subscribe(result=>{
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
