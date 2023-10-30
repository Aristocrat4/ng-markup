import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SupportComponent } from './components/support/support.component';
import { ReturnComponent } from './components/return/return.component';
import { DailyofferComponent } from './components/home/dailyoffer/dailyoffer.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { CardButtonComponent } from './shared/components/card-button/card-button.component';
import { BeautyofferComponent } from './components/home/beautyoffer/beautyoffer.component';
import { SearchComponent } from './components/header/search/search.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, ProductsComponent, ContactComponent, AboutComponent, PrivacyComponent, GalleryComponent, SupportComponent, ReturnComponent, DailyofferComponent, ProductCardComponent, CardButtonComponent, BeautyofferComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
