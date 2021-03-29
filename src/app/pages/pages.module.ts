import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    PortfolioComponent, 
    HomeComponent, 
    AboutComponent, 
    PortfolioItemComponent, 
    BlogComponent, 
    ContactComponent, SearchComponent, ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
