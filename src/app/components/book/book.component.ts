import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/book.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  fiction: Book[] = [];
  nonFiction: Book[] = [];
  scienceFiction: Book[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fiction = this.productService.getFiction();
    this.nonFiction = this.productService.getNonFiction();
    this.scienceFiction = this.productService.getScienceFiction();
  }
}
