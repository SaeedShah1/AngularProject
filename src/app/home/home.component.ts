import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";
import {Book} from "../../models/Book";
import {PaginationParams} from "../../models/PaginationParams";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<any> = [];
  books: Book[] =[];
  name: string= '';
  params : PaginationParams = new PaginationParams();


  constructor(private service: BookService) {
  }

  ngOnInit(): void {
    this.getAllBooksWithPagination(this.name,this.params);
    this.items = new Array<any>();
  }
  getAllBooksWithPagination(name:string,params:any){
    this.service.getBooksWithPagination(name,params).subscribe(response =>{
      this.params.totalItems = response.totalElements;
      this.books = response.data;

    });
  }

  onChangePage(page: number) {
    // update current page of items
    this.params.currentPage = page-1;
    this.getAllBooksWithPagination(this.name,this.params);
    this.params.currentPage = page;
  }
}
