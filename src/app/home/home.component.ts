import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: BookService) { }
  items: any = [];
  pageOfItems: Array<any> =[];
  ngOnInit(): void {
    this.items = new Array<any>()
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.items = this.service.getBooks();
  }
}
