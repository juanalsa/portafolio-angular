import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfo } from 'src/app/interfaces/product-info';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productos: ProductInfo[] = [];

  constructor( private route: ActivatedRoute,
               public productsService: ProductsService ) { }

  ngOnInit(): void {
    this.route.params
        .subscribe( parametros => {
          // console.log(parametros['termino']);

          this.productsService.buscarProducto( parametros['termino'] )
              .subscribe( productos => {
                // console.log(productos);
                this.productos = productos;
                
              });
          
        });
  }

}
