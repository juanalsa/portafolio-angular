import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/services/page-info.service';
import { PageInfo } from '../../interfaces/page-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
