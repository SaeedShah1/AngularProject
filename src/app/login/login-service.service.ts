import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {

  }
  login(data:any):Observable<any>{
   return this.http.post(baseUrl + '/Login/auth' ,data);
  }

}
