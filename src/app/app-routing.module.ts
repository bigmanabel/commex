import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './home/main/product-list/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: HomeComponent, title: 'Home | Commex'},
  { path: 'cart', component: CartComponent, title: 'Cart | Commex' },
  { path: 'products/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
