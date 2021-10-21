import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";
import {Book} from "../../models/Book";
import {PaginationParams} from "../../models/PaginationParams";
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CartService} from "../cart/cart.service";
import {Observable} from "rxjs";


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
  paramsForSearch: PaginationParams = new PaginationParams();
  book: Book = new Book();
  closeResults: string ='';
  cartItem :number = 0;
  constructor(private service: BookService,private modalService: NgbModal,private cartService: CartService) {
  }






   viewBook(id: any):Book{
       this.service.viewBook(id).subscribe(response => {
     this.book = response;
    });
       return this.book;
  }


  ngOnInit(): void {
    this.getAllBooksWithPagination(this.name,this.params);
    this.items = new Array<any>();

  }
  getAllBooksWithPagination(name:string,params:any){

        this.service.getBooksWithPagination(name, params).subscribe(response => {
          this.params.totalItems = response.totalElements;
          this.books = response.data;
        });
      }

   addToCart(content: any,id:any){
     this.modalService.open(content, {ariaLabelledBy: 'modal-message'}).result.then((result) => {
       this.closeResults = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResults = `Dismissed ${this.getDismissReason(reason)}`;
     });
     this.book = this.viewBook(id);
     if(this.book!=null) {
       this.cartService.addtoCart(this.book);
     }
     this.cartItem = this.cartItem+1;

   }
  onChangePage(page: number) {
    // update current page of items

        this.params.currentPage = page - 1;
        this.getAllBooksWithPagination(this.name, this.params);
        this.params.currentPage = page;

  }

  open(content: any ,id: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResults = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResults = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.viewBook(id);

  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
