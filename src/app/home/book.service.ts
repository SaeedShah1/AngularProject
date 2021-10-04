import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {baseUrl} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  header = {
    headers: new HttpHeaders(
      {
        "Content-Type" :'application/json',
        "Authorization":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbjMiLCJjcmVhdGVkIjoxNjMzMzQ5MjQyMDcwLCJwZXJtaXNzaW9ucyI6W10sImV4cCI6MTYzMzk1NDA0Mn0.M7JE1HwoFrLiwz70YBqnVXFEcmB8IdG5bdP9yoTsv_L89_07dg34reUgfs9LhIBlzAl9osOKg4VEDX_UAv5E-w"
      }
    )

  };


  constructor(private http: HttpClient) {

  }

  getBooks(): Observable<any> {

    return this.http.get(baseUrl + "/books/getAll",this.header);

  }
}
