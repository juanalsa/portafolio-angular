import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [PortfolioComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
