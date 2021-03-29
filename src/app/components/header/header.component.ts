import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageInfoService } from 'src/app/services/page-info.service';
import { PageInfo } from '../../interfaces/page-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageInfo: PageInfo = {};
  @ViewChild('txtBuscar') txtBuscar: ElementRef;

  constructor( private pageInfoService: PageInfoService,
               private router: Router ) { }

  ngOnInit(): void {
    this.cargarPageInfo();
    
  }

  cargarPageInfo() {
    this.pageInfoService.getPageInfo()
        .subscribe( pageInfo => {
          // console.log(pageInfo);
          
          this.pageInfo = pageInfo;
        });
    
  }

  buscarProducto( txtValor: string) {
    if ( txtValor.length < 1 ) {
      return;

    }

    // console.log(txtValor);
    this.txtBuscar.nativeElement.value = '';
    this.router.navigate(['/search', txtValor]);

  }

}
