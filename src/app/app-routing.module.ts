import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioItemComponent } from './pages/portfolio-item/portfolio-item.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio-item', component: PortfolioItemComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
