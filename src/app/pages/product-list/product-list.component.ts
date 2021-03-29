import { Component, Input, OnInit } from '@angular/core';
import { ProductInfo } from 'src/app/interfaces/product-info';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: ProductInfo[] = [];
  @Input() loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
