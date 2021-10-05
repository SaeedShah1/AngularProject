import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {baseUrl} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  token = localStorage.getItem('token');
  httpHeader = {
    headers: new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Authorization' : `${this.token}`
      }
    )
  };


  constructor(private http: HttpClient) {}


  getBooksWithPagination(params:any): Observable<any> {
    return this.http.post<any>(baseUrl + "/books/views",params,this.httpHeader);

  }
}
