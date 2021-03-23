import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageInfo } from '../interfaces/page-info';
import { TeamInfo } from "../interfaces/team-info";
import { of } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  info: PageInfo = {};
  cargada: boolean = false;
  equipo: TeamInfo[] = [];

  constructor( private http: HttpClient ) {}

  public getPageInfo() {
    // Cache de Info
    if ( this.cargada ) {
      return of(this.info);

    } else {
      // Leer archivo JSON local
      return this.http.get<PageInfo>('assets/data/data-pagina.json')
          .pipe( tap( resp => {
            this.info = resp;
            this.cargada = true;

          }));
      
    }

  }

  public getEquipo() {
    // Cache de Team
    if (this.equipo.length > 0) {
      return of(this.equipo);

    } else {
      return this.http.get<TeamInfo[]>('https://angular-portfolio-5744a-default-rtdb.firebaseio.com/equipo.json')
          .pipe( tap ( 
            team => this.equipo = team 
          ));

    }

  }

}
