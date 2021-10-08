import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";
import {Book} from "../../models/Book";
import {PaginationParams} from "../../models/PaginationParams";
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';


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
  isViewCalled: boolean = false;
  book: Book = new Book();
  closeResults: string ='';
  constructor(private service: BookService,private modalService: NgbModal) {
  }

    index:any = [];
    rows:any = [];
    data:any = [];
    i : any = 0;



  viewBook(id: any){
    this.isViewCalled = true;
    this.service.viewBook(id).subscribe(response => {
    this.book = response;
    });
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
for(let row=0;row<this.books.length;row++){
  this.rows[row]=row;
}
    for(let i =0; i<5; i++) {
      if(i<3){

        this.data[0]=1;
      }
      this.index[i] = i;

    }
  }

  onChangePage(page: number) {
    // update current page of items
    this.i=this.i+1;
    this.params.currentPage = page-1;
    this.getAllBooksWithPagination(this.name,this.params);
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
