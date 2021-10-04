import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks():Observable<any>{
    return this.http.get(baseUrl +"/books/getAll");

  }
}
