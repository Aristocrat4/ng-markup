import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: HomeComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, pathMatch: 'full' },
  { path: 'contact', component: HomeComponent, pathMatch: 'full' },
  { path: 'privacy', component: HomeComponent, pathMatch: 'full' },
  { path: 'gallery', component: HomeComponent, pathMatch: 'full' },
  { path: 'support', component: HomeComponent, pathMatch: 'full' },
  { path: 'return', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
