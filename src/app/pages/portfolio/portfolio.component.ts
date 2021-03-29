import { Component, OnInit } from '@angular/core';
import { ProductInfo } from 'src/app/interfaces/product-info';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  productos: ProductInfo[] = [];

  constructor( public productsService: ProductsService ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productsService.getProductos()
        .subscribe( resp => {
          // console.log(resp);
          this.productos = resp;
          
        });
  }

}
