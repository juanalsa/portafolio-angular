import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    PortfolioComponent, 
    HomeComponent, 
    AboutComponent, 
    PortfolioItemComponent, 
    BlogComponent, 
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
