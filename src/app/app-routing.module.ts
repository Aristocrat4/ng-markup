import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SupportComponent } from './components/support/support.component';
import { ReturnComponent } from './components/return/return.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'privacy', component: PrivacyComponent, pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent, pathMatch: 'full' },
  { path: 'support', component: SupportComponent, pathMatch: 'full' },
  { path: 'return', component: ReturnComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
