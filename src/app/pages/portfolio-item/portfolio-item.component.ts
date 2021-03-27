import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from 'src/app/interfaces/product-detail';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  producto: ProductDetail;
  productID: string;

  constructor( private route: ActivatedRoute,
               private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.route.params
        .subscribe( parametros => {
          // console.log(parametros['productID']);
          this.productID = parametros['productID'];

          this.productsService.getProducto( this.productID ) 
              .subscribe( producto => {
                // console.log(producto);
                
                this.producto = producto;

              });
          

        });
  }

}
