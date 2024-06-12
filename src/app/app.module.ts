import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './home/search/search.component';
import { MainComponent } from './home/main/main.component';
import { CategoryListComponent } from './home/main/category-list/category-list.component';
import { CategoryListItemComponent } from './home/main/category-list/category-list-item/category-list-item.component';
import { ProductListComponent } from './home/main/product-list/product-list.component';
import { ProductListItemComponent } from './home/main/product-list/product-list-item/product-list-item.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductDetailComponent } from './home/main/product-list/product-detail/product-detail.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartListItemComponent } from './cart/cart-list/cart-list-item/cart-list-item.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './home/main/filters/filters.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    SearchComponent,
    MainComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailComponent,
    CartListComponent,
    CartListItemComponent,
    CheckoutComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
