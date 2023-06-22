import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'components/products', component: ProductsComponent},
      { path: 'components/shopping-cart', component: ShoppingCartComponent},
      { path: 'components/my-orders', component: MyOrdersComponent},
      { path: 'components/order-success', component: OrderSuccessComponent},
      { path: 'components/check-out', component: CheckOutComponent},
      { path: 'components/admin/admin-order', component: AdminOrdersComponent},
      { path: 'components/admin/admin-products', component: AdminProductsComponent},
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
