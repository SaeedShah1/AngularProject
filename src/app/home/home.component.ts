import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";
import {Observable} from "rxjs";
import {Book} from "../../models/Book";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<any> = [];
  books: Book[] =[];


  params = {
    itemsPerPage : 4,
    sortBy: 'id',
    direction: 'desc',
    currentPage: 0,
    totalItems :0
  };


  constructor(private service: BookService) {
  }

  ngOnInit(): void {
    this.getAllBooksWithPagination(this.params);
    this.items = new Array<any>();
  }
  getAllBooksWithPagination(params:any){
    this.service.getBooksWithPagination(params).subscribe(response =>{
      this.params.totalItems = response.totalElements;
      this.books = response.data;
    });
  }

  onChangePage(page: number) {
    // update current page of items
    this.params.currentPage = page-1;
    this.getAllBooksWithPagination(this.params);
    this.params.currentPage = page;
  }
}
