import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductInfo } from '../interfaces/product-info';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cargando: boolean = true;
  products: ProductInfo[] = [];

  constructor( private http: HttpClient ) {}

  getProductos(): Observable<ProductInfo[]> {

    if (this.products.length > 0) {
      this.cargando = false;
      
      return of(this.products);
      
    } else {
      return this.http.get<ProductInfo[]>('https://angular-portfolio-5744a-default-rtdb.firebaseio.com/productos_idx.json')
                 .pipe( tap( resp => {
                  this.cargando = false; 
                  this.products = resp;

                 }));
      
    }


  }
}
