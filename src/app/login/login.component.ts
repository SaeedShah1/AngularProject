import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "./login-service.service";
import {Employee} from "../../models/Employee";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isValid: Boolean = false;
  isChange: Boolean = false;
  constructor(private service: LoginServiceService) {}

   employee: Employee = new Employee();


  ngOnInit(): void {}
changeColor(){
    this.isChange = true;
}
  onClickSubmit() {

    if(this.employee!=null) {
      this.service.login(this.employee).subscribe(result=>{
       console.log(result);
       if(result.token){
         console.log("Successful")
       }
        },error => {

        console.log("Bad Credentials")
        }


      );
    }
  }



}
