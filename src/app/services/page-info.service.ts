import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageInfo } from '../interfaces/page-info';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: PageInfo = {};
  cargada: boolean = false;

  constructor( private http: HttpClient ) {
    // Leer archivo JSON
    http.get<PageInfo>('assets/data/data-pagina.json')
        .subscribe(resp => {
          // console.log(resp);
          this.info = resp;
          this.cargada = true;
          
        });
  }
}
