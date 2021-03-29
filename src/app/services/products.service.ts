import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductDetail } from '../interfaces/product-detail';
import { ProductInfo } from '../interfaces/product-info';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cargando: boolean = true;
  products: ProductInfo[] = [];
  filteredProducts: ProductInfo[] = [];
  private urlPortfolio:string = 'https://angular-portfolio-5744a-default-rtdb.firebaseio.com'

  constructor( private http: HttpClient ) {}

  getProductos(): Observable<ProductInfo[]> {

    if (this.products.length > 0) {
      this.cargando = false;
      
      return of(this.products);
      
    } else {
      return this.http.get<ProductInfo[]>(`${ this.urlPortfolio }/productos_idx.json`)
                 .pipe( tap( resp => {
                  this.cargando = false; 
                  this.products = resp;

                 }));
      
    }

  }

  getProducto( productID: string ): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${ this.urlPortfolio }/productos/${ productID }.json`);

  }

  buscarProducto ( termino: string ): Observable<ProductInfo[]> {
    termino = termino.toLowerCase();

    if (this.products.length > 0) {
      this.filteredProducts = this.products.filter( prod => {
        const tituloLower = prod.titulo.toLowerCase();

        return prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0;

      }); 

      this.cargando = false;

      return of(this.filteredProducts);

    } else {
      return this.http.get<ProductInfo[]>(`${ this.urlPortfolio }/productos_idx.json`)
                 .pipe( map( data => {
                   this.filteredProducts = data.filter( prod => {
                    const tituloLower = prod.titulo.toLowerCase();

                    return prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0;

                   });
                   
                   this.cargando = false;

                   return this.filteredProducts;
                   
                  }));
    }

  }


}
