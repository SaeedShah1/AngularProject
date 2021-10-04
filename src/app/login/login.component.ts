import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "./login-service.service";
import {Employee} from "../../models/Employee";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isValid: Boolean = false;
  isChange: Boolean = false;

  constructor(private service: LoginServiceService, private route: Router) {}

   employee: Employee = new Employee();
    log: Boolean = false;
    tryAgain: Boolean= false;

  ngOnInit(): void {}

   message(){

      this.isChange= false;
}

 reTry(){

     this.tryAgain= false;
}

recoverPassword(){

}
  onClickSubmit() {

    if(this.employee!=null) {
      this.service.login(this.employee).subscribe(result=>{
       console.log(result);
       if(result.token){
         console.log("Successful")
         this.route.navigateByUrl("/home");
       }
        },error => {
        this.reTry();
        console.log("Bad Credentials");
        if((this.employee.username==null || this.employee.username=='') ||
          (this.employee.password==null || this.employee.password=='')
       ) {
          this.log = true;
        }else{
          this.tryAgain= true;
        }

        }


      );
    }
  }



}
