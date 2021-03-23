import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/services/page-info.service';
import { PageInfo } from '../../interfaces/page-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anioActual: number = new Date().getFullYear();
  pageInfo: PageInfo = {};

  constructor( private pageInfoService: PageInfoService ) { }

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

}
